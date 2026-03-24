import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const ComparisonTable = () => {
  const features = [
    { name: "Clinical Consultation", traditional: "In-person visit required", lumina: "100% Online & Secure" },
    { name: "Wait Time", traditional: "2-3 weeks for appointment", lumina: "Under 2 hours" },
    { name: "Price Transparency", traditional: "Hidden insurance copays", lumina: "Zero hidden fees" },
    { name: "Packaging", traditional: "Pharmacy paper bag", lumina: "Discreet & Premium" },
    { name: "Refills", traditional: "Manual phone calls", lumina: "Auto-delivery" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="comparison">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Why choose Lumina?</h2>
          <p className="text-slate-500 dark:text-slate-400">Transforming the traditional pharmacy into a digital-first health partner.</p>
        </RevealOnScroll>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="py-6 px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Service Feature</th>
                <th className="py-6 px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">Traditional Pharmacy</th>
                <th className="py-6 px-8 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest text-center bg-teal-50/50 dark:bg-teal-500/5">Lumina Health</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-6 px-8 font-bold text-slate-900 dark:text-slate-200">{f.name}</td>
                  <td className="py-6 px-8 text-slate-500 dark:text-slate-400 text-center">{f.traditional}</td>
                  <td className="py-6 px-8 text-slate-950 dark:text-white font-semibold text-center bg-teal-50/30 dark:bg-teal-500/5">
                    <div className="flex flex-col items-center gap-1">
                      <span className="bg-teal-500 text-white p-1 rounded-full"><Check size={12} strokeWidth={4} /></span>
                      {f.lumina}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-center border-b border-slate-200 dark:border-slate-800 pb-2">{f.name}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Traditional</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{f.traditional}</p>
                </div>
                <div className="text-center bg-teal-50 dark:bg-teal-500/10 p-3 rounded-xl">
                  <p className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">Lumina</p>
                  <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-900 dark:text-white">
                    <span className="bg-teal-500 text-white p-0.5 rounded-full"><Check size={10} strokeWidth={4} /></span>
                    {f.lumina}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
