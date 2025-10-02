import { Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Subnet Calculator',
  description: 'Read our privacy policy for the subnet calculator. Learn how we protect your data and ensure complete privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
          </div>
          <p className="text-slate-600 mb-4">Last updated: October 2024</p>
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Calculator
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-slate-800">Privacy-First Design</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Your privacy is our priority. The Subnet Calculator is designed with privacy-first principles, 
              ensuring that your sensitive network data never leaves your device.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                ✅ All calculations are performed locally in your browser
              </p>
              <p className="text-green-700 text-sm mt-1">
                No network data, IP addresses, or calculation results are transmitted to any server.
              </p>
            </div>
          </section>

          {/* Information We Don&apos;t Collect */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-semibold text-slate-800">Information We DON&apos;T Collect</h2>
            </div>
            <p className="text-slate-600 mb-4">
              The Subnet Calculator operates entirely client-side, which means we have no server infrastructure that could collect or store your data:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>IP addresses you enter for calculation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Subnet masks or CIDR notations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Network configurations or topology data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Calculation results or exported CSV data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Personal information or contact details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Usage analytics or behavioral data</span>
              </li>
            </ul>
          </section>

          {/* Browser Data */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-800">Browser Storage</h2>
            </div>
            <p className="text-slate-600 mb-4">
              The Subnet Calculator uses browser storage only for improving your user experience:
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <h3 className="font-medium text-blue-900">Local Storage</h3>
                <p className="text-blue-800 text-sm">Used to remember your UI preferences and collapsed sections for better UX.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <h3 className="font-medium text-blue-900">Session Storage</h3>
                <p className="text-blue-800 text-sm">Temporarily stores calculation results during your browsing session.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-medium text-gray-900">Cache Storage</h3>
                <p className="text-gray-700 text-sm">Browser automatically caches static assets for faster loading.</p>
              </div>
            </div>
            <p className="text-slate-600 mt-4 text-sm">
              You can clear this data anytime through your browser&apos;s settings. None of this data is transmitted to our servers.
            </p>
          </section>

          {/* Web Hosting */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Web Hosting & Infrastructure</h2>
            <p className="text-slate-600 mb-4">
              The Subnet Calculator is hosted on Vercel, a leading web hosting platform. Here&apos;s what Vercel may automatically collect:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4 mb-4">
              <li>Basic web analytics (page views, navigation patterns)</li>
              <li>IP addresses for security and performance monitoring</li>
              <li>Browser type and device information</li>
              <li>Geographic location (general, not precise)</li>
            </ul>
            <p className="text-slate-600 text-sm">
              We do not control or access this infrastructure data. For Vercel&apos;s privacy practices, 
              visit <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Third-Party Services</h2>
            <p className="text-slate-600 mb-4">
              The Subnet Calculator uses these external services:
            </p>
            <div className="space-y-3">
              <div className="border border-slate-200 rounded-lg p-3">
                <h3 className="font-medium text-slate-800">Vercel Hosting</h3>
                <p className="text-slate-600 text-sm">
                  Web hosting and CDN services. Automatically collects basic web analytics.
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-3">
                <h3 className="font-medium text-slate-800">GitHub</h3>
                <p className="text-slate-600 text-sm">
                  Source code repository. Public project, no personal data collected.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Cookies & Tracking</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 font-medium">
                🍪 No tracking cookies or analytics tools are used
              </p>
            </div>
            <p className="text-slate-600">
              The Subnet Calculator does not use any tracking cookies, analytics pixels, or behavioral tracking tools. 
              Your browsing patterns and usage cannot be traced or analyzed.
            </p>
          </section>

          {/* Data Protection */}
          <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Data Protection Rights</h2>
            <p className="text-slate-600 mb-4">
              Since we do not collect or store your personal data, there&apos;s nothing to access, modify, or delete. 
              However, if you have any privacy concerns, you can:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Clear your browser&apos;s local storage</li>
              <li>• Use private/incognito browsing mode</li>
              <li>• Disable JavaScript if you prefer (though functionality will be limited)</li>
              <li>• Contact us for any privacy-related questions</li>
            </ul>
          </section>

          {/* Children&apos;s Privacy */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Children&apos;s Privacy</h2>
            <p className="text-slate-600">
              Our Service is safe for users of all ages. Since no personal information is collected, 
              children can use the Subnet Calculator safely without parental consent requirements.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-2">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <p className="text-slate-600">
              Developer: <a href="https://blazejwrobel.eu" className="text-blue-600 hover:text-blue-800">blazejwrobel.eu</a>
            </p>
          </section>

          {/* Updates */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Privacy Policy Updates</h2>
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date. Since we don&apos;t collect contact information, we cannot notify you 
              directly of changes, so please check this page periodically.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-white rounded-lg shadow-md p-6 border-t border-slate-200">
          <div className="text-center text-xs text-slate-400 space-x-1">
            <p>
              Powered by <a href="https://nextjs.org" className="text-slate-500 hover:text-blue-600">Next.js</a>
              • Created by <a href="https://blazejwrobel.eu" className="text-slate-500 hover:text-blue-600">blazejwrobel.eu</a>
            </p>
            <p>© 2024 Subnet Calculator. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}