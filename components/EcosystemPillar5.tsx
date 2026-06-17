"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function EcosystemPillar5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const timelineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section ref={sectionRef} className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-color-klyth-olive/50 bg-color-klyth-olive/10 mb-6">
              <i className="fa-solid fa-flask text-color-klyth-olive text-xs animate-pulse" />
              <span className="font-sans text-xs font-medium text-color-klyth-olive tracking-wider uppercase">
                In Beta
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Action-Oriented Cohort Sprints: From Theory to Execution
            </h2>
            <p className="text-base sm:text-lg text-color-klyth-cream/70 font-sans leading-relaxed">
              Time-bound, milestone-driven sprints where squads build real portfolios, execute tax setups, and solve financial blueprints alongside active mentors.
            </p>
          </motion.div>

          {/* Timeline visual */}
          <div className="flex items-center justify-center">
            <motion.div
              className="w-full max-w-xs"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline bar */}
              <div className="relative h-80">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-color-klyth-ghost/50" />
                    <motion.div
  className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-color-klyth-gold"
  style={{ height: timelineProgress }}
  transition={{ duration: 0.1 }}
/>

                {/* Timeline steps */}
                <div className="relative h-full flex flex-col justify-between">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className="w-1/2 pr-8 text-right hidden lg:block">
                        <p className="text-sm font-semibold">Step {step}</p>
                      </div>
                      <motion.div
                        className="w-6 h-6 bg-color-klyth-gold rounded-full z-10 border-4 border-color-klyth-charcoal"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: step * 0.1 }}
                      />
                      <div className="w-1/2 pl-8">
                        <p className="text-sm font-semibold">Milestone {step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}