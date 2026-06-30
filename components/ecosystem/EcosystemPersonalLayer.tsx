"use client";

import React from "react";

export default function EcosystemPersonalLayer() {
  return (
    <section className="relative w-full bg-klyth-charcoal z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        
        {/* Soft Depth Lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-klyth-olive/5 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-24 md:gap-32 relative z-10">
          
          {/* Phase 1: Behavioral Technology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content Side */}
            <div className="flex flex-col justify-center">
              <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[9px] md:text-[10px] mb-4 md:mb-6">
                Behavioral Technology
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
                Your Hyper-Personalized <br className="hidden md:block" /> <span className="italic text-klyth-cream/90">Financial Roadmap.</span>
              </h2>
              <div>
                <span className="font-sans text-klyth-gold/80 text-[9px] md:text-[11px] uppercase tracking-widest font-medium mb-4 md:mb-8 px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
                  Launching soon
                </span>
              </div>
              <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light">
                Traditional finance curriculums fail because they are rigid. Your financial reality is not. Our flagship application replaces the outdated, one-size-fits-all model with hyper-personalized micro-lessons. Powered by a gamified, adaptive engine, the app molds entirely to your specific financial baseline and goals.
              </p>
            </div>

            {/* Right Visual Side - UI State 1 */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="w-[85%] sm:w-full max-w-[280px] md:max-w-sm aspect-[1/1.6] md:aspect-[1/1.7] klyth-glass rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 flex flex-col gap-3 md:gap-4 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                 <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-4 opacity-50" />
                 <div className="w-full h-32 rounded-xl bg-klyth-charcoal/40 border border-white/5 flex flex-col justify-end p-5">
                   <div className="w-1/3 h-[3px] bg-klyth-olive rounded-full mb-3 shadow-[0_0_10px_rgba(74,93,35,0.8)]" />
                   <div className="w-2/3 h-[3px] bg-white/10 rounded-full" />
                 </div>
                 <div className="w-full h-16 rounded-xl bg-klyth-charcoal/40 border border-white/5 flex items-center p-5 mt-2">
                   <div className="w-6 h-6 rounded-full border border-klyth-gold/30 mr-4 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-klyth-gold/40 shadow-[0_0_8px_rgba(226,184,66,0.5)]" />
                   </div>
                   <div className="flex-1 h-[3px] bg-white/10 rounded-full" />
                 </div>
                 <div className="w-full h-16 rounded-xl bg-klyth-charcoal/40 border border-white/5 flex items-center p-5">
                   <div className="w-6 h-6 rounded-full border border-klyth-platinum/30 mr-4 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-klyth-platinum/40" />
                   </div>
                   <div className="flex-1 h-[3px] bg-white/10 rounded-full" />
                 </div>
              </div>
            </div>

          </div>


          {/* Phase 2: Execution Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content Side */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <span className="font-sans font-medium uppercase tracking-[0.3em] text-klyth-olive text-[9px] md:text-[10px] mb-4 md:mb-6">
                Execution Engine
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-klyth-cream leading-tight">
                Moving From Theory to <br className="hidden md:block" /> <span className="italic text-klyth-cream/90">Execution.</span>
              </h2>
              <div>
                <span className="font-sans text-klyth-gold/80 text-[9px] md:text-[11px] uppercase tracking-widest font-medium mb-4 md:mb-8 px-3 md:px-4 py-1.5 bg-klyth-gold/5 border border-klyth-gold/20 rounded-full inline-block backdrop-blur-md">
                  Currently in beta
                </span>
              </div>
              <p className="font-sans text-klyth-cream/50 text-sm md:text-lg leading-relaxed font-light">
                Learning about money is only the first step; taking action is what actually builds wealth. We host guided, time-bound cohort programs where small groups of users tackle specific financial milestones together, utilizing intense peer accountability to ensure that our community doesn't just consume content—they execute it.
              </p>
            </div>

            {/* Right Visual Side - UI State 2 */}
            <div className="relative w-full flex items-center justify-center lg:justify-start order-1 lg:order-2">
              <div className="w-[85%] sm:w-full max-w-[280px] md:max-w-sm aspect-[1/1.6] md:aspect-[1/1.7] klyth-glass rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl" style={{ marginLeft: "28%" }} >
                <div className="flex flex-col gap-0 relative">
                  {[
                    { day: "Day 01", title: "Foundation Check" },
                    { day: "Day 10", title: "Allocation Strategy" },
                    { day: "Day 20", title: "Peer Review" },
                    { day: "Day 30", title: "Execution Milestone" }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative group pb-10 last:pb-0">
                      {i !== 3 && (
                         <div className="absolute left-[7px] top-4 bottom-[-16px] w-[1px] bg-white/10" />
                      )}
                      <div className="relative z-10 flex flex-col items-center pt-1">
                         <div className="w-4 h-4 rounded-full border border-klyth-olive bg-klyth-olive/20 flex items-center justify-center shadow-[0_0_15px_rgba(74,93,35,0.3)]">
                            <div className="w-1.5 h-1.5 bg-klyth-cream rounded-full" />
                         </div>
                      </div>
                      <div>
                         <span className="font-sans text-[9px] text-klyth-gold/70 font-medium tracking-[0.2em] uppercase block mb-1">
                           {step.day}
                         </span>
                         <h3 className="font-serif text-xl text-klyth-cream/90">
                           {step.title}
                         </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
