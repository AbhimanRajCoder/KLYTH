"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CampusApply() {
  const [copied, setCopied] = useState(false);
  const email = "hello@klyth.in";
  const mailtoLink = `mailto:${email}?subject=Klyth Campus Chapter - Early Application`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full min-h-[85vh] py-24 px-6 z-10 flex items-center justify-center">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-klyth-olive/15 blur-[140px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-gold/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl w-full p-[1px] rounded-[3rem] overflow-hidden shadow-[0_0_80px_-20px_rgba(212,175,55,0.1)]"
      >
        {/* Premium Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-br from-klyth-gold/30 via-klyth-olive/20 to-transparent z-0"></div>
        
        {/* Inner Container */}
        <div className="relative w-full h-full bg-gradient-to-br from-[#1A1A1A]/95 via-[#141414]/98 to-[#0A0A0A]/95 backdrop-blur-3xl rounded-[calc(3rem-1px)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),0_40px_100px_rgba(0,0,0,0.8)] z-10 text-center md:text-left">
          
          {/* Left Column (≈55% layout space) */}
          <div className="flex-1 md:max-w-[55%] flex flex-col items-center md:items-start gap-6">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px]">
              The Alpha Phase
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-klyth-cream leading-tight">
              Don&apos;t wait for the official launch. <br className="hidden md:block" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-klyth-cream italic font-bold">
                Claim your campus today.
              </span>
            </h2>
          </div>

          {/* Right Column (≈40% layout space) */}
          <div className="flex shrink-0 w-full md:max-w-[40%] flex-col items-center md:items-start justify-center gap-6">
            <p className="font-sans text-base text-klyth-cream/60 leading-relaxed font-light text-center md:text-left">
              Want to skip the line? We are opening up a secret backdoor for highly motivated early adopters. If you are ready to secure your spot as the founding Chapter Lead for your college and unlock exclusive early-bird benefits before applications go public, we want to hear from you right now.
            </p>

            {/* CTA Container */}
            <div className="flex flex-col items-center justify-center w-full gap-6 mt-4 md:mt-0">
              {/* Breathing Button */}
              <motion.a 
                href={mailtoLink}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="group relative inline-block bg-klyth-olive text-klyth-cream font-sans font-medium text-sm tracking-wide py-5 px-12 rounded-full transition-shadow duration-500 shadow-[0_0_30px_rgba(74,93,35,0.3)] hover:shadow-[0_0_50px_rgba(74,93,35,0.6)] text-center w-full md:w-auto whitespace-nowrap"
              >
                Drop us an email
                {/* Subtle inner shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.a>

              {/* Copy Email Interaction */}
              <div 
                onClick={handleCopy}
                className="flex items-center gap-2 cursor-pointer group px-4 py-2 rounded-lg transition-colors hover:bg-white/5"
              >
                <span className="font-sans text-sm text-klyth-cream/40 group-hover:text-klyth-cream/70 transition-colors">
                  {copied ? "Copied!" : email}
                </span>
                <div className="w-4 h-4 flex items-center justify-center">
                  {copied ? (
                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3.5 h-3.5 text-klyth-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                  ) : (
                    <svg className="w-3 h-3 text-klyth-cream/20 group-hover:text-klyth-cream/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
