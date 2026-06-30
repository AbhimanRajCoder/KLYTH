"use client";

import React from "react";
import Link from "next/link";
import { MOCK_EVENTS } from "@/lib/eventsService";

export default function EcosystemCommunityLayer() {
  // Get only active (non-closed) events for display
  const activeEvents = MOCK_EVENTS.filter(e => e.status !== "registration-closed").slice(0, 3);

  const statusStyles: Record<string, string> = {
    upcoming: "border-klyth-gold/30 text-klyth-gold bg-klyth-gold/5",
    live: "border-klyth-olive/30 text-klyth-cream bg-klyth-olive shadow-[0_0_12px_rgba(74,93,35,0.4)]",
    "almost-full": "border-klyth-gold/40 text-klyth-gold bg-klyth-gold/10",
    "sold-out": "border-white/5 text-klyth-cream/40 bg-white/5",
  };

  const statusLabels: Record<string, string> = {
    upcoming: "Upcoming",
    live: "Live Now",
    "almost-full": "Almost Full",
    "sold-out": "Sold Out",
  };

  return (
    <section className="relative w-full bg-[#0A0A0B] py-32 md:py-48 px-6 z-10 flex flex-col gap-32 md:gap-48">
      
      {/* ---------------------------------------------------- */}
      {/* Phase 1: Expert Access */}
      {/* ---------------------------------------------------- */}
      <div className="relative w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 relative z-20">
          <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6 block">
            Expert Access
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold mb-8 text-klyth-cream tracking-tight leading-tight">
            Connecting You With <span className="italic font-light">Credibility</span>, <br className="hidden md:block" /> Not Hype.
          </h2>
          <p className="font-sans text-klyth-cream/50 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            We bridge the massive gap between curiosity and credibility. Klyth hosts highly interactive virtual and offline events featuring top finance influencers, SEBI-registered advisors, and industry professionals. Ask your real questions, get grounded answers, and leave with strategies that actually apply to your life.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {activeEvents.map((event) => {
            const eventDate = new Date(event.date).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric"
            });

            return (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group klyth-glass rounded-[2rem] p-6 md:p-8 flex flex-col justify-between border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-500 hover:border-white/10 hover:-translate-y-1"
              >
                {/* Top: Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-sans text-[8px] uppercase tracking-widest px-3 py-1 border rounded-full select-none ${statusStyles[event.status] || ""}`}>
                    {statusLabels[event.status] || event.status}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-cream/30">
                    {event.format}
                  </span>
                </div>

                {/* Category */}
                <span className="font-sans text-klyth-gold/60 text-[10px] tracking-[0.2em] uppercase font-medium mb-3">
                  {event.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-klyth-cream leading-tight mb-3 group-hover:text-white transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Subtitle */}
                <p className="font-sans text-xs text-klyth-cream/40 leading-relaxed line-clamp-2 mb-6">
                  {event.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {event.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="font-sans text-[8px] text-klyth-cream/30 border border-white/5 bg-white/[0.02] px-2.5 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bottom: Host + Date */}
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-sans text-[8px] uppercase tracking-widest text-klyth-cream/30 mb-1">Hosted by</span>
                    <span className="font-sans text-klyth-cream/70 text-sm font-medium">{event.host.name}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-sans text-[8px] uppercase tracking-widest text-klyth-cream/30 mb-1">Date</span>
                    <span className="font-sans text-klyth-gold/70 text-xs font-medium">{eventDate}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link href="/events" className="klyth-btn klyth-btn-primary">
          Explore All Events
        </Link>
      </div>


      {/* ---------------------------------------------------- */}
      {/* Phase 2: Peer Accountability */}
      {/* ---------------------------------------------------- */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center px-6">
        {/* Soft abstract node background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
          <svg className="absolute w-[800px] h-[800px] stroke-white/5" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" fill="none" strokeWidth="0.2" />
             <circle cx="50" cy="50" r="25" fill="none" strokeWidth="0.1" />
             <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" strokeWidth="0.1" />
          </svg>
          <div className="absolute w-[600px] h-[600px] bg-klyth-olive/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-3xl w-full flex flex-col items-center text-center relative z-10 klyth-glass p-12 md:p-20 rounded-[3rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
          <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6 block">
            Peer Accountability
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-klyth-cream leading-tight tracking-tight">
            Breaking the Money Taboo, <br className="hidden md:block" /> <span className="italic font-light text-klyth-cream/80">Together.</span>
          </h2>
          <div>
            <span className="font-sans text-klyth-gold/80 text-[11px] uppercase tracking-widest font-medium mb-10 px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block">
              Currently in beta
            </span>
          </div>
          <p className="font-sans text-klyth-cream/50 text-lg md:text-xl leading-relaxed font-light">
            Wealth grows best when knowledge is shared openly. Beyond our core digital platform, we provide a moderated, highly active peer-to-peer ecosystem where young Indians can safely discuss personal finance. Through dedicated forums and real-time channels, users can celebrate milestones, ask "stupid" questions without fear of judgment, and learn directly from the real-world financial journeys and mistakes of their peers. You are never navigating this alone.
          </p>
        </div>
      </div>

    </section>
  );
}
