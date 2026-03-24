import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-500">
      <header className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm py-3 px-6' 
          : 'bg-transparent py-4 px-6 md:px-0'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 text-white p-2 rounded-full shadow-lg">
              <Sparkles size={20} strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 text-slate-950`}>
              Lumina<span className="text-teal-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 backdrop-blur-lg border rounded-full px-8 py-2.5 transition-colors duration-500 ${isScrolled ? 'bg-slate-50/50 border-slate-200' : 'bg-white/50 border-slate-200/50'}`}>
            {['Treatments', 'Pharmacy', 'Method', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative cursor-pointer text-slate-600 hover:text-teal-600 transition-colors mr-4">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1.5 bg-teal-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </div>
            <Button variant="ghost" className="hidden lg:flex px-6 py-2.5 !text-sm">Log In</Button>
            <Button variant="primary" className="px-6 py-2.5 !text-sm">Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-full backdrop-blur-md border text-slate-900 border-slate-200 bg-white/50`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl py-6 px-6 flex flex-col gap-4 md:hidden z-50">
            {['Treatments', 'Pharmacy', 'Method', 'About', 'Log In'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-slate-700 p-2 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition-colors">
                {item}
              </a>
            ))}
            <Button variant="primary" className="w-full mt-4">Get Started</Button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
