import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Logos from './components/sections/Logos';
import BentoFeatures from './components/sections/BentoFeatures';
import ProcessTimeline from './components/sections/ProcessTimeline';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-400/30 selection:text-teal-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <BentoFeatures />
        <ProcessTimeline />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
