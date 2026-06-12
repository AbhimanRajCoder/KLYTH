"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const MagneticButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Check if device supports hover interactions (desktop cursor vs touch device)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Pull effect: 35% of the mouse displacement
    x.set(mouseX * 0.35);
    y.set(mouseY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative group">
      {/* Background glow when hovered - desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute -inset-2 rounded-full bg-color-klyth-olive/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            x: springX,
            y: springY,
          }}
        />
      )}
      <motion.div style={isMobile ? {} : { x: springX, y: springY }}>
        <Link
          href={href}
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative inline-flex items-center gap-3 px-8 py-4 bg-color-klyth-olive text-color-klyth-cream font-sans font-semibold text-base rounded-full border border-color-klyth-olive/30 shadow-[0_0_30px_rgba(74,93,35,0)] hover:shadow-[0_0_30px_rgba(74,93,35,0.4)] transition-all duration-300 transform active:scale-95 animate-pulse-breathing focus:outline-none focus:ring-2 focus:ring-color-klyth-olive focus:ring-offset-2 focus:ring-offset-color-klyth-charcoal min-h-[48px] select-none"
        >
          <span>{children}</span>
          <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default function HomeHero() {
  const headline = "Financial Growth, Rewired.";
  const headlineWords = headline.split(" ");

  // Staggered Mask Reveal Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  } as const;

  const wordVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // premium cubic-bezier ease out
      },
    },
  } as const;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-color-klyth-charcoal text-color-klyth-cream overflow-hidden px-6 sm:px-12 py-24 select-none">
      {/* Shifting background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: ["0%", "5%", "-3%", "0%"],
            y: ["0%", "-5%", "2%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-color-klyth-olive/8 to-transparent blur-[140px]"
        />
        <motion.div
          animate={{
            x: ["0%", "-4%", "5%", "0%"],
            y: ["0%", "4%", "-2%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-color-klyth-gold/4 to-transparent blur-[160px]"
        />
      </div>

      {/* Main content centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-8 md:gap-10"
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUpVariants}
          className="text-color-klyth-gold font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase"
        >
          Introducing Klyth
        </motion.span>

        {/* Headline with word mask reveal */}
        <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-color-klyth-cream select-text">
          {headlineWords.map((word, idx) => (
            <span
              key={idx}
              className="inline-block overflow-hidden pb-1 sm:pb-2 mr-[0.25em] last:mr-0"
            >
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUpVariants}
          className="font-sans font-regular text-lg sm:text-xl md:text-2xl text-color-klyth-cream/70 max-w-2xl leading-relaxed select-text"
        >
          Empowering a generation to grow financially with confidence. No boring
          lectures, no financial anxiety—just intuitive systems, daily habits,
          and a community that moves forward together.
        </motion.p>

        {/* CTA Button Wrapper */}
        <motion.div variants={fadeUpVariants} className="mt-4">
          <MagneticButton href="/join">Step Into the Ecosystem</MagneticButton>
        </motion.div>
      </motion.div>

      {/* Elegant visual bottom scroll anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-color-klyth-cream/40">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-color-klyth-cream/40"
        />
      </motion.div>
    </section>
  );
}
