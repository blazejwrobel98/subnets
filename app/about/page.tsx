import { Network, Shield, Zap, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Subnet Calculator - Professional Networking Tool',
  description: 'Learn about our CIDR subnet calculator and VLSM planner. Built for network administrators with client-side security and modern web technology.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Network className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-800">About Subnet Calculator</h1>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Calculator
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Professional Networking Tool</h2>
            <p className="text-slate-600 mb-4">
              Our subnet calculator and VLSM planner is designed specifically for network administrators, 
              engineers, and IT professionals who need reliable, accurate subnet calculations on a daily basis.
            </p>
            <p className="text-slate-600">
              Unlike many web-based tools that require sending sensitive network data to external servers, 
              our calculator runs entirely in your browser, ensuring your network configurations remain private and secure.
            </p>
          </section>

          {/* Features */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">CIDR Calculator</h3>
                <p className="text-slate-600 text-sm">
                  Calculate network details, broadcast addresses, usable IP ranges, and binary representations for any CIDR notation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">VLSM Planner</h3>
                <p className="text-slate-600 text-sm">
                  Plan Variable Length Subnet Masking configurations with automatic optimal subnet allocation based on host requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy-First</h3>
                <p className="text-slate-600 text-sm">
                  All calculations are performed locally in your browser. No data is sent to external servers or stored.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Built With Modern Technology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Frontend Stack</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• <strong>Next.js 14</strong> - React framework with App Router</li>
                  <li>• <strong>TypeScript</strong> - Type-safe development</li>
                  <li>• <strong>Tailwind CSS</strong> - Modern utility-first styling</li>
                  <li>• <strong>Lucide React</strong> - Beautiful, consistent icons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• <strong>Client-Side Only</strong> - No backend required</li>
                  <li>• <strong>Fast Performance</strong> - Instant calculations</li>
                  <li>• <strong>Mobile Responsive</strong> - Works on all devices</li>
                  <li>• <strong>Accessibility</strong> - WCAG compliant design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Open Source Project</h2>
            <p className="text-slate-600 mb-4">
              This project is open source and available on GitHub. Contributions, bug reports, and feature requests are welcome.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/blazejwrobel98/subnets" 
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
              <a 
                href="https://blazejwrobel.eu" 
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Developer <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Use Cases */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Perfect For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Network Administrators</h3>
                <p className="text-slate-600 text-sm">
                  Plan IP address schemes, troubleshoot network connectivity, and validate subnet configurations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">IT Engineers</h3>
                <p className="text-slate-600 text-sm">
                  Design network infrastructure, optimize IP allocation, and ensure efficient subnet usage.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Students & Learning</h3>
                <p className="text-slate-600 text-sm">
                  Learn subnetting concepts, understand CIDR notation, and practice network design principles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">DevOps & Automation</h3>
                <p className="text-slate-600 text-sm">
                  Validate network configurations for cloud deployments and infrastructure automation.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-white rounded-lg shadow-md p-6 border-t border-slate-200">
          <div className="text-center text-xs text-slate-400 space-y-1">
            <p>
              Powered by <a href="https://nextjs.org" className="text-slate-500 hover:text-blue-600">Next.js</a>
              • Created by <a href="https://blazejwrobel.eu" className="text-slate-500 hover:text-blue-600">blazejwrobel.eu</a>
            </p>
            <p>© 2025 Subnet Calculator. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
