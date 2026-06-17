"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface MockEvent {
  title: string;
  type: string;
  tag: string;
}

export default function EcosystemPillar2() {
  const mockEvents: MockEvent[] = [
    { title: "Mastering the 50/30/20 Rule", type: "Virtual Workshop", tag: "Klyth Network" },
    { title: "First Salary Playbook", type: "Exclusive AMA", tag: "Guest Creator" },
    { title: "Navigating Tech Layoffs: Financial Defense", type: "Live Q&A", tag: "Wealth Strategist" },
    { title: "Index Funds Deconstructed", type: "Masterclass", tag: "Klyth Mentorship Team" },
  ];

  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4"
          >
            Live Workshops & Events: Connecting You With the Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-color-klyth-cream/70 font-sans max-w-2xl mx-auto"
          >
            Direct virtual and offline networking masterclasses led by SEBI-registered advisors, founders, and domain experts.
          </motion.p>
        </div>

        {/* Horizontal drag carousel */}
        <div className="overflow-x-auto pb-4 -mx-6 sm:mx-0">
          <motion.div className="flex gap-4 sm:gap-6 px-6 sm:px-0 min-w-max">
            {mockEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="w-72 sm:w-80 klyth-glass rounded-[28px] border border-color-klyth-ghost flex-shrink-0 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-color-klyth-gold mb-2">
                    {event.type}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-color-klyth-cream/60 font-sans mb-4">
                    {event.tag}
                  </p>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-color-klyth-olive"
                  >
                    Learn More <i className="fa-solid fa-arrow-right text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}