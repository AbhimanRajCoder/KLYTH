"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  number: string;
  title: string;
  body: string;
  isMobile: boolean;
}

const ProblemCard = ({ number, title, body, isMobile }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!cardRef.current) return;
    
    // Clear any previous animations/scrolltriggers on this element
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === cardRef.current) t.kill();
    });

    if (isMobile) {
      // Fallback animation for mobile viewport entry
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
        }
      );
    } else {
      // Desktop scrubbing effect
      // Initial state: dimmed and slightly shrunk
      gsap.set(cardRef.current, {
        opacity: 0.3,
        scale: 0.92,
        boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0px rgba(226,184,66,0)",
      });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.6,
        }
      });
      
      // Peaks at 100% opacity, full scale, and golden glow at center
      tl.to(cardRef.current, {
        opacity: 1,
        scale: 1,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(226,184,66,0.08)",
        duration: 1,
        ease: "none",
      })
      .to(cardRef.current, {
        opacity: 0.3,
        scale: 0.92,
        boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0px rgba(226,184,66,0)",
        duration: 1,
        ease: "none",
      });
    }
  }, { scope: cardRef, dependencies: [isMobile] });

  const content = (
    <div className="flex flex-col gap-6 relative z-10">
      <div className="flex items-center justify-between">
        <span className="font-sans font-bold text-xs tracking-widest text-color-klyth-gold uppercase opacity-90">
          Metric 0{number}
        </span>
        <div className="w-8 h-8 rounded-full border border-color-klyth-ghost flex items-center justify-center bg-color-klyth-charcoal/40 text-color-klyth-cream/50 text-xs font-semibold">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-color-klyth-cream leading-tight tracking-tight">
          {title}
        </h3>
        <p className="font-sans font-normal text-base sm:text-lg text-color-klyth-cream/70 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );

  return (
    <div
      ref={cardRef}
      suppressHydrationWarning
      className="group klyth-glass p-8 sm:p-10 lg:p-12 rounded-[24px] lg:rounded-[32px] w-full border border-white/5 hover:border-color-klyth-olive/40 transition-colors duration-500 relative overflow-hidden will-change-transform"
    >
      {/* Inner hover border gloss shine */}
      <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] p-[1px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {content}
    </div>
  );
};

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLSpanElement>(null);
  const quoteTextRef = useRef<HTMLSpanElement>(null);
  const quoteLineRef = useRef<HTMLSpanElement>(null);
  const quoteGlowRef = useRef<HTMLSpanElement>(null);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (leftColumnRef.current) {
      // Status Quo text stagger animation
      gsap.fromTo(
        leftColumnRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (quoteRef.current) {
      // Bottom Typography glowing text effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      tl.to(quoteTextRef.current, {
        textShadow: "0px 0px 40px rgba(226,184,66,0.5), 0px 0px 80px rgba(226,184,66,0.2)",
        duration: 1.8,
        delay: 0.2,
        ease: "power2.out",
      })
        .to(quoteLineRef.current, { scaleX: 1, duration: 1.4, ease: "power3.inOut" }, "-=1.4")
        .to(quoteGlowRef.current, { scaleX: 1, duration: 1.8, ease: "power3.inOut" }, "-=1.5");
    }
  }, { scope: containerRef });

  const cards = [
    {
      number: "1",
      title: "The \"One-Size-Fits-All\" Trap",
      body: "YouTube channels, textbook lessons, and standard online courses offer flat, generic blueprints. They assume every student has the same capital, background, and goals. The result? Zero personalization and absolute engagement failure.",
    },
    {
      number: "2",
      title: "The AI Chatbot Illusion",
      body: "Modern AI chatbots deliver endless lists of generic textbook facts. But listicle definitions don't equate to structure, a reliable roadmap, or genuine progress. You don't need more raw data—you need execution.",
    },
    {
      number: "3",
      title: "The Finfluencer Echo Chamber",
      body: "Viral social content is optimized for clicks, sensations, and affiliate sign-ups, not for the long-term health of your portfolio. Following hype-driven trends leaves you reacting to noise rather than building systems.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent text-color-klyth-cream py-24 sm:py-32 px-6 sm:px-12 select-none"
    >
      {/* Dynamic background lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-color-klyth-olive/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Sticky content */}
        <div className="flex flex-col justify-start lg:sticky lg:top-32 lg:h-[calc(100vh-200px)]">
          <div ref={leftColumnRef} className="flex flex-col gap-6 max-w-xl">
            <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-color-klyth-gold">
              The Status Quo
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-color-klyth-cream select-text">
              We were taught complex formulas, but left blind to our own financial reality.
            </h2>
            <div className="flex flex-col gap-6 mt-6 font-sans text-color-klyth-cream/70 text-lg leading-relaxed select-text">
              <p>
                You spent years in classrooms memorizing equations that had no relevance to your life, and were then expected to make life-altering financial decisions completely in the dark.
              </p>
              <p>
                But the deepest flaw isn't just the lack of education—it is the lack of context. Most financial advisors and platforms speak a dialect from a bygone era.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Scrolling cards */}
        <div className="flex flex-col gap-12 lg:gap-24 lg:pb-[20vh]">
          {cards.map((card, idx) => (
            <ProblemCard
              key={idx}
              number={card.number}
              title={card.title}
              body={card.body}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Full Width Centered Quote */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-12 lg:mt-16 pt-8 flex justify-center text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold select-text">
          <span ref={quoteRef} className="relative inline-block pb-5 px-4 sm:px-6">
            <span className="text-color-klyth-cream font-serif italic pr-1 sm:pr-2 opacity-60">"</span>
            <span
              ref={quoteTextRef}
              style={{ textShadow: "0px 0px 0px rgba(226,184,66,0)" }}
              className="text-color-klyth-cream font-serif tracking-wide italic transition-all"
            >
              Personal finance is deeply personal.
            </span>
            <span className="text-color-klyth-cream font-serif italic pl-1 sm:pl-2 opacity-60">"</span>
            
            {/* Primary Gold Underline */}
            <span
              ref={quoteLineRef}
              style={{ transformOrigin: "left", transform: "scaleX(0)" }}
              className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color-klyth-gold to-transparent opacity-60"
            />
            {/* Shimmer Ambient Glow layer */}
            <span
              ref={quoteGlowRef}
              style={{ transformOrigin: "left", transform: "scaleX(0)" }}
              className="absolute left-[10%] bottom-[1px] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80 blur-[0.5px]"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
