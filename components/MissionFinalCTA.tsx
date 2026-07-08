"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MissionFinalCTA() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Magnetic Button Physics
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

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[85vh] min-h-[550px] flex items-center justify-center px-6 bg-black z-10 overflow-hidden select-none"
    >
      {/* Film Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] z-[4]" />

      {/* Ambient Vignette Overlay - Fades to pure black */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_25%,#000000_95%)] z-[3]" />

      {/* Premium Ambient Lighting Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 20, -15, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-klyth-olive/8 blur-[130px] rounded-full"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, -25, 15, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] bg-klyth-gold/6 blur-[120px] rounded-full"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 10, -10, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[45%] -translate-x-1/2 w-[400px] h-[400px] bg-klyth-cream/4 blur-[100px] rounded-full"
        />
      </div>

      {/* Subtle Central Headline Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-klyth-gold/[0.04] blur-[160px] rounded-full pointer-events-none z-[2]" />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="relative max-w-3xl w-full text-center flex flex-col items-center z-[10] select-text"
      >
        <span className="font-sans font-semibold text-xs tracking-[0.25em] uppercase text-klyth-gold/60 mb-4 inline-block">
          The Next Step
        </span>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-klyth-cream mb-6 leading-tight tracking-tight">
          Enough theory. <br className="hidden md:block" />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-klyth-cream italic font-bold">
            build the system
          </span>
          .
        </h2>
        
        <p className="font-sans text-base md:text-lg text-klyth-cream/50 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          We know exactly why the system is broken. Now, step inside and see exactly how we are fixing it.
        </p>

        {/* Minimalist Apple-like Magnetic Button */}
        <div className="inline-block relative">
          <Link href="/ecosystem">
            <motion.button
              ref={buttonRef}
              style={{
                x: smoothMX,
                y: smoothMY,
              }}
              className="relative inline-flex items-center gap-4 px-10 py-5 bg-klyth-olive text-klyth-cream font-sans font-semibold text-base rounded-full border border-klyth-olive/40 overflow-hidden shadow-[0_8px_25px_rgba(74,93,35,0.15)] hover:shadow-[0_15px_40px_rgba(74,93,35,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">See How We&apos;re Rewiring It</span>
              
              <motion.span
                className="relative z-10 inline-block"
                animate={shouldReduceMotion ? {} : {
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-3.5 h-3.5 text-klyth-cream" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}