"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const benefits = [
    {
      title: "Priority App Beta Access",
      desc: "First to experience the Klyth app before public launch",
    },
    {
      title: "VIP Event Invites",
      desc: "Early-access RSVPs to closed-door workshops and AMAs",
    },
    {
      title: "The Financial Rewiring Newsletter",
      desc: "Bite-sized, actionable financial systems weekly",
    },
    {
      title: "Day-One Community Entry",
      desc: "Priority access to closed-door peer forums",
    },
    {
      title: "Priority Cohort Selection",
      desc: "Skip waitlist for 30-day financial action sprints",
    },
  ];

  const goals = [
    "Building an emergency fund from scratch",
    "Making my first real investment",
    "Managing and clearing debt",
    "Scaling a startup, side-hustle, or business",
    "Automating my monthly budget",
  ];

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !agreed) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleStep2Submit = () => {
    if (!selectedGoal) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1000);
  };

  return (
    <main className="min-h-screen w-full bg-color-klyth-charcoal text-color-klyth-cream flex items-center justify-center p-6 sm:p-12">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2xl h-2xl bg-color-klyth-olive/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="klyth-glass rounded-[32px] border border-color-klyth-ghost p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Value Proposition (desktop) / Top (mobile) */}
            <div className="flex flex-col">
              <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4"
            >
              Step into the Ecosystem.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-color-klyth-cream/70 leading-relaxed mb-8 lg:mb-10"
            >
              The era of financial anxiety is over. Secure your spot at the forefront of a generation rewiring how they build wealth.
            </motion.p>

            {/* Benefits */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-7 h-7 rounded-full bg-color-klyth-olive/20 flex items-center justify-center">
                    <i className="fa-solid fa-check text-sm text-color-klyth-olive" />
                  </div>
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-sm text-color-klyth-cream/60">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

            {/* Right Column - Form */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <form onSubmit={handleStep1Submit} className="flex flex-col gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl bg-color-klyth-charcoal/50 border border-color-klyth-ghost focus:border-color-klyth-olive focus:ring-1 focus:ring-color-klyth-olive/30 outline-none transition-all duration-200"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Primary Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl bg-color-klyth-charcoal/50 border border-color-klyth-ghost focus:border-color-klyth-olive focus:ring-1 focus:ring-color-klyth-olive/30 outline-none transition-all duration-200"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          onClick={() => setAgreed(!agreed)}
                          className={`mt-1 w-6 h-6 rounded flex items-center justify-center transition-all duration-200 border ${
                            agreed ? "bg-color-klyth-olive border-color-klyth-olive" : "bg-transparent border-color-klyth-ghost"
                          }`}
                        >
                          {agreed && <i className="fa-solid fa-check text-xs text-color-klyth-cream" />}
                        </button>
                        <label className="text-xs text-color-klyth-cream/60 leading-relaxed">
                          I agree to receive the Klyth newsletter, event invites, and product updates, and I accept the{" "}
                          <Link href="/terms" target="_blank" className="text-color-klyth-olive underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" target="_blank" className="text-color-klyth-olive underline">
                            Privacy Policy
                          </Link>
                          .
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={!agreed || isLoading}
                        className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          agreed
                            ? "bg-color-klyth-olive hover:shadow-[0_0_30px_rgba(74,93,35,0.4)]"
                            : "bg-color-klyth-ghost/50 cursor-not-allowed"
                        }`}
                      >
                        {isLoading ? (
                          <i className="fa-solid fa-spinner animate-spin" />
                        ) : (
                          "Unlock Access"
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-color-klyth-olive/20 flex items-center justify-center border border-color-klyth-olive/40">
                        <i className="fa-solid fa-check text-2xl text-color-klyth-olive" />
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-3">
                      You're in. Your spot is secured.
                    </h2>
                    <p className="text-sm sm:text-base text-color-klyth-cream/70 text-center mb-8">
                      To help us hyper-personalize your early access roadmap, tell us a bit about your current focus.
                    </p>
                    <p className="text-base font-semibold mb-4">
                      What is your #1 financial goal right now?
                    </p>

                    <div className="flex flex-col gap-3 mb-6">
                      {goals.map((goal, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedGoal(goal)}
                        className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 ${
                          selectedGoal === goal
                            ? "klyth-glass border border-color-klyth-olive shadow-[0_0_20px_rgba(74,93,35,0.2]"
                            : "klyth-glass border border-color-klyth-ghost hover:border-color-klyth-ghost/70"
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleStep2Submit}
                      disabled={!selectedGoal || isLoading}
                      className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        selectedGoal
                          ? "bg-color-klyth-olive hover:shadow-[0_0_30px_rgba(74,93,35,0.4)]"
                          : "bg-color-klyth-ghost/50 cursor-not-allowed"
                      }`}
                    >
                      {isLoading ? (
                        <i className="fa-solid fa-spinner animate-spin" />
                      ) : (
                        "Save My Profile & Finish"
                      )}
                    </button>
                  </motion.div>
                )}

                {/* Final Success */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-color-klyth-olive/20 flex items-center justify-center border border-color-klyth-olive/50 mb-6 shadow-[0_0_50px_rgba(226,184,66,0.3)] animate-pulse">
                      <i className="fa-solid fa-check text-4xl text-color-klyth-olive" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                      Welcome to Klyth.
                    </h2>
                    <p className="text-base sm:text-lg text-color-klyth-cream/70">
                      Keep an eye on your inbox.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}