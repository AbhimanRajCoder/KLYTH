"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from "framer-motion";
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

  const springConfig = { damping: 25, stiffness: 120, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
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

    x.set(mouseX * 0.25);
    y.set(mouseY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative group">
      {!isMobile && (
        <motion.div
          className="absolute -inset-3 rounded-full bg-klyth-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ x: springX, y: springY }}
        />
      )}

      <motion.div style={isMobile ? {} : { x: springX, y: springY }}>
        <Link
          href={href}
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative inline-flex items-center gap-3 px-9 py-4 bg-[#1c1c1e] text-klyth-cream font-sans font-medium text-sm uppercase tracking-[0.14em] rounded-full border border-white/10 hover:bg-[#2c2c2e] hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.55)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] min-h-[48px] select-none overflow-hidden"
        >
          {/* Subtle sweep glare */}
          <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] transition-transform duration-1000 group-hover:translate-x-[260%]" />
          </span>
          <span className="relative z-10">{children}</span>
          <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
        </Link>
      </motion.div>
    </div>
  );
};

export default function HomeHero() {
  const headlineParts = [
    { text: "Financial", color: "text-klyth-cream font-serif font-light tracking-tight" },
    { text: "Growth,", color: "text-transparent bg-clip-text bg-gradient-to-br from-klyth-olive to-[#8a9f60] font-serif font-bold" },
    { text: "Rewired.", color: "text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-[#f9e9c9] font-serif font-bold italic pr-2" },
  ];

  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const handleMouseMoveSection = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 250);
    mouseY.set(e.clientY - rect.top - 250);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  } as const;

  const wordVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  return (
    <section
      onMouseMove={handleMouseMoveSection}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#090909] text-klyth-cream overflow-hidden px-6 md:px-8 py-16 sm:py-24 select-none"
    >
      {/* Editorial Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 15%, rgba(255,255,255,0.015) 0%, transparent 60%)" }} />

        {/* Ambient glows using premium HSL values - Rendered client-side to prevent hydration flicker */}
        {mounted && (
          <>
            <motion.div
              animate={{
                opacity: [0.04, 0.055, 0.045, 0.04],
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[30%] -left-[10%] w-[120vw] h-[120vw] rounded-full bg-klyth-olive blur-[240px]"
            />

            <motion.div
              animate={{
                opacity: [0.015, 0.025, 0.018, 0.015],
              }}
              transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[20%] right-[-10%] w-[100vw] h-[100vw] rounded-full bg-klyth-gold blur-[260px]"
            />
          </>
        )}

        {/* Desktop Cursor spotlight */}
        <motion.div
          className="absolute top-0 left-0 rounded-full pointer-events-none bg-white blur-[180px]"
          style={{
            width: 450,
            height: 450,
            x: springX,
            y: springY,
          }}
          animate={{
            opacity: isHoveringSection ? 0.035 : 0,
          }}
          transition={{ opacity: { duration: 0.5 } }}
        />

        {/* Subtle grid accent */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Top spacing helper (aligned with navbar spacing) */}
      <div className="h-16" />

      {/* Main asymmetric editorial container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-start my-auto pb-12 lg:pb-16"
      >

        {/* Right column: Headline, Divider, and details */}
        <div className="flex-grow flex flex-col w-full">
          {/* Large Headline */}
          <h1 
            className="text-[11vw] sm:text-[9vw] lg:text-[7.5vw] tracking-tight leading-[0.92] select-text relative z-10"
            style={{ textShadow: "0 0 40px rgba(255,248,235,0.02)" }}
          >
            {headlineParts.map((part, idx) => (
              <span
                key={idx}
                className="inline-block overflow-hidden pb-2 mr-[0.2em] last:mr-0"
              >
                <motion.span variants={wordVariants} className={`inline-block ${part.color}`}>
                  {part.text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Thin Editorial Separator */}
          <motion.div 
            variants={lineVariants}
            style={{ originX: 0 }}
            className="w-full h-[1px] bg-gradient-to-r from-klyth-gold/30 via-klyth-ghost/20 to-transparent my-10 sm:my-12"
          />

          {/* Details & CTA (Split Layout) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-between">
            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="font-sans font-normal text-base sm:text-lg text-klyth-cream/70 max-w-xl leading-relaxed tracking-wide select-text"
            >
              Empowering a generation to grow financially with confidence. No boring
              lectures, no financial anxiety just intuitive systems, daily habits,
              and a community that moves forward together.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUpVariants} className="shrink-0 md:pt-1">
              <MagneticButton href="/join">Inside the Ecosystem</MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar — minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-start border-t border-klyth-ghost/15 pt-6 font-sans text-[10px] tracking-[0.25em] text-klyth-cream/35 uppercase"
      >
        <span className="hover:text-klyth-gold transition-colors duration-300">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
