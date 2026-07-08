"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemFinalCTA() {
  const shouldReduceMotion = useReducedMotion();

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

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="relative max-w-3xl w-full text-center flex flex-col items-center z-[10]"
      >     
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-klyth-cream mb-6 leading-tight tracking-tight">
          Stop surviving. <br className="hidden md:block" />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-gold to-klyth-cream italic font-bold">
            Start scaling.
          </span>
        </h2>
        
        <p className="font-sans text-base md:text-lg text-klyth-cream/50 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          The ecosystem is built. The community is waiting. It is time to replace financial anxiety with unstoppable momentum.
        </p>

        {/* Minimalist Apple-like Magnetic Button */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link 
            href="/join" 
            className="group relative klyth-btn klyth-btn-primary text-sm py-5 px-16 overflow-hidden"
          >
            <span className="relative z-10">Step Into the Ecosystem</span>
            {/* Subtle inner shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}