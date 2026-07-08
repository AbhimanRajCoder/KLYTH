"use client";

import React from "react";

const philosophyItems = [
  "CLARITY > CONFUSION",
  "CONTROL > CHAOS",
  "SYSTEMS > STRESS",
  "ACTION > ANXIETY",
  "HABITS > HYPE",
  "EXECUTION > EXCUSES",
  "MOMENTUM > MOTION",
  "COMMUNITY > ISOLATION",
  "LITERACY > LUCK",
  "GROWTH > GUESSWORK",
  "STRATEGY > SPECULATION",
  "WEALTH > WAGES"
];

// Duplicate items to ensure a perfectly seamless infinite loop.
// The list must be duplicated at least once. We duplicate it twice for ultra-wide screens.
const repeatedItems = [...philosophyItems, ...philosophyItems];

export default function PhilosophyMarquee() {
  return (
    <div className="relative w-full h-14 md:h-[72px] bg-klyth-gold/60 border-y border-klyth-gold/20 overflow-hidden flex items-center group transition-colors duration-500 hover:bg-[#526727] cursor-default select-none z-10">
      
      {/* Ultra-light noise texture for premium depth */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
      
      {/* The scrolling container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center animate-infinite-scroll group-hover:[animation-play-state:paused] will-change-transform">
          {repeatedItems.map((text, idx) => (
            <li key={idx} className="flex items-center whitespace-nowrap">
              <span className="font-sans font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-klyth-cream/85 text-xs md:text-sm transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                {text}
              </span>
              {/* Elegant separator */}
              <span className="mx-6 md:mx-10 text-klyth-ghost text-[10px] md:text-xs">✦</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CSS Animation for 60fps hardware accelerated infinite scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-infinite-scroll {
          /* Adjust duration based on desired speed (60s is moderate/luxurious) */
          animation: infinite-scroll 45s linear infinite;
        }
      `}} />
    </div>
  );
}