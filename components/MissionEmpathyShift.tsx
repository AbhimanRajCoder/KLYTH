"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MissionEmpathyShift() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden"
    >
      {/* Background dimming */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.12 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-center mb-10"
        >
          Your financial anxiety is not your fault. It is a design flaw.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-color-klyth-cream/80 leading-relaxed"
        >
          <p className="mb-6">
            If you feel overwhelmed looking at your bank account, unsure where to even start, it's not a failure of your discipline or intelligence.
          </p>
          <p className="mb-6 relative inline-block">
            <motion.span
              className="relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              You are not 'bad with money.'
            </motion.span>
            <motion.span
              className="absolute left-0 right-0 bottom-0 h-full bg-color-klyth-gold/20 rounded"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1, transformOrigin: "left" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            />
          </p>
          <p className="mb-6">
            The confusion is intentional. The financial industry thrives on complexity, jargon, and gatekeeping.
          </p>
          <p>
            We are ending the era of financial gatekeeping. Klyth is where the anxiety stops, and the momentum begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}