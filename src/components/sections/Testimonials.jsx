import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const Testimonials = () => {
    const reviews = [
      { text: "Lumina completely changed how I manage my health. Meds arrive exactly when I need them. The UX is flawless.", author: "Sarah Jenkins", role: "Verified Patient", rating: 5 },
      { text: "It felt like a premium concierge medicine experience, but actually affordable. The UI is so clean and easy to navigate.", author: "Michael T.", role: "Verified Patient", rating: 5 },
      { text: "Fast shipping, beautiful packaging, and excellent care. I had a dosage question and a doctor answered in 5 minutes.", author: "Emily R.", role: "Verified Patient", rating: 5 }
    ];
  
    return (
      <section className="py-32 bg-slate-100 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-200/50 rounded-full blur-[120px] pointer-events-none"></div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">Patient stories.</h2>
              <p className="text-lg text-slate-600">Don't just take our word for it. Join thousands of individuals who have upgraded their healthcare.</p>
            </div>
            <Button variant="secondary" className="hidden sm:flex" icon={<ArrowRight size={18} />}>Read all reviews</Button>
          </RevealOnScroll>
  
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} direction="up" className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 group">
                <div className="flex text-yellow-400 mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 text-lg mb-10 leading-relaxed font-light">"{review.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 font-bold rounded-full flex items-center justify-center text-lg">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.author}</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <ShieldCheck size={14} className="text-teal-500" /> {review.role}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
const ArrowRight = ({ size }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
    >
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
);

export default Testimonials;
