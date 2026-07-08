"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center px-6 z-10 pt-28 pb-16 md:pt-36 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-klyth-cream">
          Let’s Talk.
        </h1>
        <p className="font-sans text-lg md:text-xl text-klyth-cream/70 max-w-[60ch] leading-relaxed font-light">
          Whether you have a question about the ecosystem, want to partner with us, or just want to say hi we are here for it. Drop us a line below or reach out directly to the right inbox.
        </p>
      </motion.div>
    </section>
  );
}
