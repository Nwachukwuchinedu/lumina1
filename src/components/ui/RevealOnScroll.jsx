import React, { useState, useEffect, useRef, ReactNode } from 'react';

const RevealOnScroll = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getDirectionClasses = () => {
    if (direction === "up") return "translate-y-12";
    if (direction === "left") return "-translate-x-12";
    if (direction === "right") return "translate-x-12";
    return "";
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-[0.16,1,0.3,1] ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionClasses()}`
      } ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
