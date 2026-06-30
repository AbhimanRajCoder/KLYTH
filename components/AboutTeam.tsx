"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutTeam() {
  const team = [
    {
      name: "Yasir Eqbal",
      image: "/img/yasir.png",
      label: "The Vision",
      role: "Visionary Leadership & Strategy",
      detail: "Architecting the movement, the business model, and the overarching mission to ensure Klyth doesn't just launch, but scales into a cultural layer.",
      visual: "sphere"
    },
    {
      name: "Ekta Sachdev",
      image: "/img/ekta.png",
      label: "The Interface",
      role: "Product, UI & UX Design",
      detail: "Stripping away the friction of traditional finance apps. Crafting the Apple/Notion-level aesthetic and intuitive user journeys that make financial growth a seamless habit.",
      visual: "pane"
    },
    {
      name: "Abhiman Raj",
      image: "/img/abhiman.png",
      label: "The Engine",
      role: "Technical & Full-Stack Execution",
      detail: "Building the secure, scalable, and adaptive gamified backend that powers the Klyth ecosystem across thousands of users.",
      visual: "cube"
    }
  ];

  return (
    <section className="relative w-full py-40 px-6 z-10 flex flex-col items-center">
      <div className="w-full max-w-[70ch] text-center flex flex-col items-center mb-24">
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          The Builders
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-klyth-cream">
          A synergy of vision, <br /> <span className="italic text-klyth-cream/90">design, and code.</span>
        </h2>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed font-light">
          Rewiring a generation’s financial growth requires more than just finance knowledge. It requires world-class technology and frictionless design. We are finalizing our public roster, but our founding triad brings together the exact pillars needed to execute this massive vision at scale.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: idx * 0.2, ease: premiumEase }}
            className={`relative w-full bg-gradient-to-b from-[#1C1C1E]/80 to-[#101011]/90 backdrop-blur-3xl rounded-3xl border border-white/10 p-8 flex flex-col group cursor-pointer transition-all duration-700 hover:shadow-[0_0_80px_rgba(74,93,35,0.15)] hover:border-klyth-olive/50 hover:-translate-y-3 ${idx === 1 ? 'md:mt-12 md:-mb-12' : ''} ${idx === 2 ? 'md:mt-24 md:-mb-24' : ''}`}
          >

            {/* Visual Profile Area */}
            <div className="w-full aspect-square mb-8 flex items-center justify-center relative overflow-hidden rounded-xl bg-black/40 border border-white/5 shadow-inner">
              <div className="absolute inset-0 bg-klyth-olive/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <Image 
                src={member.image}
                alt={member.name}
                width={1000}
                height={1000}
                className="object-cover object-top w-full h-full filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <span className="font-sans font-semibold uppercase tracking-widest text-klyth-cream/80 text-[10px] mb-2">
              {member.label}
            </span>
            <h3 className="font-serif text-3xl text-klyth-cream mb-1">{member.name}</h3>
            <h4 className="font-sans text-sm text-klyth-olive mb-4">{member.role}</h4>
            <p className="font-sans text-sm text-klyth-cream/50 leading-relaxed font-light mt-auto">
              {member.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
