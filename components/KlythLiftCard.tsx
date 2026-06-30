"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface KlythLiftCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "olive" | "gold" | "oxblood";
}

export default function KlythLiftCard({
  children,
  className = "",
  glowColor = "olive"
}: KlythLiftCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse positions relative to the card's center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring settings for ultra-smooth physical motion
  const springSettings = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(y, springSettings);
  const rotateYSpring = useSpring(x, springSettings);

  // Map mouse positions to 3D rotation angles (Strict design system asks for X: 3deg, Y: cursor based)
  const rotateX = useTransform(rotateXSpring, [-200, 200], [3, -3]);
  const rotateY = useTransform(rotateYSpring, [-200, 200], [-3, 3]);

  // Glow position variables
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowXSpring = useSpring(glowX, springSettings);
  const glowYSpring = useSpring(glowY, springSettings);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative position from center for 3D tilt
    const width = rect.width;
    const height = rect.height;
    const relativeX = e.clientX - rect.left - width / 2;
    const relativeY = e.clientY - rect.top - height / 2;
    
    x.set(relativeX);
    y.set(relativeY);

    // Absolute position for glow spotlight
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const getGlowBg = () => {
    switch (glowColor) {
      case "gold":
        return "radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(226, 184, 66, 0.08), transparent 80%)";
      case "oxblood":
        return "radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(142, 53, 51, 0.1), transparent 80%)";
      case "olive":
      default:
        return "radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(74, 93, 35, 0.12), transparent 80%)";
    }
  };

  const getShadowStyle = () => {
    if (!hovered) return "0 10px 30px rgba(0, 0, 0, 0.4)";
    switch (glowColor) {
      case "gold":
        return "0 0 50px rgba(226, 184, 66, 0.15), 0 20px 40px rgba(0, 0, 0, 0.6)";
      case "oxblood":
        return "0 0 50px rgba(142, 53, 51, 0.15), 0 20px 40px rgba(0, 0, 0, 0.6)";
      case "olive":
      default:
        return "0 0 50px rgba(74, 93, 35, 0.2), 0 20px 40px rgba(0, 0, 0, 0.6)";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: getShadowStyle(),
        // Klyth Lift: border brightens and glass blur subtly increases on hover
        border: hovered ? "1px solid rgba(245, 242, 235, 0.15)" : "1px solid #2C2C2E",
        backdropFilter: hovered ? "blur(24px)" : "blur(20px)",
      }}
      animate={{
        y: hovered ? -8 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // premium ease
      }}
      className={`relative rounded-3xl overflow-hidden bg-klyth-obsidian/60 transition-colors duration-500 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: getGlowBg(),
          opacity: hovered ? 1 : 0,
          // Set dynamic values via CSS variables for smooth GPU-accelerated drawing
          ...({
            "--glow-x": useTransform(glowXSpring, (v) => `${v}px`),
            "--glow-y": useTransform(glowYSpring, (v) => `${v}px`),
          } as any),
        }}
      />
      {children}
    </motion.div>
  );
}
