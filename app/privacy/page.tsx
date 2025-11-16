import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F2F2FA] border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light text-[#597EFC] hover:text-[#4a6ddb] transition-colors">
            Sidium Ventures
          </Link>
          <Link
            href="/"
            className="text-gray-700 hover:text-[#597EFC] transition-colors"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: November 2024</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-900 leading-relaxed">
              Sidium Ventures Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your personal information in
              accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">2. Data Controller</h2>
            <p className="text-gray-900 leading-relaxed">
              Sidium Ventures Ltd is the data controller for your personal information. Our contact details are:
            </p>
            <ul className="list-none pl-0 space-y-1 text-gray-900 mt-4">
              <li>Email: info@sidiumventures.com</li>
              <li>Company registered in England and Wales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">3. Information We Collect</h2>
            <p className="text-gray-900 leading-relaxed mb-4">We collect the following types of information:</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-900 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Business name and type</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-900 mb-4">
              <li>Financial data and records (with your consent)</li>
              <li>Business performance metrics</li>
              <li>Accounting system access (temporary, for assessment purposes)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-900 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Provide our consulting services</li>
              <li>Communicate with you about your project</li>
              <li>Process payments and send invoices</li>
              <li>Respond to your enquiries</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">5. Legal Basis for Processing</h2>
            <p className="text-gray-900 leading-relaxed mb-4">We process your personal data on the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li><strong>Contract:</strong> Processing necessary to perform our services</li>
              <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
              <li><strong>Legitimate interests:</strong> For business administration and service improvement</li>
              <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">6. Data Sharing</h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Service providers who assist our operations (e.g., cloud storage, email services)</li>
              <li>Professional advisors (accountants, lawyers) when necessary</li>
              <li>Regulatory authorities when required by law</li>
            </ul>
            <p className="text-gray-900 leading-relaxed mt-4">
              All third parties are required to maintain the confidentiality and security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-900 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data,
              including encrypted storage, secure communication channels, and restricted access controls.
              We regularly review our security practices to ensure your data remains protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-900 leading-relaxed mb-4">We retain your personal data for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Active client relationships: Duration of engagement plus 7 years</li>
              <li>Prospective client enquiries: 2 years from last contact</li>
              <li>Financial records: 7 years (as required by UK law)</li>
            </ul>
            <p className="text-gray-900 leading-relaxed mt-4">
              After these periods, we securely delete or anonymise your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">9. Your Rights</h2>
            <p className="text-gray-900 leading-relaxed mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent:</strong> Where processing is based on consent</li>
            </ul>
            <p className="text-gray-900 leading-relaxed mt-4">
              To exercise these rights, contact us at info@sidiumventures.com. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">10. Cookies</h2>
            <p className="text-gray-900 leading-relaxed">
              Our website uses essential cookies to ensure proper functionality. We do not use tracking or
              advertising cookies. Third-party services (such as Calendly) may use their own cookies, which are
              governed by their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">11. International Transfers</h2>
            <p className="text-gray-900 leading-relaxed">
              Your data is primarily stored and processed within the UK/EEA. If we transfer data outside these
              regions, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or
              adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-900 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email
              or through our website. The &quot;Last updated&quot; date at the top indicates the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">13. Complaints</h2>
            <p className="text-gray-900 leading-relaxed">
              If you have concerns about how we handle your data, please contact us first. You also have the
              right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#597EFC] hover:underline">
                ico.org.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">14. Contact Us</h2>
            <p className="text-gray-900 leading-relaxed">
              For questions about this Privacy Policy or your personal data, contact us at:{' '}
              <a href="mailto:info@sidiumventures.com" className="text-[#597EFC] hover:underline">
                info@sidiumventures.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; 2025 Sidium Ventures Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
