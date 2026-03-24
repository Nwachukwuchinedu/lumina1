import React from 'react';
import { ArrowRight, Star, Truck, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const Hero = () => {
    return (
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50 flex items-center">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-teal-200/40 mix-blend-multiply filter blur-[100px] animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-200/40 mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] rounded-full bg-cyan-200/40 mix-blend-multiply filter blur-[130px] animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-noise opacity-5 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Hero Content */}
            <RevealOnScroll direction="up" className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-teal-600 text-sm font-semibold mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                The Future of Pharmacy
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-slate-950 tracking-tighter leading-[1.05] mb-8">
                Precision health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500">
                  delivered daily.
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-lg">
                Expert consultations, personalized treatments, and ultra-fast discreet delivery. Welcome to healthcare designed around you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="text-lg" icon={<ArrowRight size={20} />}>
                  Start Treatment
                </Button>
                <Button variant="glass" className="text-lg">
                  Explore Pharmacy
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src={`https://images.unsplash.com/photo-${1534528741775 + i}-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100`} alt="Patient avatar" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500"><strong className="text-slate-900">4.9/5</strong> from 50k+ patients</p>
                </div>
              </div>
            </RevealOnScroll>
  
            {/* Hero Visuals - Floating Glass Cards */}
            <div className="relative h-[600px] hidden lg:block perspective-1000">
              {/* Main Image Plate */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-10 animate-float">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern health tech" 
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Floating UI Widget 1 */}
              <div className="absolute top-[20%] left-[0%] z-20 bg-white/90 backdrop-blur-xl border border-slate-100 p-5 rounded-2xl shadow-xl animate-float-delayed w-64">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Status</p>
                    <p className="text-sm font-bold text-slate-900">Prescription Verified</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-400 to-emerald-400 w-full h-full"></div>
                </div>
              </div>
  
              {/* Floating UI Widget 2 */}
              <div className="absolute bottom-[20%] right-[-10%] z-30 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 animate-float w-72">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 text-white p-3 rounded-xl shadow-md">
                    <Truck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Out for delivery</p>
                    <p className="text-xs text-slate-500 mb-3">Arriving today by 4:00 PM</p>
                    <div className="flex gap-1">
                      <div className="h-1 w-8 bg-teal-500 rounded-full"></div>
                      <div className="h-1 w-8 bg-teal-500 rounded-full"></div>
                      <div className="h-1 w-8 bg-teal-500 rounded-full animate-pulse"></div>
                      <div className="h-1 w-8 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
      </section>
    );
  };

export default Hero;
