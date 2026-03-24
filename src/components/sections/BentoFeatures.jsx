import React from 'react';
import { Pill, Zap, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const BentoFeatures = () => {
    return (
      <section className="py-24 bg-white dark:bg-slate-950 relative" id="treatments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up" className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-950 dark:text-white tracking-tight mb-6 leading-tight">
              Comprehensive care. <br className="hidden md:block"/>
              <span className="text-slate-500 dark:text-slate-400 font-light">Zero compromises.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From everyday prescriptions to specialized treatments, our platform connects you with everything you need to optimize your health, beautifully designed for ease of use.
            </p>
          </RevealOnScroll>
  
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]">
            
            {/* Card 1: Large Feature (Staggered Delay) */}
            <RevealOnScroll delay={100} className="md:col-span-2 md:row-span-2 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-teal-50 dark:bg-teal-500/5 border border-teal-100 dark:border-teal-500/10 group min-h-[400px] md:min-h-0">
              <img 
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1200" 
                alt="Prescription medication" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/50 dark:via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-teal-500/30">
                  <Pill size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Daily Prescriptions</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md text-base md:text-lg">Seamlessly transfer existing prescriptions or start new ones with our certified medical team. Delivered automatically.</p>
              </div>
            </RevealOnScroll>
  
            {/* Card 2: Small Stat */}
            <RevealOnScroll delay={200} className="relative rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 flex flex-col justify-center hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group min-h-[200px] md:min-h-0">
              <div className="text-teal-500 mb-4 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter mb-2">2 Hours</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Average time from consultation to prescription approval.</p>
            </RevealOnScroll>
  
            {/* Card 3: Small Feature */}
            <RevealOnScroll delay={300} className="relative rounded-[2rem] md:rounded-[2.5rem] bg-teal-50 dark:bg-teal-500/5 border border-teal-100 dark:border-teal-500/10 p-8 flex flex-col justify-end overflow-hidden group min-h-[200px] md:min-h-0">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-teal-200/50 dark:bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-300/50 transition-colors duration-500"></div>
              <div className="relative z-10 text-left">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">FDA Approved</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">All medications sourced from regulated, premium US pharmacies.</p>
              </div>
            </RevealOnScroll>
  
            {/* Card 4: Wide Feature */}
            <RevealOnScroll delay={400} className="md:col-span-3 relative rounded-[2rem] md:rounded-[2.5rem] bg-teal-900 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between overflow-hidden min-h-[300px] md:min-h-0">
              <div className="absolute top-0 right-0 w-full lg:w-[500px] h-full bg-[url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mask-image-gradient"></div>
              <div className="relative z-10 max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto lg:mx-0">
                <span className="text-teal-300 font-bold tracking-wider uppercase text-[10px] md:text-xs mb-3 block">Wellness & Skincare</span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Dermatologist-grade routines.</h3>
                <p className="text-teal-50 text-base md:text-lg">Personalized anti-aging, acne, and skin health treatments prescribed online and shipped directly to you.</p>
              </div>
              <Button variant="secondary" className="relative z-10 w-full md:w-auto flex-shrink-0 border-none">
                Explore Skincare
              </Button>
            </RevealOnScroll>
  
          </div>
        </div>
      </section>
    );
  };

export default BentoFeatures;
