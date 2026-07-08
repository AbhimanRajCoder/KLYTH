"use client";
import { motion } from "framer-motion";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CampusTeaser() {
  const sneakPeeks = [
    {
      title: "Funded Campus Events",
      detail: "Get official Klyth backing and resources to host massive financial workshops and AMAs right in your college auditoriums."
    },
    {
      title: "Exclusive Network Access",
      detail: "Direct mentorship from the Klyth founding team, industry leaders, and top finance creators."
    },
    {
      title: "Leadership & Upward Mobility",
      detail: "Real-world operational experience to supercharge your resume, alongside exclusive beta access and ambassador-only perks."
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 z-10 flex flex-col items-center">
      
      {/* Intro Text */}
      <div className="max-w-[70ch] w-full text-center flex flex-col items-center mb-24">
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          Under Construction
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-klyth-cream leading-tight">
          We are designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-klyth-cream italic font-bold">ultimate student leadership</span> experience.
        </h2>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed font-light mb-12">
          We are currently finalizing the blueprint for the official Klyth Ambassador Program. We aren't just looking for promoters—we are looking for visionaries who want to bring real financial infrastructure to their peers. We are putting together a program that rewards execution and builds your career.
        </p>
        <span className="font-sans text-klyth-cream/80 text-sm font-medium uppercase tracking-widest block">
          Here is a sneak peek at what is dropping soon:
        </span>
      </div>

      {/* Sneak Peek Cards (Locked UI) */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        {sneakPeeks.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: idx * 0.2, ease: premiumEase }}
            className="group relative w-full md:w-1/3 p-[1px] rounded-3xl overflow-hidden cursor-default"
          >
            {/* The Border Gradient (Static mostly, lights up on hover) */}
            <div className="absolute inset-0 bg-white/5 group-hover:bg-klyth-olive/30 transition-colors duration-700 z-0"></div>

            {/* Inner Content Card (The Frost) */}
            <div className="relative w-full h-full bg-[#1C1C1E]/80 backdrop-blur-md rounded-[calc(1.5rem-1px)] p-8 md:p-10 flex flex-col z-10 transition-all duration-700 md:group-hover:bg-[#1C1C1E]/40 md:group-hover:-translate-y-1 md:group-hover:backdrop-blur-none overflow-hidden">
              
              {/* Soft Background Glow on Hover */}
              <div className="hidden md:block absolute inset-0 bg-klyth-olive/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              {/* In Development Badge */}
              <div className="flex justify-between items-start mb-16 relative z-20">
                <div className="w-8 h-8 rounded-full border border-klyth-ghost/30 flex items-center justify-center bg-white/5 shadow-inner">
                  <svg className="w-3.5 h-3.5 text-klyth-cream/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-gold/60 border border-klyth-gold/20 bg-klyth-gold/5 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(207,181,114,0.1)]">
                  In Development
                </span>
              </div>

              <h3 className="font-serif text-2xl text-klyth-cream mb-4 relative z-20 transition-colors duration-500 group-hover:text-white">{item.title}</h3>
              <p className="font-sans text-sm text-klyth-cream/50 leading-relaxed font-light mt-auto relative z-20 transition-colors duration-500 group-hover:text-klyth-cream/80">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
