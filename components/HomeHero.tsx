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

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { damping: 22, stiffness: 90, mass: 0.25 };
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

    // Glare coordinates as percentages
    const percentX = ((e.clientX - rect.left) / width) * 100;
    const percentY = ((e.clientY - rect.top) / height) * 100;
    glareX.set(percentX);
    glareY.set(percentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareX.set(50);
    glareY.set(50);
    setIsHovered(false);
  };

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18) 0%, transparent 65%)`;

  const shadowX = useSpring(useTransform(x, (val) => val * -0.15), springConfig);
  const shadowY = useSpring(useTransform(y, (val) => val * -0.15), springConfig);

  return (
    <div className="relative group">
      {/* Background glow when hovered - desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute -inset-2 rounded-full bg-color-klyth-olive/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            x: springX,
            y: springY,
          }}
        />
      )}
      
      {/* Parallax dynamic ambient shadow under the button */}
      {!isMobile && (
        <motion.div
          className="absolute inset-2 rounded-full bg-black/60 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            x: shadowX,
            y: shadowY,
            scale: 1.05,
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
          className="relative inline-flex items-center gap-3 px-9 py-4 bg-color-klyth-olive text-color-klyth-cream font-sans font-semibold text-base rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(74,93,35,0.4)] transition-all duration-500 overflow-hidden transform active:scale-95 animate-pulse-breathing focus:outline-none focus:ring-2 focus:ring-color-klyth-gold/50 min-h-[48px] select-none"
        >
          {/* Subtle gradient border overlay */}
          <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-color-klyth-olive/30 via-color-klyth-gold/30 to-color-klyth-olive/30 group-hover:from-color-klyth-olive/60 group-hover:via-color-klyth-gold/60 group-hover:to-color-klyth-olive/60 transition-colors duration-500 pointer-events-none" />

          {/* Glare Reflection overlay - desktop only */}
          {!isMobile && (
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: glareBg }}
            />
          )}

          <span className="relative z-10">{children}</span>
          <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
        </Link>
      </motion.div>
    </div>
  );
};

export default function HomeHero() {
  const headline = "Financial Growth, Rewired.";
  const headlineWords = headline.split(" ");

  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const handleMouseMoveSection = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 250);
    mouseY.set(e.clientY - rect.top - 250);
  };

  // Staggered Mask Reveal Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  } as const;

  const wordVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for ultra-smooth entrance
      },
    },
  } as const;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  return (
    <section 
      onMouseMove={handleMouseMoveSection}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#090909] text-color-klyth-cream overflow-hidden px-6 sm:px-12 py-24 select-none"
    >
      {/* Premium Living Charcoal Background Stack */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Layer 2: Large center vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)" }} />

        {/* Layer 3: Huge olive light */}
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.05, 0.065, 0.05],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] left-[-20%] w-[140vw] h-[140vw] rounded-full bg-color-klyth-olive blur-[220px]"
        />

        {/* Layer 4: Gold light */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.02, 0.035, 0.02],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-30%] right-[-20%] w-[120vw] h-[120vw] rounded-full bg-color-klyth-gold blur-[260px]"
        />

        {/* Layer 5: Film Grain */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Layer 6: Soft dark edge vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />

        {/* Layer 7: Optional spotlight behind hero heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-white opacity-[0.05] blur-[150px]" />

        {/* Cursor Glow */}
        <motion.div
          className="absolute top-0 left-0 rounded-full pointer-events-none bg-white blur-[180px]"
          style={{
            width: 500,
            height: 500,
            x: springX,
            y: springY,
          }}
          animate={{
            opacity: isHoveringSection ? 0.05 : 0,
          }}
          transition={{ opacity: { duration: 0.5 } }}
        />
      </div>

      {/* Main content centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-10 md:gap-12 pb-24 md:pb-32"
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUpVariants}
          className="text-color-klyth-gold font-sans font-bold text-xs sm:text-sm tracking-[0.3em] uppercase text-shadow-glow"
        >
          Introducing Klyth
        </motion.span>

        {/* Headline with word mask reveal */}
        <h1 
          className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-color-klyth-cream select-text relative z-10"
          style={{ textShadow: "0 0 30px rgba(255,248,235,0.05)" }}
        >
          {headlineWords.map((word, idx) => (
            <span
              key={idx}
              className="inline-block overflow-hidden pb-1 sm:pb-3 mr-[0.25em] last:mr-0"
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
          className="font-sans font-normal text-lg sm:text-xl md:text-2xl text-color-klyth-cream/80 max-w-2xl leading-relaxed tracking-wide select-text"
        >
          Empowering a generation to grow financially with confidence. No boring
          lectures, no financial anxiety—just intuitive systems, daily habits,
          and a community that moves forward together.
        </motion.p>

        {/* CTA Button Wrapper */}
        <motion.div variants={fadeUpVariants} className="mt-2">
          <MagneticButton href="/join">Step Into the Ecosystem</MagneticButton>
        </motion.div>
      </motion.div>

      {/* Elegant visual bottom scroll anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-color-klyth-cream/30">
          Scroll to explore
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-color-klyth-cream/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [-10, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full h-3 bg-color-klyth-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

