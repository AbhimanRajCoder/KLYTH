"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Pillar2Events() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const mockEvents = [
    {
      id: 1,
      title: "Mastering the 50/30/20 Rule",
      format: "Virtual Workshop",
      host: "Klyth Network",
    },
    {
      id: 2,
      title: "First Salary Playbook",
      format: "Exclusive AMA",
      host: "Guest Creator",
    },
    {
      id: 3,
      title: "Navigating Tech Layoffs",
      format: "Live Q&A",
      host: "Wealth Strategist",
    }
  ];

  return (
    <section 
      className="relative w-full py-24 md:py-32 bg-klyth-charcoal z-10"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        
        {/* Soft Depth Lighting */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          
          {/* Left Visual Side - Event Stack */}
          <div className="relative w-full flex flex-col items-center justify-center order-1 md:order-1 h-auto perspective-1000">
            <div className="w-[90%] sm:w-[85%] max-w-sm flex flex-col gap-4">
              {mockEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30, y: 10 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: 10 }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                  className="w-full klyth-glass rounded-3xl p-6 flex flex-col justify-between border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] hover:z-20 hover:border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[8px] uppercase tracking-widest px-3 py-1 border border-klyth-gold/30 text-klyth-gold bg-klyth-gold/5 rounded-full select-none">
                      Upcoming
                    </span>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-cream/30">
                      {event.format}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl text-klyth-cream leading-tight mb-4">
                    {event.title}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-col">
                    <span className="font-sans text-[8px] uppercase tracking-widest text-klyth-cream/30 mb-1">Hosted by</span>
                    <span className="font-sans text-klyth-cream/70 text-xs font-medium">{event.host}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-2">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Expert Access
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 2: Live Workshops & Events
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
              Connecting You With <span className="italic font-light">Credibility</span>, <br className="hidden lg:block" /> Not Hype.
            </h2>
            <div className="mb-4 md:mb-8">
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md opacity-0 pointer-events-none">
                Placeholder
              </span>
            </div>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light mb-8 -mt-12 md:-mt-16">
              We bridge the massive gap between curiosity and credibility. The internet is full of noise, but Klyth filters it out by hosting highly interactive virtual and offline events featuring top finance influencers, SEBI-registered advisors, and industry professionals. Ask your real questions, get grounded answers, and leave with strategies that actually apply to your life.
            </p>
            <div>
              <Link href="/events" className="klyth-btn klyth-btn-primary">
                Explore All Events
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
