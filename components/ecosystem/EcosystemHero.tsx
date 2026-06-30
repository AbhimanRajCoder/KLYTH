"use client";

import { motion } from "framer-motion";

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
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-klyth-cream tracking-tight"
        >
          Financial Growth, Rewired. <br className="hidden md:block" />
          <span className="italic font-light text-klyth-cream/80">Inside the Ecosystem.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: premiumEase }}
          className="font-sans text-lg md:text-xl lg:text-2xl text-klyth-cream/50 max-w-3xl leading-relaxed font-light"
        >
          We are not building just another course you will buy and abandon. We are building a comprehensive cultural layer—fusing behavioral technology, real-world action, and peer accountability to make financial growth a daily, automatic habit.
        </motion.p>
      </motion.div>

      {/* Scroll indicator - elegant pill shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: premiumEase }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-klyth-gold/50 to-transparent overflow-hidden relative">
           <motion.div 
             className="w-full h-full bg-klyth-cream"
             initial={{ y: "-100%" }}
             animate={{ y: "100%" }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
        </div>
      </motion.div>
    </section>
  );
}
