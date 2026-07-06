"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid Email Address is required.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setIsSuccess(true);
      } else {
        setErrors({ general: res.message || "Failed to send message. Please try again." });
      }
    } catch (err) {
      setErrors({ general: "A network error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-start bg-[#1C1C1E]/40 backdrop-blur-3xl rounded-[2rem] border border-white/5 p-8 md:p-12 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-klyth-olive/5 blur-[100px] pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="w-full flex flex-col relative z-10"
          >
            <span className="font-sans font-medium uppercase tracking-[0.2em] text-klyth-olive text-[10px] mb-8">
              Send a Message
            </span>

            {errors.general && (
              <div className="text-red-400 text-sm mb-4 font-sans">{errors.general}</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* First Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="peer w-full bg-[#1C1C1E]/80 border border-klyth-ghost/50 rounded-2xl px-6 pt-7 pb-3 text-klyth-cream text-base outline-none focus:border-klyth-olive focus:shadow-[0_0_15px_rgba(74,93,35,0.15)] transition-all duration-300"
                  placeholder=" "
                />
                <label htmlFor="firstName" className="absolute left-6 top-5 text-klyth-cream/50 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-klyth-olive peer-valid:-translate-y-3 peer-valid:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs font-sans">
                  First Name *
                </label>
                {errors.firstName && <span className="absolute -bottom-5 left-2 text-red-400/80 text-xs font-sans">{errors.firstName}</span>}
              </div>

              {/* Last Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="peer w-full bg-[#1C1C1E]/80 border border-klyth-ghost/50 rounded-2xl px-6 pt-7 pb-3 text-klyth-cream text-base outline-none focus:border-klyth-olive focus:shadow-[0_0_15px_rgba(74,93,35,0.15)] transition-all duration-300"
                  placeholder=" "
                />
                <label htmlFor="lastName" className="absolute left-6 top-5 text-klyth-cream/50 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-klyth-olive peer-valid:-translate-y-3 peer-valid:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs font-sans">
                  Last Name
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="peer w-full bg-[#1C1C1E]/80 border border-klyth-ghost/50 rounded-2xl px-6 pt-7 pb-3 text-klyth-cream text-base outline-none focus:border-klyth-olive focus:shadow-[0_0_15px_rgba(74,93,35,0.15)] transition-all duration-300"
                  placeholder=" "
                />
                <label htmlFor="email" className="absolute left-6 top-5 text-klyth-cream/50 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-klyth-olive peer-valid:-translate-y-3 peer-valid:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs font-sans">
                  Email Address *
                </label>
                {errors.email && <span className="absolute -bottom-5 left-2 text-red-400/80 text-xs font-sans">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="peer w-full bg-[#1C1C1E]/80 border border-klyth-ghost/50 rounded-2xl px-6 pt-7 pb-3 text-klyth-cream text-base outline-none focus:border-klyth-olive focus:shadow-[0_0_15px_rgba(74,93,35,0.15)] transition-all duration-300"
                  placeholder=" "
                />
                <label htmlFor="phone" className="absolute left-6 top-5 text-klyth-cream/50 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-klyth-olive peer-valid:-translate-y-3 peer-valid:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs font-sans">
                  Phone Number
                </label>
              </div>
            </div>

            {/* Message Area */}
            <div className="relative group mb-10">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="peer w-full bg-[#1C1C1E]/80 border border-klyth-ghost/50 rounded-2xl px-6 pt-8 pb-4 text-klyth-cream text-base outline-none focus:border-klyth-olive focus:shadow-[0_0_15px_rgba(74,93,35,0.15)] transition-all duration-300 min-h-[160px] resize-y"
                placeholder=" "
              />
              <label htmlFor="message" className="absolute left-6 top-6 text-klyth-cream/50 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-klyth-olive peer-valid:-translate-y-3 peer-valid:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs font-sans">
                How can we help? *
              </label>
              {errors.message && <span className="absolute -bottom-5 left-2 text-red-400/80 text-xs font-sans">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-klyth-olive text-klyth-cream font-sans font-medium text-base rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(74,93,35,0.2)] hover:shadow-[0_0_25px_rgba(74,93,35,0.4)] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mb-6"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-klyth-cream/30 border-t-klyth-cream rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>

            <p className="font-sans text-[12px] text-klyth-cream/40 text-center leading-relaxed">
              By submitting this form, you agree to our <Link href="/terms" className="underline hover:text-klyth-cream/70 transition-colors">Terms of Service</Link> and acknowledge our <Link href="/privacy" className="underline hover:text-klyth-cream/70 transition-colors">Privacy Policy</Link>.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full min-h-[500px] flex flex-col items-center justify-center text-center relative z-10"
          >
            <div className="w-20 h-20 bg-klyth-olive/10 border border-klyth-olive/30 rounded-full flex items-center justify-center mb-8">
              <svg className="w-10 h-10 text-klyth-olive drop-shadow-[0_0_15px_rgba(74,93,35,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="font-serif text-4xl text-klyth-cream mb-4">Message Sent.</h3>
            <p className="font-sans text-lg text-klyth-cream/60 max-w-sm mb-12">
              We've received your message and will get back to you shortly. A confirmation has been sent to your inbox.
            </p>
            <button 
              onClick={handleReset}
              className="text-klyth-cream/50 hover:text-klyth-cream underline font-sans text-sm transition-colors duration-300"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
