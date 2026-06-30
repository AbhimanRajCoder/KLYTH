"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/lib/types";

interface PastArchiveCarouselProps {
  events: Event[];
}

export default function PastArchiveCarousel({ events }: PastArchiveCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  if (events.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scroll indicator overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-klyth-charcoal to-transparent pointer-events-none z-10 hidden md:block" />

      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-8 px-6 select-none scrollbar-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {events.map((event) => {
          const eventDate = new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          });

          return (
            <div
              key={event.id}
              className="flex-shrink-0 w-[300px] md:w-[380px] snap-start bg-[#1C1C1E]/40 backdrop-blur-md border border-[#2C2C2E] rounded-3xl p-6 flex flex-col group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 hover:border-klyth-gold/30"
            >
              {/* Cover Image Container */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl relative mb-6 bg-black/40">
                <Image
                  src={event.coverImage}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 380px"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[8px] tracking-[0.2em] uppercase px-3 py-1 bg-black/60 border border-white/10 rounded-full text-klyth-cream/60">
                    Archived
                  </span>
                </div>
              </div>

              {/* Event Metadata */}
              <span className="font-sans text-[10px] tracking-wider text-klyth-gold/70 uppercase mb-2">
                {eventDate} • {event.duration}
              </span>
              
              <h3 className="font-serif text-xl text-klyth-cream mb-3 line-clamp-1 group-hover:text-klyth-gold transition-colors duration-500">
                {event.title}
              </h3>
              
              <p className="font-sans text-xs text-klyth-cream/50 line-clamp-2 leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Actions */}
              <div className="mt-auto flex items-center justify-between">
                <span className="font-sans text-[9px] text-klyth-cream/40 uppercase tracking-widest">
                  Host: {event.host.name}
                </span>

                <button
                  disabled
                  className="font-sans text-[10px] uppercase tracking-widest text-klyth-cream/30 border border-white/5 bg-white/[0.02] px-4 py-2 rounded-full cursor-not-allowed select-none"
                  aria-label="Registration is closed for this past event"
                >
                  Sold Out
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
