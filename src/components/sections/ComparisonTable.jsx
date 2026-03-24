import React from 'react';
import { Check, X } from 'lucide-react';
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
    <section className="py-24 bg-white" id="comparison">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why choose Lumina?</h2>
          <p className="text-slate-500">We rebuilt the pharmacy experience from the ground up.</p>
        </RevealOnScroll>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-6 px-8 text-sm font-bold text-slate-400 uppercase tracking-widest">Service Feature</th>
                <th className="py-6 px-8 text-sm font-bold text-slate-400 uppercase tracking-widest text-center">Traditional Pharmacy</th>
                <th className="py-6 px-8 text-sm font-bold text-teal-600 uppercase tracking-widest text-center bg-teal-50/50">Lumina Health</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-6 px-8 font-bold text-slate-900">{f.name}</td>
                  <td className="py-6 px-8 text-slate-500 text-center">{f.traditional}</td>
                  <td className="py-6 px-8 text-slate-950 font-semibold text-center bg-teal-50/30">
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
      </div>
    </section>
  );
};

export default ComparisonTable;
