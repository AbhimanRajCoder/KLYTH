"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemFinalCTA() {
  return (
    <section className="relative w-full py-48 md:py-64 px-6 bg-klyth-charcoal z-10 flex justify-center overflow-hidden">
      
      {/* Background Soft Deep Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-klyth-olive/5 blur-[160px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="relative max-w-4xl w-full text-center flex flex-col items-center"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-klyth-gold/30 to-transparent mb-12 mx-auto" />
        
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-klyth-cream mb-8 leading-tight tracking-tight">
          Stop surviving. <br className="hidden md:block" /> <span className="italic font-light">Start scaling.</span>
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-klyth-cream/50 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          The ecosystem is built. The community is waiting. It is time to replace financial anxiety with unstoppable momentum.
        </p>

        {/* Minimalist Apple-like Magnetic Button */}
        <Link 
          href="/join" 
          className="klyth-btn klyth-btn-primary text-sm py-5 px-16"
        >
          Step Into the Ecosystem
        </Link>
      </motion.div>
    </section>
  );
}
