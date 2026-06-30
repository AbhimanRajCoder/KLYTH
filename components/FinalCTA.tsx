"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Portal scroll zoom effect on desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.85, 1], [0.84, 0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.8, 1], [0.4, 0.9, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.85, 1], [40, 8, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    
    // Redirect to join onboarding page with email query parameter
    window.location.href = `/join?email=${encodeURIComponent(email)}`;
  };

  const content = (
    <div className="flex flex-col items-center text-center gap-8 md:gap-10 max-w-3xl mx-auto relative z-10">
      {/* Eyebrow */}
      <span className="font-sans font-bold text-xs tracking-[0.25em] uppercase text-color-klyth-gold">
        The Next Chapter
      </span>

      {/* Headline */}
      <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-color-klyth-cream leading-tight select-text">
        Stop surviving. Start scaling.
      </h2>

      {/* Body description */}
      <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-color-klyth-cream/70 leading-relaxed max-w-2xl select-text">
        The era of one-size-fits-all financial anxiety is over. Join the movement
        to unlock priority beta access, exclusive workshop invites, and the
        personalized systems you need to build real wealth.
      </p>

      {/* Fused form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto mt-4"
      >
        <input
          type="email"
          required
          suppressHydrationWarning
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow bg-black/40 border border-white/5 rounded-full px-8 py-5 text-base md:text-lg text-color-klyth-cream placeholder:text-color-klyth-cream/30 focus:outline-none focus:border-color-klyth-olive focus:ring-1 focus:ring-color-klyth-olive transition-all"
        />
      <button
      type="submit"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full
        border border-color-klyth-olive/30
        bg-color-klyth-olive text-color-klyth-cream
        px-4 py-2
        text-[10px] md:text-[11px]
        font-semibold uppercase tracking-[0.14em]
        shadow-md
        transition-all duration-500 ease-out
        hover:-translate-y-0.5
        hover:bg-color-klyth-olive/90
        hover:border-color-klyth-gold/40
        hover:shadow-[0_8px_20px_rgba(74,93,35,0.25)]"
      >
      <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-transform duration-1000 group-hover:translate-x-[260%]" />
      </span>

      <span className="relative z-10">Unlock Early Access</span>
      </button>
      </form>

      {/* Subtext */}
      <span className="font-sans font-normal text-xs sm:text-sm text-color-klyth-cream/40 select-text">
        Join the generation rewiring their financial future.
      </span>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent py-24 sm:py-32 px-6 sm:px-12 select-none overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[80%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-color-klyth-gold/4 blur-[130px]" />
      </div>

      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] p-8 sm:p-12 md:p-16 relative z-10 max-w-5xl mx-auto"
        >
          {content}
        </motion.div>
      ) : (
        <motion.div
          suppressHydrationWarning
          style={{ scale, opacity, y }}
          className="group rounded-[40px] p-16 lg:p-20 relative z-10 max-w-5xl mx-auto overflow-hidden"
        >
          {content}
        </motion.div>
      )}
    </section>
  );
}
