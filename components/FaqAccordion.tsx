"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "When does the Klyth app officially launch?",
    answer: "We are currently in closed beta, refining the behavioral engine with our early testers. We are rolling out priority access to our waitlist members in batches. By joining the ecosystem today, you guarantee your spot at the front of the line for our upcoming public launch."
  },
  {
    question: "Is Klyth free to use?",
    answer: "Joining the Klyth community ecosystem, receiving our weekly financial intelligence newsletter, and attending most of our campus events are completely free. The upcoming Klyth app will feature a robust free tier to help you build your foundation, alongside premium cohort sprints for accelerated, hands-on execution."
  },
  {
    question: "How is this different from watching YouTube finance videos?",
    answer: "YouTube gives you one-size-fits-all information; Klyth gives you a hyper-personalized system. We replace the passive consumption and information overload of video tutorials with active, gamified habits, intense peer accountability, and step-by-step execution roadmaps tailored entirely to your specific financial reality."
  },
  {
    question: "Do I need to be a finance expert to attend the live workshops?",
    answer: "Absolutely not. Our events are built specifically for beginners, students, and early-career professionals. We strip away the intimidating Wall Street jargon and focus entirely on practical, actionable steps you can take immediately—even if you are starting from zero."
  },
  {
    question: "How do you handle my personal data and financial goals?",
    answer: "With absolute transparency and modern security standards. We do not sell your personal data to third-party advertisers. Any information you provide to personalize your roadmap is encrypted and used strictly to improve your learning experience within the Klyth ecosystem."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 z-10 flex flex-col items-center">
      <div className="w-full max-w-[780px] flex flex-col items-center text-center mb-24">
        <span className="font-sans font-medium uppercase tracking-[0.2em] text-klyth-olive text-xs mb-6">
          The Details
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-klyth-cream">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full max-w-[780px] flex flex-col gap-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              layout
              onClick={() => toggleOpen(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleOpen(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              className={`w-full bg-[#1C1C1E] rounded-[20px] cursor-pointer transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-klyth-olive border ${
                isOpen 
                  ? "border-klyth-olive shadow-[0_0_20px_rgba(74,93,35,0.15)] -translate-y-1" 
                  : "border-klyth-ghost/50 hover:border-klyth-olive/50 hover:shadow-[0_0_15px_rgba(74,93,35,0.1)] hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between p-6 md:p-8">
                <h3 className="font-sans font-semibold text-lg md:text-xl text-klyth-cream pr-6">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-klyth-cream/70"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="font-sans text-klyth-cream/70 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
