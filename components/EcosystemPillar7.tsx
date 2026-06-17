"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EcosystemPillar7() {
  const cards = [1, 2, 3];

  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* News cards visual */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-xs h-80">
              {cards.map((card, idx) => (
                <motion.div
  key={idx}
  className="absolute w-full klyth-glass rounded-[24px] border border-color-klyth-ghost p-5"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  animate={{
    y: [idx * -10, idx * -10 - 10, idx * -10],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: idx * 0.5,
  }}
  whileHover={{
    y: idx * -10 - 15,
  }}
  style={{
    top: `${idx * 20}px`,
    zIndex: cards.length - idx,
  }}
>
                  <div className="w-16 h-16 bg-color-klyth-ghost/30 rounded-xl mb-4 flex items-center justify-center">
                    <i className="fa-solid fa-newspaper text-2xl text-color-klyth-cream/50" />
                  </div>
                  <div className="h-3 bg-color-klyth-ghost/30 rounded-full mb-2 w-3/4" />
                  <div className="h-3 bg-color-klyth-ghost/30 rounded-full mb-2 w-full" />
                  <div className="h-3 bg-color-klyth-ghost/30 rounded-full w-5/6" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Bite-Sized Financial Intelligence
            </h2>
            <p className="text-base sm:text-lg text-color-klyth-cream/70 font-sans leading-relaxed">
              A weekly briefing translating complex macroeconomic currents, policy, and venture trends into simple, high-signal ideas for youth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}