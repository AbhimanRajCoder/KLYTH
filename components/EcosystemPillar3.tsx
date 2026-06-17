"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function EcosystemPillar3() {
  const [isMobile, setIsMobile] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const rippleScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <motion.div
              className="w-full max-w-md aspect-square relative"
            >
              {/* Ripple animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  style={{ scale: rippleScale }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-color-klyth-gold/40"
                />
                <motion.div
                  style={{ scale: rippleScale }}
                  transition={{ delay: 0.2 }}
                  className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-color-klyth-gold/30"
                />
                <motion.div
                  style={{ scale: rippleScale }}
                  transition={{ delay: 0.4 }}
                  className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-color-klyth-gold/20"
                />
                {/* Center icon */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-color-klyth-olive/20 flex items-center justify-center border border-color-klyth-olive/50">
                  <i className="fa-solid fa-graduation-cap text-3xl sm:text-4xl text-color-klyth-cream" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-color-klyth-gold/50 bg-color-klyth-gold/10 mb-6">
              <i className="fa-solid fa-lock text-color-klyth-gold text-xs" />
              <span className="font-sans text-xs font-medium text-color-klyth-gold tracking-wider uppercase">
                In Development
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Campus Ambassador Rollouts: A Grassroots Movement
            </h2>
            <p className="text-base sm:text-lg text-color-klyth-cream/70 font-sans leading-relaxed mb-6">
              Empowering student leaders to build local, peer-led financial communities and launch Klyth Chapters inside their universities.
            </p>
            <Link
              href="/campus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-color-klyth-olive text-color-klyth-cream font-semibold rounded-full hover:shadow-[0_0_30px_rgba(74,93,35,0.4)] transition-all duration-300"
            >
              Join the Waitlist <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}