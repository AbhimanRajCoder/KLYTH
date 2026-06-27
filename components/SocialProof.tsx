"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix: string;
}

const StatCounter = ({ value, suffix }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2500; // 2.5 seconds animation for luxurious feel
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Premium Ease Out Expo formula for elegant deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={ref} className="font-serif font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-color-klyth-cream select-text leading-none">
      {formatNumber(count)}
      <span className="text-color-klyth-gold font-sans ml-1 text-4xl sm:text-5xl lg:text-6xl align-top">{suffix}</span>
    </span>
  );
};

export default function SocialProof() {
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const marqueeItems = [
    "Stop Surviving. Start Scaling.",
    "The Money Taboo is Broken.",
    "Financial Growth, Rewired."
  ];
  
  // Combine items with spacer star and duplicate for seamless looping
  const marqueeString = marqueeItems.join("   ✦   ") + "   ✦   ";
  const marqueeDouble = [marqueeString, marqueeString, marqueeString, marqueeString];

  return (
    <section className="relative w-full bg-transparent text-color-klyth-cream py-24 sm:py-32 overflow-hidden select-none">
      
      {/* Decorative background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[20vw] rounded-full bg-color-klyth-olive/4 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col gap-20 sm:gap-24">
        {/* Header Block */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-color-klyth-gold">
            The Community Momentum
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-color-klyth-cream leading-tight select-text">
            A generation ready to grow differently.
          </h2>
        </div>

        {/* Stats Grid (Editorial Layout) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-16 md:gap-0 w-full relative z-10">
          
          {/* Stat 1 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center md:px-6">
            <StatCounter value={12500} suffix="+" />
            <span className="font-sans font-semibold text-xs sm:text-sm text-color-klyth-cream/60 uppercase tracking-[0.22em] max-w-[220px] leading-relaxed">
              Waitlisted for the Ecosystem
            </span>
          </div>

          {/* Divider (Mobile vs Desktop) */}
          <div className="block md:hidden w-1/4 h-[1px] bg-gradient-to-r from-transparent via-color-klyth-ghost/40 to-transparent mx-auto" />
          <div className="hidden md:block w-[1px] h-28 bg-gradient-to-b from-transparent via-color-klyth-ghost/40 to-transparent" />

          {/* Stat 2 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center md:px-6">
            <StatCounter value={500} suffix="+" />
            <span className="font-sans font-semibold text-xs sm:text-sm text-color-klyth-cream/60 uppercase tracking-[0.22em] max-w-[220px] leading-relaxed">
              Hours of Live Expert Mentorship Delivered
            </span>
          </div>

          {/* Divider (Mobile vs Desktop) */}
          <div className="block md:hidden w-1/4 h-[1px] bg-gradient-to-r from-transparent via-color-klyth-ghost/40 to-transparent mx-auto" />
          <div className="hidden md:block w-[1px] h-28 bg-gradient-to-b from-transparent via-color-klyth-ghost/40 to-transparent" />

          {/* Stat 3 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center md:px-6">
            <StatCounter value={100} suffix="%" />
            <span className="font-sans font-semibold text-xs sm:text-sm text-color-klyth-cream/60 uppercase tracking-[0.22em] max-w-[220px] leading-relaxed">
              Focus on Personalized Execution (Zero BS)
            </span>
          </div>

        </div>
      </div>

      {/* Infinite Looping Marquee */}
      <div
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
        className="relative mt-24 py-6 border-y border-color-klyth-ghost/15 bg-color-klyth-charcoal/30 w-full overflow-hidden flex z-10 pointer-events-auto cursor-default group"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isMarqueeHovered ? 160 : 40,
              ease: "linear"
            }
          }}
          style={{ willChange: "transform" }}
          className={`flex whitespace-nowrap gap-8 font-serif italic tracking-wider leading-none select-none min-w-max transition-all duration-700 ${
            isMarqueeHovered
              ? "text-color-klyth-gold/45 drop-shadow-[0_0_15px_rgba(226,184,66,0.25)] text-3xl sm:text-4xl lg:text-5xl"
              : "text-color-klyth-cream/8 text-2xl sm:text-3xl lg:text-4xl"
          }`}
        >
          {marqueeDouble.map((text, idx) => (
            <span key={idx} className="mr-8">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
