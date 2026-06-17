"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function EcosystemPillar1() {
  const [isMobile, setIsMobile] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-color-klyth-gold/50 bg-color-klyth-gold/10 mb-6">
              <i className="fa-solid fa-lock text-color-klyth-gold text-xs" />
              <span className="font-sans text-xs font-medium text-color-klyth-gold tracking-wider uppercase">
                In Development
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              The Klyth App: Your Hyper-Personalized Financial Roadmap
            </h2>
            <p className="text-base sm:text-lg text-color-klyth-cream/70 font-sans leading-relaxed">
              Our flagship interface delivering gamified, behavior-adaptive micro-lessons, habit tracking, and structured financial rewiring tailored entirely to your personal goals, income, and risk tolerance.
            </p>
          </motion.div>

          {/* Visual */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm aspect-[9/16] relative"
            >
              {/* App frame */}
              <div className="absolute inset-0 klyth-glass rounded-[2rem] border border-color-klyth-ghost p-3">
                <div className="w-full h-full bg-color-klyth-charcoal rounded-[1.5rem] overflow-hidden relative">
                  {/* App content */}
                  <div className="p-6">
                    <div className="w-full h-8 bg-color-klyth-ghost/30 rounded-full mb-6" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 }}
                      className="w-full h-32 bg-color-klyth-olive/20 rounded-2xl mb-6 border border-color-klyth-olive/40"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      <div className="aspect-square bg-color-klyth-ghost/20 rounded-xl" />
                      <div className="aspect-square bg-color-klyth-ghost/20 rounded-xl" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-6 bg-color-klyth-olive/10 rounded-[2.5rem] blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}