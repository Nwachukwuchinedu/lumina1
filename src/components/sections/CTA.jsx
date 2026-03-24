import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, Zap } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const CTA = () => (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-950 flex justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <RevealOnScroll className="relative overflow-hidden bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-center border border-slate-800">
          {/* Background Decorative Blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex py-1 px-3 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
               Get started today
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Ready for a healthcare <br className="hidden sm:block"/>
              <span className="text-teal-400">upgrade?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
              Join 50,000+ others who have already chosen Lumina for personalized clinical care and doorstep delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-lg w-full sm:w-auto" icon={<ArrowRight size={20} />}>
                Start Consultation
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 w-full sm:w-auto text-lg border border-slate-700">
                View Pricing
              </Button>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
               <div className="flex items-start gap-4">
                  <div className="bg-teal-500/10 text-teal-400 p-2 rounded-lg">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Tailored</h4>
                    <p className="text-xs text-slate-500">Formulas created for you.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 text-cyan-400 p-2 rounded-lg">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">24/7 Access</h4>
                    <p className="text-xs text-slate-500">Care team always ready.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-lg">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Fast</h4>
                    <p className="text-xs text-slate-500">Approval in 2 hours.</p>
                  </div>
               </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );

export default CTA;
