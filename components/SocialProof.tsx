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
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
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
    <span ref={ref} className="font-serif font-bold text-7xl sm:text-8xl lg:text-[7vw] tracking-tighter text-klyth-cream select-text leading-none block">
      {formatNumber(count)}
      <span className="text-klyth-gold font-sans ml-1 text-3xl sm:text-4xl lg:text-[3vw] align-top">{suffix}</span>
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
  
  const marqueeString = marqueeItems.join("   ✦   ") + "   ✦   ";
  const marqueeDouble = [marqueeString, marqueeString, marqueeString, marqueeString];

  return (
    <section className="relative w-full bg-transparent text-klyth-cream py-24 sm:py-36 overflow-hidden select-none">
      {/* Decorative background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] rounded-full bg-klyth-olive/3 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-24 sm:gap-32">
        {/* Header Block */}
        <div className="flex flex-col gap-5 text-left max-w-3xl select-text">
          <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-klyth-olive">
            The Community Momentum
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-klyth-cream leading-tight">
            A generation ready to <span className="text-klyth-gold italic">grow differently.</span>
          </h2>
        </div>

        {/* Stats Layout (Editorial Columnar Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 w-full relative z-10">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col gap-6 items-center lg:items-start justify-center lg:justify-start text-center lg:text-left select-text"
          >
            <StatCounter value={2500} suffix="+" />
            <div className="w-12 h-[1px] bg-klyth-gold/45 mx-auto lg:mx-0" />
            <span className="font-sans font-semibold text-xs sm:text-sm text-klyth-cream/60 uppercase tracking-[0.22em] max-w-[280px] leading-relaxed">
              Waitlisted for the <span className="text-klyth-gold/50">Ecosystem</span>
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
            className="flex flex-col gap-6 items-center lg:items-start justify-center lg:justify-start text-center lg:text-left select-text"
          >
            <StatCounter value={30} suffix="+" />
            <div className="w-12 h-[1px] bg-klyth-olive/45 mx-auto lg:mx-0" />
            <span className="font-sans font-semibold text-xs sm:text-sm text-klyth-cream/60 uppercase tracking-[0.22em] max-w-[280px] leading-relaxed">
              Hours of <span className="text-klyth-gold/50">Live Expert Mentorship</span> Delivered
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
            className="flex flex-col gap-6 items-center lg:items-start justify-center lg:justify-start text-center lg:text-left select-text"
          >
            <StatCounter value={100} suffix="%" />
            <div className="w-12 h-[1px] bg-klyth-gold/45 mx-auto lg:mx-0" />
            <span className="font-sans font-semibold text-xs sm:text-sm text-klyth-cream/60 uppercase tracking-[0.22em] max-w-[280px] leading-relaxed">
              Focus on <span className="text-klyth-gold/50">Personalized Execution</span> (Zero BS)
            </span>
          </motion.div>
        </div>
      </div>

      {/* Infinite Looping Editorial Ribbon */}
      <div
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
        className="relative mt-28 py-8 border-y border-klyth-ghost/15 w-full overflow-hidden flex z-10 pointer-events-auto cursor-default transition-colors duration-500 hover:border-klyth-ghost/35"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isMarqueeHovered ? 120 : 35,
              ease: "linear"
            }
          }}
          style={{ willChange: "transform" }}
          className={`flex whitespace-nowrap gap-8 font-serif italic tracking-wider leading-none select-none min-w-max transition-all duration-700 ${
            isMarqueeHovered
              ? "text-klyth-gold/35 text-3xl sm:text-4xl lg:text-5xl"
              : "text-klyth-cream/10 text-2xl sm:text-3xl lg:text-4xl"
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
