import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X, Moon, Sun } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-500">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollWidth}%` }} />

      <header className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm py-3 px-6' 
          : 'bg-transparent py-4 px-6 md:px-0'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 text-white p-2 rounded-full shadow-lg">
              <Sparkles size={20} strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 text-slate-950 dark:text-white`}>
              Lumina<span className="text-teal-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 backdrop-blur-lg border rounded-full px-8 py-2.5 transition-colors duration-500 ${isScrolled ? 'bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700' : 'bg-white/50 dark:bg-white/5 border-slate-200/50'}`}>
            {['Treatments', 'Pharmacy', 'Method', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative cursor-pointer text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-all group mr-4">
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1.5 bg-teal-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
              
              {/* Cart Tooltip */}
              <div className="absolute top-full mt-4 right-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl rounded-2xl py-3 px-5 w-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-2 group-hover:translate-y-0 text-center">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Your plan: empty</p>
                <div className="absolute -top-1 right-2 w-2 h-2 bg-white dark:bg-slate-900 rotate-45 border-t border-l border-slate-100 dark:border-slate-800"></div>
              </div>
            </div>
            <Button variant="ghost" className="hidden lg:flex px-6 py-2.5 !text-sm dark:text-slate-300">Log In</Button>
            <Button variant="primary" className="px-6 py-2.5 !text-sm">Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-full backdrop-blur-md border text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl rounded-3xl py-6 px-6 flex flex-col gap-4 md:hidden z-50">
            {['Treatments', 'Pharmacy', 'Method', 'About', 'Log In'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-slate-700 dark:text-slate-300 p-2 hover:text-teal-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
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
