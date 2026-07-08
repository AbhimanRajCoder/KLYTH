"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10 bg-klyth-charcoal">
      
      {/* Background Ambient Lighting (Apple style: soft, deep, purposeful) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-klyth-olive/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* A subtle secondary gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-klyth-charcoal via-transparent to-transparent pointer-events-none z-10" />

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center relative z-20 mt-16"
      >
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.4, ease: premiumEase }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight"
        >
          <span className="text-klyth-cream font-light">Financial </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-klyth-olive to-[#8a9f60]">Growth, </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-[#f9e9c9] italic pr-2">Rewired.</span>
          <br className="hidden md:block" />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-klyth-cream to-klyth-cream/50">Inside the Ecosystem.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: premiumEase }}
          className="font-sans text-lg md:text-xl lg:text-2xl text-klyth-cream/50 max-w-3xl leading-relaxed font-light"
        >
          We are not building just another course you will buy and abandon. We are building a comprehensive cultural layer fusing behavioral technology, real-world action, and peer accountability to make financial growth a daily, automatic habit.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ScrollIndicator align="center" delay={1.5} />
      </div>
    </section>
  );
}
