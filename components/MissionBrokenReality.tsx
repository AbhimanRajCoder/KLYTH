"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  gaveUs: string;
  needed: string;
  index: number;
}

const FlipCard = ({ gaveUs, needed, index }: FlipCardProps) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="flex flex-col gap-4 klyth-glass rounded-[28px] p-6 sm:p-8 border border-color-klyth-ghost"
      >
        <div className="flex items-center gap-2 text-color-klyth-cream/40">
          <div className="line-through text-sm sm:text-base font-sans">{gaveUs}</div>
        </div>
        <div className="p-4 sm:p-5 bg-color-klyth-olive/10 rounded-xl border border-color-klyth-olive/30">
          <div className="text-base sm:text-lg font-semibold text-color-klyth-cream">{needed}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="w-full h-64 sm:h-72 perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        whileHover={{ rotateY: 180 }}
        whileTap={{ rotateY: 180 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <div
          className="absolute inset-0 backface-hidden klyth-glass rounded-[28px] p-6 sm:p-8 flex items-center justify-center border border-color-klyth-ghost"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-color-klyth-gold">
              They gave us
            </span>
            <p className="mt-3 text-lg sm:text-xl font-sans text-color-klyth-cream">{gaveUs}</p>
          </div>
        </div>
        {/* Back side */}
        <div
          className="absolute inset-0 backface-hidden klyth-glass rounded-[28px] p-6 sm:p-8 flex items-center justify-center border border-color-klyth-olive/40"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-color-klyth-olive">
              We actually needed
            </span>
            <p className="mt-3 text-lg sm:text-xl font-sans text-color-klyth-cream">{needed}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function MissionBrokenReality() {
  const cards = [
    {
      gaveUs: "Generic textbooks and courses",
      needed: "Hyper-personalized roadmaps",
    },
    {
      gaveUs: "Hype-driven Finfluencers",
      needed: "Grounded, actionable systems",
    },
    {
      gaveUs: "Isolated AI Chatbots",
      needed: "Structure and community",
    },
  ];

  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-xs tracking-widest uppercase text-color-klyth-gold"
          >
            The Reality Check
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight"
          >
            The internet is full of financial advice. And it is completely broken.
          </motion.h2>
        </div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {cards.map((card, idx) => (
            <FlipCard
              key={idx}
              gaveUs={card.gaveUs}
              needed={card.needed}
              index={idx}
            />
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-color-klyth-cream leading-tight">
            "We are drowning in information, but starving for systems."
          </p>
        </motion.div>
      </div>
    </section>
  );
}