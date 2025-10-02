import { FileText, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Subnet Calculator',
  description: 'Read our terms of service for using the subnet calculator and VLSM planner tool.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-800">Terms of Service</h1>
          </div>
          <p className="text-slate-600 mb-4">Last updated: October 2025</p>
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Calculator
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Acceptance */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing and using this Subnet Calculator (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Description */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Service Description</h2>
            <p className="text-slate-600 mb-4">
              The Subnet Calculator is a web-based tool designed to help network administrators, IT professionals, students, and engineers calculate subnet information, plan VLSM configurations, and perform CIDR calculations.
            </p>
            <p className="text-slate-600">
              The Service provides three main features:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-2 ml-4">
              <li>CIDR Calculator: Calculate network details from CIDR notation</li>
              <li>Subnet Splitter: Split networks into equal-sized subnets</li>
              <li>VLSM Planner: Plan Variable Length Subnet Masking configurations</li>
            </ul>
          </section>

          {/* Privacy */}
          <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">3. Privacy and Data Security</h2>
            <p className="text-slate-600 mb-4">
              <strong>All calculations are performed locally in your browser.</strong> No network data or calculation results are transmitted to our servers or stored anywhere.
            </p>
            <ul className="text-slate-600 space-y-1 ml-4">
              <li>• No personal information is collected or required</li>
              <li>• No network configurations are transmitted externally</li>
              <li>• No usage data is tracked or analytics collected</li>
              <li>• All processing happens client-side for maximum privacy</li>
            </ul>
          </section>

          {/* Use License */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Use License</h2>
            <p className="text-slate-600 mb-4">
              Permission is granted to temporarily use the Subnet Calculator for personal, educational, and commercial networking purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose other than calculating subnets</li>
              <li>attempt to reverse engineer any software contained in the website</li>
              <li>remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl font-semibold text-slate-800">5. Disclaimer</h2>
            </div>
            <p className="text-slate-600 mb-4">
              The materials on the Subnet Calculator are provided on an &apos;as is&apos; basis. The tool is designed to provide accurate subnet calculations, but users should always verify results for critical network deployments.
            </p>
            <p className="text-slate-600">
              The operators make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Limitations */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Limitations</h2>
            <p className="text-slate-600">
              In no event shall the Subnet Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials, even if the Subnet Calculator or its authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Modifications */}
          <section className="bg-slate-50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Terms of Use Modifications</h2>
            <p className="text-slate-600">
              The Subnet Calculator may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">8. Governing Law</h2>
            <p className="text-slate-600">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">9. Contact Information</h2>
            <p className="text-slate-600 mb-2">
              If you have any questions about these Terms of Service, please contact:
            </p>
            <p className="text-slate-600">
              Developer: <a href="https://blazejwrobel.eu" className="text-blue-600 hover:text-blue-800">blazejwrobel.eu</a>
            </p>
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