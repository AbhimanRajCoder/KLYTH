"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface FlipCardProps {
  gaveUs: string;
  needed: string;
  index: number;
  iconGave: React.ReactNode;
  iconNeeded: React.ReactNode;
}

const FlipCard = ({ gaveUs, needed, index, iconGave, iconNeeded }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 150 });
  
  const spotlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), { damping: 30, stiffness: 200 });
  const spotlightY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="w-full h-72 cursor-pointer relative select-none group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full h-full relative"
      >
        {/* FRONT CARD */}
        <div
          className="absolute inset-0 backface-hidden klyth-glass rounded-[24px] p-6 sm:p-8 flex flex-col justify-between border border-klyth-ghost overflow-hidden bg-klyth-obsidian/20"
          style={{
            backfaceVisibility: "hidden",
            transform: "translateZ(0px)",
          }}
        >
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              background: `radial-gradient(300px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(245,242,235,0.03), transparent)`,
            }}
          />

          <div className="relative z-10 flex justify-between items-start">
            <span className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-klyth-cream/40">
              They gave us
            </span>
            <div className="text-klyth-cream/35 bg-klyth-ghost/30 p-2 rounded-xl border border-white/5">
              {iconGave}
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-lg sm:text-xl font-serif text-klyth-cream/80 leading-tight">
              {gaveUs}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-klyth-cream/30 font-sans tracking-wide">
              <span>Click to flip</span>
            </div>
          </div>
        </div>

        {/* BACK CARD */}
        <div
          className="absolute inset-0 backface-hidden klyth-glass rounded-[24px] p-6 sm:p-8 flex flex-col justify-between border border-klyth-olive/30 overflow-hidden bg-gradient-to-br from-klyth-obsidian to-klyth-olive/5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
          }}
        >
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              background: `radial-gradient(300px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(74,93,35,0.1), transparent)`,
            }}
          />

          <div className="relative z-10 flex justify-between items-start">
            <span className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-klyth-olive/80">
              We actually needed
            </span>
            <div className="text-klyth-olive bg-klyth-olive/10 p-2 rounded-xl border border-klyth-olive/20">
              {iconNeeded}
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-lg sm:text-xl font-serif font-bold text-klyth-cream leading-tight">
              {needed}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-klyth-olive/60 font-sans tracking-wide">
              <span>System active</span>
            </div>
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
      iconGave: <i className="fa-solid fa-book text-sm" />,
      iconNeeded: <i className="fa-solid fa-compass text-sm" />,
    },
    {
      gaveUs: "Hype-driven Finfluencers",
      needed: "Grounded, actionable systems",
      iconGave: <i className="fa-solid fa-square-rss text-sm" />,
      iconNeeded: <i className="fa-solid fa-gears text-sm" />,
    },
    {
      gaveUs: "Isolated AI Chatbots",
      needed: "Structure and community",
      iconGave: <i className="fa-solid fa-robot text-sm" />,
      iconNeeded: <i className="fa-solid fa-users-viewfinder text-sm" />,
    },
  ];

  return (
    <section className="relative w-full bg-klyth-charcoal text-klyth-cream py-16 sm:py-24 px-6 sm:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 right-1/4 w-[400px] h-[400px] rounded-full bg-klyth-gold/[0.01] blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-klyth-ghost/30 rounded-full border border-white/5 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-klyth-gold/60" />
            <span className="font-sans font-semibold text-[10px] tracking-[0.25em] uppercase text-klyth-cream/50">
              The Reality Check
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-klyth-cream"
          >
            The internet is full of{" "}
            <span className="text-klyth-gold italic">
              financial advice
            </span>
            . And it is{" "}
            <span className="text-klyth-cream font-bold">
              completely broken
            </span>
            .
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => (
            <FlipCard
              key={idx}
              gaveUs={card.gaveUs}
              needed={card.needed}
              index={idx}
              iconGave={card.iconGave}
              iconNeeded={card.iconNeeded}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center relative max-w-3xl mx-auto py-8 border-y border-klyth-ghost/20"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-2.5 px-3 bg-klyth-charcoal text-klyth-gold/50 font-serif italic text-2xl">
            “
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-klyth-cream/80 leading-tight">
            We are drowning in information, but starving for systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}