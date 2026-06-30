"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcosystemMacroLayer() {
  const newsItems = [
    { title: "Q3 Budget Breakdown", date: "Today" },
    { title: "Taxation Shifts 2024", date: "Yesterday" },
    { title: "Macro Market Trends", date: "Oct 12" },
    { title: "Interest Rate Adjustments", date: "Oct 10" },
    { title: "Global Inflation Impact", date: "Oct 05" }
  ];

  return (
    <section className="relative w-full py-32 md:py-48 px-6 bg-[#0A0A0B] z-10 flex justify-center">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col gap-10">
        
        {/* Top Bento Row: Macro Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="w-full klyth-glass rounded-[3rem] p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        >
          <div className="flex flex-col items-start pr-0 lg:pr-10">
            <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6">
              Real-Time Clarity
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-klyth-cream leading-tight">
              Macro Insights Built <br /><span className="italic font-light text-klyth-cream/80">for the Youth.</span>
            </h2>
            <p className="font-sans text-klyth-cream/50 text-lg leading-relaxed font-light">
              Traditional financial news is dense, intimidating, and intentionally inaccessible. We strip away the jargon. Klyth translates complex macroeconomic events—like massive market trends, taxation shifts, and national budget announcements—into crisp, highly relevant content delivered straight to your inbox through our exclusive email newsletter. We deliver pure, actionable intelligence focused on one thing: exactly how the broader economy impacts your personal wallet today.
            </p>
          </div>

          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl bg-[#0F0F11] border border-white/5 shadow-inner p-2 mask-image-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-4 absolute top-0 w-[calc(100%-16px)] mt-4"
            >
              {[...newsItems, ...newsItems].map((item, i) => (
                <div 
                  key={i} 
                  className="w-full bg-white/[0.02] border border-white/5 p-6 rounded-xl flex flex-col transition-colors duration-500 hover:bg-white/[0.05]"
                >
                   <span className="font-sans text-[10px] tracking-[0.2em] text-klyth-gold/60 font-medium mb-3 uppercase">{item.date}</span>
                   <h4 className="font-serif text-xl text-klyth-cream/90">{item.title}</h4>
                   <div className="mt-5 w-full h-[1px] bg-white/5 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-klyth-olive/50" />
                   </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bento Row: Campus & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          
          {/* Grassroots Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: premiumEase }}
            className="w-full klyth-glass rounded-[3rem] p-10 md:p-14 flex flex-col justify-between border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl group"
          >
            <div>
              <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6 block">
                Grassroots Growth
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-klyth-cream leading-tight">
                Building a Movement on <br /><span className="italic font-light text-klyth-cream/80">Your Campus.</span>
              </h2>
              <span className="font-sans text-klyth-gold/80 text-[10px] uppercase tracking-widest font-medium mb-8 px-3 py-1 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block">
                Currently in development
              </span>
              <p className="font-sans text-klyth-cream/50 text-base leading-relaxed mb-10 font-light">
                Through our extensive ambassador program, we empower student leaders to bring the Klyth movement directly to their peers. We are normalizing financial conversations in cafeterias, dorms, and classrooms.
              </p>
            </div>
            
            <Link href="/campus" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-klyth-olive group-hover:text-klyth-gold transition-colors duration-300 cursor-pointer">
              Lead a Chapter
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>

          {/* Systemic Change */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            className="w-full klyth-glass rounded-[3rem] p-10 md:p-14 flex flex-col justify-between border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <div>
              <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[10px] mb-6 block">
                Systemic Change
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-klyth-cream leading-tight">
                Bridging the Gap <br /><span className="italic font-light text-klyth-cream/80">from the Inside.</span>
              </h2>
              <p className="font-sans text-klyth-cream/50 text-base leading-relaxed mb-10 font-light">
                Complaining about the educational system isn't enough. Klyth partners directly with universities to seamlessly integrate our practical financial literacy modules into their existing frameworks. By offering our ecosystem as a supplementary program, we ensure that students graduate fully equipped with financial readiness.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
