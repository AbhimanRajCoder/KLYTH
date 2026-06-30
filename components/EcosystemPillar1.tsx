"use client";

import { motion } from "framer-motion";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemPillar1() {
  return (
    <section className="relative w-full py-48 px-6 bg-klyth-charcoal z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="max-w-xl w-full flex flex-col items-start relative z-10"
      >
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          Behavioral Technology
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-klyth-cream leading-tight">
          Your Hyper-Personalized <br /> <span className="italic text-klyth-cream/90">Financial Roadmap.</span>
        </h2>
        <span className="font-sans text-klyth-gold/80 text-[11px] uppercase tracking-widest font-medium mb-8 px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
          Currently in development — Launching soon
        </span>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed font-light">
          Traditional finance curriculums fail because they are rigid. Your financial reality is not. Our flagship application replaces the outdated, one-size-fits-all model with hyper-personalized micro-lessons. Powered by a gamified, adaptive engine, the app molds entirely to your specific financial baseline and goals. We strip away the intimidation, reward your progress, and turn the heavy burden of learning into a frictionless, engaging daily habit.
        </p>
      </motion.div>

      {/* Visual Side: Abstract Mobile App UI Assembly */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full max-w-sm aspect-[1/2] rounded-[2.5rem] p-6 flex flex-col gap-4 group cursor-pointer z-10"
      >
        {/* Frame / Background */}
        <motion.div 
           variants={{
             hidden: { opacity: 0, scale: 0.97, y: 20 },
             visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: premiumEase } }
           }}
           className="absolute inset-0 klyth-glass rounded-[2.5rem] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-x-6 group-hover:-rotate-y-6 perspective-[1000px]"
        />

        <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-4 opacity-50 relative z-10 transition-transform duration-700 group-hover:-translate-y-4"></div>
        
        {/* UI Elements Assembling */}
        <div className="flex-1 flex flex-col gap-4 relative z-10 transition-transform duration-700 group-hover:-translate-y-4">
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.2, ease: premiumEase } }
            }}
            className="w-full h-32 rounded-xl bg-[#1C1C1E]/60 backdrop-blur-xl border border-white/5 flex flex-col justify-end p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
             <div className="w-1/3 h-[3px] bg-klyth-olive rounded-full mb-3"></div>
             <div className="w-2/3 h-[3px] bg-white/10 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.4, ease: premiumEase } }
            }}
            className="w-full h-16 rounded-xl bg-[#1C1C1E]/60 backdrop-blur-xl border border-white/5 flex items-center p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="w-6 h-6 rounded-full border border-klyth-gold/30 mr-4 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-klyth-gold/20"></div>
            </div>
            <div className="flex-1 h-[3px] bg-white/10 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.6, ease: premiumEase } }
            }}
            className="w-full h-16 rounded-xl bg-[#1C1C1E]/60 backdrop-blur-xl border border-white/5 flex items-center p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="w-6 h-6 rounded-full border border-klyth-platinum/30 mr-4 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-klyth-platinum/20"></div>
            </div>
            <div className="flex-1 h-[3px] bg-white/10 rounded-full"></div>
          </motion.div>

        </div>
      </motion.div>
      
    </section>
  );
}