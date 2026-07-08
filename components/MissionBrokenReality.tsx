"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  gaveUs: string;
  needed: string;
  index: number;
  iconGave: React.ReactNode;
  iconNeeded: React.ReactNode;
}

const FlipCard = ({ gaveUs, needed, index, iconGave, iconNeeded }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // Spotlight is driven by plain React state (CSS background-position only).
  // It never touches a transform, so it can never interfere with the flip.
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  return (
    // OUTER: layout box only. Fixed size, no transforms here except the
    // entrance fade/slide, which happens BEFORE any hover interaction and
    // never runs concurrently with the flip.
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-48 select-none"
    >
      {/* PERSPECTIVE WRAPPER: establishes the 3D space. Fixed size,
          never moves, never rotates. This is what stops the card from
          "jumping" — the perspective origin is locked to this box. */}
      <div
        className="relative w-full h-full cursor-pointer group"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* FLIP WRAPPER: the ONLY element that rotates. Front and back
            are permanently stacked inside it via position:absolute/inset-0,
            so they are always in the same place — rotation just reveals
            whichever face is currently pointed at the viewer. */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* FRONT FACE */}
          <div
            className="absolute inset-0 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              background: "linear-gradient(135deg, rgba(28, 28, 30, 0.45) 0%, rgba(18, 18, 20, 0.7) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 12px 40px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{
                background: `radial-gradient(300px circle at ${spotlight.x}% ${spotlight.y}%, rgba(245,242,235,0.03), transparent)`,
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
                <span>Hover to reveal</span>
              </div>
            </div>
          </div>

          {/* BACK FACE — pre-rotated 180deg so that once the wrapper hits
              180deg, this face is right-side-up and front-facing. It sits
              in the exact same inset-0 box as the front face at all times. */}
          <div
            className="absolute inset-0 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, rgba(28, 28, 30, 0.45) 0%, rgba(74, 93, 35, 0.15) 100%)",
              border: "1px solid rgba(74, 93, 35, 0.3)",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 12px 40px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{
                background: `radial-gradient(300px circle at ${spotlight.x}% ${spotlight.y}%, rgba(74,93,35,0.1), transparent)`,
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
      </div>
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
            <span className="text-klyth-gold italic">financial advice</span>. And it is{" "}
            <span className="text-klyth-cream font-bold">completely broken</span>.
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
            "
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-klyth-cream/80 leading-tight">
            We are drowning in information, but starving for systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}