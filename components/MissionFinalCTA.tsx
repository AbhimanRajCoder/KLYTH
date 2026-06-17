"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MissionFinalCTA() {
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
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
          Enough theory. Let's build the system.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-color-klyth-cream/70 font-sans max-w-2xl mx-auto mb-10">
          We know exactly why the system is broken. Now, step inside and see exactly how we are fixing it.
        </p>
        <Link href="/ecosystem">
          <motion.button
            className="inline-flex items-center gap-3 px-10 py-5 bg-color-klyth-olive text-color-klyth-cream font-sans font-semibold text-base rounded-full hover:shadow-[0_0_40px_rgba(74,93,35,0.4)] transition-all duration-300 active:scale-95 animate-pulse-breathing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See How We're Rewiring It
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="fa-solid fa-arrow-right text-sm" />
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}