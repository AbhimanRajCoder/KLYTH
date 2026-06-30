"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MissionFinalCTA() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 120, mass: 0.6 };
  const smoothMX = useSpring(mX, springConfig);
  const smoothMY = useSpring(mY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const threshold = 120;
    const distance = Math.hypot(distanceX, distanceY);
    
    if (distance < threshold) {
      mX.set(distanceX * 0.35);
      mY.set(distanceY * 0.35);
    } else {
      mX.set(0);
      mY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mX.set(0);
    mY.set(0);
  };

  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.3,
    }));
    setParticles(generated);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-klyth-charcoal text-klyth-cream py-20 sm:py-28 px-6 sm:px-12 overflow-hidden flex items-center justify-center min-h-[50vh]"
    >
      {/* 1. Cinematic Background & Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-klyth-olive/10 blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-klyth-gold/5 blur-[80px]" />

        {/* Particles */}
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute w-1 h-1 rounded-full bg-klyth-cream/15 pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0, 0.4, 0],
              scale: [p.scale, p.scale * 1.2, p.scale],
            }}
            transition={{
              duration: 8 + p.delay,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* 2. Interactive Climax CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <span className="font-sans font-semibold text-xs tracking-[0.25em] uppercase text-klyth-gold/60 mb-4 inline-block">
          The Next Step
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6 text-klyth-cream">
          Enough theory.<br />Let&apos;s{" "}
          <span className="text-klyth-gold font-bold italic">
            build the system
          </span>
          .
        </h2>
        
        <p className="text-base sm:text-lg text-klyth-cream/70 font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          We know exactly why the system is broken. Now, step inside and see exactly how we are fixing it.
        </p>

        <div className="inline-block relative">
          <Link href="/ecosystem">
            <motion.button
              ref={buttonRef}
              style={{
                x: smoothMX,
                y: smoothMY,
              }}
              className="relative inline-flex items-center gap-4 px-10 py-5 bg-klyth-olive text-klyth-cream font-sans font-semibold text-base rounded-full border border-klyth-olive/40 overflow-hidden shadow-[0_8px_25px_rgba(74,93,35,0.15)] hover:shadow-[0_15px_40px_rgba(74,93,35,0.3)] transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">See How We&apos;re Rewiring It</span>
              
              <motion.span
                className="relative z-10 inline-block"
                animate={{
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fa-solid fa-arrow-right text-sm" />
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}