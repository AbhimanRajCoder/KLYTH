"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FaqSupportCTA() {
  return (
    <section className="relative w-full py-32 px-4 md:px-6 z-10 flex justify-center mt-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[780px] bg-gradient-to-b from-[#1C1C1E]/80 to-[#1C1C1E]/40 backdrop-blur-xl rounded-[2rem] p-10 md:p-16 border border-white/5 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-klyth-cream mb-4">
          Still can't find what you're looking for?
        </h2>
        <p className="font-sans text-klyth-cream/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          We are here to help you navigate the ecosystem. Reach out to our team and we'll get back to you with the clarity you need.
        </p>

        <Link 
          href="/contact"
          className="group relative flex items-center gap-3 bg-klyth-olive text-klyth-cream font-sans font-medium text-sm py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(74,93,35,0.2)] hover:shadow-[0_0_25px_rgba(74,93,35,0.4)]"
        >
          <span>Contact Support</span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
