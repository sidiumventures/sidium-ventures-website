'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, BarChart3, Lightbulb, TrendingUp, Check, CheckCircle2, XCircle, Play, Circle, Menu, X } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const win = window as typeof window & {
      Calendly?: {
        initPopupWidget: (options: { url: string }) => void
      }
    };

    if (win.Calendly) {
      win.Calendly.initPopupWidget({
        url: 'https://calendly.com/sidiumventures/30min'
      });
    } else {
      // Fallback: open in new tab if script hasn't loaded
      window.open('https://calendly.com/sidiumventures/30min', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#F2F2FA] border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-light text-[#597EFC] hover:text-[#4a6ddb] transition-colors cursor-pointer">Sidium Ventures</a>
          <div className="hidden md:flex gap-8">
            <a href="#stop-guessing" className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer">About</a>
            <a href="#about" className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer">How I Help</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer">My Process</a>
            <a href="#services" className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer">Services</a>
            <a href="#faq" className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={openCalendly}
              className="hidden md:block bg-[#597EFC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F2F2FA] border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
              <a
                href="#stop-guessing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer py-2"
              >
                About
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer py-2"
              >
                How I Help
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer py-2"
              >
                My Process
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer py-2"
              >
                Services
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer py-2"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#597EFC] transition-colors cursor-pointer py-2"
              >
                Contact
              </a>
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  openCalendly(e);
                }}
                className="bg-[#597EFC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer mt-2"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Section 1: Hero */}
      <section id="hero" className="min-h-[80vh] flex items-center bg-[#F2F2FA]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
            Sidium Ventures
          </h1>
          <p className="text-sm md:text-base tracking-widest text-[#597EFC] mb-8 uppercase">
            Strategic Finance & Technology Solutions
          </p>
          <div className="max-w-xs mx-auto mb-8">
            <Image
              src="/sidium-ventures-logo-animated.svg"
              alt="Sidium Ventures Logo"
              width={400}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Strategic finance and technology solutions for growing home services businesses in the UK.
            Turn your financial data into decisions that drive profitable growth.
          </p>
        </div>
      </section>

      {/* Section 2: Stop Guessing */}
      <section id="stop-guessing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Stop Guessing. Start Growing.
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e5ebff] to-[#f0f4ff] rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[#597EFC]" />
              </div>
            </div>
            <p className="mb-12 text-gray-900">
              You&apos;re great at what you do. But making money and knowing how much you&apos;re making are two different things.
              I help plumbers, electricians, HVAC technicians, builders and cleaning companies get complete financial clarity so they can price properly,
              hire confidently, and grow profitably.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[5rem] mt-16">
              <div className="text-center">
                <p className="text-sm md:text-base tracking-widest text-[#597EFC] mb-4 uppercase">
                  Profitability
                </p>
                <h3 className="text-xl font-light text-gray-900 mb-4">Am I Making Money?</h3>
                <p className="text-gray-900">
                  You&apos;re busy, jobs are getting done, but you have no idea if you&apos;re actually profitable.
                  Some jobs feel like winners, others feel like losers, but you&apos;re not sure which is which.
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm md:text-base tracking-widest text-[#597EFC] mb-4 uppercase">
                  Hiring Decisions
                </p>
                <h3 className="text-xl font-light text-gray-900 mb-4">Should I Hire Someone?</h3>
                <p className="text-gray-900">
                  You&apos;re turning away work, but you&apos;re afraid to bring someone on because you don&apos;t know if the numbers will work.
                  What if you hire them and then it&apos;s quiet?
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm md:text-base tracking-widest text-[#597EFC] mb-4 uppercase">
                  Job Costing
                </p>
                <h3 className="text-xl font-light text-gray-900 mb-4">Am I Charging Enough?</h3>
                <p className="text-gray-900">
                  You haven&apos;t raised prices in 2+ years because you&apos;re worried about losing customers.
                  Meanwhile, your costs keep going up and your margins are getting squeezed.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
            <button
              onClick={openCalendly}
              className="inline-block bg-[#597EFC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer"
            >
              Book Your Free Financial Health Check
            </button>
            </div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section id="about" className="py-20 bg-[#F2F2FA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-12">Here&apos;s How I Help</h2>
          <div className="grid md:grid-cols-2 gap-32">
            <div>
              <p className="mb-6 text-gray-900">
                I&apos;m Kevin, a CIMA-qualified accountant with over 10 years of commercial finance experience at major UK retailers 
                including Sainsbury's and Tesco, plus housing associations and SMEs across the UK and Canada.
              </p>
              <p className="mb-6 text-gray-900"> 
                Most accountants tell you what happened last year when they file your tax return. 
                I help you understand what's happening right now and what will happen next quarter - so you can make 
                confident decisions about pricing, hiring, and growth.
              </p>
              <p className="mb-6 text-gray-900"> 
                What I do is strategic finance: the layer that sits on top of your existing numbers to help you actually 
                use them to grow your business.
              </p>
            </div>
            <div>
              <p className="mb-6 text-gray-900">
                I don&apos;t do tax returns, annual accounts, or bookkeeping - your accountant and bookkeeper handle that.
                Think of me as your part-time CFO who knows the home services industry inside out.
                I help you get financial clarity so that you can:              
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <div>
                    <strong className="text-gray-900">Price properly</strong>
                    <span className="text-gray-900"> - Know exactly what to charge to be profitable</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <div>
                    <strong className="text-gray-900">Hire confidently</strong>
                    <span className="text-gray-900"> - Make growth decisions based on facts, not fear</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <div>
                    <strong className="text-gray-900">See the future</strong>
                    <span className="text-gray-900"> - Understand your cash position 3-6 months ahead</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <div>
                    <strong className="text-gray-900">Identify winners</strong>
                    <span className="text-gray-900"> - Know which jobs/services are making you the most money</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="#services"
              className="inline-block bg-[#597EFC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-12">Simple Process, Powerful Results</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e5ebff] to-[#f0f4ff] rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-[#597EFC]" />
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Book Your Free Call</h3>
              <p className="text-gray-900">
                30-minute video chat to discuss your business and see if we&apos;re a good fit.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e5ebff] to-[#f0f4ff] rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-[#597EFC]" />
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Complete Assessment</h3>
              <p className="text-gray-900">
                I dive deep into your numbers over 3-4 weeks while you keep running your business.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e5ebff] to-[#f0f4ff] rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-[#597EFC]" />
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Get Your Strategy</h3>
              <p className="text-gray-900">
                2-hour session where I show you exactly what&apos;s working, what&apos;s not, and what to do next.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e5ebff] to-[#f0f4ff] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#597EFC]" />
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Implement & Grow</h3>
              <p className="text-gray-900">
                Ongoing monthly support to keep you on track and make smart growth decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who Is This For */}
      <section id="qualification" className="py-20 bg-[#F2F2FA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-12">Is This Right for You?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-light text-gray-900 mb-6">You&apos;re a Good Fit If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You run a home services business (plumbing, electrical, building, cleaning, HVAC, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You&apos;re doing £300K-£2M in annual revenue</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You have 3-15 employees/subcontractors</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You&apos;re profitable but don&apos;t have clear visibility</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You want to grow but don&apos;t know if you can afford to hire</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You haven&apos;t reviewed your pricing in 1+ years</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-light text-gray-900 mb-6">You&apos;re Not a Good Fit If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You&apos;re just starting out (under £200K revenue)</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You already have a full-time CFO</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You&apos;re looking for someone to do your bookkeeping or tax returns</span>
                </li>
                <li className="flex items-start">
                  <Circle className="text-[#597EFC] w-2 h-2 mr-3 flex-shrink-0 mt-1.5 fill-[#597EFC]" />
                  <span className="text-gray-900">You&apos;re happy guessing and don&apos;t want to change</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-4">How We Work Together</h2>
          <p className="text-center mb-12 text-gray-900">Three ways to get the financial clarity you need</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 0: Free Health Check */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#597EFC] transition-colors">
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                FREE
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">Financial Health Check</h3>
              <p className="mb-6 text-gray-900">30 Minutes</p>

              <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2 mb-6 text-gray-900">
                <li>• Quick review of your business model</li>
                <li>• 2-3 immediate, actionable insights</li>
                <li>• No obligation, genuine value</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Who It&apos;s For:</h4>
              <p className="mb-6 italic text-gray-900">
                You&apos;re curious but not ready to commit. You want to see if this is right for your business.
              </p>

              <button
                onClick={openCalendly}
                className="block w-full bg-[#597EFC] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer"
              >
                Book Your Free Call
              </button>
            </div>

            {/* Tier 1: Initial Assessment (Most Popular) */}
            <div className="bg-white p-8 rounded-lg border-4 border-[#597EFC] shadow-lg transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#597EFC] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">Financial Health Assessment</h3>
              <p className="text-3xl font-light text-[#597EFC] mb-6">£2,500 <span className="text-lg font-normal">one-off</span></p>

              <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2 mb-6 text-gray-900">
                <li>• Complete financial analysis (12 months)</li>
                <li>• Job costing & profitability breakdown</li>
                <li>• Pricing strategy & recommendations</li>
                <li>• 6-month cash flow forecast</li>
                <li>• KPI dashboard setup</li>
                <li>• 2-hour strategy session</li>
                <li>• Written recommendations report</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Who It&apos;s For:</h4>
              <p className="mb-4 italic text-gray-900">
                You&apos;re ready for complete clarity. You want to know exactly where you stand and what to fix.
              </p>

              <p className="text-sm text-green-700 font-semibold mb-6 bg-green-50 p-3 rounded">
                Most clients uncover £30-100K in opportunities they&apos;re currently leaving on the table
              </p>

              <button
                onClick={openCalendly}
                className="block w-full bg-[#597EFC] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Tier 2: Monthly Retainer */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#597EFC] transition-colors">
              <h3 className="text-2xl font-light text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-3xl font-light text-[#597EFC] mb-2">£1,000<span className="text-lg font-normal">/month</span></p>
              <p className="mb-6 text-gray-900">Requires Initial Assessment first</p>

              <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2 mb-6 text-gray-900">
                <li>• Monthly financial review meeting</li>
                <li>• Updated KPI dashboard</li>
                <li>• Strategic guidance & decision support</li>
                <li>• Quarterly planning sessions</li>
                <li>• Email/WhatsApp support</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Who It&apos;s For:</h4>
              <p className="mb-6 italic text-gray-900">
                You&apos;ve done the assessment and want ongoing support to stay on track and have a finance partner for growth decisions.
              </p>

              <button
                onClick={openCalendly}
                className="block w-full border-2 border-[#597EFC] text-[#597EFC] text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="py-20 bg-[#F2F2FA]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-12">Common Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "How is this different from my accountant?",
                a: "Most accountants focus on tax compliance and historical reporting - telling you what happened last year. I focus on strategy and forward-looking decisions - helping you plan what happens next. We complement each other; I don't replace your accountant."
              },
              {
                q: "I'm too busy to do this right now",
                a: "That's exactly why you need this. The assessment requires minimal time from you - maybe 2-3 hours total over a month. I do the heavy lifting while you keep running your business. And if you're too busy, it usually means you're turning away work or working 70-hour weeks - both problems that better financial clarity can solve."
              },
              {
                q: "That seems expensive",
                a: "I get it. But here's the reality: most businesses your size are leaving £50-100K per year on the table through poor pricing, inefficient operations, or avoiding growth decisions. If this assessment helps you capture even 10% of that - £5-10K - it's paid for itself 2-4x over in the first year. And that's conservative."
              },
              {
                q: "What if I don't want the monthly retainer?",
                a: "No problem. The initial assessment is valuable on its own. You'll walk away with everything you need to implement yourself. The retainer is only for clients who want ongoing support and accountability."
              },
              {
                q: "Do you do bookkeeping or tax returns?",
                a: "No - that's not my focus. You'll still need your bookkeeper for data entry and your accountant for tax compliance. I'm the strategic layer on top, helping you make better decisions with the financial data you already have."
              },
              {
                q: "How long does the assessment take?",
                a: "About 3-4 weeks from start to finish. Week 1: I gather data. Week 2-3: I do the analysis. Week 4: We have the strategy session. Your time commitment is minimal - mostly providing access to your accounting system and having a few calls."
              },
              {
                q: "What if my numbers are a mess?",
                a: "That's actually common. We'll work with what you have, and part of my recommendations might include cleaning up your bookkeeping. But even messy data usually tells a story - and I'm good at finding it."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-[#e5ebff] transition-colors rounded-lg cursor-pointer mb-0"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                  <span className="text-2xl text-[#597EFC] flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-gray-900">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-4">Have a Question?</h2>
          <p className="text-center text-gray-900 mb-12">
            Not ready to book a call? Send me a message and I&apos;ll get back to you within 24 hours.
          </p>

          <form
            action="https://formspree.io/f/xnnlbopy"
            method="POST"
            className="max-w-2xl mx-auto space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#597EFC] focus:border-transparent outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#597EFC] focus:border-transparent outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-gray-900 mb-2">
                Business Type
              </label>
              <select
                id="business"
                name="business"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#597EFC] focus:border-transparent outline-none transition-colors bg-white"
              >
                <option value="">Select your business type</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">HVAC</option>
                <option value="building">Building/Construction</option>
                <option value="cleaning">Cleaning</option>
                <option value="other">Other Home Services</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Your Question
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#597EFC] focus:border-transparent outline-none transition-colors resize-vertical"
                placeholder="Tell me about your business and what you'd like to know..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-[#597EFC] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#4a6ddb] transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section id="cta" className="py-20 bg-[#597EFC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-4">Ready to Stop Guessing?</h2>
          <p className="text-xl text-white mb-8">
            Book your free 30-minute Financial Health Check - no obligation, just value
          </p>

          <div className="bg-[#F2F2FA] rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Here&apos;s what you&apos;ll get on the call:</h3>
            <ul className="text-left text-gray-900 space-y-2 max-w-2xl mx-auto">
              <li className="text-gray-900">• Quick assessment of your current financial situation</li>
              <li className="text-gray-900">• 2-3 immediate insights you can implement right away</li>
              <li className="text-gray-900">• Clear understanding of whether working together makes sense</li>
            </ul>
            <p className="text-gray-900 mt-6">
              No sales pressure. No obligation. Just a straightforward conversation about your business.
            </p>
          </div>

          <button
            onClick={openCalendly}
            className="inline-block bg-white text-[#597EFC] px-10 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mb-6 cursor-pointer"
          >
            Book Your Free Call Now
          </button>

          <div className="flex justify-center gap-8 text-white text-sm flex-wrap">
            <span className="text-white">CIMA Qualified Accountant</span>
            <span className="text-white">•</span>
            <span className="text-white">10+ Years Strategic Finance Experience</span>
            <span className="text-white">•</span>
            <span className="text-white">Sainsbury&apos;s | Tesco | Peabody Trust</span>
          </div>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Sidium Ventures Ltd</h4>
              <ul className="space-y-1 text-sm">
                <li className="text-gray-300">Registered in England & Wales</li>
                <li className="text-gray-300">Company No: 16677216</li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Connect</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="https://www.linkedin.com/in/kevinlokko/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors cursor-pointer">LinkedIn</a></li>
                <li><a href="mailto:info@sidiumventures.com" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 text-center text-sm">
            <p className="text-gray-300">© 2025 Sidium Ventures Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
