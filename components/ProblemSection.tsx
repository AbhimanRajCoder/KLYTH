"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface ProblemItemProps {
  number: string;
  title: string;
  body: string;
}

const ProblemItem = ({ number, title, body }: ProblemItemProps) => {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-col gap-8 py-12 border-t border-klyth-ghost/20 relative"
    >
      {/* Animated separator line */}
      <motion.div
        variants={lineVariants}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-klyth-olive/40 via-klyth-ghost/20 to-transparent"
      />

      <motion.div variants={contentVariants} className="flex flex-col gap-5 select-text">
        <div className="flex items-center gap-3">
          <span className="bg-klyth-olive/15 border border-klyth-olive/35 text-klyth-olive font-sans font-semibold text-[10px] tracking-[0.25em] px-2.5 py-1 rounded uppercase">
            CHAPTER 0{number}
          </span>
        </div>
        <h3 className="font-serif font-bold text-3xl sm:text-4xl text-klyth-cream leading-tight tracking-tight max-w-xl">
          {title}
        </h3>
        <p className="font-sans font-normal text-base sm:text-lg text-klyth-cream/70 leading-relaxed max-w-xl">
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function ProblemSection() {
  const leftColumnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 },
    },
  };

  const cards = [
    {
      number: "1",
      title: "The \"One-Size-Fits-All\" Trap",
      body: "YouTube channels, textbook lessons, and standard online courses offer flat, generic blueprints. They assume every student has the same capital, background, and goals. The result? Zero personalization and absolute engagement failure.",
    },
    {
      number: "2",
      title: "The AI Chatbot Illusion",
      body: "Modern AI chatbots deliver endless lists of generic textbook facts. But listicle definitions don't equate to structure, a reliable roadmap, or genuine progress. You don't need more raw data—you need execution.",
    },
    {
      number: "3",
      title: "The Finfluencer Echo Chamber",
      body: "Viral social content is optimized for clicks, sensations, and affiliate sign-ups, not for the long-term health of your portfolio. Following hype-driven trends leaves you reacting to noise rather than building systems.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent text-klyth-cream py-24 sm:py-36 px-6 sm:px-12 lg:px-20 select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-klyth-olive/3 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column - Sticky content */}
        <div className="flex flex-col justify-start lg:sticky lg:top-28 lg:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={leftColumnVariants}
            className="flex flex-col gap-6 max-w-xl select-text"
          >
            <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-klyth-gold">
              The Status Quo
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-klyth-cream">
              We were taught <span className="text-klyth-cream/50 italic font-medium">complex formulas</span>, but left blind to our own <span className="text-klyth-gold italic">financial reality.</span>
            </h2>
            <div className="flex flex-col gap-6 mt-6 font-sans text-klyth-cream/70 text-lg leading-relaxed">
              <p>
                You spent years in classrooms memorizing equations that had no relevance to your life, and were then expected to make life-altering financial decisions completely in the dark.
              </p>
              <p>
                But the deepest flaw isn't just the lack of education—it is the lack of context. Most financial advisors and platforms speak a dialect from a bygone era.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Scrolling Minimal Editorial Chapters */}
        <div className="flex flex-col lg:pt-12">
          {cards.map((card, idx) => (
            <ProblemItem
              key={idx}
              number={card.number}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </div>

      {/* Full Width Centered Quote */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-24 sm:mt-32 pt-12 flex justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold select-text relative"
        >
          <span className="text-klyth-gold font-serif italic pr-1 sm:pr-2 opacity-50">"</span>
          <span className="text-klyth-cream font-serif tracking-wide italic">
            Personal finance is <span className="text-klyth-gold font-medium">deeply personal</span>.
          </span>
          <span className="text-klyth-gold font-serif italic pl-1 sm:pl-2 opacity-50">"</span>

          {/* Underline mask animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0.5 }}
            className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-klyth-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
