import Link from 'next/link';

export default function TermsOfService() {
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
        <h1 className="text-4xl font-light text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: November 2024</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-900 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the services provided by Sidium Ventures Ltd
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company registered in England and Wales. By engaging our services,
              you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              Sidium Ventures provides strategic finance consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Financial health assessments</li>
              <li>Cash flow forecasting</li>
              <li>Pricing strategy recommendations</li>
              <li>KPI dashboard setup and monitoring</li>
              <li>Strategic financial guidance</li>
            </ul>
            <p className="text-gray-900 leading-relaxed mt-4">
              We do not provide tax advice, bookkeeping services, or statutory accounting services. You should
              continue to engage your accountant and bookkeeper for these services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">3. Client Obligations</h2>
            <p className="text-gray-900 leading-relaxed mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Provide accurate and complete information about your business</li>
              <li>Grant necessary access to financial systems and data as required</li>
              <li>Respond to reasonable requests for information in a timely manner</li>
              <li>Pay all fees as agreed in your service agreement</li>
              <li>Use our recommendations and advice at your own discretion and risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">4. Fees and Payment</h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              Service fees will be agreed upon before commencing work and outlined in a separate service agreement.
              Payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>One-off assessments: 50% deposit required, balance due upon completion</li>
              <li>Monthly retainers: Invoiced at the start of each month, payable within 14 days</li>
              <li>Late payments may incur interest at 8% above the Bank of England base rate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">5. Confidentiality</h2>
            <p className="text-gray-900 leading-relaxed">
              We treat all client information as strictly confidential. We will not disclose your business
              information to third parties without your consent, except where required by law. We expect you
              to maintain confidentiality regarding our proprietary methods and tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              Our services are advisory in nature. While we provide recommendations based on our professional
              expertise and analysis of your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>We do not guarantee specific financial outcomes or results</li>
              <li>You are responsible for all business decisions made using our advice</li>
              <li>Our liability is limited to the fees paid for the specific service in question</li>
              <li>We are not liable for any indirect, consequential, or special damages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-900 leading-relaxed">
              All tools, templates, frameworks, and methodologies used in delivering our services remain our
              intellectual property. You receive a non-exclusive licence to use deliverables created specifically
              for your business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              Either party may terminate ongoing services with 30 days&apos; written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>All outstanding fees become immediately payable</li>
              <li>We will provide all completed work and deliverables</li>
              <li>Access to any shared systems or tools will be revoked</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-900 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Any disputes will be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-900 leading-relaxed">
              We may update these Terms from time to time. We will notify existing clients of any material
              changes. Continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-900 leading-relaxed">
              For questions about these Terms, please contact us at:{' '}
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
