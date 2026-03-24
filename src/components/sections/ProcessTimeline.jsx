import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Mail } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const ProcessTimeline = () => {
    const steps = [
      { 
        title: "Medical Intake", 
        desc: "Complete a 5-minute digital visit about your health goals. No appointments needed.", 
        icon: <Mail size={24} />,
        color: "bg-teal-500"
      },
      { 
        title: "Doctor Review", 
        desc: "A US-licensed physician reviews your case and prescribes if appropriate, usually within 2 hours.", 
        icon: <ShieldCheck size={24} />,
        color: "bg-emerald-500"
      },
      { 
        title: "Discreet Delivery", 
        desc: "Meds ship same-day from a US pharmacy in plain packaging. No branding, no stress.", 
        icon: <Clock size={24} />,
        color: "bg-cyan-500"
      }
    ];
  
    return (
      <section className="py-24 bg-white dark:bg-slate-950" id="method">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight mb-6">How it works.</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Skip the waiting room. Get clinical care from the comfort of your home in three simple steps.</p>
          </RevealOnScroll>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
            
            {/* Steps */}
            {steps.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="flex flex-col items-center lg:items-start group">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 ${step.color} rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl shadow-teal-500/20 group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2 mb-3">
                    <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-1 rounded-md mb-2 sm:mb-0">STEP 0{idx + 1}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProcessTimeline;
