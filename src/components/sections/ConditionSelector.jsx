import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const conditions = [
  { id: 'hair', label: 'Hair Loss', treatment: 'Finasteride & Minoxidil', price: 'From $20/mo', icon: '💇‍♂️' },
  { id: 'ed', label: 'Sexual Health', treatment: 'Sildenafil (Generic Viagra)', price: 'From $3/pill', icon: '🔥' },
  { id: 'acne', label: 'Acne & Skin', treatment: 'Custom Tretinoin Formula', price: 'From $30/mo', icon: '✨' },
  { id: 'anxiety', label: 'Mental Health', treatment: 'Personalized Therapy', price: 'From $85/visit', icon: '🧠' },
  { id: 'weight', label: 'Weight Loss', treatment: 'GLP-1 Programs', price: 'From $250/mo', icon: '⚖️' },
  { id: 'sleep', label: 'Sleep', treatment: 'Melatonin Booster', price: 'From $15/mo', icon: '😴' },
];

const ConditionSelector = () => {
  const [active, setActive] = useState(conditions[0]);

  return (
    <section className="py-24 bg-white" id="condition-selector">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What can we help with?</h2>
          <p className="text-slate-500">Select a condition to find your personalized treatment plan.</p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {conditions.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`flex items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  active.id === item.id 
                    ? 'border-teal-500 bg-teal-50 shadow-md transform scale-[1.02]' 
                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={`font-bold ${active.id === item.id ? 'text-teal-900' : 'text-slate-900'}`}>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">Top Recommended</span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{active.treatment}</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Our medical board's gold standard for {active.label.toLowerCase()}. 
                Clinically proven, FDA-approved, and prescribed online by US-licensed physicians.
              </p>
              
              <div className="flex items-center justify-between py-6 border-y border-slate-200 mb-8">
                <div>
                  <p className="text-sm font-medium text-slate-400">Monthly Cost</p>
                  <p className="text-2xl font-black text-slate-900">{active.price}</p>
                </div>
                <div className="flex items-center gap-1 text-teal-600 font-bold">
                  View Details <ChevronRight size={20} />
                </div>
              </div>

              <Button variant="primary" className="w-full text-lg shadow-lg shadow-teal-500/20" icon={<ArrowRight size={20} />}>
                Check Availability
              </Button>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionSelector;
