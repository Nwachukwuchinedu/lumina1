import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Logos from './components/sections/Logos';
import BentoFeatures from './components/sections/BentoFeatures';
import ProcessTimeline from './components/sections/ProcessTimeline';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';

// New Sections
import StatsBar from './components/sections/StatsBar';
import ConditionSelector from './components/sections/ConditionSelector';
import TrustCompliance from './components/sections/TrustCompliance';
import ComparisonTable from './components/sections/ComparisonTable';
import ProviderProfiles from './components/sections/ProviderProfiles';
import PricingSelector from './components/sections/PricingSelector';
import FAQAccordion from './components/sections/FAQAccordion';

// UI
import CustomCursor from './components/ui/CustomCursor';
import Button from './components/ui/Button';

export default function App() {
  const [showFloatingPill, setShowFloatingPill] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show pill after 30% scroll
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowFloatingPill(scrolled > 30);

      // Track active section for dot nav
      const sections = ['hero', 'treatments', 'providers', 'pricing', 'faq', 'comparison'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'providers', label: 'Providers' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'comparison', label: 'Comparison' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 selection:bg-teal-400/30 selection:text-teal-900 overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Sticky Dot Nav */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === s.id ? 'bg-teal-500 scale-150' : 'bg-slate-300 dark:bg-slate-700'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${activeSection === s.id ? 'text-teal-500 opacity-100' : 'text-slate-400'}`}>
              {s.label}
            </span>
          </a>
        ))}
      </div>

      {/* Floating CTA Pill */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${showFloatingPill ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <Button variant="primary" className="shadow-2xl px-6 py-4 !text-sm">
            Book a Consult
          </Button>
        </div>
      </div>

      <main>
        <div id="hero"><Hero /></div>
        <StatsBar />
        <Logos />
        <ConditionSelector />
        <div id="treatments"><BentoFeatures /></div>
        <div id="providers"><ProviderProfiles /></div>
        <ProcessTimeline />
        <div id="pricing"><PricingSelector /></div>
        <Testimonials />
        <TrustCompliance />
        <CTA />
        <div id="faq"><FAQAccordion /></div>
        <div id="comparison"><ComparisonTable /></div>
      </main>
      
      <Footer />
    </div>
  );
}
