"use client";

import { motion } from "framer-motion";
import HomeHero from "@/components/HomeHero";
import ProblemSection from "@/components/ProblemSection";
import SolutionBento from "@/components/SolutionBento";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-color-klyth-charcoal relative">
      {/* Immersive Global Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle dot grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient Moving Glows */}
        {/* Olive Light - Top Left */}
        <motion.div
          animate={{
            x: ["0%", "8%", "-4%", "0%"],
            y: ["0%", "12%", "-6%", "0%"],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-color-klyth-olive/8 to-transparent blur-[160px]"
        />

        {/* Gold Light - Bottom Right */}
        <motion.div
          animate={{
            x: ["0%", "-10%", "6%", "0%"],
            y: ["0%", "-8%", "10%", "0%"],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-color-klyth-gold/4 to-transparent blur-[160px]"
        />

        {/* Warm Oxblood Light - Center Left */}
        <motion.div
          animate={{
            x: ["0%", "6%", "-8%", "0%"],
            y: ["0%", "-10%", "-4%", "0%"],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-color-klyth-oxblood/3 to-transparent blur-[180px]"
        />
      </div>

      {/* Main content wrapping above background */}
      <div className="relative z-10 w-full flex flex-col">
        <HomeHero />
        <ProblemSection />
        <SolutionBento />
        <SocialProof />
        <FinalCTA />
      </div>
    </div>
  );
}
