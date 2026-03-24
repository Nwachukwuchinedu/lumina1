import React from 'react';
import { Fingerprint, Activity, Truck } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const ProcessTimeline = () => {
    const steps = [
      { icon: <Fingerprint />, title: 'Digital Intake', desc: 'Complete a precise, 3-minute medical questionnaire securely online.' },
      { icon: <Activity />, title: 'Provider Review', desc: 'A US-licensed clinician reviews your profile within hours, not days.' },
      { icon: <Truck />, title: 'Discreet Delivery', desc: 'Your personalized treatment arrives in unbranded, discreet packaging.' }
    ];
  
    return (
      <section className="py-32 bg-white" id="method">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-6">Frictionless healthcare.</h2>
            <p className="text-lg text-slate-600">No waiting rooms, no automated phone trees, no pharmacy lines. Just the care you need, streamlined.</p>
          </RevealOnScroll>
  
          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
              {/* Animated progress bar mock */}
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-teal-300 to-teal-500 relative overflow-hidden">
                 <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
  
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <RevealOnScroll key={idx} delay={idx * 200} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-teal-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
                    <span className="text-3xl text-slate-950 group-hover:text-teal-600 transition-colors duration-500">
                      {step.icon}
                    </span>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-950 text-white text-sm font-bold rounded-full flex items-center justify-center ring-4 ring-white">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

export default ProcessTimeline;
