"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Smartphone, Calendar, Newspaper, Users, Timer, Check, Loader2, ArrowRight, ArrowLeft } from "lucide-react";

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
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      title: "VIP Event Invites",
      desc: "Early-access RSVPs to closed-door workshops and AMAs",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      title: "The Financial Rewiring Newsletter",
      desc: "Bite-sized, actionable financial systems weekly",
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      title: "Day-One Community Entry",
      desc: "Priority access to closed-door peer forums",
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: "Priority Cohort Selection",
      desc: "Skip waitlist for 30-day financial action sprints",
      icon: <Timer className="w-4 h-4" />,
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
    }, 1200);
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
    <main className="min-h-screen w-full bg-klyth-charcoal text-klyth-cream flex items-center justify-center p-4 sm:p-10 relative overflow-hidden select-none">
      {/* Premium Spotlight Backdrops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-klyth-olive/5 rounded-full blur-[130px]" />
        <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-klyth-gold/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Navigation / Header Brand Logo */}
        <div className="flex justify-between items-center mb-8 px-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-klyth-cream hover:opacity-85 transition-opacity">
            Klyth<span className="text-klyth-gold">.</span>
          </Link>
          {step < 3 && (
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-klyth-cream/40">Step {step} of 2</span>
              <div className="w-16 h-1 bg-klyth-ghost rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-klyth-gold"
                  initial={{ width: "50%" }}
                  animate={{ width: step === 2 ? "100%" : "50%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="klyth-glass rounded-[32px] border border-klyth-ghost p-6 sm:p-10 lg:p-14 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column - Benefits Overview */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-klyth-gold font-bold mb-3 inline-block">
                The Membership
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4"
              >
                Step into the Ecosystem.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm sm:text-base text-klyth-cream/70 leading-relaxed mb-8 border-l border-klyth-olive/30 pl-4"
              >
                The era of financial anxiety is over. Secure your spot at the forefront of a generation rewiring how they build wealth.
              </motion.p>

              {/* Benefits list with custom nodes */}
              <div className="flex flex-col gap-5">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-0.5 w-8 h-8 rounded-xl bg-klyth-ghost/40 flex items-center justify-center border border-white/5 text-klyth-cream/50 group-hover:text-klyth-gold group-hover:border-klyth-gold/30 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-klyth-cream/90">{benefit.title}</p>
                      <p className="text-xs text-klyth-cream/50 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Premium Forms */}
            <div className="lg:col-span-6 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-klyth-ghost/50 pt-8 lg:pt-0 lg:pl-10 min-h-[420px] relative">
              <AnimatePresence mode="wait">
                {/* Step 1 Form */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <h2 className="text-xl sm:text-2xl font-serif font-bold mb-6">Create Your Access Pass</h2>
                    <form onSubmit={handleStep1Submit} className="flex flex-col gap-6">
                      
                      {/* Name input */}
                      <div className="relative group">
                        <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-klyth-cream/40 mb-2 group-focus-within:text-klyth-gold transition-colors">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl bg-klyth-charcoal/40 border border-klyth-ghost focus:border-klyth-gold/50 outline-none transition-all text-sm font-sans"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      {/* Email Input */}
                      <div className="relative group">
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-klyth-cream/40 mb-2 group-focus-within:text-klyth-gold transition-colors">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl bg-klyth-charcoal/40 border border-klyth-ghost focus:border-klyth-gold/50 outline-none transition-all text-sm font-sans"
                          placeholder="name@domain.com"
                          required
                        />
                      </div>

                      {/* Agreement Switch */}
                      <div className="flex items-start gap-3 mt-2 cursor-pointer select-none" onClick={() => setAgreed(!agreed)}>
                        <div
                          className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-all duration-300 border ${
                            agreed 
                              ? "bg-klyth-olive border-klyth-olive shadow-[0_0_12px_rgba(74,93,35,0.4)]" 
                              : "bg-transparent border-klyth-ghost"
                          }`}
                        >
                          {agreed && <Check className="w-3 h-3 text-klyth-cream" />}
                        </div>
                        <label className="text-[11px] text-klyth-cream/50 leading-relaxed cursor-pointer">
                          I accept early invites, rewiring newsletters, and agree to the{" "}
                          <Link href="/terms" target="_blank" className="text-klyth-gold underline hover:opacity-80">
                            Terms
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" target="_blank" className="text-klyth-gold underline hover:opacity-80">
                            Privacy
                          </Link>
                          .
                        </label>
                      </div>

                      {/* Unlock Button */}
                      <button
                        type="submit"
                        disabled={!agreed || isLoading}
                        className={`w-full py-4.5 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                          agreed
                            ? "bg-klyth-olive hover:shadow-[0_10px_25px_rgba(74,93,35,0.3)] hover:scale-[1.01]"
                            : "bg-klyth-ghost/40 text-klyth-cream/30 cursor-not-allowed"
                        }`}
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Unlock Entry
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Step 2 Form */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Back handle */}
                      <button 
                        onClick={() => setStep(1)} 
                        className="inline-flex items-center gap-1.5 text-xs text-klyth-cream/40 hover:text-klyth-cream transition-colors mb-6"
                      >
                        <ArrowLeft className="w-3 h-3" /> Back
                      </button>
                      
                      <h2 className="text-xl sm:text-2xl font-serif font-bold mb-2">Spot Reserved.</h2>
                      <p className="text-xs text-klyth-cream/50 mb-6">
                        Help us hyper-personalize your entry roadmap.
                      </p>
                      
                      <label className="block text-xs font-semibold uppercase tracking-wider text-klyth-cream/40 mb-3">
                        What is your #1 financial goal right now?
                      </label>

                      <div className="flex flex-col gap-2.5 mb-8">
                        {goals.map((goal, idx) => {
                          const isActive = selectedGoal === goal;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedGoal(goal)}
                              className={`w-full text-left px-5 py-3.5 rounded-xl transition-all duration-200 text-xs border ${
                                isActive
                                  ? "bg-klyth-olive/15 border-klyth-gold text-klyth-cream shadow-[0_0_15px_rgba(226,184,66,0.1)] font-medium"
                                  : "bg-klyth-charcoal/20 border-klyth-ghost hover:border-klyth-ghost/70 text-klyth-cream/70"
                              }`}
                            >
                              {goal}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleStep2Submit}
                      disabled={!selectedGoal || isLoading}
                      className={`w-full py-4.5 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                        selectedGoal
                          ? "bg-klyth-olive hover:shadow-[0_10px_25px_rgba(74,93,35,0.3)] hover:scale-[1.01]"
                          : "bg-klyth-ghost/40 text-klyth-cream/30 cursor-not-allowed"
                      }`}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          Complete Setup
                          <Check className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </motion.div>
                )}

                {/* Final Success Screen */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-klyth-olive/10 flex items-center justify-center border border-klyth-olive/30 mb-6 relative">
                      <motion.div 
                        className="absolute inset-0 rounded-full border border-klyth-gold/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      <Check className="w-6 h-6 text-klyth-gold" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Welcome to Klyth.</h2>
                    <p className="text-sm text-klyth-cream/60 max-w-xs">
                      We have secured your priority invitation. Keep an eye on your inbox for day-one access guidelines.
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