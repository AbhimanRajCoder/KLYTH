"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function MissionMonolithConcept() {
  const [isMobile, setIsMobile] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const parallaxOffset = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-color-klyth-gold">
              The Identity
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
              The Key to the Monolith.
            </h2>
            <div className="mt-6 font-sans text-base sm:text-lg md:text-xl text-color-klyth-cream/80 leading-relaxed">
              <p className="mb-4">
                True financial freedom is not built on isolated hacks or get-rich-quick schemes.
              </p>
              <p className="mb-4">
                We named our platform Klyth as a conceptual blend of "Key" and "Monolith."
              </p>
              <p>
                We provide the key: the technology, the community, the expert access. You build the monolith: the long-term habits, the mindset shifts, the sustainable wealth systems that last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <motion.div
              style={!isMobile ? { y: parallaxOffset } : {}}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md aspect-square relative"
            >
              {/* Abstract monolith shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-40 sm:w-52 h-64 sm:h-80 bg-gradient-to-b from-color-klyth-obsidian to-color-klyth-charcoal rounded-3xl border border-color-klyth-ghost shadow-[0_0_60px_rgba(74,93,35,0.15)]"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Geometric lines on monolith */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute top-10 left-4 right-4 h-px bg-color-klyth-ghost/50" />
                    <div className="absolute top-24 left-4 right-4 h-px bg-color-klyth-ghost/50" />
                    <div className="absolute top-40 left-4 right-4 h-px bg-color-klyth-ghost/50" />
                    <div className="absolute top-56 left-4 right-4 h-px bg-color-klyth-ghost/50" />
                    <div className="absolute top-10 bottom-4 left-1/2 w-px -translate-x-1/2 bg-color-klyth-ghost/50" />
                  </div>

                  {/* Key slot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 border border-color-klyth-gold/60 rounded-full flex items-center justify-center bg-color-klyth-charcoal/80">
                    <motion.div
                      className="w-4 h-4 bg-color-klyth-gold rounded-sm"
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 sm:w-64 h-52 sm:h-64 bg-color-klyth-olive/15 rounded-full blur-[80px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}