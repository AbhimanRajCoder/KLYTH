"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Pillar3Campus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // As the user scrolls through the section, the ripple effect gets slightly larger/more intense
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section 
      className="relative w-full py-24 md:py-32 bg-klyth-charcoal z-10 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Right Visual Side - Ripple Effect */}
          <div className="relative w-full flex items-center justify-center order-1 md:order-2 h-[400px] md:h-[500px]">
            <motion.div 
              style={{ scale, opacity }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Core Seed */}
              <div className="absolute w-4 h-4 bg-klyth-olive rounded-full shadow-[0_0_30px_rgba(74,93,35,1)] z-20" />
              <div className="absolute w-8 h-8 bg-klyth-cream/80 blur-[2px] rounded-full z-10 mix-blend-overlay" />
              
              {/* Expanding Rings */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full border-[1px] border-klyth-olive/40 rounded-full"
                  initial={{ width: 10, height: 10, opacity: 1 }}
                  animate={{ 
                    width: ["0%", "100%"], 
                    height: ["0%", "100%"],
                    opacity: [0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.75
                  }}
                />
              ))}

              {/* Secondary faint rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`sec-${i}`}
                  className="absolute w-full h-full border-[1px] border-klyth-cream/10 rounded-full"
                  initial={{ width: 10, height: 10, opacity: 1 }}
                  animate={{ 
                    width: ["0%", "150%"], 
                    height: ["0%", "150%"],
                    opacity: [0.3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.33
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Left Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Grassroots Growth
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 3: Campus Ambassador Rollouts
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
              Building a Movement <br className="hidden lg:block" /> <span className="italic text-klyth-cream/90">on Your Campus.</span>
            </h2>
            <div className="mb-4 md:mb-8">
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
                Currently in development — Launching soon
              </span>
            </div>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light mb-8">
              Financial literacy should be a staple on every college campus, not a taboo subject hidden away. Through our extensive ambassador program, we empower student leaders to bring the Klyth movement directly to their peers. By establishing localized chapters and driving peer-to-peer advocacy, we are building a decentralized network. We are normalizing financial conversations in cafeterias, dorms, and classrooms, transforming how an entire generation views money.
            </p>
            <div>
              <Link href="/campus" className="klyth-btn klyth-btn-primary">
                Lead a Chapter
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
