import React from 'react';
import { ShieldCheck, MapPin, Clock, Lock, Sparkles } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const TrustCompliance = () => {
    const items = [
      { icon: <ShieldCheck className="text-teal-500" />, title: "HIPAA Compliant", desc: "Your medical data is encrypted and kept strictly confidential." },
      { icon: <MapPin className="text-emerald-500" />, title: "Available in 40+ States", desc: "Licensed clinical services operating across the United States." },
      { icon: <Clock className="text-cyan-500" />, title: "Same-Day Response", desc: "US-licensed doctors review your intake within 24 hours." },
      { icon: <Lock className="text-teal-600" />, title: "256-bit Encryption", desc: "Industry-standard security for all payments and messaging." },
      { icon: <Sparkles className="text-emerald-400" />, title: "FDA-Sourced Meds", desc: "All prescriptions come from regulated US pharmacies." }
    ];
  
    return (
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {items.map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-800 flex-shrink-0">
                  {item.icon}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 leading-tight px-1">{item.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default TrustCompliance;
