"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { submitNextChapterSubscription } from "@/app/actions/subscribe";
import { toast } from "sonner";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    
    setIsSubmitting(true);
    const res = await submitNextChapterSubscription(email);
    if (res.success) {
      toast.success(res.message);
      setEmail("");
    } else {
      toast.error(res.message);
    }
    
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  } as const;

  return (
    <section className="relative w-full h-[60vh] min-h-[550px] flex items-center justify-center px-6 bg-black z-10 overflow-hidden select-none">
      
      {/* Film Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] z-[4]" />

      {/* Ambient Vignette Overlay - Fades to pure black */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_25%,#000000_95%)] z-[3]" />

      {/* Premium Ambient Lighting Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 20, -15, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-klyth-olive/8 blur-[130px] rounded-full"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, -25, 15, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] bg-klyth-gold/6 blur-[120px] rounded-full"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 10, -10, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[45%] -translate-x-1/2 w-[400px] h-[400px] bg-klyth-cream/4 blur-[100px] rounded-full"
        />
      </div>

      {/* Subtle Central Headline Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-klyth-gold/[0.04] blur-[160px] rounded-full pointer-events-none z-[2]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-8 select-text"
      >
        {/* Content stack */}
        <div className="flex flex-col items-center gap-4 max-w-3xl">
          {/* Eyebrow */}
          <motion.span
            variants={fadeUpVariants}
            className="font-sans font-bold text-xs tracking-[0.25em] uppercase text-klyth-gold"
          >
            The Next Chapter
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-klyth-cream leading-tight tracking-tight"
          >
            Stop surviving.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-klyth-cream italic font-bold">
              Start scaling.
            </span>
          </motion.h2>

          {/* Body description */}
          <motion.p
            variants={fadeUpVariants}
            className="font-sans text-base md:text-lg text-klyth-cream/50 max-w-xl mx-auto leading-relaxed font-light mt-2"
          >
            The era of one-size-fits-all financial anxiety is over. Join the movement
            to unlock priority beta access, exclusive workshop invites, and the
            personalized systems you need to build real wealth.
          </motion.p>
        </div>

        {/* Minimalist Input Capture Portal */}
        <motion.div variants={fadeUpVariants} className="w-full max-w-xl mx-auto min-h-[80px] mb-4">
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full mt-4"
          >
            <div className="flex-grow relative">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-klyth-obsidian/60 border border-klyth-ghost/50 rounded-full px-8 py-5 text-base md:text-lg text-klyth-cream placeholder:text-klyth-cream/30 focus:outline-none focus:border-klyth-olive transition-all text-center sm:text-left disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group shrink-0 relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-klyth-olive text-klyth-cream font-sans font-semibold text-xs uppercase tracking-[0.2em] rounded-full border border-klyth-gold/25 hover:border-klyth-gold/60 transition-all duration-500 select-none shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_rgba(74,93,35,0.25)] hover:-translate-y-0.5 overflow-hidden min-h-[64px] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-klyth-cream/30 border-t-klyth-cream rounded-full animate-spin relative z-10"></div>
              ) : (
                <>
                  {/* Subtle sweep glare */}
                  <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                    <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] transition-transform duration-1000 group-hover:translate-x-[260%]" />
                  </span>
                  <span className="relative z-10">Unlock Access</span>
                  <svg className="w-3.5 h-3.5 text-klyth-cream transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </motion.div>

        {/* Subtext */}
        <motion.span
          variants={fadeUpVariants}
          className="font-sans font-normal text-xs sm:text-sm text-klyth-cream/40"
        >
          Join the generation rewiring their financial future.
        </motion.span>
      </motion.div>
    </section>
  );
}
