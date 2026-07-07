"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Pillar6Community() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bubbles = [
    { top: "10%", left: "15%", size: "w-12 h-12", delay: 0 },
    { top: "25%", left: "70%", size: "w-16 h-16", delay: 1 },
    { top: "60%", left: "10%", size: "w-10 h-10", delay: 2 },
    { top: "75%", left: "65%", size: "w-14 h-14", delay: 1.5 },
    { top: "40%", left: "30%", size: "w-8 h-8", delay: 0.5 },
  ];

  return (
    <section 
      className="relative w-full py-24 md:py-32 bg-klyth-charcoal z-10"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        
        {/* Soft Depth Lighting */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          
          {/* Left Visual Side - Abstract Community Bubbles */}
          <div className="relative w-full flex items-center justify-center order-1 md:order-1 h-[400px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[85%] sm:w-full max-w-sm aspect-[1/1] klyth-glass rounded-full border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl flex items-center justify-center overflow-hidden"
            >
              {bubbles.map((bubble, i) => {
                if (isMobile && i > 3) return null;
                
                return (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${bubble.size} ${isMobile ? 'pointer-events-none' : 'pointer-events-auto'}`}
                    style={{ top: bubble.top, left: bubble.left }}
                    animate={{
                      y: [0, -15, 10, 0],
                      x: [0, 10, -5, 0],
                      rotate: [0, 10, -5, 0]
                    }}
                    transition={{
                      duration: 8 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bubble.delay
                    }}
                    whileHover={!isMobile ? { 
                      scale: 1.2, 
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(255,255,255,0.4)",
                      transition: { duration: 0.3 }
                    } : {}}
                  >
                    <div className="w-1/3 h-1/3 rounded-full bg-klyth-cream/30" />
                  </motion.div>
                );
              })}
              
              <div className="absolute inset-0 bg-gradient-to-t from-klyth-charcoal/80 to-transparent pointer-events-none rounded-full" />
            </motion.div>
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-2">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Peer Accountability
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 6: The Community Ecosystem
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
              Breaking the Money <br className="hidden lg:block" /> <span className="italic font-light text-klyth-cream/80">Taboo, Together.</span>
            </h2>
            <div className="mb-4 md:mb-8">
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
                Currently in beta
              </span>
            </div>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light mb-8">
              Wealth grows best when knowledge is shared openly. Beyond our core digital platform, we provide a moderated, highly active peer-to-peer ecosystem where young Indians can safely discuss personal finance. Through dedicated forums and real-time channels, users can celebrate milestones, ask "stupid" questions without fear of judgment, and learn directly from the real-world financial journeys and mistakes of their peers. You are never navigating this alone.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
