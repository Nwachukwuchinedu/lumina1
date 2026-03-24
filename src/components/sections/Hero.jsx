import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Truck, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const Hero = () => {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950 flex items-center">
        {/* Floating Orbs Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute top-[60%] right-[15%] w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] animate-drift" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-80 h-80 bg-cyan-400/20 rounded-full blur-[120px] animate-drift" style={{ animationDelay: '-6s' }}></div>
        </div>

        {/* Animated Noise Grid */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Hero Content */}
            <RevealOnScroll direction="up" className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-teal-600 dark:text-teal-400 text-sm font-semibold mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                The Future of Pharmacy
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-slate-950 dark:text-white tracking-tighter leading-[1.05] mb-8">
                Precision health, <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500">
                  delivered daily.
                  <span className="absolute inset-0 animate-shimmer-text pointer-events-none">delivered daily.</span>
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                Expert consultations, personalized treatments, and ultra-fast discreet delivery. Welcome to healthcare designed around you.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                <Button variant="primary" className="text-lg w-full sm:w-auto" icon={<ArrowRight size={20} />}>
                  Start Treatment
                </Button>
                <Button variant="glass" className="text-lg w-full sm:w-auto dark:bg-white/5 dark:text-white dark:border-white/10">
                  Explore Pharmacy
                </Button>
              </div>

              {/* Trust Badge Cluster */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                 <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">256-bit SSL</span>
                 <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">HIPAA Compliant</span>
                 <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">Cancel Anytime</span>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-sm" src={`https://images.unsplash.com/photo-${1534528741775 + i}-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100`} alt="Patient avatar" />
                  ))}
                </div>
                <div className="text-sm text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">4.9/5</strong> from 50k+ patients</p>
                </div>
              </div>
            </RevealOnScroll>
  
            {/* Hero Visuals */}
            <div 
                className="relative h-[450px] lg:h-[600px] perspective-1000 transition-transform duration-100 ease-out sm:max-w-md md:max-w-lg mx-auto lg:max-w-none"
                style={{ transform: `translateY(${scrollOffset * 0.1}px)` }}
            >
              {/* Main Image Plate */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[400px] h-[350px] sm:h-[450px] lg:h-[500px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-10 animate-float">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern health tech" 
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Floating UI Widget 1 */}
              <div 
                className="absolute top-[20%] left-[-5%] sm:left-[0%] z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-100 dark:border-white/5 p-4 sm:p-5 rounded-2xl shadow-xl animate-float-delayed w-48 sm:w-64"
                style={{ transform: `translateY(${scrollOffset * -0.05}px)` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Status</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Verified</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1 mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-400 to-emerald-400 w-full h-full"></div>
                </div>
              </div>
  
              {/* Floating UI Widget 2 */}
              <div 
                className="absolute bottom-[20%] right-[-5%] sm:right-[-10%] z-30 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float w-56 sm:w-72"
                style={{ transform: `translateY(${scrollOffset * -0.08}px)` }}
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-3 rounded-xl shadow-md">
                    <Truck size={24} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">Out for delivery</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">Arriving by 4:00 PM</p>
                    <div className="flex gap-1">
                      <div className="h-1 w-6 sm:w-8 bg-teal-500 rounded-full"></div>
                      <div className="h-1 w-6 sm:w-8 bg-teal-500 rounded-full"></div>
                      <div className="h-1 w-6 sm:w-8 bg-teal-500 rounded-full animate-pulse"></div>
                      <div className="h-1 w-6 sm:w-8 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-20"></div>
      </section>
    );
  };

export default Hero;
