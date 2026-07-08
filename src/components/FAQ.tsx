import { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'f1',
      question: 'How can I make a donation?',
      answer: 'You can donate safely and instantly directly through our online donation section using UPI, Credit Cards, or Net Banking channels. Select a preset amount or input a custom donation value, fill in your details, and select your payment mode. A digital 80G tax receipt will be compiled for you instantly upon successful transfer.'
    },
    {
      id: 'f2',
      question: 'Can I apply to be an on-ground volunteer?',
      answer: 'Yes, absolutely! We always welcome passionate change-makers. Please scroll to our Volunteer section, complete the registration form with your credentials and interests, and send it. Our divisions lead will contact you to coordinate upcoming field campaigns near your location.'
    },
    {
      id: 'f3',
      question: 'Are all contributions eligible for tax deduction benefits?',
      answer: 'Yes! HopeBridge Foundation is a government-registered non-profit organization holding valid 12A and 80G status under the Indian Income Tax Act. All domestic donations are entitled to an immediate 50% tax write-off. Your official tax exemption receipt is generated for you to download on this screen right after payment completes.'
    },
    {
      id: 'f4',
      question: 'How can I actively participate in campaigns?',
      answer: 'You can support our active campaigns either by funding them directly (e.g. child sponsorships, planting trees, or feeding families) or by signing up as a specialized volunteer for that campaign. Feel free to use the "Support This Campaign" button on the campaign cards to prefill the donation form.'
    },
    {
      id: 'f5',
      question: 'How does HopeBridge guarantee fund transparency?',
      answer: 'Transparency is our absolute core value. We maintain a zero-leakage financial model where 95% of direct funds are routed straight to community projects, keeping administrative overhead under 5%. We conduct quarterly audits and post our balance sheets publicly. Every donor receives high-res photos and progress reports.'
    },
    {
      id: 'f6',
      question: 'Do you accept corporate partnerships or CSR allocations?',
      answer: 'Yes! We are fully certified to receive corporate CSR (Corporate Social Responsibility) grants and partnerships. We offer bespoke CSR alignments with detailed milestone reports, regular site inspections, and customized impact dashboards for corporate sponsors. Please send us an inquiry via our contact form.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Inquiries</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left" id="faq-items-container">
          {faqItems.map((item) => {
            const isOpen = openFAQId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-300 shadow-lg shadow-blue-500/5 ring-1 ring-blue-100'
                    : 'border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => setOpenFAQId(isOpen ? null : item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-950 text-base sm:text-lg select-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5.5 h-5.5 shrink-0 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{item.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                  )}
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed font-medium">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
