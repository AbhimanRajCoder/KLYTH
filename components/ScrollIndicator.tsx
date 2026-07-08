"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  text?: string;
  className?: string;
  align?: "left" | "center" | "right";
  delay?: number;
}

export default function ScrollIndicator({ 
  text = "Scroll to explore", 
  className = "",
  align = "left",
  delay = 1.2
}: ScrollIndicatorProps) {
  const alignmentClass = 
    align === "center" ? "items-center text-center" : 
    align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className={`flex flex-col gap-3 ${alignmentClass} ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-klyth-cream/40 font-sans tracking-[0.25em] uppercase font-medium">
          {text}
        </span>
      </div>
      
      {/* Elegant Mouse Icon */}
      <div className="w-[20px] h-[32px] rounded-full border border-klyth-cream/20 flex justify-center p-[4px] relative overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
        <motion.div 
          className="w-[2px] h-[4px] rounded-full bg-klyth-gold"
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
