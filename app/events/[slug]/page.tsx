"use client";

import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getEventBySlug, MOCK_EVENTS } from "@/lib/eventsService";
import Countdown from "@/components/Countdown";
import StickyRSVP from "@/components/StickyRSVP";
import KlythLiftCard from "@/components/KlythLiftCard";

// Dynamic Accordion for FAQ
function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#1C1C1E]/60 border border-[#2C2C2E] rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between text-klyth-cream font-sans font-medium text-sm focus:outline-none focus:text-klyth-gold"
      >
        <span>{question}</span>
        <i className={`fa-solid fa-chevron-down text-xs text-klyth-cream/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 font-sans text-xs text-klyth-cream/60 leading-relaxed font-light border-t border-white/5 bg-black/10">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

// Main Page Component
export default function EventDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false);

  const event = MOCK_EVENTS.find(e => e.slug === slug) || null;

  if (!event) {
    return (
      <div className="min-h-screen bg-klyth-charcoal text-klyth-cream flex flex-col justify-center items-center py-20">
        <h1 className="font-serif text-4xl mb-4">Experience Not Found</h1>
        <p className="font-sans text-xs text-klyth-cream/50 mb-8">This experience has closed or does not exist.</p>
        <Link href="/events" className="font-sans text-[10px] uppercase tracking-widest text-klyth-cream bg-klyth-olive px-6 py-3 rounded-full">
          Return to Events Hub
        </Link>
      </div>
    );
  }

  // Pre-calculated dates
  const eventDateString = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const eventTimeString = new Date(event.date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });

  // Testimonials Mock Data
  const testimonials = [
    {
      name: "Marcus Aurelius",
      role: "Capital Partner",
      review: "Klyth's masterclasses completely strip the corporate fluff and show actual engineering, design, and market frameworks that yield wealth.",
      rating: 5,
      avatar: "/img/yasir.png"
    },
    {
      name: "Sophia Sterling",
      role: "Fintech Designer",
      review: "The design paradigms alone are worth 10x the price of admission. Extremely tactical and beautifully presented.",
      rating: 5,
      avatar: "/img/ekta.png"
    }
  ];

  // Info items grid setup
  const infoGridItems = [
    { label: "Date", value: eventDateString, icon: "fa-regular fa-calendar" },
    { label: "Time", value: eventTimeString, icon: "fa-regular fa-clock" },
    { label: "Timezone", value: event.timezone, icon: "fa-solid fa-earth-americas" },
    { label: "Duration", value: event.duration, icon: "fa-solid fa-hourglass-half" },
    { label: "Format", value: event.format.toUpperCase(), icon: "fa-solid fa-video" },
    { label: "Platform / Place", value: event.platform || event.location || "Online", icon: "fa-solid fa-location-dot" },
    { label: "Cost", value: "Complimentary (VIP Invited)", icon: "fa-solid fa-ticket" },
    { label: "Capacity Left", value: `${event.capacity - event.registered} seats`, icon: "fa-solid fa-users" },
    { label: "Recording", value: "Available in Archive", icon: "fa-solid fa-circle-play" }
  ];

  // Related events
  const relatedEventsList = MOCK_EVENTS.filter(
    (e) => e.id !== event.id && e.status !== "registration-closed"
  ).slice(0, 3);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    alert(`RSVP Confirmed for ${event.title}!`);
  };

  return (
    <main className="min-h-screen bg-klyth-charcoal text-klyth-cream relative overflow-hidden py-20 px-6">
      
      {/* 1. Sticky RSVP Panel Intersection Observer trigger */}
      <div id="sticky-rsvp-trigger" className="absolute top-0 h-10 w-full pointer-events-none" />

      {/* Background radial overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[-20%] w-[80%] h-[80%] rounded-full bg-klyth-olive/5 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-20%] w-[60%] h-[75%] rounded-full bg-[#E2B842]/3 blur-[140px]" />
      </div>

      {/* Back Button */}
      <div className="relative z-10 max-w-6xl mx-auto mb-12 flex justify-start">
        <Link
          href="/events"
          className="group flex items-center gap-2.5 font-sans text-[10px] uppercase tracking-widest text-klyth-cream/60 hover:text-klyth-cream transition-colors duration-300"
        >
          <i className="fa-solid fa-arrow-left text-[9px] transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Experiences</span>
        </Link>
      </div>

      {/* 2. Hero Split Layout */}
      <section className="relative z-10 max-w-6xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-[8px] uppercase tracking-widest px-3 py-1 bg-klyth-gold/10 border border-klyth-gold/30 rounded-full text-klyth-gold font-semibold">
              {event.category}
            </span>
            <span className="font-sans text-[8px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-klyth-cream/60">
              {event.format}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight tracking-tight text-klyth-cream">
            {event.title}
          </h1>
          <p className="font-sans text-klyth-cream/70 text-base md:text-lg font-light leading-relaxed max-w-[55ch]">
            {event.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4 py-4 border-t border-white/5 w-full">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-calendar text-xs text-klyth-gold" />
              <span className="font-sans text-xs text-klyth-cream/80">{eventDateString}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock text-xs text-klyth-gold" />
              <span className="font-sans text-xs text-klyth-cream/80">{eventTimeString}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#rsvp-card"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-klyth-cream bg-klyth-olive hover:bg-klyth-olive/95 px-8 py-4 rounded-full shadow-[0_0_30px_rgba(74,93,35,0.3)] hover:scale-[1.02] transition-all"
            >
              Secure Invitation
            </a>
            <a
              href="#agenda"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-klyth-cream/60 hover:text-klyth-cream border border-white/10 hover:border-white/20 px-8 py-4 rounded-full transition-all"
            >
              View Agenda
            </a>
          </div>
        </motion.div>

        {/* Right Glass Frame Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full aspect-square relative rounded-3xl overflow-hidden bg-black/40 border border-white/5 p-4"
        >
          <div className="w-full h-full relative rounded-2xl overflow-hidden bg-klyth-obsidian">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* 3. Dynamic Quick Info Grid */}
      <section className="relative z-10 max-w-6xl mx-auto mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoGridItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-5 bg-[#1C1C1E]/40 border border-[#2C2C2E] rounded-2xl backdrop-blur-md hover:border-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-klyth-gold">
              <i className={`${item.icon} text-sm`} />
            </div>
            <div>
              <span className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40 mb-0.5">
                {item.label}
              </span>
              <span className="font-sans text-xs font-medium text-klyth-cream">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Large Premium Gold Countdown */}
      <section className="relative z-10 max-w-6xl mx-auto mb-24 bg-gradient-to-b from-[#1C1C1E]/80 to-[#101011]/90 border border-[#2C2C2E] backdrop-blur-3xl rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_60px_rgba(226,184,66,0.06)]">
        <div>
          <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-gold font-semibold mb-2 block">
            Commencing Soon
          </span>
          <h3 className="font-serif text-2xl text-klyth-cream">
            Interactive Experience begins in:
          </h3>
        </div>
        <Countdown targetDate={event.date} className="scale-110 md:scale-125 origin-center" />
      </section>

      {/* 5. Agenda Timeline (Split layout) */}
      <section id="agenda" className="relative z-10 max-w-6xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-gold text-[10px] mb-2">
            The Roadmap
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream mb-6">
            Experience Agenda
          </h2>
          <p className="font-sans text-xs text-klyth-cream/50 leading-relaxed font-light max-w-[40ch]">
            Every session is structured dynamically to optimize real-world execution. Follow along live, step-by-step.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="lg:col-span-7 flex flex-col gap-8 relative pl-8 border-l border-[#2C2C2E]">
          {event.agenda.length === 0 ? (
            <p className="font-sans text-xs text-klyth-cream/40">Details will be updated shortly.</p>
          ) : (
            event.agenda.map((item, idx) => (
              <div key={idx} className="relative flex flex-col gap-2 group">
                {/* Timeline node */}
                <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-[#1C1C1E] border-2 border-klyth-gold flex items-center justify-center text-klyth-gold group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-play text-[8px]" />
                </div>
                
                <span className="font-sans text-[10px] tracking-wider text-klyth-gold font-semibold uppercase">
                  {item.time}
                </span>
                <h4 className="font-serif text-lg text-klyth-cream">
                  {item.topic}
                </h4>
                {item.speaker && (
                  <span className="font-sans text-xs text-klyth-cream/50">
                    Lead: {item.speaker}
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* 6. Learning Outcomes (Cascading cards) */}
      <section className="relative z-10 max-w-6xl mx-auto mb-24">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-olive text-[10px] mb-2">
            Key Outcomes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream">
            What You Will Accumulate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {event.learningPoints.length === 0 ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-8 bg-[#1C1C1E]/50 border border-[#2C2C2E] rounded-3xl text-center">
                <p className="font-sans text-xs text-klyth-cream/40">To be disclosed soon.</p>
              </div>
            ))
          ) : (
            event.learningPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#1C1C1E]/40 border border-[#2C2C2E] rounded-3xl backdrop-blur-md hover:border-klyth-olive/50 transition-colors flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-klyth-olive/15 flex items-center justify-center text-klyth-cream mb-6">
                  <i className="fa-solid fa-check text-sm" />
                </div>
                <h4 className="font-serif text-lg text-klyth-cream mb-3">
                  {pt.title}
                </h4>
                <p className="font-sans text-xs text-klyth-cream/50 leading-relaxed font-light">
                  {pt.description}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 7. Speakers Roster */}
      <section className="relative z-10 max-w-6xl mx-auto mb-24">
        <div className="flex flex-col items-center md:items-start mb-12">
          <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-gold text-[10px] mb-2">
            The Roster
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream">
            Host & Speakers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {event.speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-[#1C1C1E]/50 border border-[#2C2C2E] rounded-3xl backdrop-blur-md group hover:border-klyth-gold/30 transition-all duration-500"
            >
              <div className="w-24 h-24 relative rounded-2xl overflow-hidden bg-black/40 flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src={speaker.avatar}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-between text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-xl text-klyth-cream mb-1">
                    {speaker.name}
                  </h3>
                  <span className="font-sans text-xs text-klyth-gold block mb-3 uppercase tracking-wider">
                    {speaker.role}
                  </span>
                  <p className="font-sans text-xs text-klyth-cream/50 leading-relaxed font-light">
                    {speaker.bio}
                  </p>
                </div>
                {speaker.socials && (
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4 text-xs text-klyth-cream/60">
                    {speaker.socials.twitter && (
                      <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-klyth-gold">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    )}
                    {speaker.socials.linkedin && (
                      <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-klyth-gold">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Registration Card & FAQ Accordion Section */}
      <section className="relative z-10 max-w-6xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left FAQ */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="mb-4">
            <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-cream/40 text-[10px] mb-2 block">
              Direct Answers
            </span>
            <h2 className="font-serif text-3xl text-klyth-cream">
              Frequently Queried
            </h2>
          </div>
          {event.faq.length === 0 ? (
            <p className="font-sans text-xs text-klyth-cream/40">No FAQs updated.</p>
          ) : (
            event.faq.map((faqItem, idx) => (
              <FAQAccordion key={idx} question={faqItem.question} answer={faqItem.answer} />
            ))
          )}
        </div>

        {/* Right RSVP Glass Panel */}
        <div id="rsvp-card" className="lg:col-span-6 sticky top-24">
          <div className="bg-gradient-to-b from-[#1C1C1E]/80 to-[#101011]/95 border border-[#2C2C2E] backdrop-blur-3xl rounded-3xl p-8 shadow-[0_0_80px_rgba(74,93,35,0.06)]">
            <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-gold font-semibold mb-4 block">
              Registration Portal
            </span>
            <h3 className="font-serif text-2xl text-klyth-cream mb-6">
              Confirm Your Admission
            </h3>

            {isRegistered ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-klyth-olive/20 text-klyth-cream flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-lg" />
                </div>
                <h4 className="font-serif text-xl mb-2">Invitation Locked</h4>
                <p className="font-sans text-xs text-klyth-cream/50">
                  Please check your inbox. A calendar invite and session link are on the way.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full bg-black/40 border border-white/5 rounded-full px-4 py-3 text-xs text-klyth-cream placeholder:text-klyth-cream/25 focus:outline-none focus:border-klyth-olive focus:ring-1 focus:ring-klyth-olive transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40 mb-2">
                      Private Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. john@domain.com"
                      className="w-full bg-black/40 border border-white/5 rounded-full px-4 py-3 text-xs text-klyth-cream placeholder:text-klyth-cream/25 focus:outline-none focus:border-klyth-olive focus:ring-1 focus:ring-klyth-olive transition-all"
                    />
                  </div>
                </div>

                <div className="py-4 border-t border-b border-white/5 my-2 flex items-center justify-between">
                  <div>
                    <span className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40">
                      Seats Remaining
                    </span>
                    <span className="font-sans text-xs font-bold text-klyth-cream">
                      {event.capacity - event.registered} seats left
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[8px] uppercase tracking-widest text-klyth-cream/40">
                      Format
                    </span>
                    <span className="font-sans text-xs font-bold text-klyth-cream">
                      {event.format.toUpperCase()}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-sans text-xs font-semibold uppercase tracking-widest text-klyth-cream bg-klyth-olive hover:bg-klyth-olive/90 py-4 rounded-full shadow-[0_0_35px_rgba(74,93,35,0.25)] hover:scale-[1.01] transition-transform duration-300"
                >
                  Register Now
                </button>

                <p className="font-sans text-[9px] text-klyth-cream/30 text-center leading-relaxed mt-2">
                  Invited entries only. By registering, you agree to our privacy policy. Inactive registration links will expire.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Related Events */}
      {relatedEventsList.length > 0 && (
        <section className="relative z-10 max-w-6xl mx-auto mb-32">
          <div className="mb-12">
            <span className="font-sans font-medium uppercase tracking-[0.25em] text-klyth-cream/40 text-[10px] mb-2 block">
              More Experiences
            </span>
            <h2 className="font-serif text-3xl text-klyth-cream">
              Related Ecosystem Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedEventsList.map((rel) => (
              <KlythLiftCard key={rel.id} className="p-6">
                <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden bg-black/40 mb-6">
                  <Image src={rel.coverImage} alt={rel.title} fill className="object-cover" />
                </div>
                <span className="font-sans text-[10px] tracking-wider text-klyth-gold uppercase mb-2 block">
                  {new Date(rel.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} • {rel.duration}
                </span>
                <h4 className="font-serif text-lg text-klyth-cream mb-2 line-clamp-1">
                  {rel.title}
                </h4>
                <p className="font-sans text-xs text-klyth-cream/50 line-clamp-2 leading-relaxed mb-6">
                  {rel.subtitle}
                </p>
                <Link
                  href={`/events/${rel.slug}`}
                  className="font-sans text-[9px] uppercase tracking-widest text-klyth-cream border border-white/10 hover:border-white/20 px-6 py-2.5 rounded-full inline-block text-center"
                >
                  View Details
                </Link>
              </KlythLiftCard>
            ))}
          </div>
        </section>
      )}

      {/* 10. Sticky RSVP component call */}
      <StickyRSVP
        targetId="sticky-rsvp-trigger"
        eventTitle={event.title}
        eventDate={eventDateString}
        registrationUrl="#rsvp-card"
      />

      {/* 11. Footer CTA */}
      <section className="relative z-10 max-w-4xl mx-auto text-center py-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 max-w-[20ch] mx-auto leading-tight">
          The next breakthrough begins with <span className="italic text-klyth-cream/90 font-normal">showing up.</span>
        </h2>
        <Link
          href="/events"
          className="font-sans text-[10px] uppercase tracking-widest text-klyth-cream border border-klyth-gold/30 hover:border-klyth-gold px-8 py-4 rounded-full transition-colors duration-300 inline-block"
        >
          Explore More Events
        </Link>
      </section>
    </main>
  );
}
