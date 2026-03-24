import React from 'react';
import { HeartPulse } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const Logos = () => (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-200/50 dark:border-slate-800/50">
      <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-slate-400 dark:text-slate-500 mb-8 uppercase tracking-[0.2em]">
          Trusted by leading medical providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20 opacity-40 dark:opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {['Hims', 'Ro', 'Nurx', 'Lemonaid', 'Alto'].map((brand, i) => (
            <div key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tighter flex items-center gap-2">
               <HeartPulse size={24} className="text-teal-500 dark:text-teal-400"/> {brand}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );

export default Logos;
