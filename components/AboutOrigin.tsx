"use client";
import { motion } from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1];

export default function AboutOrigin() {
  return (
    <section className="relative w-full py-40 px-6 z-10 flex flex-col items-center">
      <div className="max-w-[70ch] w-full text-center flex flex-col items-center mb-16">
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          The Catalyst
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-klyth-cream">
          The Blueprint is Loading...
        </h2>
        <span className="font-sans text-klyth-gold/80 text-[11px] uppercase tracking-widest font-medium mb-8 px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
          Documenting our journey
        </span>
        <div className="font-sans text-klyth-cream/50 text-lg leading-relaxed font-light text-left w-full space-y-6">
          <p>
            Klyth was not born in a boardroom. It was born out of shared frustration. We looked around at our peers—highly educated, ambitious, and entering the workforce—who were completely paralyzed by the basics of personal finance, taxation, and investing.
          </p>
          <p>
            We realized that while the world had modernized everything else, financial education was still stuck in textbooks and unwatchable YouTube lectures. So, we decided to rewire it. We are currently documenting the full, unfiltered story of how Klyth went from a late-night idea to a massive ecosystem.
          </p>
          <p className="text-klyth-cream/40 italic text-sm mt-4 text-center">
            The full origin documentary and founding manifesto will be unlocked here shortly.
          </p>
        </div>
      </div>

      {/* Cinematic Teaser Graphic */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="relative w-full max-w-4xl aspect-[21/9] rounded-[2rem] overflow-hidden group cursor-default"
      >
        {/* Frosted Background with blurry image simulation */}
        <div className="absolute inset-0 bg-[#1C1C1E]/60 backdrop-blur-2xl border border-white/5 z-10 transition-colors duration-700 group-hover:bg-[#1C1C1E]/40"></div>
        <div className="absolute inset-0 bg-klyth-olive/5 blur-[50px] mix-blend-screen scale-150 group-hover:scale-125 transition-transform duration-1000"></div>

        {/* Loading Ring / Play Button Illuminating on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-16 h-16 rounded-full border border-klyth-cream/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_30px_rgba(245,242,235,0.1)]"
          >
            <div className="w-12 h-12 rounded-full border-t border-r border-klyth-olive animate-spin"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
