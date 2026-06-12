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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad formula for premium deceleration
      const easeProgress = progress * (2 - progress);
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
    <span ref={ref} className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-color-klyth-cream select-text">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default function SocialProof() {
  const marqueeItems = [
    "Stop Surviving. Start Scaling.",
    "The Money Taboo is Broken.",
    "Financial Growth, Rewired."
  ];
  
  // Combine items with spacer symbol and duplicate for infinite seamless loop
  const marqueeString = marqueeItems.join("  •  ") + "  •  ";
  const marqueeDouble = [marqueeString, marqueeString, marqueeString, marqueeString];

  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 overflow-hidden select-none border-t border-color-klyth-ghost/30">
      
      {/* Decorative background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[20vw] rounded-full bg-color-klyth-olive/5 blur-[150px]" />
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 w-full text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col gap-4 p-8 klyth-glass rounded-[28px] border border-color-klyth-ghost/40 hover:border-color-klyth-olive/30 transition-colors duration-500">
            <StatCounter value={12500} suffix="+" />
            <span className="font-sans font-medium text-sm sm:text-base text-color-klyth-cream/70 uppercase tracking-widest">
              Waitlisted for the Ecosystem
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-4 p-8 klyth-glass rounded-[28px] border border-color-klyth-ghost/40 hover:border-color-klyth-olive/30 transition-colors duration-500">
            <StatCounter value={500} suffix="+" />
            <span className="font-sans font-medium text-sm sm:text-base text-color-klyth-cream/70 uppercase tracking-widest">
              Hours of Live Expert Mentorship Delivered
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-4 p-8 klyth-glass rounded-[28px] border border-color-klyth-ghost/40 hover:border-color-klyth-olive/30 transition-colors duration-500">
            <StatCounter value={100} suffix="%" />
            <span className="font-sans font-medium text-sm sm:text-base text-color-klyth-cream/70 uppercase tracking-widest">
              Focus on Personalized Execution (Zero BS)
            </span>
          </div>

        </div>
      </div>

      {/* Infinite Looping Marquee */}
      <div className="relative mt-24 py-6 border-y border-color-klyth-ghost/20 bg-color-klyth-charcoal/50 w-full overflow-hidden flex z-10 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear"
            }
          }}
          className="flex whitespace-nowrap gap-8 text-color-klyth-cream/15 text-2xl sm:text-3xl lg:text-4xl font-sans font-bold uppercase tracking-widest leading-none select-none min-w-max"
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
