"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "The Basics & Core Philosophy",
    items: [
      {
        question: "What exactly is Klyth?",
        answer: "Klyth is a gamified financial learning app and community ecosystem designed to teach young adults in India how to practically manage, save, and grow their money. We combine adaptive technology, behavioral psychology, live expert events, and peer accountability to turn financial literacy from a stressful, occasional chore into an intuitive daily habit."
      },
      {
        question: "Who is Klyth built for? Do I need prior finance knowledge?",
        answer: "Klyth is engineered specifically for college students, recent graduates, and early-career professionals navigating financial independence for the first time. You do not need any background in finance, economics, or math. Whether you are figuring out your first budget, opening an emergency fund, or planning your very first investment, our platform meets you exactly where you are and scales with your progress."
      },
      {
        question: "How is Klyth different from watching free YouTube finance videos or using AI chatbots?",
        answer: "Traditional internet advice suffers from three fatal flaws: information overload, zero personalization, and no behavioral support. Watching a two-hour video or asking a chatbot gives you isolated facts, but leaves you alone when it comes to execution. Klyth replaces passive consumption with active, gamified daily actions, peer accountability cohorts, and structured roadmaps tailored to your specific income and goals."
      },
      {
        question: "Why does Klyth focus so heavily on \"behavior\" rather than just financial theory?",
        answer: "Financial anxiety isn't solved by memorizing definitions; it is solved by taking action. Research shows that lasting wealth is built through consistent daily routines rather than one-time bursts of motivation. Our platform uses behavioral design—like streaks, milestone trackers, and structured micro-challenges—to help you build muscle memory around saving, budgeting, and investing."
      }
    ]
  },
  {
    category: "The Klyth App & Behavioral Engine",
    items: [
      {
        question: "When does the Klyth app officially launch, and how do I get early access?",
        answer: "We are currently rolling out closed beta access in prioritized batches to members on our waitlist. By joining the ecosystem on our website (/join), you secure a priority spot in line. Active community members, campus leads, and early newsletter subscribers receive expedited invites before our full public launch on the Google Play Store and iOS App Store."
      },
      {
        question: "What devices and platforms will the Klyth app support?",
        answer: "The app is built natively for both Android and iOS, with a fully responsive web companion dashboard for users who prefer managing their financial roadmaps from a desktop or tablet."
      },
      {
        question: "What does \"gamified financial learning\" actually look like inside the app?",
        answer: "Instead of reading dense text, you progress through interactive, scenario-based simulations. You earn XP (experience points) for completing daily financial check-ins, unlock badges for hitting real-world milestones (like automating your savings or setting up health insurance), and visualize your compound growth through dynamic, clean UI dashboards."
      },
      {
        question: "Does the Klyth app connect directly to my bank accounts?",
        answer: "During our initial beta release, Klyth operates purely on user-reported profiling and scenario simulations to prioritize zero-friction learning and complete data privacy. Future roadmaps include optional, read-only Account Aggregator (AA) integrations regulated by the Reserve Bank of India (RBI) for automated expense categorization, but linking live bank accounts will always remain 100% optional."
      }
    ]
  },
  {
    category: "Live Workshops, Events & AMAs",
    items: [
      {
        question: "What happens at Klyth Live Events and Workshops?",
        answer: "Our live events (/events) are high-energy, 60-to-90-minute tactical masterclasses hosted by the founding team, SEBI-registered financial educators, and verified industry mentors. We strip away Wall Street jargon and focus on single, actionable outcomes—such as mastering tax filing under the new regime, structuring a mutual fund portfolio, or evaluating credit card reward ecosystems."
      },
      {
        question: "Are live virtual sessions recorded if I cannot attend in real time?",
        answer: "Yes. Registered ecosystem members get access to video-on-demand replays within 24 hours of the live stream. However, attending live gives you access to the Unfiltered Q&A segments, where hosts answer specific, unscripted questions from the audience."
      },
      {
        question: "Can I ask specific questions about my personal money situation during AMAs?",
        answer: "You can ask structured questions about strategies, asset classes, and frameworks. However, because Klyth is an educational platform and not a personalized advisory firm, our hosts cannot give specific individualized investment advice (e.g., advising you to buy or sell a specific individual stock)."
      }
    ]
  },
  {
    category: "Cohort Sprints & Action Challenges",
    items: [
      {
        question: "What is a \"Cohort Sprint\"?",
        answer: "A Cohort Sprint is a guided, peer-to-peer execution challenge—typically lasting 14 to 30 days—focused on solving one specific financial goal alongside a group of peers. Examples include the \"First Investment Sprint\" or the \"30-Day Emergency Fund Challenge.\""
      },
      {
        question: "How much time per week do I need to commit to a Sprint?",
        answer: "Sprints are designed for busy students and working professionals. You should expect to spend roughly 10 to 15 minutes a day completing bite-sized tasks, tracking habits in the app, and checking in with your accountability pod."
      },
      {
        question: "What happens if I fall behind during a Cohort Sprint?",
        answer: "Our behavioral engine is built around encouragement, not punishment. If you miss a day, the app dynamically adjusts your schedule. Your cohort facilitator and peer group will also nudge you to help you regain momentum without feeling shame or anxiety."
      }
    ]
  },
  {
    category: "Campus Chapters & Leadership",
    items: [
      {
        question: "What is a Klyth Campus Chapter?",
        answer: "A Campus Chapter is a student-led, grassroots wing of the Klyth ecosystem operating directly inside universities across India. Chapters host live workshops, run financial literacy hackathons, and act as the primary bridge between college students and real-world financial independence."
      },
      {
        question: "How do I apply to become a Campus Ambassador for my university?",
        answer: "You can submit an early application via our Campus Hub (/campus) or by emailing hello@klyth.in with the subject line \"Campus Chapter Application.\" We look for highly motivated, entrepreneurial students who want to build leadership credentials while solving a massive problem for their peers."
      },
      {
        question: "What resources and backing does Klyth provide to Campus Leads?",
        answer: "Official Chapter Leads receive: Full Event Sponsorship (budget and logistical backing), Curriculum & Slide Kits (plug-and-play educational decks), Direct Mentorship (1-on-1 access to the founding team), and Career Perks (recommendations, certificates, and priority hiring)."
      }
    ]
  },
  {
    category: "Pricing, Subscriptions & Free Tier",
    items: [
      {
        question: "Is Klyth free to join?",
        answer: "Yes. Joining the Klyth ecosystem, receiving our weekly Financial Rewiring Newsletter, participating in community forums, and attending general campus events are completely free."
      },
      {
        question: "What will cost money inside the Klyth ecosystem?",
        answer: "To keep the core educational layer accessible to everyone, we maintain a robust free tier inside the app. In the future, we will offer optional, paid premium upgrades—such as Intensive Cohort Sprints, advanced simulation tools, and intimate, closed-door masterclasses with high-profile industry leaders."
      },
      {
        question: "What is your refund policy for paid workshops or specialized cohorts?",
        answer: "If you enroll in a paid Cohort Sprint or intensive workshop and find that it does not deliver the clarity and value promised, we offer a no-questions-asked refund window up to 48 hours after the first live session begins."
      }
    ]
  },
  {
    category: "Security, Privacy & Regulatory Boundaries",
    items: [
      {
        question: "Is Klyth a SEBI-registered financial advisor or stockbroker? Can I invest directly through the app?",
        answer: "No. Klyth is strictly an educational technology and community platform. We are not a broker-dealer, asset management company, or SEBI-registered Registered Investment Advisor (RIA). We do not execute trades, hold user funds, or recommend specific equities. Our mission is to give you the independent literacy required to make your own confident decisions through your chosen banks and brokerage accounts."
      },
      {
        question: "How does Klyth handle and protect my personal data?",
        answer: "We treat your data with the highest level of care and strict professional standards. Any information you share with us—such as your contact details or answers to our financial goal profiling—is collected securely and used strictly to personalize your educational roadmap within the Klyth ecosystem. We implement industry-standard security safeguards to prevent unauthorized access and operate in full alignment with Indian data privacy frameworks."
      },
      {
        question: "Will Klyth ever sell my email or personal details to third-party advertisers or loan companies?",
        answer: "Never. We do not sell, rent, or trade your personal contact details or behavioral profiles to third-party advertisers, credit card companies, or loan providers. Your trust is our core currency."
      }
    ]
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 z-10 flex flex-col items-center">
      <div className="w-full max-w-[780px] flex flex-col items-center text-center mb-16 md:mb-20">
        <span className="font-sans font-medium uppercase tracking-[0.2em] text-klyth-olive text-xs mb-4">
          The Details
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-klyth-cream">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full max-w-[780px] flex flex-col gap-10">
        {faqs.map((categoryGroup, catIndex) => (
          <div key={catIndex} className="flex flex-col gap-4">
            <h3 className="font-serif text-xl md:text-2xl font-medium text-klyth-gold/90 border-b border-white/10 pb-3 mb-1">
              {categoryGroup.category}
            </h3>
            <div className="flex flex-col gap-3 md:gap-4">
              {categoryGroup.items.map((faq, index) => {
                const id = `${catIndex}-${index}`;
                const isOpen = openIndex === id;
                return (
                  <motion.div
                    key={id}
                    layout
                    onClick={() => toggleOpen(id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleOpen(id);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isOpen}
                    className={`w-full bg-[#1C1C1E] rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-klyth-olive border ${
                      isOpen 
                        ? "border-klyth-olive shadow-[0_0_20px_rgba(74,93,35,0.15)] -translate-y-1" 
                        : "border-klyth-ghost/50 hover:border-klyth-olive/50 hover:shadow-[0_0_15px_rgba(74,93,35,0.1)] hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-center justify-between p-5 md:p-6">
                      <h4 className="font-sans font-semibold text-base md:text-lg text-klyth-cream pr-6">
                        {faq.question}
                      </h4>
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
                          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                            <p className="font-sans text-klyth-cream/70 text-sm md:text-base leading-relaxed">
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
          </div>
        ))}
      </div>
    </section>
  );
}
