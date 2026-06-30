"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemPillar6() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 6 : 12; // Extremely restrained for premium feel
      setBubbles(
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          delay: Math.random() * 10
        }))
      );
    }
  }, []);

  return (
    <section className="relative w-full py-48 px-6 bg-klyth-charcoal z-10 overflow-hidden flex items-center justify-center">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-auto overflow-hidden">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.05, 0.2, 0.05],
              scale: 1,
              x: [`${b.x}vw`, `${b.x + (Math.random() * 6 - 3)}vw`, `${b.x}vw`],
              y: [`${b.y}vh`, `${b.y + (Math.random() * 6 - 3)}vh`, `${b.y}vh`]
            }}
            transition={{ duration: 25 + Math.random() * 20, repeat: Infinity, delay: b.delay, ease: "linear" }}
            whileHover={{ scale: 1.1, opacity: 0.5, borderColor: "rgba(255,255,255,0.2)" }} 
            className="absolute w-14 h-14 rounded-full klyth-glass flex items-center justify-center cursor-default transition-all duration-1000 ease-out"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
          >
             <div className="w-1.5 h-1.5 rounded-full bg-klyth-cream/20"></div>
          </motion.div>
        ))}
      </div>

      {/* Content Block */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="max-w-3xl w-full flex flex-col items-center text-center relative z-10 pointer-events-none"
      >
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          Peer Accountability
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-klyth-cream leading-tight">
          Breaking the Money Taboo, <br /><span className="italic text-klyth-cream/90">Together.</span>
        </h2>
        <span className="font-sans text-klyth-gold/80 text-[11px] uppercase tracking-widest font-medium mb-10 px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
          Currently in beta
        </span>
        <p className="font-sans text-klyth-cream/50 text-lg md:text-xl leading-relaxed font-light">
          Wealth grows best when knowledge is shared openly. Beyond our core digital platform, we provide a moderated, highly active peer-to-peer ecosystem where young Indians can safely discuss personal finance. Through dedicated forums and real-time channels, users can celebrate milestones, ask "stupid" questions without fear of judgment, and learn directly from the real-world financial journeys and mistakes of their peers. You are never navigating this alone.
        </p>
      </motion.div>
      
    </section>
  );
}