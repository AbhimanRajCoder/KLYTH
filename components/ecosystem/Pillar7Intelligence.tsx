"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Pillar7Intelligence() {
  const [isHovered, setIsHovered] = useState(false);

  const newsItems = [
    { title: "Q3 Budget Breakdown", date: "Today" },
    { title: "Taxation Shifts 2024", date: "Yesterday" },
    { title: "Macro Market Trends", date: "Oct 12" },
    { title: "Interest Rate Adjustments", date: "Oct 10" },
    { title: "Global Inflation Impact", date: "Oct 05" }
  ];

  // We duplicate the items to create a seamless infinite loop
  const loopItems = [...newsItems, ...newsItems];

  return (
    <section className="relative w-full py-24 md:py-32 bg-klyth-charcoal z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        
        {/* Background Lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Right Visual Side - Desktop Vertical Loop */}
          <div className="hidden md:flex relative w-full h-[500px] overflow-hidden rounded-3xl bg-[#0F0F11] border border-white/5 shadow-inner p-4 mask-image-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] order-1 md:order-2"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              animate={{ y: isHovered ? "var(--current-y, -25%)" : ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: isHovered ? 0 : Infinity, 
                ease: "linear" 
              }}
              // CSS variable strategy for pausing: Framer Motion can pause animations in newer versions, 
              // but an easy way is just using an empty animation when hovered if we don't care about exact snap.
              // We'll just use simple state. For a true pause, CSS animations are sometimes easier.
              // We'll use CSS for the vertical loop to allow easy pause on hover.
              className="flex flex-col gap-4 absolute top-0 w-[calc(100%-32px)] mt-4 animate-vertical-loop hover:pause"
              style={{ animationPlayState: isHovered ? "paused" : "running" }}
            >
              {loopItems.map((item, i) => (
                <div 
                  key={i} 
                  className="w-full bg-white/[0.02] border border-white/5 p-6 rounded-xl flex flex-col transition-colors duration-500 hover:bg-white/[0.05]"
                >
                   <span className="font-sans text-[10px] tracking-[0.2em] text-klyth-gold/60 font-medium mb-3 uppercase">{item.date}</span>
                   <h4 className="font-serif text-xl text-klyth-cream/90">{item.title}</h4>
                   <div className="mt-5 w-full h-[1px] bg-white/5 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-klyth-olive/50" />
                   </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Real-Time Clarity
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 7: Bite-Sized Financial Intelligence
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 text-klyth-cream leading-tight">
              Macro Insights Built <br className="hidden lg:block" /> <span className="italic font-light text-klyth-cream/80">for the Youth.</span>
            </h2>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light mb-8">
              Traditional financial news is dense, intimidating, and intentionally inaccessible. We strip away the jargon. Klyth translates complex macroeconomic events—like massive market trends, taxation shifts, and national budget announcements—into crisp, highly relevant content delivered straight to your inbox through our exclusive email newsletter. We deliver pure, actionable intelligence focused on one thing: exactly how the broader economy impacts your personal wallet today.
            </p>
          </div>

          {/* Left Visual Side - Mobile Horizontal Loop */}
          <div className="md:hidden relative w-full h-[180px] overflow-hidden rounded-2xl bg-[#0F0F11] border border-white/5 shadow-inner p-4 mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] order-2"
               onTouchStart={() => setIsHovered(true)}
               onTouchEnd={() => setIsHovered(false)}
          >
            <div 
              className="flex gap-4 absolute left-0 h-[calc(100%-32px)] ml-4 animate-horizontal-loop hover:pause"
              style={{ animationPlayState: isHovered ? "paused" : "running" }}
            >
              {loopItems.map((item, i) => (
                <div 
                  key={`mob-${i}`} 
                  className="w-[240px] shrink-0 bg-white/[0.02] border border-white/5 p-5 rounded-xl flex flex-col justify-center transition-colors duration-500 hover:bg-white/[0.05]"
                >
                   <span className="font-sans text-[9px] tracking-[0.2em] text-klyth-gold/60 font-medium mb-2 uppercase">{item.date}</span>
                   <h4 className="font-serif text-lg text-klyth-cream/90 truncate">{item.title}</h4>
                   <div className="mt-4 w-full h-[1px] bg-white/5 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-klyth-olive/50" />
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vertical-loop {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-loop {
          animation: vertical-loop 20s linear infinite;
        }
        
        @keyframes horizontal-loop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-horizontal-loop {
          animation: horizontal-loop 20s linear infinite;
        }
      `}} />
    </section>
  );
}
