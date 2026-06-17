"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Bubble {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function EcosystemPillar6() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < 6; i++) {
      newBubbles.push({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        size: Math.random() * 40 + 40,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 2,
      });
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-color-klyth-olive/50 bg-color-klyth-olive/10 mb-6 mx-auto">
            <i className="fa-solid fa-flask text-color-klyth-olive text-xs animate-pulse" />
            <span className="font-sans text-xs font-medium text-color-klyth-olive tracking-wider uppercase">
              In Beta
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            The Community Ecosystem: Breaking the Money Taboo
          </h2>
          <p className="text-base sm:text-lg text-color-klyth-cream/70 font-sans max-w-2xl mx-auto">
            A highly moderated peer network for open, structured conversations about earnings, equity, growth experiments, and wealth frameworks.
          </p>
        </div>

        {/* Bubbles visual */}
        <div className="relative h-64 sm:h-80">
          {bubbles.map((bubble, idx) => (
            <motion.div
              key={idx}
              className="absolute klyth-glass rounded-full flex items-center justify-center border border-color-klyth-ghost"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [
                  `${bubble.x}%`,
                  `${bubble.x + (Math.random() - 0.5) * 10}%`,
                  `${bubble.x}%`,
                ],
                y: [
                  `${bubble.y}%`,
                  `${bubble.y + (Math.random() - 0.5) * 10}%`,
                  `${bubble.y}%`,
                ],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bubble.delay,
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 30px rgba(74,93,35,0.3)",
              }}
            >
              <i className="fa-solid fa-comment text-color-klyth-cream/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}