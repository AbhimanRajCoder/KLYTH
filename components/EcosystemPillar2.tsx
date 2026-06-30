"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { MOCK_EVENTS } from "@/lib/eventsService";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemPillar2() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; 
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const events = MOCK_EVENTS.map(e => ({
    title: e.title,
    type: e.category.charAt(0).toUpperCase() + e.category.slice(1),
    host: e.host.name
  }));

  return (
    <section className="relative w-full py-48 px-0 bg-klyth-charcoal z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center px-6 text-center mb-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: premiumEase }}
        >
          <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6 block">
            Expert Access
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-klyth-cream">
            Connecting You With <span className="italic">Credibility</span>, Not Hype.
          </h2>
          <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            We bridge the massive gap between curiosity and credibility. The internet is full of noise, but Klyth filters it out by hosting highly interactive virtual and offline events featuring top finance influencers, SEBI-registered advisors, and industry professionals. These sessions give you direct, unfiltered access to those who have actually mastered the financial landscape. Ask your real questions, get grounded answers, and leave with strategies that actually apply to your life.
          </p>

          <Link href="/events" className="inline-block bg-klyth-olive text-klyth-cream font-sans font-medium text-sm py-4 px-10 rounded-full transition-all duration-500 hover:-translate-y-1 shadow-[0_0_20px_rgba(74,93,35,0.1)] hover:shadow-[0_0_40px_rgba(74,93,35,0.3)]">
            Explore All Events
          </Link>
        </motion.div>
      </div>

      {/* Draggable Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.2, ease: premiumEase }}
        className="w-full relative z-10"
      >
        {/* Soft edge gradients for premium feel */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-klyth-charcoal to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-klyth-charcoal to-transparent z-20 pointer-events-none"></div>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-8 overflow-x-auto px-6 md:px-[calc(50vw-200px)] pb-16 pt-8 hide-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[400px] klyth-glass p-10 rounded-2xl flex flex-col justify-between aspect-[4/3] transition-all duration-700 ease-out hover:scale-[1.03] hover:mx-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex-shrink-0 select-none group"
            >
              <div className="flex flex-col gap-2 mb-8">
                <span className="font-sans text-klyth-gold/70 text-[10px] tracking-[0.2em] uppercase font-medium">
                  {event.type}
                </span>
              </div>
              <h3 className="font-serif text-3xl text-klyth-cream leading-tight mb-auto line-clamp-3 transition-colors duration-500 group-hover:text-white">
                {event.title}
              </h3>
              <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="font-sans text-klyth-cream/30 text-xs uppercase tracking-widest">Hosted by</span>
                <span className="font-sans text-klyth-cream/70 text-sm font-medium">{event.host}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}