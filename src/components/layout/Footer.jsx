import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 p-2 rounded-full text-white">
              <Sparkles size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">Lumina<span className="text-teal-500">.</span></span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed pr-8">
            Reinventing the clinical experience with precision, data, and design. Delivered to your doorstep.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div key={i} className="text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                    <Icon size={20} />
                </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-slate-950 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Treatments</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            {['Hair Loss', 'Sexual Health', 'Skincare', 'Mental Health'].map(item => (
                <li key={item} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-slate-950 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            {['About Us', 'Contact', 'Pharmacy Info', 'Medical Board'].map(item => (
                <li key={item} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-slate-950 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            {['Help Center', 'Shipping Info', 'Returns Policy', 'Privacy Policy'].map(item => (
                <li key={item} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>&copy; 2024 Lumina Health Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">Terms of Service</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">HSA/FSA Eligible</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
