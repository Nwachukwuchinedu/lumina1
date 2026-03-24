import React, { useRef, useState } from 'react';
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
      <section className="py-32 bg-slate-100 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-200/50 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white tracking-tight mb-4">Patient stories.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Don't just take our word for it. Join thousands of individuals who have upgraded their healthcare.</p>
            </div>
            <Button variant="secondary" className="hidden sm:flex dark:bg-white/5 dark:text-white dark:border-white/10" icon={<ArrowRight size={18} />}>Read all reviews</Button>
          </RevealOnScroll>
  
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <TestimonialCard key={idx} review={review} delay={idx * 150} />
            ))}
          </div>
        </div>
      </section>
    );
  };

const TestimonialCard = ({ review, delay }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <RevealOnScroll delay={delay} direction="up" className="perspective-1000">
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                className="hover-tilt bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
            >
                <div className="flex text-yellow-400 mb-8">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg mb-10 leading-relaxed font-light">"{review.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/5 pt-6 mt-auto">
                    <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold rounded-full flex items-center justify-center text-lg">
                        {review.author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{review.author}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <ShieldCheck size={14} className="text-teal-500" /> {review.role}
                        </p>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
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
