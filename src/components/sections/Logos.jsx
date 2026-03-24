import React from 'react';
import { HeartPulse } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const Logos = () => (
    <section className="py-12 bg-slate-50 border-b border-slate-200/50">
      <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 mb-8 uppercase tracking-[0.2em]">
          Trusted by leading medical providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {['Hims', 'Ro', 'Nurx', 'Lemonaid', 'Alto'].map((brand, i) => (
            <div key={i} className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter flex items-center gap-2">
               <HeartPulse size={28} className="text-slate-400"/> {brand}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );

export default Logos;
