"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_EVENTS } from "@/lib/eventsService";
import { Event } from "@/lib/types";
import KlythLiftCard from "@/components/KlythLiftCard";
import Countdown from "@/components/Countdown";
import PastArchiveCarousel from "@/components/PastArchiveCarousel";

// Statistics Counter Helper
function StatCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(target / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center p-6 bg-[#1C1C1E]/30 border border-[#2C2C2E] rounded-2xl backdrop-blur-md">
      <span className="font-sans font-bold text-3xl md:text-4xl text-klyth-cream mb-2">
        {count.toLocaleString()}+
      </span>
      <span className="font-sans text-[10px] uppercase tracking-widest text-klyth-cream/40 text-center">
        {label}
      </span>
    </div>
  );
}

// Badge Renderer
function StatusBadge({ status }: { status: Event["status"] }) {
  const styles = {
    upcoming: "border-klyth-gold/30 text-klyth-gold bg-klyth-gold/5",
    live: "border-[#4A5D23]/30 text-klyth-cream bg-klyth-olive shadow-[0_0_15px_rgba(74,93,35,0.4)] animate-pulse",
    "almost-full": "border-[#E2B842]/40 text-[#EDCF72] bg-[#E2B842]/10",
    "sold-out": "border-white/5 text-klyth-cream/40 bg-white/5",
    cancelled: "border-klyth-oxblood/30 text-klyth-oxblood bg-klyth-oxblood/5",
    "registration-closed": "border-white/5 text-klyth-cream/30 bg-white/[0.02]"
  };

  const labels = {
    upcoming: "Upcoming",
    live: "Live Now",
    "almost-full": "Almost Full",
    "sold-out": "Sold Out",
    cancelled: "Cancelled",
    "registration-closed": "Closed"
  };

  return (
    <span className={`font-sans text-[8px] uppercase tracking-widest px-3 py-1 border rounded-full select-none ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

// Main Page
export default function EventsHub() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showCalendarModal, setShowCalendarModal] = useState<string | null>(null);

  // Aurora particles mock array
  const particles = useMemo(() => Array.from({ length: 15 }), []);

  // Filter logic
  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((e) => {
      // 1. Search Query Match
      const matchesSearch =
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.subtitle.toLowerCase().includes(search.toLowerCase()) ||
        e.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));

      if (!matchesSearch) return false;

      // 2. Category / Filter Chip Match
      if (selectedFilter === "all") return true;
      if (selectedFilter === "featured") return e.featured;
      if (selectedFilter === "virtual") return e.format === "virtual";
      if (selectedFilter === "offline") return e.format === "offline";
      if (selectedFilter === "upcoming") return e.status !== "registration-closed";
      if (selectedFilter === "past") return e.status === "registration-closed";
      if (selectedFilter === "ama") return e.category === "ama";
      if (selectedFilter === "workshop") return e.category === "workshop";
      if (selectedFilter === "masterclass") return e.category === "masterclass";

      return true;
    });
  }, [search, selectedFilter]);

  // Separate Active and Past events for rendering
  const activeEvents = useMemo(() => {
    return filteredEvents.filter(e => e.status !== "registration-closed");
  }, [filteredEvents]);

  const pastEvents = useMemo(() => {
    return filteredEvents.filter(e => e.status === "registration-closed");
  }, [filteredEvents]);

  const featuredEvent = useMemo(() => {
    return MOCK_EVENTS.find(e => e.featured);
  }, []);

  return (
    <main className="min-h-screen bg-klyth-charcoal text-klyth-cream relative overflow-hidden py-20 px-6">
      
      {/* 1. Cinematic Hero Background & Aurora Grains */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-klyth-olive/5 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-klyth-gold/5 blur-[120px] mix-blend-screen" />
        
        {/* Particle Overlay */}
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full blur-[1px] animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* 2. Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto text-center h-[55vh] flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
            Klyth Experiences
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Learn together. <br />
            <span className="italic text-klyth-cream/90 font-normal">Grow together.</span>
          </h1>
          <p className="font-sans text-klyth-cream/60 text-base md:text-lg max-w-[65ch] leading-relaxed font-light">
            Step into the cultural layer. Join live masterclasses, interactive workshops, exclusive creator AMAs, and founder sessions designed to transform financial knowledge into real-world momentum.
          </p>
        </motion.div>
      </section>

      {/* 3. Featured Event Section */}
      {featuredEvent && (
        <section className="relative z-10 max-w-6xl mx-auto mb-32">
          <span className="font-sans text-[10px] uppercase tracking-widest text-klyth-gold font-semibold mb-4 block">
            Featured Experience
          </span>
          <Link href={`/events/${featuredEvent.slug}`}>
            <KlythLiftCard glowColor="gold" className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-[16/10] relative rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-2xl">
                <Image
                  src={featuredEvent.coverImage}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
                <div className="flex gap-3 items-center">
                  <StatusBadge status={featuredEvent.status} />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-gold bg-klyth-gold/10 px-3 py-1 rounded-full border border-klyth-gold/20">
                    {featuredEvent.category}
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream leading-tight">
                  {featuredEvent.title}
                </h2>
                <p className="font-sans text-sm text-klyth-cream/70 leading-relaxed font-light">
                  {featuredEvent.subtitle}
                </p>

                {/* Seats left and countdown */}
                <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-white/5 w-full">
                  <div>
                    <span className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40">
                      Seats Remaining
                    </span>
                    <span className="font-sans text-base font-bold text-klyth-cream">
                      {featuredEvent.capacity - featuredEvent.registered} / {featuredEvent.capacity}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40 mb-1">
                      Event Commencing
                    </span>
                    <Countdown targetDate={featuredEvent.date} showLabels={false} />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between w-full">
                  <span className="font-sans text-xs text-klyth-cream/60">
                    Host: {featuredEvent.host.name}
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-klyth-gold border border-klyth-gold/30 px-6 py-3 rounded-full hover:bg-klyth-gold/10 transition-colors duration-300">
                    Enter Platform
                  </span>
                </div>
              </div>
            </KlythLiftCard>
          </Link>
        </section>
      )}

      {/* 4. Event Statistics Section */}
      <section className="relative z-10 max-w-6xl mx-auto mb-32 grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCounter target={12} label="Upcoming Events" />
        <StatCounter target={4800} label="Registered Members" />
        <StatCounter target={34} label="Countries Represented" />
        <StatCounter target={250} label="Hours of Live Learning" />
      </section>

      {/* 5. Sticky Search & Filters Bar */}
      <section className="relative z-20 max-w-6xl mx-auto mb-16">
        <div className="sticky top-6 p-4 bg-[#1C1C1E]/80 backdrop-blur-xl border border-[#2C2C2E] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-klyth-cream/30 text-xs" />
            <input
              type="text"
              placeholder="Search experiences..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/40 border border-white/5 rounded-full pl-10 pr-4 py-2.5 text-xs text-klyth-cream placeholder:text-klyth-cream/30 focus:outline-none focus:border-klyth-olive focus:ring-1 focus:ring-klyth-olive transition-all duration-300"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {[
              { id: "all", label: "All" },
              { id: "featured", label: "Featured" },
              { id: "upcoming", label: "Upcoming" },
              { id: "past", label: "Past" },
              { id: "masterclass", label: "Masterclasses" },
              { id: "workshop", label: "Workshops" },
              { id: "ama", label: "AMAs" },
              { id: "virtual", label: "Virtual" },
              { id: "offline", label: "Offline" }
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setSelectedFilter(chip.id)}
                className={`flex-shrink-0 font-sans text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedFilter === chip.id
                    ? "bg-klyth-olive border-transparent text-klyth-cream shadow-[0_0_15px_rgba(74,93,35,0.35)]"
                    : "border-white/5 bg-[#1C1C1E]/30 text-klyth-cream/60 hover:border-white/10 hover:text-klyth-cream"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Upcoming Events Grid */}
      <section className="relative z-10 max-w-6xl mx-auto mb-32">
        <div className="flex flex-col items-center md:items-start mb-12">
          <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-gold text-[10px] mb-2">
            Secure Your Spot
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream">
            Next in the Ecosystem
          </h2>
        </div>

        {/* Empty State */}
        {activeEvents.length === 0 ? (
          <div className="w-full flex justify-center py-20">
            <div className="max-w-md w-full bg-[#1C1C1E]/50 border border-[#2C2C2E] backdrop-blur-md rounded-3xl p-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <i className="fa-regular fa-calendar-xmark text-klyth-cream/40 text-xl" />
              </div>
              <h3 className="font-serif text-2xl text-klyth-cream mb-3">
                We're brewing something big.
              </h3>
              <p className="font-sans text-xs text-klyth-cream/50 leading-relaxed mb-8">
                No live experiences match your filters at the moment. Join the ecosystem and you'll be the first to know.
              </p>
              <Link
                href="#newsletter"
                className="font-sans text-[10px] uppercase tracking-widest text-klyth-cream bg-klyth-olive px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(74,93,35,0.3)] hover:scale-[1.02] transition-transform duration-300"
              >
                Join Ecosystem
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeEvents.map((event) => {
              const eventDate = new Date(event.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric"
              });

              return (
                <KlythLiftCard key={event.id} glowColor="olive" className="flex flex-col h-full p-6">
                  {/* Card Image Cover */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl relative mb-6 bg-black/40">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="font-sans text-[8px] tracking-widest uppercase px-3 py-1 bg-black/60 border border-white/10 rounded-full text-klyth-cream/80">
                        {event.format}
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-[10px] tracking-wider text-klyth-gold uppercase">
                      {eventDate} • {event.duration}
                    </span>
                    <StatusBadge status={event.status} />
                  </div>

                  <h3 className="font-serif text-xl text-klyth-cream mb-2 line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="font-sans text-xs text-klyth-cream/50 line-clamp-2 leading-relaxed mb-4">
                    {event.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="font-sans text-[8px] text-klyth-cream/40 border border-white/5 bg-white/[0.02] px-2.5 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Seats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div>
                      <span className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40">
                        Capacity Left
                      </span>
                      <span className="font-sans text-xs font-bold text-klyth-cream">
                        {event.capacity - event.registered} seats
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Add Calendar Trigger */}
                      <button
                        onClick={() => setShowCalendarModal(event.id)}
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Add to calendar options"
                      >
                        <i className="fa-regular fa-calendar-plus text-xs text-klyth-cream/70" />
                      </button>

                      <Link
                        href={`/events/${event.slug}`}
                        className="font-sans text-[9px] uppercase tracking-widest text-klyth-cream bg-klyth-olive px-5 py-2.5 rounded-full hover:bg-klyth-olive/90 transition-colors"
                      >
                        RSVP
                      </Link>
                    </div>
                  </div>

                  {/* Calendar Modal dropdown simulation */}
                  <AnimatePresence>
                    {showCalendarModal === event.id && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <div className="bg-[#1C1C1E] border border-[#2C2C2E] rounded-3xl p-6 max-w-xs w-full flex flex-col gap-3">
                          <h4 className="font-serif text-lg text-klyth-cream mb-2">Sync Calendar</h4>
                          <a
                            href={event.calendarLinks.google}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs text-klyth-cream/80 hover:text-klyth-gold py-2 border-b border-white/5"
                          >
                            Google Calendar
                          </a>
                          <a
                            href={event.calendarLinks.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs text-klyth-cream/80 hover:text-klyth-gold py-2 border-b border-white/5"
                          >
                            Apple Calendar
                          </a>
                          <a
                            href={event.calendarLinks.outlook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs text-klyth-cream/80 hover:text-klyth-gold py-2 border-b border-white/5"
                          >
                            Outlook
                          </a>
                          <button
                            onClick={() => setShowCalendarModal(null)}
                            className="font-sans text-[10px] uppercase tracking-widest text-klyth-cream/50 bg-white/5 py-2.5 rounded-full mt-4 hover:bg-white/10"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </KlythLiftCard>
              );
            })}
          </div>
        )}
      </section>

      {/* 7. Past Archive Section */}
      <section className="relative z-10 max-w-6xl mx-auto mb-32">
        <div className="flex flex-col items-center md:items-start mb-12 px-6">
          <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-cream/40 text-[10px] mb-2">
            The Historical Layer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream">
            Previous Masterclasses
          </h2>
        </div>

        {pastEvents.length === 0 ? (
          <p className="font-sans text-xs text-klyth-cream/40 px-6">No previous experiences found.</p>
        ) : (
          <PastArchiveCarousel events={pastEvents} />
        )}
      </section>

      {/* 8. Newsletter Footer CTA */}
      <section id="newsletter" className="relative z-10 max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-b from-[#1C1C1E]/80 to-[#101011]/90 border border-[#2C2C2E] backdrop-blur-3xl rounded-3xl p-10 md:p-16 text-center flex flex-col items-center shadow-[0_0_80px_rgba(74,93,35,0.08)]">
          <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-gold font-semibold mb-4">
            Join the Roster
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-klyth-cream mb-6">
            Never miss another event.
          </h2>
          <p className="font-sans text-sm text-klyth-cream/50 max-w-[50ch] leading-relaxed mb-8 font-light">
            Exclusivity thrives on timing. Secure your entry to early releases, offline roundtables, and VIP credentials.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed! Your invitation is pending review.");
            }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              required
              type="email"
              placeholder="Enter your private email"
              className="flex-grow bg-black/40 border border-white/5 rounded-full px-6 py-4 text-xs text-klyth-cream placeholder:text-klyth-cream/30 focus:outline-none focus:border-klyth-olive focus:ring-1 focus:ring-klyth-olive transition-all"
            />
            <button
              type="submit"
              className="font-sans text-[10px] uppercase tracking-widest font-semibold text-klyth-cream bg-klyth-olive hover:bg-klyth-olive/90 border border-transparent px-8 py-4 rounded-full shadow-[0_0_20px_rgba(74,93,35,0.25)] hover:scale-[1.02] transition-transform duration-300"
            >
              Join Community
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
