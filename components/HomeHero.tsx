"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator";
import LivingGrid from "./LivingGrid";

// Interactive Cards Component
const NavCard = ({ title, subtitle, delay, href }: { title: string, subtitle: string, delay: number, href: string }) => {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group relative flex flex-col items-start justify-between p-5 md:p-6 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 w-full aspect-[2/1] sm:aspect-auto sm:h-36 overflow-hidden shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-klyth-cream/50 group-hover:text-klyth-gold transition-colors duration-300 z-10">
          {title}
        </span>
        <div className="flex items-center justify-between w-full mt-2 z-10">
          <span className="font-serif text-lg md:text-xl text-klyth-cream">{subtitle}</span>
          <i className="fa-solid fa-arrow-right text-xs md:text-sm text-klyth-cream/50 group-hover:text-klyth-cream group-hover:-rotate-45 transition-all duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};

export default function HomeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headlineParts = [
    { text: "Financial Growth", color: "text-klyth-cream font-serif font-medium tracking-tight" },
    { text: "Rewired.", color: "text-transparent bg-clip-text bg-gradient-to-br from-klyth-gold to-[#f9e9c9] font-serif font-bold italic pr-2" },
  ];

  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center items-center bg-[#0a0a0a] text-klyth-cream overflow-hidden px-6 pt-32 pb-12 select-none">
      
      {/* Editorial Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Living Interactive Grid replacing static grid and spotlight */}
        <LivingGrid />





        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
        />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center flex-grow gap-10 md:gap-14 mt-4 sm:mt-8 pointer-events-none">
        
        {/* Oversized Logo Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[140px] sm:max-w-[200px] md:max-w-[260px]"
        >
          <div className="relative aspect-[10526/5000] w-full drop-shadow-2xl">
            <Image 
              src="/img/Primary Logo.svg"
              alt="Klyth Master Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-center text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-[1.1] tracking-tight">
          {headlineParts.map((part, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-[0.25em] last:mr-0 ${part.color}`}
            >
              {part.text}
            </motion.span>
          ))}
        </h1>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-sans font-light text-base md:text-lg lg:text-xl text-klyth-cream/60 max-w-2xl px-4 leading-relaxed"
        >
        Empowering a generation to grow financially with confidence. No boring lectures, no financial anxiety just intuitive systems, daily habits, and a community that moves forward together.</motion.p>

        {/* Dual CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0 pointer-events-auto"
        >
          {/* Primary Gold Button */}
          <Link 
            href="/join" 
            className="group relative flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-4 bg-klyth-gold text-[#090909] font-sans font-semibold text-sm uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(207,175,99,0.4)] transition-all duration-300 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10">Start Growing</span>
            <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-transform duration-1000 group-hover:translate-x-[260%]" />
            </span>
          </Link>

          {/* Secondary Glass Button */}
          <Link 
            href="/ecosystem" 
            className="group flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-4 bg-white/[0.03] backdrop-blur-md text-klyth-cream font-sans font-medium text-sm uppercase tracking-widest rounded-full border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
          >
            <span>Inside the Ecosystem</span>
          </Link>
        </motion.div>

      </div>
      <div className="relative z-10 w-full mt-8 sm:mt-12 flex justify-center pb-4">
        <ScrollIndicator align="center" delay={1.5} />
      </div>

    </section>
  );
}
