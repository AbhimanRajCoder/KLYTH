"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const premiumEase = [0.16, 1, 0.3, 1];

export default function EcosystemFinalCTA() {
  return (
    <section className="relative w-full py-48 px-6 bg-klyth-charcoal z-10 flex justify-center overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-klyth-olive/5 blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2, ease: premiumEase }}
        className="relative bg-[#1C1C1E]/40 backdrop-blur-3xl max-w-4xl w-full border border-white/5 rounded-[3rem] p-16 md:p-28 text-center flex flex-col items-center shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        <div className="w-16 h-[1px] bg-klyth-gold/50 mb-14 mx-auto"></div>
        
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-klyth-cream mb-8 leading-tight">
          Stop surviving. <br className="hidden md:block" /> <span className="italic">Start scaling.</span>
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-klyth-cream/50 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          The ecosystem is built. The community is waiting. It is time to replace financial anxiety with unstoppable momentum.
        </p>

        {/* Pulsing CTA Button */}
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-0 bg-klyth-olive/30 blur-2xl rounded-full animate-pulse-breathing"></div>
          <Link 
            href="/join" 
            className="relative block bg-klyth-olive text-klyth-cream font-sans font-medium text-sm tracking-wide py-5 px-16 rounded-full transition-all duration-500 ease-out hover:-translate-y-1 shadow-[0_0_30px_rgba(74,93,35,0.2)] hover:shadow-[0_0_50px_rgba(74,93,35,0.5)] w-full text-center"
          >
            Step Into the Ecosystem
          </Link>
        </div>
      </motion.div>
    </section>
  );
}