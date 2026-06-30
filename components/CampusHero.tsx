"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CampusHero() {
  const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 8 : 20; // Reduced for mobile performance
      setNodes(
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        }))
      );
    }
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[50vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10 bg-klyth-charcoal">
      
      {/* Background Visual: Abstract Node Network */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        {nodes.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 2 - 1)}vw`, `${p.x}vw`],
              y: [`${p.y}vh`, `${p.y + (Math.random() * 2 - 1)}vh`, `${p.y}vh`]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-1.5 h-1.5 bg-klyth-olive rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {nodes.slice(0, 10).map((p, i) => {
            const next = nodes[(i + 1) % 10];
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${p.x}%`}
                y1={`${p.y}%`}
                x2={`${next?.x || 50}%`}
                y2={`${next?.y || 50}%`}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 25 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
              />
            );
          })}
        </svg>
      </div>

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase }}
          className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-8"
        >
          Grassroots Growth
        </motion.span>

        {/* Headline with Rise and Glow Effect */}
        <div className="relative overflow-hidden mb-8 py-2">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="relative font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-klyth-cream"
          >
            Bring Klyth to Your Campus.
            
            {/* Sweeping Highlight */}
            <motion.div 
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 0.3, 0] }}
              transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent mix-blend-overlay pointer-events-none skew-x-[-20deg]"
            />
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: premiumEase }}
          className="font-sans text-lg md:text-xl text-klyth-cream/70 max-w-[60ch] leading-relaxed font-light"
        >
          We are building a decentralized movement to rewire how an entire generation views money. Become the financial catalyst at your university. The Klyth Campus Chapters are almost here.
        </motion.p>
      </motion.div>
    </section>
  );
}
