"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const premiumEase = [0.16, 1, 0.3, 1];

export default function EcosystemPillar3() {
  return (
    <section className="relative w-full py-48 px-6 bg-klyth-charcoal z-10 flex flex-col md:flex-row-reverse items-center justify-center gap-16 md:gap-32 overflow-hidden">
      
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="max-w-xl w-full flex flex-col items-start relative z-10"
      >
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          Grassroots Growth
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-klyth-cream leading-tight">
          Building a Movement on <br /><span className="italic text-klyth-cream/90">Your Campus.</span>
        </h2>
        <span className="font-sans text-klyth-gold/80 text-[11px] uppercase tracking-widest font-medium mb-8 px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
          Currently in development — Launching soon
        </span>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed mb-10 font-light">
          Financial literacy should be a staple on every college campus, not a taboo subject hidden away. Through our extensive ambassador program, we empower student leaders to bring the Klyth movement directly to their peers. By establishing localized chapters and driving peer-to-peer advocacy, we are building a decentralized network. We are normalizing financial conversations in cafeterias, dorms, and classrooms, transforming how an entire generation views money.
        </p>
        <Link href="/campus" className="inline-block bg-klyth-olive text-klyth-cream font-sans font-medium text-sm py-4 px-10 rounded-full transition-all duration-500 hover:-translate-y-1 shadow-[0_0_20px_rgba(74,93,35,0.1)] hover:shadow-[0_0_40px_rgba(74,93,35,0.3)]">
          Lead a Chapter
        </Link>
      </motion.div>

      {/* Visual Side: Abstract Ripple Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: premiumEase }}
        className="relative w-full max-w-md aspect-square flex items-center justify-center group z-10"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Fading Concentric Rings */}
          {[1, 2, 3, 4].map((ring) => (
             <motion.div
                key={ring}
                className="absolute border border-klyth-olive/20 rounded-full group-hover:border-klyth-olive/40 transition-colors duration-1000"
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={{ width: "100%", height: "100%", opacity: 0 }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  delay: ring * 1.5,
                  ease: "easeOut"
                }}
             />
          ))}

          {/* Central Glowing Dot */}
          <div className="w-4 h-4 rounded-full bg-klyth-olive shadow-[0_0_40px_rgba(74,93,35,1)] z-10 group-hover:scale-110 transition-transform duration-1000"></div>
          
        </div>
      </motion.div>
      
    </section>
  );
}