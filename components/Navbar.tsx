"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to trigger transparent/glassmorphism states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "The Ecosystem", href: "/ecosystem" },
    { name: "Events", href: "/events" },
    { name: "The Mission", href: "/mission" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "klyth-glass py-4 border-color-klyth-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/img/Logo.png"
              alt="Klyth Logo"
              width={140}
              height={40}
              className="w-auto h-7 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Center: Navigation Links (Desktop only) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 nav-link-underline ${
                    isActive ? "text-klyth-cream" : "text-klyth-cream/70 hover:text-klyth-cream"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-klyth-gold animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Join Button (Desktop only) */}
          <div className="hidden lg:block">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-klyth-olive text-klyth-cream font-sans font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,93,35,0.4)] hover:brightness-110 active:scale-95 animate-pulse-breathing"
            >
              Join
            </Link>
          </div>

          {/* Hamburger Menu (Mobile/Tablet only) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-klyth-cream hover:text-klyth-gold transition-colors p-2 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-klyth-obsidian/90 backdrop-blur-xl flex flex-col p-6 md:p-8"
          >
            {/* Header within Overlay */}
            <div className="flex items-center justify-between py-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Image
                  src="/img/Logo.png"
                  alt="Klyth Logo"
                  width={140}
                  height={40}
                  className="w-auto h-7 object-contain"
                />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-klyth-cream hover:text-klyth-gold transition-colors p-2 focus:outline-none"
                aria-label="Close navigation menu"
              >
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>

            {/* Vertically Stacked Links */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (idx + 1), duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-serif text-3xl font-bold tracking-wide transition-colors duration-300 ${
                        isActive ? "text-klyth-gold" : "text-klyth-cream hover:text-klyth-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Join Button anchored at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto w-full"
            >
              <Link
                href="/join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-klyth-olive text-klyth-cream font-sans font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,93,35,0.4)] active:scale-[0.98] animate-pulse-breathing"
              >
                Join
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
