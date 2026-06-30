"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const premiumEase = [0.16, 1, 0.3, 1]; // Buttery smooth Apple-like bezier curve

export default function EcosystemHero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 12 : 30; // Reduced for premium subtlety
      setParticles(
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        }))
      );
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10 bg-klyth-charcoal">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-klyth-olive/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Background Visual: Subtle Mesh Network */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        {particles.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.3, 0.05],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 4 - 2)}vw`, `${p.x}vw`],
              y: [`${p.y}vh`, `${p.y + (Math.random() * 4 - 2)}vh`, `${p.y}vh`]
            }}
            transition={{ duration: 15 + Math.random() * 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-1 h-1 bg-klyth-cream rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {particles.slice(0, 12).map((p, i) => {
            const next = particles[(i + 1) % 12];
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${p.x}%`}
                y1={`${p.y}%`}
                x2={`${next?.x || 50}%`}
                y2={`${next?.y || 50}%`}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
              />
            );
          })}
        </svg>
      </div>

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.5, ease: premiumEase }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-klyth-cream"
        >
          Financial Growth, Rewired. <br className="hidden md:block" />
          <span className="italic font-normal text-klyth-cream/80">Inside the Ecosystem.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: premiumEase }}
          className="font-sans text-lg md:text-xl text-klyth-cream/50 max-w-3xl leading-relaxed font-light"
        >
          We are not building just another course you will buy and abandon. We are building a comprehensive cultural layer—fusing behavioral technology, real-world action, and peer accountability to make financial growth a daily, automatic habit.
        </motion.p>
      </motion.div>
    </section>
  );
}