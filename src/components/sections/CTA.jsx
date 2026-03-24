import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const CTA = () => (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden text-center bg-slate-50 border border-slate-200">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full blur-[80px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] opacity-60 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-950 tracking-tighter mb-6">
                Ready to upgrade?
              </h2>
              <p className="text-xl text-slate-600 mb-12 font-light">
                Experience the new standard of healthcare. Fast, reliable, and beautifully designed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" className="text-lg px-10 py-5">
                  Start Free Consultation
                </Button>
              </div>
              <p className="mt-8 text-sm font-medium text-slate-400 flex items-center justify-center gap-2">
                <CheckCircle2 size={16} className="text-teal-500"/> Secure & HIPAA Compliant
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );

export default CTA;
