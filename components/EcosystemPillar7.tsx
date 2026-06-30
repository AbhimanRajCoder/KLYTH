"use client";

import { motion } from "framer-motion";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemPillar7() {
  const newsItems = [
    { title: "Q3 Budget Breakdown", date: "Today" },
    { title: "Taxation Shifts 2024", date: "Yesterday" },
    { title: "Macro Market Trends", date: "Oct 12" },
    { title: "Interest Rate Adjustments", date: "Oct 10" },
    { title: "Global Inflation Impact", date: "Oct 05" }
  ];

  return (
    <section className="relative w-full py-48 px-6 bg-klyth-charcoal z-10 flex flex-col md:flex-row-reverse items-center justify-center gap-16 md:gap-32 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-klyth-olive/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: premiumEase }}
        className="max-w-xl w-full flex flex-col items-start relative z-10"
      >
        <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
          Real-Time Clarity
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-klyth-cream leading-tight">
          Macro Insights Built <br /><span className="italic text-klyth-cream/90">for the Youth.</span>
        </h2>
        <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed mb-10 font-light">
          Traditional financial news is dense, intimidating, and intentionally inaccessible. We strip away the jargon. Klyth translates complex macroeconomic events—like massive market trends, taxation shifts, and national budget announcements—into crisp, highly relevant content delivered straight to your inbox through our exclusive email newsletter. We deliver pure, actionable intelligence focused on one thing: exactly how the broader economy impacts your personal wallet today.
        </p>
      </motion.div>

      {/* Visual Side: News Feed Ticker (Cascading Stack) */}
      <div className="relative w-full max-w-sm h-[500px] overflow-hidden mask-image-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] flex justify-center z-10">
        <motion.div 
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          whileHover={{ animationPlayState: "paused" }} // Ticker pause on hover
          className="flex flex-col gap-6 absolute top-0 w-full px-4"
        >
          {/* Double the list to create a seamless loop */}
          {[...newsItems, ...newsItems].map((item, i) => (
            <div 
              key={i} 
              className="w-full klyth-glass p-6 rounded-2xl flex flex-col transition-colors duration-500 cursor-default group hover:brightness-110"
            >
               <span className="font-sans text-[10px] tracking-[0.2em] text-klyth-gold/60 font-medium mb-3 uppercase transition-colors duration-500 group-hover:text-klyth-gold/90">{item.date}</span>
               <h4 className="font-serif text-xl text-klyth-cream/80 transition-colors duration-500 group-hover:text-white">{item.title}</h4>
               <div className="mt-6 flex gap-2">
                 <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-klyth-olive/30 transition-colors duration-500 group-hover:bg-klyth-olive/70"></div>
                 </div>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}