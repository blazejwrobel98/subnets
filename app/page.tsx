'use client';

import { useState } from 'react';
import { Network, Calculator, Split, Copy, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { 
  calculateSubnet, 
  splitNetwork, 
  calculateVLSM, 
  parseCidr,
  SubnetInfo,
  VLSMSubnet 
} from '@/lib/subnet';

type Mode = 'calculator' | 'splitter' | 'vlsm';

export default function Home() {
  const [mode, setMode] = useState<Mode>('calculator');
  const [ipInput, setIpInput] = useState('192.168.1.0/24');
  const [numSubnets, setNumSubnets] = useState('4');
  const [subnetResult, setSubnetResult] = useState<SubnetInfo | null>(null);
  const [subnets, setSubnets] = useState<SubnetInfo[]>([]);
  const [vlsmSubnets, setVlsmSubnets] = useState<VLSMSubnet[]>([]);
  const [vlsmRequirements, setVlsmRequirements] = useState([
    { name: 'Network 1', hosts: 50 },
    { name: 'Network 2', hosts: 25 },
  ]);
  const [error, setError] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['details']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const handleCalculate = () => {
    setError('');
    const parsed = parseCidr(ipInput);
    
    if (!parsed) {
      setError('Invalid IP/CIDR format. Use format: 192.168.1.0/24');
      return;
    }

    if (mode === 'calculator') {
      const result = calculateSubnet(parsed.ip, parsed.cidr);
      if (result) {
        setSubnetResult(result);
        setSubnets([]);
        setVlsmSubnets([]);
      } else {
        setError('Failed to calculate subnet');
      }
    } else if (mode === 'splitter') {
      const num = parseInt(numSubnets);
      if (isNaN(num) || num < 1) {
        setError('Number of subnets must be at least 1');
        return;
      }
      const result = splitNetwork(parsed.ip, parsed.cidr, num);
      if (result.length > 0) {
        setSubnets(result);
        setSubnetResult(null);
        setVlsmSubnets([]);
      } else {
        setError('Failed to split network. Try a smaller number of subnets or larger network.');
      }
    } else if (mode === 'vlsm') {
      const result = calculateVLSM(parsed.ip, parsed.cidr, vlsmRequirements);
      if (result.length > 0) {
        setVlsmSubnets(result);
        setSubnetResult(null);
        setSubnets([]);
      } else {
        setError('Failed to calculate VLSM. Check network size and requirements.');
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const exportCSV = () => {
    let csv = '';
    
    if (mode === 'calculator' && subnetResult) {
      csv = 'Property,Value\n';
      csv += `Network,${subnetResult.network}\n`;
      csv += `Broadcast,${subnetResult.broadcast}\n`;
      csv += `Mask,${subnetResult.mask}\n`;
      csv += `CIDR,${subnetResult.cidr}\n`;
      csv += `First Usable,${subnetResult.firstUsable}\n`;
      csv += `Last Usable,${subnetResult.lastUsable}\n`;
      csv += `Usable Hosts,${subnetResult.usableHosts}\n`;
      csv += `Total Hosts,${subnetResult.totalHosts}\n`;
      csv += `Wildcard Mask,${subnetResult.wildcardMask}\n`;
      csv += `IP Class,${subnetResult.ipClass}\n`;
    } else if (mode === 'splitter' && subnets.length > 0) {
      csv = 'Subnet,Network,Broadcast,Mask,First Usable,Last Usable,Usable Hosts\n';
      subnets.forEach((subnet, i) => {
        csv += `${i + 1},${subnet.network},${subnet.broadcast},${subnet.mask},${subnet.firstUsable},${subnet.lastUsable},${subnet.usableHosts}\n`;
      });
    } else if (mode === 'vlsm' && vlsmSubnets.length > 0) {
      csv = 'Name,Hosts Needed,Network,Mask,CIDR,First Usable,Last Usable,Broadcast,Usable Hosts\n';
      vlsmSubnets.forEach(subnet => {
        csv += `${subnet.name},${subnet.hostsNeeded},${subnet.network},${subnet.mask},${subnet.cidr},${subnet.firstUsable},${subnet.lastUsable},${subnet.broadcast},${subnet.usableHosts}\n`;
      });
    }

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subnet-${mode}-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const addVlsmRequirement = () => {
    setVlsmRequirements([...vlsmRequirements, { name: `Network ${vlsmRequirements.length + 1}`, hosts: 10 }]);
  };

  const removeVlsmRequirement = (index: number) => {
    setVlsmRequirements(vlsmRequirements.filter((_, i) => i !== index));
  };

  const updateVlsmRequirement = (index: number, field: 'name' | 'hosts', value: string | number) => {
    const updated = [...vlsmRequirements];
    updated[index] = { ...updated[index], [field]: value };
    setVlsmRequirements(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Network className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-800">Subnet Calculator</h1>
          </div>
          <p className="text-slate-600">Professional CIDR & VLSM Planning Tool for Network Administrators</p>
        </div>

        {/* Mode Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setMode('calculator')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                mode === 'calculator'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calculator className="w-5 h-5" />
              CIDR Calculator
            </button>
            <button
              onClick={() => setMode('splitter')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                mode === 'splitter'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Split className="w-5 h-5" />
              Subnet Splitter
            </button>
            <button
              onClick={() => setMode('vlsm')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                mode === 'vlsm'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Network className="w-5 h-5" />
              VLSM Planner
            </button>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {mode === 'vlsm' ? 'Base Network (CIDR)' : 'Network Address (CIDR)'}
              </label>
              <input
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="192.168.1.0/24"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {mode === 'splitter' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Subnets
                </label>
                <input
                  type="number"
                  value={numSubnets}
                  onChange={(e) => setNumSubnets(e.target.value)}
                  min="1"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {mode === 'vlsm' && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Network Requirements
                  </label>
                  <button
                    onClick={addVlsmRequirement}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    + Add Network
                  </button>
                </div>
                <div className="space-y-2">
                  {vlsmRequirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={req.name}
                        onChange={(e) => updateVlsmRequirement(index, 'name', e.target.value)}
                        placeholder="Network name"
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="number"
                        value={req.hosts}
                        onChange={(e) => updateVlsmRequirement(index, 'hosts', parseInt(e.target.value) || 0)}
                        placeholder="Hosts"
                        min="1"
                        className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {vlsmRequirements.length > 1 && (
                        <button
                          onClick={() => removeVlsmRequirement(index)}
                          className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Calculate
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {subnetResult && mode === 'calculator' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Subnet Information</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => copyToClipboard(JSON.stringify(subnetResult, null, 2))}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  <Download className="w-4 h-4" />
                  CSV
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Main Details */}
              <div>
                <button
                  onClick={() => toggleSection('details')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-lg font-semibold text-slate-800">Network Details</h3>
                  {expandedSections.has('details') ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {expandedSections.has('details') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoRow label="Network Address" value={subnetResult.network} />
                    <InfoRow label="Broadcast Address" value={subnetResult.broadcast} />
                    <InfoRow label="Subnet Mask" value={subnetResult.mask} />
                    <InfoRow label="CIDR Notation" value={subnetResult.cidr} />
                    <InfoRow label="Wildcard Mask" value={subnetResult.wildcardMask} />
                    <InfoRow label="IP Class" value={subnetResult.ipClass} />
                  </div>
                )}
              </div>

              {/* Usable Range */}
              <div>
                <button
                  onClick={() => toggleSection('range')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-lg font-semibold text-slate-800">Usable IP Range</h3>
                  {expandedSections.has('range') ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {expandedSections.has('range') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoRow label="First Usable IP" value={subnetResult.firstUsable} />
                    <InfoRow label="Last Usable IP" value={subnetResult.lastUsable} />
                    <InfoRow label="Usable Hosts" value={subnetResult.usableHosts.toLocaleString()} />
                    <InfoRow label="Total Addresses" value={subnetResult.totalHosts.toLocaleString()} />
                  </div>
                )}
              </div>

              {/* Binary */}
              <div>
                <button
                  onClick={() => toggleSection('binary')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-lg font-semibold text-slate-800">Binary Representation</h3>
                  {expandedSections.has('binary') ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {expandedSections.has('binary') && (
                  <div className="space-y-2">
                    <div className="font-mono text-sm bg-slate-50 p-3 rounded">
                      <div className="text-slate-600 mb-1">Network:</div>
                      <div>{subnetResult.networkBinary}</div>
                    </div>
                    <div className="font-mono text-sm bg-slate-50 p-3 rounded">
                      <div className="text-slate-600 mb-1">Broadcast:</div>
                      <div>{subnetResult.broadcastBinary}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Subnet List Results */}
        {subnets.length > 0 && mode === 'splitter' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Subnets ({subnets.length})</h2>
              <div className="flex gap-2">
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">#</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Network</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Mask</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">First Usable</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Last Usable</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Broadcast</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Hosts</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {subnets.map((subnet, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm">{index + 1}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.cidr}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.mask}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.firstUsable}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.lastUsable}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.broadcast}</td>
                      <td className="px-4 py-3 text-sm">{subnet.usableHosts.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          onClick={() => copyToClipboard(subnet.cidr)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VLSM Results */}
        {vlsmSubnets.length > 0 && mode === 'vlsm' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">VLSM Subnets ({vlsmSubnets.length})</h2>
              <div className="flex gap-2">
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Required</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Network</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Mask</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">First Usable</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Last Usable</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Broadcast</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Available</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {vlsmSubnets.map((subnet, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm font-medium">{subnet.name}</td>
                      <td className="px-4 py-3 text-sm">{subnet.hostsNeeded}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.cidr}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.mask}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.firstUsable}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.lastUsable}</td>
                      <td className="px-4 py-3 text-sm font-mono">{subnet.broadcast}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={subnet.usableHosts >= subnet.hostsNeeded ? 'text-green-600' : 'text-red-600'}>
                          {subnet.usableHosts}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          onClick={() => copyToClipboard(subnet.cidr)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3">
      <div className="text-sm text-slate-600 mb-1">{label}</div>
      <div className="font-mono text-slate-900">{value}</div>
    </div>
  );
}

