"use client";
import { motion } from "framer-motion";

export default function FaqHero() {
  return (
    <section className="relative w-full h-[40vh] min-h-[350px] flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-klyth-cream">
          Got Questions? We’ve Got Answers.
        </h1>
        <p className="font-sans text-lg md:text-xl text-klyth-cream/70 max-w-[60ch] leading-relaxed">
          Everything you need to know about the Klyth ecosystem, the upcoming app, and how we are rewiring financial growth for a new generation.
        </p>
      </motion.div>
    </section>
  );
}
