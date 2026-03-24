import React from 'react';
import { Sparkles, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-white text-slate-600 pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            
            <div className="col-span-2 lg:col-span-2 pr-8">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-gradient-to-br from-teal-400 to-emerald-500 text-white p-1.5 rounded-lg shadow-sm">
                  <Sparkles size={20} strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-950">Lumina<span className="text-teal-500">.</span></span>
              </div>
              <p className="text-slate-500 mb-8 leading-relaxed max-w-sm">
                The high-performance platform for modern healthcare. Precision treatments delivered with speed, discretion, and care.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'LinkedIn'].map((social, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-medium">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Platform</h4>
              <ul className="space-y-4">
                {['Primary Care', 'Mental Health', 'Dermatology', 'Men\'s Health', 'Women\'s Health'].map(link => (
                  <li key={link}><a href="#" className="hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Medical Board', 'Careers', 'Press', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'HIPAA Notice', 'Return Policy'].map(link => (
                  <li key={link}><a href="#" className="hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
  
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-sm">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Lumina Health Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="flex items-center gap-1.5 hover:text-teal-600 transition-colors cursor-pointer"><MapPin size={16}/> New York, NY</span>
              <span className="flex items-center gap-1.5 hover:text-teal-600 transition-colors cursor-pointer"><Mail size={16}/> hello@lumina.health</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
