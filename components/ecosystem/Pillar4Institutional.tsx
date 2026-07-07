"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Pillar4Institutional() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within this specific section to trigger the background color shift
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });

  // Fade in a darker background overlay to simulate the psychological weight
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      className="relative w-full min-h-[100vh] py-24 md:py-32 flex items-center justify-center z-10"
      ref={containerRef}
    >
      {/* Darker Background overlay that fades in as user scrolls to center */}
      <motion.div 
        className="absolute inset-0 bg-[#050505] -z-10 pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        
        {/* Soft Depth Lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          
          {/* Left Visual Side - Abstract Graphic */}
          <div className="relative w-full flex items-center justify-center order-1 md:order-1 h-[400px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
               {/* Interlocking Rings */}
               <div className="absolute w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full border-[2px] border-klyth-olive/40 -translate-x-12 mix-blend-screen shadow-[0_0_50px_rgba(74,93,35,0.2)]" />
               <div className="absolute w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full border-[2px] border-klyth-cream/20 translate-x-12 backdrop-blur-sm" />
               <div className="absolute w-6 h-6 bg-klyth-gold/60 blur-[4px] rounded-full" />
            </motion.div>
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-2">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Systemic Change
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 4: Institutional Partnerships
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
              Bridging the Gap <br className="hidden lg:block" /> <span className="italic text-klyth-cream/80">from the Inside.</span>
            </h2>
            <div className="mb-4 md:mb-8">
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md opacity-0 pointer-events-none">
                Placeholder
              </span>
            </div>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light -mt-12 md:-mt-16">
              Complaining about the educational system isn't enough; we are actively working alongside it to create lasting change. Klyth partners directly with universities and colleges to seamlessly integrate our practical financial literacy modules into their existing frameworks. By offering our ecosystem as a supplementary "Life Skills" program, we ensure that students don't just graduate with a degree—they graduate fully equipped with the financial readiness to manage their early careers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
