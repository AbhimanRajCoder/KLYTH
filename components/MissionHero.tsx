"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

export default function MissionHero() {
  const headline = "The system taught us how to work for money, but not how money works.";
  const words = headline.split(" ");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  const fgTranslateX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const fgTranslateY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-klyth-charcoal px-6 sm:px-12 py-16 sm:py-20 overflow-hidden select-none">
      {/* Subtle Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#121212_95%)] z-10" />
        <div 
          className="absolute inset-0 opacity-[0.02] z-[2]" 
          style={{
            backgroundImage: `radial-gradient(var(--klyth-cream) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <motion.div 
          style={{ x: bgTranslateX, y: bgTranslateY }}
          className="absolute inset-0 flex items-center justify-center scale-105 z-[1]"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 0.98, 1],
              x: [0, 20, -10, 0],
              y: [0, -15, 20, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-klyth-olive/10 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 0.97, 1.03, 1],
              x: [0, -20, 10, 0],
              y: [0, 25, -15, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[330px] h-[330px] rounded-full bg-klyth-gold/5 blur-[110px]"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full pt-20 md:pt-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl flex flex-col items-center">
          <motion.div
            style={{ x: fgTranslateX, y: fgTranslateY }}
            className="flex flex-wrap justify-center gap-x-3 gap-y-1 sm:gap-y-2"
          >
            {words.map((word, idx) => {
              const isHighlight = word.toLowerCase().includes("money");
              return (
                <div key={idx} className="py-1 inline-block">
                  <motion.span
                    className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-tight ${
                      isHighlight
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-klyth-cream font-bold italic"
                        : "text-klyth-cream"
                    }`}
                    initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      y: { duration: 0.8, delay: idx * 0.035, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.8, delay: idx * 0.035 },
                      filter: { duration: 0.8, delay: idx * 0.035 }
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              );
            })}
          </motion.div>

          <motion.p
            className="mt-8 text-base sm:text-lg text-klyth-cream/65 font-sans max-w-3xl leading-relaxed font-light text-center px-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We spent two decades preparing for careers, but zero hours preparing for the wealth those careers generate. It&apos;s time to rewrite the rules for a generation left to figure it out alone.
          </motion.p>
        </div>

        <div className="w-full flex justify-center mt-10 md:mt-16">
          <ScrollIndicator align="center" delay={1.2} />
        </div>
      </div>
    </section>
  );
}