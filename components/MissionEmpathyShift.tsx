"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionEmpathyShift() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.08, 0.03]);
  const accentLineHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-klyth-charcoal text-klyth-cream py-16 sm:py-24 px-6 sm:px-12 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{
            scale: glowScale,
            opacity: glowOpacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-klyth-gold/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Line Graphic */}
          <div className="hidden md:block md:col-span-1 relative min-h-[250px]">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-klyth-ghost" />
            <motion.div
              style={{ height: accentLineHeight }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-klyth-gold to-klyth-olive origin-top"
            />
          </div>

          {/* Right Text Content */}
          <div className="md:col-span-11 pl-0 md:pl-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight mb-8 text-klyth-cream"
            >
              Your financial anxiety is{" "}
              <span className="text-klyth-gold font-bold">
                not your fault
              </span>
              . It is a{" "}
              <span className="text-klyth-cream font-bold italic">
                design flaw
              </span>
              .
            </motion.h2>

            {/* Paragraphs with custom styling */}
            <div className="font-sans text-base sm:text-lg md:text-xl text-klyth-cream/70 leading-relaxed font-light space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                If you feel overwhelmed looking at your bank account, unsure where to even start, it&apos;s not a failure of your discipline or intelligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative py-4 px-6 my-6 bg-klyth-obsidian/45 border border-klyth-ghost/40 rounded-xl md:-ml-6"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-klyth-gold rounded-l-xl" />
                <p className="font-serif italic text-xl sm:text-2xl text-klyth-cream select-none leading-normal">
                  <span className="relative z-10 text-klyth-cream">
                    You are not &apos;bad with money.&apos;
                  </span>
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                The confusion is intentional. The financial industry thrives on complexity, jargon, and gatekeeping.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-klyth-cream font-medium"
              >
                We are ending the era of financial gatekeeping. Klyth is where the anxiety stops, and the momentum begins.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}