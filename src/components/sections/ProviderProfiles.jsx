import React from 'react';
import { Star } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const providers = [
  { name: "Dr. Sarah Miller", role: "Board Certified Dermatologist", states: 42, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Dr. James Chen", role: "Sexual Health Specialist", states: 38, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Dr. Elena Rodriguez", role: "Primary Care Physician", states: 45, img: "https://images.unsplash.com/photo-1594824812377-08f973a4563c?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Dr. Michael Ross", role: "Integrative Health Expert", states: 41, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200" },
];

const ProviderProfiles = () => {
    return (
      <section className="py-24 bg-slate-50 overflow-hidden" id="providers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet your care team.</h2>
            <p className="text-slate-500">A national network of world-class medical professionals ready to review your case.</p>
          </RevealOnScroll>
  
          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 snap-x">
            {providers.map((doc, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 bg-white rounded-3xl border border-slate-200 p-6 snap-start hover:shadow-xl transition-shadow duration-500">
                <div className="relative mb-6">
                  <img src={doc.img} alt={doc.name} className="w-24 h-24 rounded-2xl object-cover mb-4 shadow-md" />
                  <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">Available Now</div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">{doc.role}</p>
                
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-slate-400 text-xs ml-2">4.9/5</span>
                </div>
                
                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="font-bold mb-1">Licensure</p>
                  <p>Licensed in {doc.states} states including yours.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProviderProfiles;
