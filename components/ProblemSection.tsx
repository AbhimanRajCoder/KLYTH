"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface CardProps {
  number: string;
  title: string;
  body: string;
  isMobile: boolean;
}

const ProblemCard = ({ number, title, body, isMobile }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Scroll tracking for scrubbing effect on desktop
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });

  // Scrubbing transform values: fully active (scale 1, opacity 1) at center center, dimmed at margins
  const desktopOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    [0.3, 1, 1, 0.3]
  );
  
  const desktopScale = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    [0.96, 1, 1, 0.96]
  );

  // Fallback animation for mobile viewport entry
  const mobileVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const content = (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="font-sans font-bold text-xs tracking-widest text-color-klyth-gold uppercase opacity-80">
          Metric 0{number}
        </span>
        <div className="w-8 h-8 rounded-full border border-color-klyth-ghost flex items-center justify-center bg-color-klyth-charcoal/40 text-color-klyth-cream/40 text-xs">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-color-klyth-cream leading-tight">
          {title}
        </h3>
        <p className="font-sans font-regular text-base sm:text-lg text-color-klyth-cream/70 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <motion.div
        ref={cardRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={mobileVariants}
        className="klyth-glass p-8 sm:p-10 rounded-[24px] w-full"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      suppressHydrationWarning
      style={{ opacity: desktopOpacity, scale: desktopScale }}
      className="klyth-glass p-10 sm:p-12 rounded-[32px] w-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-color-klyth-ghost/40 hover:border-color-klyth-olive/40 transition-colors duration-300"
    >
      {content}
    </motion.div>
  );
};

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quoteRef = useRef<HTMLSpanElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });

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
    <section
      ref={containerRef}
      className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 select-none border-t border-color-klyth-ghost/30"
    >
      {/* Dynamic background lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-color-klyth-olive/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Sticky content */}
        <div className="flex flex-col justify-start lg:sticky lg:top-32 lg:h-[calc(100vh-200px)]">
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-color-klyth-gold">
              The Status Quo
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-color-klyth-cream select-text">
              We were taught complex formulas, but left blind to our own financial reality.
            </h2>
            <div className="flex flex-col gap-6 mt-6 font-sans text-color-klyth-cream/70 text-lg leading-relaxed select-text">
              <p>
                You spent years in classrooms memorizing equations that had no relevance to your life, and were then expected to make life-altering financial decisions completely in the dark.
              </p>
              <p>
                But the deepest flaw isn't just the lack of education—it is the lack of context. Most financial advisors and platforms speak a dialect from a bygone era.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Scrolling cards */}
        <div className="flex flex-col gap-12 lg:gap-24 lg:pb-[20vh]">
          {cards.map((card, idx) => (
            <ProblemCard
              key={idx}
              number={card.number}
              title={card.title}
              body={card.body}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Full Width Centered Quote */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-24 lg:mt-32 pt-16 flex justify-center text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold select-text">
          <span ref={quoteRef} className="relative inline-block pb-3 px-4 sm:px-6">
            <span className="text-color-klyth-cream font-serif italic pr-1 sm:pr-2 opacity-70">"</span>
            <motion.span
              animate={quoteInView ? { textShadow: "0px 0px 20px rgba(212,175,55,0.6)" } : { textShadow: "0px 0px 0px rgba(212,175,55,0)" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-color-klyth-cream font-serif tracking-wide"
            >
              Personal finance is deeply personal.
            </motion.span>
            <span className="text-color-klyth-cream font-serif italic pl-1 sm:pl-2 opacity-70">"</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={quoteInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
              className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-color-klyth-gold to-transparent opacity-80"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
