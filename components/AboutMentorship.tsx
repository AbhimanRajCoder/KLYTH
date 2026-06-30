"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutMentorship() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const backers = [
    { type: "Startup Accelerators" },
    { type: "Tech Leadership" },
    { type: "Industry Vetting" },
    { type: "Strategic Capital" }
  ];

  return (
    <section className="relative w-full py-40 px-6 z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 overflow-hidden">
      
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="max-w-xl w-full flex flex-col items-start relative z-10"
      >
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          The Support System
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-klyth-cream leading-tight">
          Guided by the best <br /><span className="italic text-klyth-cream/90">in the industry.</span>
        </h2>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed mb-10 font-light">
          A vision this massive requires elite guidance. We are proud to be accelerated by top-tier startup cohorts and mentored by industry veterans who have built global products.
        </p>

        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-1">
             <h4 className="font-sans font-semibold text-klyth-cream text-sm">Startup Accelerators:</h4>
             <p className="font-sans text-klyth-cream/50 text-sm font-light">Actively participating in elite, high-growth tech cohorts designed to scale platforms from MVP to mass market.</p>
          </div>
          <div className="flex flex-col gap-1">
             <h4 className="font-sans font-semibold text-klyth-cream text-sm">Tech Leadership Mentorship:</h4>
             <p className="font-sans text-klyth-cream/50 text-sm font-light">Advised by executives and technical leaders from global tech giants (including ecosystem leaders from Microsoft Startups) to ensure our infrastructure is bulletproof.</p>
          </div>
          <div className="flex flex-col gap-1">
             <h4 className="font-sans font-semibold text-klyth-cream text-sm">Industry Vetting:</h4>
             <p className="font-sans text-klyth-cream/50 text-sm font-light">Backed by a network of SEBI-registered advisors and fintech founders validating our educational models.</p>
          </div>
        </div>
      </motion.div>

      {/* Visual Side: 2x2 Logo Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="relative w-full max-w-md z-10"
      >
        {/* Container for Spotlight */}
        <div 
          className="grid grid-cols-2 gap-4 relative group rounded-[2rem] overflow-hidden p-1"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight element */}
          <div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen"
            style={{
              background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(74,93,35,0.15), transparent 100%)`
            }}
          />

          {backers.map((backer, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square bg-[#1C1C1E]/60 backdrop-blur-xl rounded-[1.5rem] border border-white/5 flex flex-col items-center justify-center p-6 overflow-hidden z-10 transition-colors duration-700 hover:bg-[#1C1C1E]/80"
            >
               {/* Internal Shifting Gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-50"></div>
               
               {/* Padlock Icon */}
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 text-white/20 group-hover:text-white/40 transition-colors duration-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
               </div>
               
               <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-klyth-platinum/40 text-center">
                 {backer.type} <br/> <span className="opacity-50">Redacted</span>
               </span>
            </div>
          ))}
        </div>
      </motion.div>
      
    </section>
  );
}
