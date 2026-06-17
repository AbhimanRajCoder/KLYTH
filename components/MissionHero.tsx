"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionHero() {
  const headline = "The system taught us how to work for money, but not how money works.";
  const words = headline.split(" ");

  return (
    <section className="relative w-full min-h-screen flex items-end bg-color-klyth-charcoal px-6 sm:px-12 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-color-klyth-olive/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            className="overflow-hidden"
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-color-klyth-cream leading-tight"
                  variants={{
                    hidden: { y: "100%" },
                    visible: {
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: idx * 0.06,
                        ease: [0.215, 0.61, 0.355, 1],
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="mt-8 text-lg sm:text-xl md:text-2xl text-color-klyth-cream/70 font-sans max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
          >
            We spent two decades preparing for careers, but zero hours preparing for the wealth those careers generate. It's time to rewrite the rules for a generation left to figure it out alone.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <span className="text-xs text-color-klyth-cream/40 font-sans tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-12 bg-color-klyth-ghost"
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{
              delay: 2,
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}