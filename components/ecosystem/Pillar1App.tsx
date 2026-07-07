"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Pillar1App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Mouse tracking for tilt effect
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section 
      className="relative w-full py-24 md:py-32 bg-klyth-charcoal z-10"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
    >
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        
        {/* Soft Depth Lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          
          {/* Left Content Side */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-2 md:mb-3">
              Behavioral Technology
            </span>
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-white/50 text-[10px] md:text-xs mb-4 md:mb-6 block">
              Pillar 1: The Klyth App
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
              Your Hyper-Personalized <br className="hidden lg:block" /> <span className="italic text-klyth-cream/90">Financial Roadmap.</span>
            </h2>
            <div className="mb-4 md:mb-8">
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
                Currently in development — Launching soon
              </span>
            </div>
            <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light">
              Traditional finance curriculums fail because they are rigid. Your financial reality is not. Our flagship application replaces the outdated, one-size-fits-all model with hyper-personalized micro-lessons. Powered by a gamified, adaptive engine, the app molds entirely to your specific financial baseline and goals. We strip away the intimidation, reward your progress, and turn the heavy burden of learning into a frictionless, engaging daily habit.
            </p>
          </div>

          {/* Right Visual Side - Assembling UI */}
          <div className="relative w-full flex items-center justify-center md:justify-end order-1 md:order-2 h-[400px] md:h-[500px] perspective-1000">
            <motion.div 
              className="relative w-[85%] sm:w-full max-w-[280px] md:max-w-sm aspect-[1/1.7] flex flex-col justify-center items-center"
              style={{
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateY,
                transformStyle: "preserve-3d",
                z: isHovered ? 20 : 0
              }}
              animate={{
                y: isHovered ? -10 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              
              {/* Main Phone Frame */}
              <motion.div 
                initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 klyth-glass rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
              />

              <div className="absolute inset-0 flex flex-col p-4 md:p-6 justify-center gap-4 z-10 w-full h-full">
                
                {/* Top Bar */}
                <motion.div 
                  initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: -40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-2 opacity-50 shrink-0" 
                />

                {/* Hero Card */}
                <motion.div 
                  initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="w-full h-32 rounded-xl bg-klyth-charcoal/40 border border-white/5 flex flex-col justify-end p-5 shrink-0"
                  style={{ transform: isHovered ? "translateZ(40px)" : "translateZ(0px)" }}
                >
                  <div className="w-1/3 h-[3px] bg-klyth-olive rounded-full mb-3 shadow-[0_0_10px_rgba(74,93,35,0.8)]" />
                  <div className="w-2/3 h-[3px] bg-white/10 rounded-full" />
                </motion.div>

                {/* List Item 1 */}
                <motion.div 
                  initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 40 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="w-full h-16 rounded-xl bg-klyth-charcoal/40 border border-white/5 flex items-center p-5 shrink-0"
                  style={{ transform: isHovered ? "translateZ(20px)" : "translateZ(0px)" }}
                >
                  <div className="w-6 h-6 rounded-full border border-klyth-gold/30 mr-4 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-klyth-gold/40 shadow-[0_0_8px_rgba(226,184,66,0.5)]" />
                  </div>
                  <div className="flex-1 h-[3px] bg-white/10 rounded-full" />
                </motion.div>

                {/* List Item 2 */}
                <motion.div 
                  initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="w-full h-16 rounded-xl bg-klyth-charcoal/40 border border-white/5 flex items-center p-5 shrink-0"
                  style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" }}
                >
                  <div className="w-6 h-6 rounded-full border border-klyth-platinum/30 mr-4 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-klyth-platinum/40" />
                  </div>
                  <div className="flex-1 h-[3px] bg-white/10 rounded-full" />
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
