"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EcosystemFinalCTA() {
  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-color-klyth-olive/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center klyth-glass rounded-[32px] p-10 sm:p-16 border border-color-klyth-ghost"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
          Stop surviving. Start scaling.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-color-klyth-cream/70 font-sans max-w-2xl mx-auto mb-10">
          The ecosystem is built. The community is waiting. It's time to replace financial anxiety with unstoppable momentum.
        </p>
        <Link href="/join">
          <motion.button
            className="inline-flex items-center gap-3 px-10 py-5 bg-color-klyth-olive text-color-klyth-cream font-sans font-semibold text-base rounded-full hover:shadow-[0_0_40px_rgba(74,93,35,0.4)] transition-all duration-300 active:scale-95 animate-pulse-breathing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Step Into the Ecosystem
            <i className="fa-solid fa-arrow-right text-sm" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}