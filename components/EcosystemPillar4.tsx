"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemPillar4() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Shift background color subtly based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    ["#121212", "#0A0A0B", "#121212"]
  );

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-full py-48 px-6 z-10 transition-colors duration-1000 flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: premiumEase }}
          className="w-full bg-[#1C1C1E]/40 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] p-12 md:p-24 lg:p-32 border border-white/5 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Inner subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-klyth-olive/5 blur-[120px] pointer-events-none"></div>

          <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-8 block relative z-10">
            Systemic Change
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold mb-10 text-klyth-cream max-w-4xl mx-auto leading-tight relative z-10">
            Bridging the Education Gap <span className="italic text-klyth-cream/90">from the Inside.</span>
          </h2>
          <p className="font-sans text-klyth-cream/50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light relative z-10">
            Complaining about the educational system isn't enough; we are actively working alongside it to create lasting change. Klyth partners directly with universities and colleges to seamlessly integrate our practical financial literacy modules into their existing frameworks. By offering our ecosystem as a supplementary "Life Skills" program, we ensure that students don't just graduate with a degree—they graduate fully equipped with the financial readiness to manage their early careers.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}