"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface StickyRSVPProps {
  targetId: string; // The ID of the CTA in the hero section to observe
  eventTitle: string;
  eventDate: string;
  registrationUrl: string;
}

export default function StickyRSVP({
  targetId,
  eventTitle,
  eventDate,
  registrationUrl
}: StickyRSVPProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById(targetId);
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when the target goes out of viewport at the top
        const isTriggerBelowViewportTop = entry.boundingClientRect.top < 0;
        setIsVisible(!entry.isIntersecting && isTriggerBelowViewportTop);
      },
      { threshold: 0 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [targetId]);

  const handleRSVP = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById("rsvp-card");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.location.hash = registrationUrl;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1C1C1E]/80 backdrop-blur-xl border-t border-[#2C2C2E] py-4 px-6 md:py-5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col items-start gap-1">
              <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-gold font-semibold">
                Live Registration Active
              </span>
              <h4 className="font-serif text-lg text-klyth-cream line-clamp-1">
                {eventTitle}
              </h4>
              <p className="font-sans text-xs text-klyth-cream/50">
                {eventDate}
              </p>
            </div>

            {/* RSVP Button (Desktop: side aligned, Mobile: full-width) */}
            <button
              onClick={handleRSVP}
              className="w-full md:w-auto font-sans text-xs font-semibold uppercase tracking-widest text-klyth-cream bg-klyth-olive hover:bg-klyth-olive/90 border border-transparent px-8 py-4 rounded-full shadow-[0_0_30px_rgba(74,93,35,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,93,35,0.45)] hover:scale-[1.02]"
              aria-label={`RSVP for ${eventTitle}`}
            >
              Secure Your Spot
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
