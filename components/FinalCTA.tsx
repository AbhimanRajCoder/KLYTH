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
        className="w-full max-w-xl mx-auto flex flex-col min-[400px]:flex-row items-center gap-4 min-[400px]:gap-0 min-[400px]:bg-color-klyth-charcoal/80 min-[400px]:p-2 min-[400px]:rounded-full min-[400px]:border min-[400px]:border-color-klyth-ghost/60 transition-all duration-500 focus-within:border-color-klyth-gold/40 focus-within:shadow-[0_0_35px_rgba(226,184,66,0.15)]"
      >
        <input
          type="email"
          required
          suppressHydrationWarning
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-[400px]:flex-1 bg-transparent px-6 py-4 min-[400px]:py-3 text-color-klyth-cream placeholder-color-klyth-cream/35 focus:outline-none text-base border border-color-klyth-ghost/40 min-[400px]:border-none rounded-full min-[400px]:rounded-none focus:border-color-klyth-gold/45 min-[400px]:focus:border-none transition-colors duration-300"
        />
        <button
          type="submit"
          className="w-full min-[400px]:w-auto bg-color-klyth-olive text-color-klyth-cream font-sans font-semibold px-8 py-4 min-[400px]:py-3.5 rounded-full border border-color-klyth-olive/40 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(74,93,35,0.35)] hover:border-color-klyth-gold/30 transition-all duration-500 transform active:scale-[0.97] animate-pulse-breathing focus:outline-none focus:ring-2 focus:ring-color-klyth-gold/50 min-h-[48px] whitespace-nowrap cursor-pointer relative overflow-hidden group"
        >
          {/* Shine glare effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
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
          className="klyth-glass rounded-[32px] p-8 sm:p-12 md:p-16 border border-white/5 relative z-10 max-w-5xl mx-auto shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
        >
          {content}
        </motion.div>
      ) : (
        <motion.div
          suppressHydrationWarning
          style={{ scale, opacity, y }}
          className="group klyth-glass rounded-[40px] p-16 lg:p-20 border border-white/5 relative z-10 max-w-5xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle diagonal reflection sweep */}
          <div className="absolute inset-0 rounded-[40px] p-[1px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          {content}
        </motion.div>
      )}
    </section>
  );
}
