"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  idx: number;
  title: string;
  tag?: "in-development" | "in-beta";
  description: string;
  colSpanClass: string;
  rowSpanClass: string;
  isMobile: boolean;
  icon: string;
}

const BentoCard = ({
  idx,
  title,
  tag,
  description,
  colSpanClass,
  rowSpanClass,
  isMobile,
  icon,
}: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D tilt rotation - max 5 degrees rotation
    const width = rect.width;
    const height = rect.height;
    const rotateX = ((y - height / 2) / (height / 2)) * -5;
    const rotateY = ((x - width / 2) / (width / 2)) * 5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  // Determine glow color based on tag
  const getGlowColor = () => {
    if (tag === "in-development") return "rgba(226, 184, 66, 0.25)"; // Gold
    if (tag === "in-beta") return "rgba(74, 93, 35, 0.35)"; // Olive
    return "rgba(245, 242, 235, 0.1)"; // Subtle cream
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: idx * 0.08,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for premium fluid snap
      },
    },
  } as const;

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`klyth-glass relative rounded-[28px] p-8 sm:p-10 flex flex-col justify-between gap-8 overflow-hidden select-none border border-color-klyth-ghost/40 hover:border-color-klyth-olive/40 transition-colors duration-300 ${colSpanClass} ${rowSpanClass}`}
      style={{
        transformStyle: "preserve-3d",
        transition: "border-color 0.4s ease, transform 0.1s ease-out, box-shadow 0.4s ease",
        boxShadow:
          isHovered && !isMobile
            ? tag === "in-development"
              ? "0 0 35px rgba(226, 184, 66, 0.12)"
              : "0 0 35px rgba(74, 93, 35, 0.15)"
            : "none",
      }}
    >
      {/* Spotlight effect - desktop only */}
      {isHovered && !isMobile && (
        <div
          className="absolute pointer-events-none rounded-full blur-[80px] opacity-100 transition-opacity duration-300 z-0"
          style={{
            width: "200px",
            height: "200px",
            background: `radial-gradient(circle, ${getGlowColor()} 0%, transparent 75%)`,
            left: `${mousePos.x - 100}px`,
            top: `${mousePos.y - 100}px`,
          }}
        />
      )}

      {/* Card Header Content */}
      <div className="relative z-10 flex items-start justify-between w-full">
        <div className="w-12 h-12 rounded-2xl bg-color-klyth-charcoal/80 border border-color-klyth-ghost flex items-center justify-center text-color-klyth-cream/80">
          <i className={`${icon} text-lg`} />
        </div>

        {/* Custom badges */}
        {tag === "in-development" && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-color-klyth-gold/30 bg-color-klyth-gold/5 text-[10px] sm:text-xs font-sans font-medium text-color-klyth-gold shadow-[0_0_15px_rgba(226,184,66,0.15)] uppercase tracking-wider">
            <i className="fa-solid fa-lock text-[8px]" />
            <span>In Development</span>
          </div>
        )}

        {tag === "in-beta" && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-color-klyth-olive/40 bg-color-klyth-olive/5 text-[10px] sm:text-xs font-sans font-medium text-color-klyth-olive shadow-[0_0_15px_rgba(74,93,35,0.2)] uppercase tracking-wider">
            <i className="fa-solid fa-flask text-[8px] animate-pulse" />
            <span>In Beta</span>
          </div>
        )}
      </div>

      {/* Card Body Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-color-klyth-cream leading-tight tracking-tight select-text">
          {title}
        </h3>
        <p className="font-sans font-regular text-sm sm:text-base text-color-klyth-cream/70 leading-relaxed max-w-xl select-text">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function SolutionBento() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pillars = [
    {
      title: "The Klyth App: Your Hyper-Personalized Financial Roadmap",
      tag: "in-development" as const,
      description: "Our flagship interface delivering gamified, behavior-adaptive micro-lessons, habit tracking, and structured financial rewiring tailored entirely to your personal goals.",
      icon: "fa-solid fa-mobile-screen-button",
      colSpanClass: "lg:col-span-2",
      rowSpanClass: "lg:row-span-2",
    },
    {
      title: "Live Workshops & Events: Connecting You With the Experts",
      description: "Direct virtual and offline networking masterclasses led by SEBI-registered advisors, founders, and domain experts. Zero sales pitches—pure execution.",
      icon: "fa-solid fa-calendar-days",
      colSpanClass: "lg:col-span-2",
      rowSpanClass: "lg:row-span-1",
    },
    {
      title: "Campus Ambassador Rollouts: A Grassroots Movement",
      tag: "in-development" as const,
      description: "Empowering student leaders to build local, peer-led financial communities and launch Klyth Chapters inside their campuses.",
      icon: "fa-solid fa-graduation-cap",
      colSpanClass: "lg:col-span-1",
      rowSpanClass: "lg:row-span-1",
    },
    {
      title: "Institutional Partnerships: Bridging the Gap",
      description: "Partnering directly with forward-looking universities to integrate experiential financial readiness programs into modern student programs.",
      icon: "fa-solid fa-building-columns",
      colSpanClass: "lg:col-span-1",
      rowSpanClass: "lg:row-span-1",
    },
    {
      title: "Action-Oriented Cohort Sprints: From Theory to Execution",
      tag: "in-beta" as const,
      description: "Time-bound, milestone-driven sprints where squads build real portfolios, execute tax setups, and solve financial blueprints alongside active mentors.",
      icon: "fa-solid fa-users-gear",
      colSpanClass: "lg:col-span-2",
      rowSpanClass: "lg:row-span-1",
    },
    {
      title: "The Community Ecosystem: Breaking the Money Taboo",
      tag: "in-beta" as const,
      description: "A highly moderated peer network for open, structured conversations about earnings, equity, growth experiments, and wealth frameworks.",
      icon: "fa-solid fa-comments",
      colSpanClass: "lg:col-span-1",
      rowSpanClass: "lg:row-span-1",
    },
    {
      title: "Bite-Sized Financial Intelligence",
      description: "A weekly briefing translating complex macroeconomic currents, policy, and venture trends into simple, high-signal ideas for youth.",
      icon: "fa-solid fa-newspaper",
      colSpanClass: "lg:col-span-1",
      rowSpanClass: "lg:row-span-1",
    },
  ];

  return (
    <section className="relative w-full bg-color-klyth-charcoal text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 select-none">
      {/* Background radial highlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-color-klyth-olive/5 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Header Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-color-klyth-gold">
            The Klyth Way
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-color-klyth-cream leading-tight select-text">
            Financial growth is not a course. It is a daily habit.
          </h2>
          <p className="font-sans font-regular text-lg sm:text-xl text-color-klyth-cream/70 mt-2 select-text">
            We aren't just teaching finance. We are building the infrastructure for financially intelligent living.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 auto-rows-fr">
          {pillars.map((pillar, idx) => (
            <BentoCard
              key={idx}
              idx={idx}
              title={pillar.title}
              tag={pillar.tag}
              description={pillar.description}
              colSpanClass={pillar.colSpanClass}
              rowSpanClass={pillar.rowSpanClass}
              isMobile={isMobile}
              icon={pillar.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
