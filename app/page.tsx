"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  } as const;

  const word1 = "Coming".split("");
  const word2 = "Soon".split("");

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

  const letterVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.4, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 15,
      },
    },
  } as const;

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-klyth-charcoal text-klyth-cream overflow-hidden px-4 sm:px-6 select-none font-sans">
      
      {/* Background ambient glowing mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: ["0%", "8%", "-5%", "0%"],
            y: ["0%", "-6%", "4%", "0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-klyth-olive/12 to-transparent blur-[160px]"
        />
        <motion.div
          animate={{
            x: ["0%", "-6%", "8%", "0%"],
            y: ["0%", "5%", "-3%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-klyth-gold/6 to-transparent blur-[180px]"
        />
      </div>

      {/* 1. Header (Logo Only) */}
      <header className="relative z-10 w-full max-w-7xl mx-auto py-4 md:py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/img/Logo.png"
            alt="Klyth Logo"
            width={180}
            height={90}
            className="w-auto h-10 md:h-16 object-contain"
            priority
          />
        </div>
      </header>

      {/* 2. Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center md:justify-start pt-2 pb-8 md:pt-8 md:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl flex flex-col items-center text-center gap-5 md:gap-8"
        >


          {/* Headline on two lines with game-like hover physics */}
          <h1 className="font-serif font-bold text-5xl min-[375px]:text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-[0.95] select-none uppercase flex flex-col items-center gap-1 sm:gap-2">
            <span className="inline-flex pb-1 sm:pb-3 cursor-default flex-wrap justify-center">
              {word1.map((char, index) => (
                <motion.span
                  key={`w1-${index}`}
                  variants={letterVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.2,
                    rotate: index % 2 === 0 ? 6 : -6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-klyth-cream to-klyth-cream/70 origin-bottom filter drop-shadow-[0_2px_8px_rgba(245,242,235,0.1)] px-0.5"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="inline-flex pb-1 sm:pb-3 cursor-default flex-wrap justify-center">
              {word2.map((char, index) => (
                <motion.span
                  key={`w2-${index}`}
                  variants={letterVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.2,
                    rotate: index % 2 === 0 ? -6 : 6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                  className="inline-block text-klyth-gold origin-bottom filter drop-shadow-[0_2px_8px_rgba(226,184,66,0.15)] px-0.5"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle description */}
          <motion.p
            variants={fadeUpVariants}
            className="font-sans font-regular text-xs sm:text-base md:text-lg text-klyth-cream/70 max-w-xs sm:max-w-sm mx-auto leading-relaxed select-text mt-1"
          >
            Financial Growth, Rewired. The ecosystem is being built. Stay tuned.
          </motion.p>

          {/* Follow on Social Media section */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col items-center gap-3 mt-4 md:mt-6"
          >
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-klyth-cream/40">
              Follow the journey
            </span>
            <div className="flex items-center gap-6 sm:gap-8 text-xl sm:text-2xl mt-0.5">
              <a
                href="https://www.instagram.com/klyth.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-instagram transition-transform duration-300 hover:scale-110 hover:text-klyth-gold"
                aria-label="Klyth Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://x.com/klythhq"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-x transition-transform duration-300 hover:scale-110 hover:text-klyth-gold"
                aria-label="Klyth X (Twitter)"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://linkedin.com/company/klyth"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-linkedin transition-transform duration-300 hover:scale-110 hover:text-klyth-gold"
                aria-label="Klyth LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="mailto:hello@klyth.in"
                className="social-icon-email transition-transform duration-300 hover:scale-110 hover:text-klyth-gold"
                aria-label="Email Klyth"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto py-4 md:py-8 border-t border-klyth-ghost/50 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 font-sans text-xs tracking-wide text-klyth-cream/50">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span>© 2026 Klyth. All rights reserved.</span>
        </div>
        <div className="order-1 md:order-2 text-center md:text-right">
          <span>Built in Pune, India.</span>
        </div>
      </footer>
    </div>
  );
}
