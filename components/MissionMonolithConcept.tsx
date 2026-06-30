"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionMonolithConcept() {
  const [isMobile, setIsMobile] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-35, 10, 45]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 8, -8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [60, -60]);
  
  const meshOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.1, 0.03]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-klyth-charcoal text-klyth-cream py-16 sm:py-24 px-6 sm:px-12 overflow-hidden"
    >
      {/* Dynamic ambient mesh gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ opacity: meshOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-klyth-olive/20 via-transparent to-klyth-gold/10 rounded-full blur-[110px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-klyth-ghost/30 rounded-full border border-white/5 w-fit mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-klyth-olive/60" />
              <span className="font-sans font-semibold text-[10px] tracking-[0.25em] uppercase text-klyth-cream/50">
                The Identity
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight mb-6">
              The Key to the{" "}
              <span className="text-klyth-gold font-light italic">
                Monolith
              </span>
            </h2>

            <div className="font-sans text-base sm:text-lg text-klyth-cream/70 leading-relaxed font-light space-y-4 max-w-xl">
              <p className="border-l border-klyth-gold/30 pl-4">
                True financial freedom is not built on isolated hacks or get-rich-quick schemes.
              </p>
              <p>
                We named our platform Klyth as a conceptual blend of <span className="text-klyth-cream font-medium">“Key”</span> and <span className="text-klyth-cream font-medium">“Monolith.”</span>
              </p>
              <p className="text-klyth-cream/90 font-sans">
                We provide the key: the technology, the community, the expert access. You build the monolith: the long-term habits, the mindset shifts, the sustainable wealth systems that last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Detailed Visual Blueprint Monolith Component */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center relative min-h-[350px]">
            <motion.div
              style={!isMobile ? { y: yOffset, rotateX, rotateY, scale } : { scale }}
              className="w-full max-w-md aspect-[3/4] relative preserve-3d flex items-center justify-center"
            >
              {/* HUD / Blueprint scope */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15">
                <div className="absolute w-[300px] h-[300px] border border-dashed border-klyth-cream/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[200px] h-[200px] border border-klyth-cream/10 rounded-full" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-klyth-cream/10" />
                <div className="absolute left-0 right-0 top-1/2 h-px bg-klyth-cream/10" />
              </div>

              {/* The Premium Monolith */}
              <motion.div
                className="w-48 sm:w-56 h-72 sm:h-[350px] bg-gradient-to-b from-[#1c1c1f] via-[#151517] to-klyth-charcoal rounded-[28px] border border-klyth-ghost/70 shadow-[0_0_40px_rgba(74,93,35,0.1)] flex flex-col justify-between p-5 relative overflow-hidden backdrop-blur-md"
                whileHover={{
                  borderColor: "rgba(226, 184, 66, 0.15)",
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 top-8 flex justify-between px-5 pointer-events-none opacity-40">
                  <span className="font-mono text-[8px] text-klyth-cream/40">SYS.REV_4</span>
                  <span className="font-mono text-[8px] text-klyth-cream/40">LON_88.1</span>
                </div>

                <div className="absolute inset-x-5 top-20 bottom-20 border border-dashed border-klyth-cream/10 rounded-xl pointer-events-none flex flex-col justify-between p-3">
                  <div className="w-1.5 h-1.5 border-t border-l border-klyth-cream/30" />
                  <div className="self-end w-1.5 h-1.5 border-b border-r border-klyth-cream/30" />
                </div>

                <div className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-klyth-olive/40 to-transparent" />

                {/* Glowing Core Slot */}
                <div className="m-auto relative z-10 w-14 h-20 border border-klyth-gold/25 rounded-full flex flex-col items-center justify-center bg-klyth-charcoal/95">
                  <motion.div
                    className="w-5 h-5 bg-klyth-gold rounded shadow-[0_0_10px_rgba(226,184,66,0.4)]"
                    animate={{
                      scale: [0.95, 1.05, 0.95],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="mt-2.5 w-1 h-5 bg-klyth-gold/20 rounded-full" />
                </div>

                <div className="flex justify-between items-center pointer-events-none relative z-10 mt-auto">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-klyth-olive/60" />
                    <span className="w-1 h-1 rounded-full bg-klyth-gold/60" />
                  </div>
                  <span className="font-mono text-[8px] text-klyth-cream/40 tracking-wider">KLYTH_ENGINE_ACTIVE</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}