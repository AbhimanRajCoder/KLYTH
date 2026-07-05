"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function EventsComingSoon() {
  return (
    <main className="min-h-screen w-full bg-klyth-charcoal text-klyth-cream flex items-center justify-center p-4 sm:p-10 relative overflow-hidden select-none">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-gold/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-klyth-olive/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="klyth-glass rounded-[32px] border border-klyth-ghost p-8 sm:p-16 backdrop-blur-xl flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-klyth-olive/20 flex items-center justify-center border border-klyth-olive/30 mb-8">
            <Calendar className="w-8 h-8 text-klyth-gold" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Events & AMAs
          </h1>
          <h2 className="text-xl sm:text-2xl text-klyth-gold font-serif italic mb-6">
            Coming Soon
          </h2>
          
          <p className="text-klyth-cream/70 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
            We are securing closed-door sessions with industry leaders, founders, and financial experts. Exclusive invites will drop soon.
          </p>

          <Link 
            href="/join"
            className="group flex items-center gap-2 px-8 py-4 bg-klyth-olive rounded-full font-semibold hover:shadow-[0_10px_25px_rgba(74,93,35,0.3)] hover:scale-[1.02] transition-all duration-300"
          >
            Secure Priority Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
