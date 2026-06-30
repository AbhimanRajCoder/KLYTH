"use client";

import { motion } from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1];

export default function EcosystemPillar5() {
  return (
    <section className="relative w-full py-48 px-6 bg-klyth-charcoal z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="max-w-xl w-full flex flex-col items-start relative z-10"
      >
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          Execution Engine
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-klyth-cream leading-tight">
          Moving From Theory to <span className="italic text-klyth-cream/90">Execution.</span>
        </h2>
        <span className="font-sans text-klyth-gold/80 text-[11px] uppercase tracking-widest font-medium mb-8 px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
          Currently in beta
        </span>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed mb-10 font-light">
          Learning about money is only the first step; taking action is what actually builds wealth. We host guided, time-bound cohort programs where small groups of users tackle specific financial milestones together. Whether it is a 30-day "First Investment Challenge" or a beginner budgeting sprint, this shared approach utilizes intense peer accountability to ensure that our community doesn't just consume content—they execute it.
        </p>
      </motion.div>

      {/* Visual Side: Vertical Timeline / Progress Tracker */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="relative w-full max-w-sm flex flex-col gap-0 py-10 z-10"
      >
        {[
          { day: "Day 01", title: "Foundation Check" },
          { day: "Day 10", title: "Allocation Strategy" },
          { day: "Day 20", title: "Peer Review" },
          { day: "Day 30", title: "Execution Milestone" }
        ].map((step, i) => (
          <div key={i} className="flex gap-8 relative group cursor-default">
            {/* The line connecting nodes */}
            {i !== 3 && (
               <div className="absolute left-[11px] top-6 bottom-[-32px] w-[2px] bg-white/5 z-0">
                 <motion.div 
                    className="w-full bg-klyth-olive origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1.5, delay: i * 0.8 + 0.5, ease: "linear" }}
                    style={{ height: "100%" }}
                 />
               </div>
            )}
            
            <div className="relative z-10 flex flex-col items-center pt-1">
               <motion.div 
                  initial={{ backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.1)" }}
                  whileInView={{ backgroundColor: "var(--color-klyth-olive)", borderColor: "var(--color-klyth-olive)" }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8, delay: i * 0.8, ease: premiumEase }}
                  className="w-6 h-6 rounded-full border bg-transparent flex items-center justify-center transition-shadow duration-700 group-hover:shadow-[0_0_15px_rgba(74,93,35,0.4)]"
               >
                  <div className="w-1.5 h-1.5 bg-klyth-cream rounded-full"></div>
               </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-150px" }}
               transition={{ duration: 1.5, delay: i * 0.8 + 0.2, ease: premiumEase }}
               className="pb-12"
            >
               <span className="font-sans text-[10px] text-klyth-gold/70 font-medium tracking-[0.2em] uppercase block mb-2 transition-colors duration-500 group-hover:text-klyth-gold">
                 {step.day}
               </span>
               <h3 className="font-serif text-2xl text-klyth-cream/80 transition-colors duration-500 group-hover:text-white">
                 {step.title}
               </h3>
            </motion.div>
          </div>
        ))}
      </motion.div>
      
    </section>
  );
}