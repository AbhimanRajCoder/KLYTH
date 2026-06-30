"use client";
import { motion } from "framer-motion";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutHero() {
  return (
    <section className="relative w-full h-[65vh] min-h-[500px] flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10 bg-klyth-charcoal">
      
      {/* Background Visual: Interlocking Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
        <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] stroke-klyth-ghost stroke-[0.2]" fill="none">
          <motion.path 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 3, ease: premiumEase }}
            d="M 20 80 L 40 20 L 60 80 L 80 20" 
          />
          <motion.path 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 3, delay: 0.5, ease: premiumEase }}
            d="M 10 50 L 90 50" 
          />
          <motion.path 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 3, delay: 1, ease: premiumEase }}
            d="M 50 10 L 50 90" 
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: premiumEase }}
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-klyth-cream">
          Built by the generation we are solving for.
        </h1>
        <p className="font-sans text-lg md:text-xl text-klyth-cream/50 max-w-[65ch] leading-relaxed font-light">
          We aren't Wall Street executives or traditional bankers. We are a team of technologists, designers, and builders who experienced the exact same financial anxiety you did—and decided to engineer a way out of it.
        </p>
      </motion.div>
    </section>
  );
}
