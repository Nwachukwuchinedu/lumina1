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
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Simplified pricing.</h2>
            
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl mb-8">
              {['monthly', 'quarterly', 'annual'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 capitalize ${
                    cycle === c ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  {c}
                  {c === 'annual' && <span className="ml-2 text-[10px] bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded-md">-40%</span>}
                </button>
              ))}
            </div>
          </RevealOnScroll>
  
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-[2.5rem] p-10 border transition-all duration-500 ${
                  plan.featured 
                    ? 'border-teal-500 bg-slate-950 text-white shadow-2xl scale-[1.05] z-10' 
                    : 'border-slate-200 bg-white text-slate-900'
                }`}
              >
                {plan.featured && <div className="absolute top-6 right-6 bg-teal-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase">Most Popular</div>}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.featured ? "text-slate-400 mb-8" : "text-slate-500 mb-8"}>{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-6xl font-black tracking-tighter transition-all duration-300">${getCurrentPrice(plan)}</span>
                  <span className={plan.featured ? "text-slate-400 ml-2" : "text-slate-500 ml-2"}>/ month</span>
                </div>
  
                <ul className="space-y-4 mb-10">
                  {["Online doctor review", "Free discreet shipping", "24/7 care messaging", "Cancel anytime"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-teal-500"><Check size={18} /></span>
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
  
                <Button 
                  variant={plan.featured ? "primary" : "secondary"} 
                  className="w-full text-lg" 
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
