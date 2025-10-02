export interface SubnetInfo {
  network: string;
  networkBinary: string;
  broadcast: string;
  broadcastBinary: string;
  firstUsable: string;
  lastUsable: string;
  usableHosts: number;
  totalHosts: number;
  wildcardMask: string;
  cidr: string;
  mask: string;
  maskBits: number;
  ipClass: string;
}

export interface VLSMSubnet {
  name: string;
  hostsNeeded: number;
  network: string;
  mask: string;
  cidr: string;
  firstUsable: string;
  lastUsable: string;
  broadcast: string;
  usableHosts: number;
  totalHosts: number;
}

// Convert IP address to 32-bit integer
export function ipToInt(ip: string): number {
  const parts = ip.split('.').map(Number);
  return (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
}

// Convert 32-bit integer to IP address
export function intToIp(int: number): string {
  return [
    (int >>> 24) & 0xFF,
    (int >>> 16) & 0xFF,
    (int >>> 8) & 0xFF,
    int & 0xFF
  ].join('.');
}

// Convert IP to binary string
export function ipToBinary(ip: string): string {
  return ip.split('.').map(octet => 
    parseInt(octet).toString(2).padStart(8, '0')
  ).join('.');
}

// Get subnet mask from CIDR notation
export function cidrToMask(cidr: number): string {
  const mask = (0xFFFFFFFF << (32 - cidr)) >>> 0;
  return intToIp(mask);
}

// Get CIDR from subnet mask
export function maskToCidr(mask: string): number {
  const maskInt = ipToInt(mask);
  return 32 - Math.log2((~maskInt >>> 0) + 1);
}

// Calculate wildcard mask
export function getWildcardMask(mask: string): string {
  const maskInt = ipToInt(mask);
  const wildcard = (~maskInt) >>> 0;
  return intToIp(wildcard);
}

// Get IP class
export function getIpClass(ip: string): string {
  const firstOctet = parseInt(ip.split('.')[0]);
  if (firstOctet >= 1 && firstOctet <= 126) return 'A';
  if (firstOctet >= 128 && firstOctet <= 191) return 'B';
  if (firstOctet >= 192 && firstOctet <= 223) return 'C';
  if (firstOctet >= 224 && firstOctet <= 239) return 'D (Multicast)';
  if (firstOctet >= 240 && firstOctet <= 255) return 'E (Reserved)';
  return 'Unknown';
}

// Validate IP address
export function isValidIp(ip: string): boolean {
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  return parts.every(part => {
    const num = parseInt(part);
    return !isNaN(num) && num >= 0 && num <= 255;
  });
}

// Calculate subnet information
export function calculateSubnet(ip: string, cidr: number): SubnetInfo | null {
  if (!isValidIp(ip) || cidr < 0 || cidr > 32) {
    return null;
  }

  const ipInt = ipToInt(ip);
  const mask = cidrToMask(cidr);
  const maskInt = ipToInt(mask);
  
  const networkInt = (ipInt & maskInt) >>> 0;
  const totalHosts = Math.pow(2, 32 - cidr);
  const broadcastInt = (networkInt + totalHosts - 1) >>> 0;
  
  const network = intToIp(networkInt);
  const broadcast = intToIp(broadcastInt);
  const firstUsable = cidr === 32 ? network : intToIp(networkInt + 1);
  const lastUsable = cidr === 32 ? network : intToIp(broadcastInt - 1);
  const usableHosts = cidr === 32 ? 1 : (cidr === 31 ? 2 : totalHosts - 2);

  return {
    network,
    networkBinary: ipToBinary(network),
    broadcast,
    broadcastBinary: ipToBinary(broadcast),
    firstUsable,
    lastUsable,
    usableHosts: Math.max(0, usableHosts),
    totalHosts,
    wildcardMask: getWildcardMask(mask),
    cidr: `${network}/${cidr}`,
    mask,
    maskBits: cidr,
    ipClass: getIpClass(network)
  };
}

// Split network into subnets
export function splitNetwork(ip: string, cidr: number, numSubnets: number): SubnetInfo[] {
  if (!isValidIp(ip) || cidr < 0 || cidr > 32 || numSubnets < 1) {
    return [];
  }

  // Calculate required bits for subnets
  const bitsNeeded = Math.ceil(Math.log2(numSubnets));
  const newCidr = cidr + bitsNeeded;

  if (newCidr > 32) {
    return [];
  }

  const subnets: SubnetInfo[] = [];
  const baseSubnet = calculateSubnet(ip, cidr);
  
  if (!baseSubnet) return [];

  const subnetSize = Math.pow(2, 32 - newCidr);
  let currentIp = ipToInt(baseSubnet.network);

  for (let i = 0; i < numSubnets; i++) {
    const subnet = calculateSubnet(intToIp(currentIp), newCidr);
    if (subnet) {
      subnets.push(subnet);
    }
    currentIp += subnetSize;
  }

  return subnets;
}

// VLSM - Calculate subnets based on host requirements
export function calculateVLSM(baseIp: string, baseCidr: number, requirements: { name: string; hosts: number }[]): VLSMSubnet[] {
  if (!isValidIp(baseIp) || baseCidr < 0 || baseCidr > 32) {
    return [];
  }

  // Sort requirements by hosts needed (largest first)
  const sorted = [...requirements].sort((a, b) => b.hosts - a.hosts);
  const vlsmSubnets: VLSMSubnet[] = [];
  
  let currentIp = ipToInt(calculateSubnet(baseIp, baseCidr)?.network || baseIp);
  const baseNetworkInt = currentIp;
  const baseNetworkSize = Math.pow(2, 32 - baseCidr);

  for (const req of sorted) {
    // Calculate required CIDR for this subnet
    // We need hosts + 2 (network + broadcast) unless it's /31 or /32
    let requiredHosts = req.hosts;
    let cidr = 32;
    
    for (let i = 32; i >= 0; i--) {
      const availableHosts = i === 32 ? 1 : (i === 31 ? 2 : Math.pow(2, 32 - i) - 2);
      if (availableHosts >= requiredHosts) {
        cidr = i;
        break;
      }
    }

    // Check if subnet fits in base network
    const subnetSize = Math.pow(2, 32 - cidr);
    if (currentIp + subnetSize > baseNetworkInt + baseNetworkSize) {
      // Subnet doesn't fit
      continue;
    }

    const subnet = calculateSubnet(intToIp(currentIp), cidr);
    if (subnet) {
      vlsmSubnets.push({
        name: req.name,
        hostsNeeded: req.hosts,
        network: subnet.network,
        mask: subnet.mask,
        cidr: subnet.cidr,
        firstUsable: subnet.firstUsable,
        lastUsable: subnet.lastUsable,
        broadcast: subnet.broadcast,
        usableHosts: subnet.usableHosts,
        totalHosts: subnet.totalHosts
      });
    }

    currentIp += subnetSize;
  }

  return vlsmSubnets;
}

// Parse CIDR notation (e.g., "192.168.1.0/24")
export function parseCidr(cidrNotation: string): { ip: string; cidr: number } | null {
  const parts = cidrNotation.trim().split('/');
  if (parts.length !== 2) return null;
  
  const ip = parts[0].trim();
  const cidr = parseInt(parts[1].trim());
  
  if (!isValidIp(ip) || isNaN(cidr) || cidr < 0 || cidr > 32) {
    return null;
  }
  
  return { ip, cidr };
}

