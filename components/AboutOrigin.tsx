"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const premiumEase = [0.16, 1, 0.3, 1];

const journeyData = [
  {
    id: 1,
    image: "/bannerimages/1.webp",
    title: "AppNova Champion",
    description: "A quick photo session after Klyth won 1st Prize at AppNova Hackathon, IIT Roorkee.",
    badge: "1st Prize — IIT Roorkee",
    year: "2026",
  },
  {
    id: 2,
    image: "/bannerimages/2.webp",
    title: "Startup Foundry 2026",
    description: "One of the many memorable sessions from the Startup Foundry 2026 Cohort with Mr. Vivek Sridhar (CTO, Microsoft for Startups).",
    badge: "Startup Foundry 2026",
    year: "2026",
  },
  {
    id: 3,
    image: "/bannerimages/3.webp",
    title: "eChai Ventures",
    description: "Presented Klyth at the eChai Ventures AI × SaaS Startup Meetup in Pune, sharing our vision with founders, developers, and startup leaders.",
    badge: "5+ Startup Pitches",
    year: "2026",
  },
  {
    id: 4,
    image: "/bannerimages/4.webp",
    title: "ADYPU Incubators",
    description: "Presented Klyth at the ADYPU Incubators Startup Pitch Session, sharing our vision with mentors, founders, and fellow innovators.",
    badge: "Building Klyth",
    year: "2026",
  },
  {
    id: 5,
    image: "/bannerimages/5.webp",
    title: "Learning from Leaders",
    description: "A memorable session with Geeta Srivastava, learning from her entrepreneurial journey and global leadership experience.",
    badge: "Mentored by Industry Leaders",
    year: "2026",
  },
  {
    id: 6,
    image: "/bannerimages/6.webp",
    title: "IIT Roorkee Pitch",
    description: "Presenting Klyth at the IIT Roorkee AppNova Hackathon, pitching our vision to judges, mentors, and industry experts.",
    badge: "Pitching the Vision",
    year: "2026",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function AboutOrigin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % journeyData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + journeyData.length) % journeyData.length);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoplay || isHovered) return;
    const timer = setInterval(handleNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isAutoplay, isHovered, handleNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="relative w-full pt-24 sm:pt-32 pb-24 sm:pb-32 z-10 flex flex-col items-center justify-start overflow-hidden min-h-screen bg-[#0a0a0a]">
      
      {/* Top Content */}
      <div className="w-full max-w-5xl px-6 text-center mb-16 sm:mb-24 flex flex-col items-center relative z-40">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6 inline-block"
        >
          Our Journey
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold mb-8 text-klyth-cream leading-[1.1]"
        >
          Building the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyth-cream to-klyth-cream/40">Financial Intelligence</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
          className="font-sans text-klyth-cream/50 text-base md:text-xl leading-relaxed font-light space-y-6 max-w-2xl"
        >
          <p>
            Klyth was not born in a boardroom. It was born out of shared frustration. We looked around at our peers—highly educated, ambitious, and entering the workforce—who were completely paralyzed by the basics of personal finance, taxation, and investing.
          </p>
        </motion.div>
      </div>

      {/* Scattered Polaroids - Full Width */}
      <div className="relative w-full h-[65vw] sm:h-[80vh] min-h-[280px] sm:min-h-[500px] flex items-center justify-center mb-16 sm:mb-0">
        {journeyData.map((slide, i) => {
          let distance = i - currentIndex;
          if (distance > journeyData.length / 2) distance -= journeyData.length;
          if (distance < -journeyData.length / 2) distance += journeyData.length;

          const isActive = distance === 0;

          // Define scattered slots for inactive cards
          const getSlot = (dist: number) => {
            if (dist === -1) return { x: -35, y: -20, rotate: -12 }; // top left
            if (dist === 1) return { x: 35, y: -15, rotate: 14 };   // top right
            if (dist === -2) return { x: -30, y: 25, rotate: 10 };  // bottom left
            if (dist === 2) return { x: 32, y: 22, rotate: -15 };   // bottom right
            if (dist === 3 || dist === -3) return { x: 0, y: -35, rotate: 6 }; // top center
            return { x: 0, y: 0, rotate: 0 };
          };

          const slot = getSlot(distance);
          
          // Animate properties based on active state and screen size
          const xPos = isActive ? 0 : (isMobile ? distance * 105 : slot.x);
          const yPos = isActive ? 0 : (isMobile ? 0 : slot.y);
          const rotation = isActive ? 0 : (isMobile ? 0 : slot.rotate);
          const scale = isActive ? 1 : (isMobile ? 0.8 : 0.55); // Inactive polaroids relative scale
          const zIndex = isActive ? 40 : 20 - Math.abs(distance);
          const opacity = isMobile ? (isActive ? 1 : 0) : 1;

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                x: `${xPos}vw`,
                y: `${yPos}vh`,
                rotate: rotation,
                scale: scale,
                zIndex: zIndex,
                opacity: opacity,
              }}
              whileHover={!isActive ? { 
                rotate: 0, 
                scale: 0.65, 
                zIndex: 50,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              } : undefined}
              transition={{ type: "spring", damping: 25, stiffness: 120, mass: 1 }}
              onClick={() => {
                if (!isActive) {
                  setDirection(distance > 0 ? 1 : -1);
                  setCurrentIndex(i);
                  // Pause autoplay on manual interaction
                  setIsAutoplay(false);
                }
              }}
              className={`absolute w-[90vw] sm:w-[75vw] lg:w-[65vw] xl:w-[55vw] max-w-[1000px] aspect-[1.8/1] sm:aspect-[2/1] bg-[#F9F6F0] p-3 sm:p-5 pb-16 sm:pb-24 rounded-md shadow-2xl will-change-transform ${isActive ? 'cursor-default' : 'cursor-pointer hover:shadow-3xl'}`}
            >
              {/* Polaroid Image */}
              <div className="relative w-full h-full bg-[#1A1A1A] rounded-sm overflow-hidden pointer-events-none">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={isActive}
                  className="object-contain object-center"
                />
                
                {/* Active Image gradient for readability if needed, but polaroid is clean */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
              </div>

              {/* Polaroid Text at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
                <div className="flex flex-col">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1A1A1A] mb-1 truncate max-w-[50vw]">
                    {slide.title}
                  </h3>
                  {isActive && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-[#1A1A1A]/70 text-xs sm:text-sm font-sans line-clamp-1 sm:line-clamp-none max-w-2xl"
                    >
                      {slide.description}
                    </motion.p>
                  )}
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] sm:text-xs text-[#1A1A1A]/50 tracking-wider">
                    {slide.year}
                  </span>
                  <div className="mt-1 px-3 py-1 bg-black/5 rounded-full">
                    <span className="text-xs sm:text-sm font-medium text-[#1A1A1A]">
                      {slide.badge}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Floating Controls for Autoplay */}
        <div className="absolute bottom-[-3.5rem] sm:bottom-0 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 sm:right-12 z-50 flex items-center gap-4 w-max">
          <div className="flex items-center gap-1 sm:gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-xl">
            <button 
              onClick={handlePrev}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="w-px h-4 bg-white/10 mx-1"></div>
            <button 
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            >
              {isAutoplay ? <Pause className="w-4 h-4 sm:w-4 sm:h-4" /> : <Play className="w-4 h-4 sm:w-4 sm:h-4 ml-0.5" />}
            </button>
            <div className="w-px h-4 bg-white/10 mx-1"></div>
            <button 
              onClick={handleNext}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          <div className="font-mono text-sm tracking-widest text-white/40 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2.5 shadow-xl">
            <span className="text-white">0{currentIndex + 1}</span> / 0{journeyData.length}
          </div>
        </div>

      </div>
    </section>
  );
}
