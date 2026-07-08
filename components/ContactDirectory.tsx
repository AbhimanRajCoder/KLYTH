"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CopyEmailRow = ({ title, email }: { title: string, email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={handleCopy}
      className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-white/5 cursor-pointer group hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
    >
      <span className="font-sans text-sm text-klyth-cream/50 mb-1 sm:mb-0 group-hover:text-klyth-cream/70 transition-colors">{title}</span>
      <div className="flex items-center gap-3">
        <span className="font-sans text-base font-semibold text-klyth-cream tracking-wide">{email}</span>
        <div className="w-5 h-5 flex items-center justify-center">
          {copied ? (
            <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </motion.svg>
          ) : (
            <svg className="w-4 h-4 text-klyth-cream/30 group-hover:text-klyth-olive transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ContactDirectory() {
  return (
    <div className="w-full flex flex-col gap-12 pl-0 md:pl-12 lg:pl-16 relative z-10">
      
      {/* The Community */}
      <div>
        <span className="font-sans font-medium uppercase tracking-[0.2em] text-klyth-olive text-[10px] mb-4 block">
          The Community
        </span>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/klyth.in/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-14 h-14 bg-[#1C1C1E]/50 border border-white/5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(225,48,108,0.15)] hover:border-[#E1306C]/30">
            <svg className="w-5 h-5 text-klyth-cream/70 group-hover:text-[#E1306C] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="https://x.com/klythhq" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-14 h-14 bg-[#1C1C1E]/50 border border-white/5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:border-white/20">
            <svg className="w-5 h-5 text-klyth-cream/70 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/company/klyth" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-14 h-14 bg-[#1C1C1E]/50 border border-white/5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,119,181,0.15)] hover:border-[#0077B5]/30">
            <svg className="w-5 h-5 text-klyth-cream/70 group-hover:text-[#0077B5] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>
      </div>

      {/* Headquarters */}
      <div>
        <span className="font-sans font-medium uppercase tracking-[0.2em] text-klyth-olive text-[10px] mb-4 block">
          Headquarters
        </span>
        <div className="bg-[#1C1C1E]/30 border border-white/5 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
          <svg className="w-5 h-5 text-klyth-olive mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div>
            <p className="font-sans text-base text-klyth-cream/80 leading-relaxed">
              Lohegaon, Pune - 411047<br />India
            </p>
          </div>
        </div>
      </div>

      {/* Routing Options */}
      <div>
        <span className="font-sans font-medium uppercase tracking-[0.2em] text-klyth-olive text-[10px] mb-4 block">
          Direct Routing
        </span>
        <h3 className="font-serif text-3xl text-klyth-cream mb-8">
          Skip the queue. Reach the right desk.
        </h3>
        <div className="flex flex-col">
          <CopyEmailRow title="Support & General Queries" email="hello@klyth.in" />
          <CopyEmailRow title="Partnerships & Creators" email="partnerships@klyth.in" />
          <CopyEmailRow title="Press & Media" email="founders@klyth.in" />
          <CopyEmailRow title="Careers" email="careers@klyth.in" />
          <CopyEmailRow title="Legal" email="legal@klyth.in" />
        </div>
      </div>
    </div>
  );
}
