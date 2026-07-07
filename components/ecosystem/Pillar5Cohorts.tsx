"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Pillar5Cohorts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    { day: "Day 01", title: "Foundation Check" },
    { day: "Day 10", title: "Allocation Strategy" },
    { day: "Day 20", title: "Peer Review" },
    { day: "Day 30", title: "Execution Milestone" }
  ];

  return (
    <section 
      className="relative w-full py-24 md:py-32 bg-klyth-charcoal z-10"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          
          {/* Left Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Execution Engine
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 5: Action-Oriented Cohort Sprints
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
              Moving From Theory <br className="hidden md:block" /> <span className="italic text-klyth-cream/90">to Execution.</span>
            </h2>
            <div className="mb-4 md:mb-8">
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
                Currently in beta
              </span>
            </div>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light">
              Learning about money is only the first step; taking action is what actually builds wealth. We host guided, time-bound cohort programs where small groups of users tackle specific financial milestones together. Whether it is a 30-day "First Investment Challenge" or a beginner budgeting sprint, this shared approach utilizes intense peer accountability to ensure that our community doesn't just consume content—they execute it.
            </p>
          </div>

          {/* Right Visual Side - Timeline UI */}
          <div className="relative w-full flex items-center justify-center md:justify-end order-1 md:order-2 h-[400px] md:h-[500px]">
            <div className="w-[85%] sm:w-full max-w-[280px] md:max-w-sm aspect-[1/1.5] md:aspect-[1/1.6] klyth-glass rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:mr-[10%]">
              <div className="flex flex-col gap-0 relative">
                
                {/* Background track */}
                <div className="absolute left-[7px] top-4 bottom-[20px] w-[2px] bg-white/5" />
                
                {/* Animated Fill Track */}
                <motion.div 
                  initial={{ height: "0%" }}
                  animate={isInView ? { height: "100%" } : { height: "0%" }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute left-[7px] top-4 w-[2px] bg-klyth-olive shadow-[0_0_10px_rgba(74,93,35,0.8)] z-0"
                />

                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative group pb-10 last:pb-0 z-10">
                    <div className="relative z-10 flex flex-col items-center pt-1">
                      <motion.div 
                        initial={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                        animate={isInView ? { 
                          backgroundColor: "rgba(74,93,35,0.2)", 
                          borderColor: "rgba(74,93,35,1)",
                          boxShadow: "0 0 15px rgba(74,93,35,0.5)"
                        } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.6) }}
                        className="w-4 h-4 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 + (i * 0.6) }}
                          className="w-1.5 h-1.5 bg-klyth-cream rounded-full" 
                        />
                      </motion.div>
                    </div>
                    <div>
                      <motion.span 
                        initial={{ opacity: 0.3 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.6) }}
                        className="font-sans text-[9px] text-klyth-gold/70 font-medium tracking-[0.2em] uppercase block mb-1"
                      >
                        {step.day}
                      </motion.span>
                      <motion.h3 
                        initial={{ opacity: 0.5 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.6) }}
                        className="font-serif text-lg md:text-xl text-klyth-cream/90"
                      >
                        {step.title}
                      </motion.h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
