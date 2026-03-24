import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const faqs = [
  { q: "Is this covered by insurance?", a: "To keep our prices low and transparent, we don't bill insurance directly. However, we accept HSA/FSA cards and our cash prices are often lower than typical copays." },
  { q: "How quickly can I get my first prescription?", a: "Once you complete your intake, a doctor reviews it within hours. If approved, your treatment ships same-day via expedited courier." },
  { q: "Can I cancel my subscription anytime?", a: "Absolutely. No hidden fees, no phone calls required. You can manage, pause, or cancel your plan with one click from your dashboard." },
  { q: "Is my medical data secure?", a: "We are 100% HIPAA compliant. We use 256-bit encryption (same as top-tier banks) and your data is only ever seen by your assigned medical team." },
];

const FAQAccordion = () => {
    const [openIdx, setOpenIdx] = useState(0);
  
    return (
      <section className="py-32 bg-slate-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common questions.</h2>
            <p className="text-slate-500">Everything you need to know before starting your treatment.</p>
          </RevealOnScroll>
  
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} className={`rounded-2xl border transition-all duration-500 ${openIdx === idx ? 'bg-white border-teal-500 shadow-lg' : 'bg-white/50 border-slate-200'}`}>
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <span className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-teal-500' : 'text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 mt-2">
                    {faq.a}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FAQAccordion;
