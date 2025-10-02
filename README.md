# 🌐 CIDR Subnet Calculator & VLSM Planner

Professional subnet calculator and VLSM planner for network administrators. Calculate subnets, split networks, and plan VLSM configurations with ease.

## ✨ Features

### 🧮 CIDR Calculator
- Calculate network details from CIDR notation (e.g., 192.168.1.0/24)
- Display network address, broadcast, usable IP range
- Binary representation of network addresses
- IP class identification
- Wildcard mask calculation

### ✂️ Subnet Splitter
- Split networks into equal subnets
- Automatic CIDR calculation based on number of subnets
- Tabular view of all subnet details
- Export results to CSV

### 📊 VLSM Planner
- Variable Length Subnet Masking support
- Plan networks according to host requirements
- Automatic optimal subnet assignment
- Sorting from largest to smallest for efficiency

### 🛠️ Tools
- Copy subnet information to clipboard
- Export results to CSV format
- Responsive design for mobile and desktop devices
- **No backend** - runs entirely in browser

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Lucide React** - Beautiful icons
- **Client-side only** - No API, pure browser calculations

## 🖥️ Usage

### 1. CIDR Calculator
Enter a network in CIDR notation to see detailed information:
- Input: `192.168.1.0/24`
- Output: Network, broadcast, usable range, subnet mask, and more

### 2. Subnet Splitter
Divide a network into multiple equal subnets:
- Input: Base network (`192.168.1.0/24`) + number of subnets (`4`)
- Output: Table with all generated subnets

### 3. VLSM Planner
Plan VLSM configuration for specific host requirements:
- Input: Base network + host requirements for each subnet
- Output: Optimally sized subnets sorted by size

## 📋 Features in Detail

| Feature | Description | Status |
|---------|-------------|--------|
| CIDR Calculator | Calculate network details from CIDR notation | ✅ |
| Subnet Splitter | Equal subnet division | ✅ |
| VLSM Planner | Variable length subnet masking | ✅ |
| Binary Display | Show IP addresses in binary format | ✅ |
| CSV Export | Export results for external use | ✅ |
| Responsive UI | Mobile and desktop friendly | ✅ |
| Copy to Clipboard | Quick copy functionality | ✅ |
| IP Class Detection | Automatic IP class identification | ✅ |
| Privacy First | No data leaves your browser | ✅ |

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
subnets/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main application page
│   ├── about/             # About page
│   ├── terms/             # Terms of Service
│   ├── privacy/           # Privacy Policy
│   └── sitemap.ts         # XML sitemap
├── lib/
│   └── subnet.ts          # Core subnet calculation logic
├── public/
│   ├── favicon.svg        # Website icon
│   └── robots.txt         # SEO configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint rules
├── .gitignore             # Git ignore rules
└── README.md              # Complete documentation
```

### Key Algorithms

The core calculation logic is in `lib/subnet.ts`:

- **CIDR parsing**: Validates and parses CIDR notation
- **Subnet calculation**: Computes network boundaries and details
- **VLSM algorithm**: Optimizes subnet allocation for variable requirements
- **Binary conversion**: Shows IP addresses in binary notation

## 📄 License

MIT License

Copyright (c) 2024 Subnet Calculator & VLSM Planner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👨‍💻 Author

Created for network administrators by network administrators.

**Developer:** [blazejwrobel.eu](https://blazejwrobel.eu)

## 🌟 Why This Project Exists

This tool was created because existing subnet calculators often:
- Lack proper VLSM functionality
- Have complex interfaces
- Store data on their servers
- Are not mobile-friendly
- Don't support CSV export

Our solution provides:
- ✅ Complete VLSM support
- ✅ Intuitive interface
- ✅ Privacy-first design (browser-only)
- ✅ Mobile responsive
- ✅ CSV export capabilities
- ✅ Professional presentation

Perfect for daily use by network administrators, system engineers, and anyone working with IP networking.

## 🎯 Use Cases

- **Network Design**: Plan IP addressing schemes
- **Troubleshooting**: Verify subnet configurations
- **Documentation**: Export subnet information for documentation
- **Education**: Learn subnetting and VLSM concepts
- **Quick Reference**: Fast subnet calculations during network operations

## 📊 Performance

- **Speed**: Instant calculations (client-side only)
- **Privacy**: No data transmission to external servers
- **Reliability**: Stable TypeScript-based calculations
- **Accuracy**: Matches standard networking conventions
- **Compatibility**: Works in all modern browsers

## 🔒 Security & Privacy

- **No Backend**: Everything runs in your browser
- **No Data Collection**: We don't store any information
- **Client-Side Only**: No external API calls
- **Open Source**: Full code transparency with MIT license
- **GDPR Compliant**: No personal data processing

---

**Ready to simplify your subnetting workflow?** 🚀

This project is perfect for network administrators who need reliable, fast, and private subnet calculation tools.