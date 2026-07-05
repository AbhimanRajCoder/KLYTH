"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitNextChapterSubscription } from "@/app/actions/subscribe";
import { toast } from "sonner";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className="relative w-full bg-transparent py-16 sm:py-24 px-6 sm:px-12 lg:px-20 select-none overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative ambient ecosystem portal glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft centered light representing entering the ecosystem */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full bg-gradient-to-t from-klyth-gold/6 via-klyth-olive/3 to-transparent blur-[160px]" />
        
        {/* Fine vertical centerline */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-klyth-ghost/45 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-12 sm:gap-16 select-text"
      >
        {/* Content stack */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-3xl">
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
            className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-klyth-cream leading-[1.08] tracking-tight"
          >
            Stop surviving.<br /><span className="text-klyth-gold italic">Start scaling.</span>
          </motion.h2>

          {/* Body description */}
          <motion.p
            variants={fadeUpVariants}
            className="font-sans font-normal text-base sm:text-lg md:text-xl text-klyth-cream/70 leading-relaxed max-w-2xl mt-2"
          >
            The era of one-size-fits-all financial anxiety is over. Join the movement
            to unlock priority beta access, exclusive workshop invites, and the
            personalized systems you need to build real wealth.
          </motion.p>
        </div>

        {/* Minimalist Input Capture Portal */}
        <motion.div variants={fadeUpVariants} className="w-full max-w-xl mx-auto min-h-[80px]">
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
                  <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
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
