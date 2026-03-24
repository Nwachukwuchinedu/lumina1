import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const PricingSelector = () => {
    const [cycle, setCycle] = useState('monthly'); // 'monthly', 'quarterly', 'annual'
  
    const plans = [
      { 
        name: "Standard Plan", 
        desc: "Best for immediate relief", 
        monthlyPrice: 35, 
        quarterlyPrice: 25, 
        annualPrice: 20 
      },
      { 
        name: "Premium Protocol", 
        desc: "Deep skin & wellness care", 
        monthlyPrice: 55, 
        quarterlyPrice: 45, 
        annualPrice: 35,
        featured: true
      },
    ];
  
    const getCurrentPrice = (plan) => {
      if (cycle === 'monthly') return plan.monthlyPrice;
      if (cycle === 'quarterly') return plan.quarterlyPrice;
      return plan.annualPrice;
    };
  
    return (
      <section className="py-24 bg-white dark:bg-slate-950" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Simplified pricing.</h2>
            
            <div className="inline-flex flex-wrap justify-center p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl mb-8">
              {['monthly', 'quarterly', 'annual'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 capitalize ${
                    cycle === c ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {c}
                  {c === 'annual' && <span className="ml-2 text-[10px] bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 px-1.5 py-0.5 rounded-md">-40%</span>}
                </button>
              ))}
            </div>
          </RevealOnScroll>
  
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 ${
                  plan.featured 
                    ? 'border-teal-500 bg-white dark:bg-slate-900 ring-4 md:ring-8 ring-teal-500/5 text-slate-900 dark:text-white shadow-2xl scale-[1.02] md:scale-[1.05] z-10' 
                    : 'border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white'
                }`}
              >
                {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase shadow-lg">Most Popular</div>}
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-5xl md:text-6xl font-black tracking-tighter transition-all duration-300">${getCurrentPrice(plan)}</span>
                  <span className="text-slate-400 ml-2 text-sm md:text-base">/ month</span>
                </div>
  
                <ul className="space-y-4 mb-10">
                  {["Online doctor review", "Free discreet shipping", "24/7 care messaging", "Cancel anytime"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-teal-500 flex-shrink-0"><Check size={18} /></span>
                      <span className="text-xs sm:text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
  
                <Button 
                  variant={plan.featured ? "primary" : "secondary"} 
                  className="w-full text-base md:text-lg shadow-xl shadow-teal-500/10" 
                  icon={<ArrowRight size={20} />}
                >
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default PricingSelector;
