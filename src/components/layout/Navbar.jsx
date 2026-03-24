import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X, Moon, Sun } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sync theme on mount
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(hasDarkClass);

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
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center p-2 sm:p-4 md:p-6 transition-all duration-500">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress h-[2px] sm:h-[3px]" style={{ width: `${scrollWidth}%` }} />

      <header className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg py-2 sm:py-3 px-4 sm:px-6' 
          : 'bg-white/50 dark:bg-white/5 backdrop-blur-md dark:backdrop-blur-sm border border-white/20 dark:border-white/5 py-3 sm:py-4 px-4 sm:px-6'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 text-white p-1.5 sm:p-2 rounded-full shadow-lg">
              <Sparkles size={16} sm:size={20} className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </div>
            <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 text-slate-950 dark:text-white`}>
              Lumina<span className="text-teal-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-6 lg:gap-8 backdrop-blur-lg border rounded-full px-6 lg:px-8 py-2.5 transition-colors duration-500 bg-white/40 dark:bg-white/5 border-slate-200/50 dark:border-white/10`}>
            {['Treatments', 'Pharmacy', 'Method', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} sm:size={20} /> : <Moon size={18} sm:size={20} />}
            </button>
            
            <div className="relative cursor-pointer text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-all group p-1.5 sm:p-2">
              <ShoppingBag size={18} sm:size={20} className="group-hover:scale-110 transition-transform" />
              <span className="absolute top-0 right-0 sm:-top-1 sm:-right-1.5 bg-teal-500 text-white text-[9px] sm:text-[10px] font-bold h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex items-center justify-center">0</span>
              
              {/* Cart Tooltip */}
              <div className="absolute top-full mt-4 right-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl rounded-2xl py-3 px-5 w-40 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block pointer-events-none transform translate-y-2 group-hover:translate-y-0 text-center">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Your plan: empty</p>
                <div className="absolute -top-1 right-2 w-2 h-2 bg-white dark:bg-slate-900 rotate-45 border-t border-l border-slate-100 dark:border-slate-800"></div>
              </div>
            </div>

            <Button variant="primary" className="px-4 ps:px-6 py-2 sm:py-2.5 !text-[11px] sm:!text-sm whitespace-nowrap">Get Started</Button>
            
            {/* Mobile Toggle */}
            <button 
                className={`md:hidden p-2 rounded-full border text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 mt-3 sm:mt-4 transition-all duration-300 origin-top overflow-hidden md:hidden ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl rounded-3xl py-6 px-6 flex flex-col gap-3">
            {['Treatments', 'Pharmacy', 'Method', 'About', 'Log In'].map((item) => (
              <a key={item} href="#" className="text-base font-medium text-slate-700 dark:text-slate-300 p-3 hover:text-teal-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
