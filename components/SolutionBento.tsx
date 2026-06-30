"use client";

import React from "react";
import { motion } from "framer-motion";

interface PillarItemProps {
  idx: number;
  title: string;
  tag?: "in-development" | "in-beta";
  description: string;
}

const PillarItem = ({ idx, title, tag, description }: PillarItemProps) => {
  const isEven = idx % 2 === 1;

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const numberColorClass = isEven ? "text-klyth-olive/50" : "text-klyth-gold/45";
  const underlineColorClass = isEven ? "from-klyth-olive/30" : "from-klyth-gold/30";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      className={`relative w-full py-16 sm:py-24 flex flex-col ${
        isEven ? "items-end text-right" : "items-start text-left"
      }`}
    >
      {/* Top rule line separator */}
      <motion.div
        variants={lineVariants}
        style={{ originX: isEven ? 1 : 0 }}
        className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${underlineColorClass} via-klyth-ghost/20 to-transparent`}
      />

      <div className={`max-w-2xl flex flex-col gap-6 select-text ${isEven ? "items-end" : "items-start"}`}>
        {/* Large Chapter Numeral */}
        <span className={`font-serif font-bold text-5xl sm:text-7xl ${numberColorClass} leading-none`}>
          0{idx + 1}
        </span>

        {/* Badges / Status */}
        {tag && (
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-sans font-semibold tracking-[0.15em] uppercase ${
              tag === "in-development"
                ? "border-klyth-gold/30 bg-klyth-gold/5 text-klyth-gold"
                : "border-klyth-olive/45 bg-klyth-olive/5 text-klyth-olive"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span>{tag === "in-development" ? "In Development" : "Beta"}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif font-bold text-3xl sm:text-4xl text-klyth-cream leading-tight tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans font-normal text-base sm:text-lg text-klyth-cream/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function SolutionBento() {
  const pillars = [
    {
      title: "The Klyth App: Your Hyper-Personalized Financial Roadmap",
      tag: "in-development" as const,
      description: "Our flagship interface delivering gamified, behavior-adaptive micro-lessons, habit tracking, and structured financial rewiring tailored entirely to your personal goals.",
    },
    {
      title: "Live Workshops & Events: Connecting You With the Experts",
      description: "Direct virtual and offline networking masterclasses led by SEBI-registered advisors, founders, and domain experts. Zero sales pitches—pure execution.",
    },
    {
      title: "Campus Ambassador Rollouts: A Grassroots Movement",
      tag: "in-development" as const,
      description: "Empowering student leaders to build local, peer-led financial communities and launch Klyth Chapters inside their campuses.",
    },
    {
      title: "Institutional Partnerships: Bridging the Gap",
      description: "Partnering directly with forward-looking universities to integrate experiential financial readiness programs into modern student programs.",
    },
    {
      title: "Action-Oriented Cohort Sprints: From Theory to Execution",
      tag: "in-beta" as const,
      description: "Time-bound, milestone-driven sprints where squads build real portfolios, execute tax setups, and solve financial blueprints alongside active mentors.",
    },
    {
      title: "The Community Ecosystem: Breaking the Money Taboo",
      tag: "in-beta" as const,
      description: "A highly moderated peer network for open, structured conversations about earnings, equity, growth experiments, and wealth frameworks.",
    },
    {
      title: "Bite-Sized Financial Intelligence",
      description: "A weekly briefing translating complex macroeconomic currents, policy, and venture trends into simple, high-signal ideas for youth.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent text-klyth-cream py-24 sm:py-36 px-6 sm:px-12 lg:px-20 select-none">
      {/* Background radial highlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[20%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-klyth-olive/3 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col">
        {/* Header Block */}
        <div className="flex flex-col gap-5 max-w-3xl mb-16 sm:mb-24 select-text">
          <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-klyth-gold">
            The Klyth Way
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-klyth-cream leading-tight">
            Financial growth is not a course. It is a <span className="text-klyth-gold italic">daily habit.</span>
          </h2>
          <p className="font-sans font-normal text-lg sm:text-xl text-klyth-cream/70 mt-2">
            We aren't just teaching finance. We are building the infrastructure for financially intelligent living.
          </p>
        </div>

        {/* Alternating Chapter Stack */}
        <div className="flex flex-col">
          {pillars.map((pillar, idx) => (
            <PillarItem
              key={idx}
              idx={idx}
              title={pillar.title}
              tag={pillar.tag}
              description={pillar.description}
            />
          ))}
          
          {/* Final closing separator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-klyth-ghost/40 via-klyth-ghost/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
