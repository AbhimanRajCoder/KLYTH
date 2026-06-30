"use client";
import { motion } from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1];

export default function AboutTeam() {
  const team = [
    {
      label: "The Vision",
      role: "Visionary Leadership & Strategy",
      detail: "Architecting the movement, the business model, and the overarching mission to ensure Klyth doesn't just launch, but scales into a cultural layer.",
      visual: "sphere"
    },
    {
      label: "The Interface",
      role: "Product, UI & UX Design",
      detail: "Stripping away the friction of traditional finance apps. Crafting the Apple/Notion-level aesthetic and intuitive user journeys that make financial growth a seamless habit.",
      visual: "pane"
    },
    {
      label: "The Engine",
      role: "Technical & Full-Stack Execution",
      detail: "Building the secure, scalable, and adaptive gamified backend that powers the Klyth ecosystem across thousands of users.",
      visual: "cube"
    }
  ];

  return (
    <section className="relative w-full py-40 px-6 z-10 flex flex-col items-center">
      <div className="w-full max-w-[70ch] text-center flex flex-col items-center mb-24">
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          The Builders
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-klyth-cream">
          A synergy of vision, <br /> <span className="italic text-klyth-cream/90">design, and code.</span>
        </h2>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed font-light">
          Rewiring a generation’s financial growth requires more than just finance knowledge. It requires world-class technology and frictionless design. We are finalizing our public roster, but our founding triad brings together the exact pillars needed to execute this massive vision at scale.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: idx * 0.2, ease: premiumEase }}
            className={`relative w-full bg-[#1C1C1E]/40 backdrop-blur-3xl rounded-3xl border border-white/5 p-8 flex flex-col group cursor-default transition-all duration-700 hover:shadow-[0_20px_60px_rgba(74,93,35,0.05)] hover:border-klyth-olive/30 hover:-translate-y-2 ${idx === 1 ? 'md:mt-12 md:-mb-12' : ''} ${idx === 2 ? 'md:mt-24 md:-mb-24' : ''}`}
          >
            {/* Identity Locked Badge */}
            <div className="absolute top-6 right-6">
              <span className="font-sans text-klyth-platinum/60 text-[9px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full group-hover:opacity-70 transition-opacity">
                Revealing Soon
              </span>
            </div>

            {/* Visual Silhouette Area */}
            <div className="w-full h-48 mb-8 flex items-center justify-center relative overflow-hidden rounded-xl bg-[#1C1C1E]/20">
              <div className="absolute inset-0 bg-klyth-olive/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {member.visual === "sphere" && (
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  whileHover={{ rotateY: 180, scale: 1.05 }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                />
              )}
              
              {member.visual === "pane" && (
                <motion.div 
                  className="w-24 h-16 rounded-lg bg-white/5 border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  whileHover={{ rotateX: 10, rotateY: 20, y: -5 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              )}
              
              {member.visual === "cube" && (
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] transform rotate-45"
                  whileHover={{ rotate: 135 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
              )}
            </div>

            <span className="font-sans font-semibold uppercase tracking-widest text-klyth-cream/80 text-xs mb-3">
              {member.label}
            </span>
            <h3 className="font-serif text-2xl text-klyth-cream mb-4">{member.role}</h3>
            <p className="font-sans text-sm text-klyth-cream/50 leading-relaxed font-light mt-auto">
              {member.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
