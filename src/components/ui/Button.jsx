import React, { useState, useRef } from 'react';

const Button = ({ children, variant = 'primary', className = '', icon, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden";
  
  const variants = {
    primary: "bg-teal-500 text-slate-950 hover:bg-teal-400 hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] focus:ring-teal-500 border border-transparent px-8 py-4",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 px-8 py-4",
    glass: "bg-white/60 backdrop-blur-md text-slate-900 border border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm px-8 py-4",
    ghost: "bg-transparent text-slate-600 hover:text-teal-600 hover:bg-teal-50/50 px-5 py-2.5",
  };

  return (
    <button 
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      {...props}
    >
      {/* Button Glow Effect */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
      
      <span className="relative z-10 flex items-center">
        {children}
        {icon && <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;
