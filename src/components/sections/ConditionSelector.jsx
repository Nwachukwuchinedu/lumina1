import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Scissors, Flame, Sparkles, Brain, Scale, Moon } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const conditions = [
  { id: 'hair', label: 'Hair Loss', treatment: 'Finasteride & Minoxidil', price: 'From $20/mo', Icon: Scissors },
  { id: 'ed', label: 'Sexual Health', treatment: 'Sildenafil (Generic Viagra)', price: 'From $3/pill', Icon: Flame },
  { id: 'acne', label: 'Acne & Skin', treatment: 'Custom Tretinoin Formula', price: 'From $30/mo', Icon: Sparkles },
  { id: 'anxiety', label: 'Mental Health', treatment: 'Personalized Therapy', price: 'From $85/visit', Icon: Brain },
  { id: 'weight', label: 'Weight Loss', treatment: 'GLP-1 Programs', price: 'From $250/mo', Icon: Scale },
  { id: 'sleep', label: 'Sleep', treatment: 'Melatonin Booster', price: 'From $15/mo', Icon: Moon },
];

const ConditionSelector = () => {
  const [active, setActive] = useState(conditions[0]);

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="condition-selector">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What can we help with?</h2>
          <p className="text-slate-500 dark:text-slate-400">Select a condition to find your personalized treatment plan.</p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {conditions.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  active.id === item.id 
                    ? 'border-teal-500 bg-teal-50 dark:bg-teal-500/10 shadow-md transform scale-[1.02]' 
                    : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <div className={`p-2 rounded-lg ${active.id === item.id ? 'bg-teal-100 dark:bg-teal-500/20 text-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                  <item.Icon size={24} />
                </div>
                <span className={`font-bold transition-colors ${active.id === item.id ? 'text-teal-900 dark:text-teal-400' : 'text-slate-900 dark:text-slate-300'}`}>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-white/5 shadow-xl">
              <span className="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">Top Recommended</span>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{active.treatment}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Our medical board's gold standard for {active.label.toLowerCase()}. 
                Clinically proven, FDA-approved, and prescribed online by US-licensed physicians.
              </p>
              
              <div className="flex items-center justify-between py-6 border-y border-slate-200 dark:border-slate-800 mb-8">
                <div>
                  <p className="text-sm font-medium text-slate-400 mb-1">Monthly Cost</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">{active.price}</p>
                </div>
                <div className="flex items-center gap-1 text-teal-600 dark:text-teal-400 font-bold cursor-pointer hover:gap-2 transition-all">
                  View Details <ChevronRight size={20} />
                </div>
              </div>

              <Button variant="primary" className="w-full text-lg shadow-lg shadow-teal-500/20" icon={<ArrowRight size={20} />}>
                Check Availability
              </Button>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-teal-50 dark:bg-teal-500/5 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionSelector;
