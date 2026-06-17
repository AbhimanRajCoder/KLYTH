"use client";

import React, { useRef } from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";

export default function EcosystemPillar4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 0.5]);

  return (
    <section ref={sectionRef} className="relative w-full py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="klyth-glass rounded-[32px] p-10 sm:p-16 border border-color-klyth-ghost"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-color-klyth-cream">
            Institutional Partnerships: Bridging the Gap
          </h2>
          <p className="text-base sm:text-lg text-color-klyth-cream/70 font-sans leading-relaxed max-w-2xl mx-auto">
            Partnering directly with forward-looking universities to integrate experiential financial readiness programs into modern student curricula and campus life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}