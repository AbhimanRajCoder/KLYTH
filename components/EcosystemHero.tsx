"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  id: number;
}

export default function EcosystemHero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Generate particles
    const count = isMobile ? 20 : 40;
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        id: i,
      });
    }
    setParticles(newParticles);

    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-color-klyth-charcoal text-color-klyth-cream px-6 sm:px-12 overflow-hidden">
      {/* Background particle mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" style={{ position: "absolute", top: 0, left: 0 }}>
          {particles.map((p1) =>
            particles.map((p2) => {
              if (p1.id === p2.id) return null;
              const distance = Math.sqrt(
                Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
              );
              if (distance > 25) return null;
              return (
                <motion.line
                  key={`line-${p1.id}-${p2.id}`}
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke="rgba(74,93,35,0.2)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />
              );
            })
          )}
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size}
              fill="rgba(226,184,66,0.4)"
              animate={{
                cx: [
                  `${particle.x}%`,
                  `${particle.x + (Math.random() - 0.5) * 10}%`,
                  `${particle.x}%`,
                ],
                cy: [
                  `${particle.y}%`,
                  `${particle.y + (Math.random() - 0.5) * 10}%`,
                  `${particle.y}%`,
                ],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-color-klyth-olive/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
        >
          Financial Growth, Rewired. Inside the Ecosystem.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-color-klyth-cream/70 font-sans max-w-3xl mx-auto"
        >
          We are not building just another course you will buy and abandon. We are building a comprehensive cultural layer—fusing behavioral technology, real-world action, and peer accountability to make financial growth a daily, automatic habit.
        </motion.p>
      </div>
    </section>
  );
}