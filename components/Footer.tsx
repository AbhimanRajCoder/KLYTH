"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "";

  // Top Hook Section Visibility:
  // Show on: /, /mission, /ecosystem, /campus, /about, /faq, /privacy, /terms
  // Hide on: /events, /events/[slug], /contact
  const hideTopHook =
    pathname === "/events" ||
    pathname.startsWith("/events/") ||
    pathname === "/contact";

  return (
    <footer className="w-full bg-[#000000] border-t border-klyth-ghost text-klyth-cream font-sans transition-colors duration-300">
      {/* 8.1 Top Hook Section */}
      {!hideTopHook && (
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-klyth-ghost">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-klyth-cream mb-3">
              Ready to grow differently?
            </h2>
            <p className="text-klyth-cream/70 text-sm md:text-base max-w-lg">
              Join the generation rewiring their financial future. Get early access to the ecosystem.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 bg-klyth-olive text-klyth-cream font-semibold text-base rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,93,35,0.4)] hover:brightness-110 active:scale-95 animate-pulse-breathing shrink-0"
          >
            Step Into the Ecosystem
          </Link>
        </div>
      )}

      {/* 8.2 Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1 — Brand (Takes wider span on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/img/Logo_Full.png"
                alt="Klyth Logo"
                width={140}
                height={40}
                className="w-auto h-7 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-klyth-cream/75 text-sm max-w-sm leading-relaxed">
              Financial Growth, Rewired.
            </p>
            {/* Social Icons with brand glow styling */}
            <div className="flex items-center gap-5 mt-2">
              <a
                href="https://www.instagram.com/klyth.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-instagram text-xl"
                aria-label="Follow Klyth on Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://x.com/klythhq"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-x text-xl"
                aria-label="Follow Klyth on X"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/klyth"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-linkedin text-xl"
                aria-label="Follow Klyth on LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="mailto:hello@klyth.in"
                className="social-icon-email text-xl"
                aria-label="Email Klyth"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <a
              href="mailto:hello@klyth.in"
              className="text-xs text-klyth-cream/40 hover:text-klyth-cream transition-colors duration-300 flex items-center gap-2 mt-1"
            >
              <i className="fa-solid fa-location-dot text-klyth-gold/70"></i>
              Lohegaon, Pune – 411047, India
            </a>
          </div>

          {/* Column 2 — Explore */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-klyth-cream/50">
              Explore
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <Link href="/ecosystem" className="footer-link">
                  The Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/events" className="footer-link">
                  Live Events
                </Link>
              </li>
              <li>
                <Link href="/campus" className="footer-link">
                  Campus Chapters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Klyth */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-klyth-cream/50">
              Klyth
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <Link href="/mission" className="footer-link">
                  The Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-klyth-cream/50">
              Legal
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 8.3 Bottom Bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-klyth-ghost flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-klyth-cream/40 text-center sm:text-left">
          <div>© 2026 Klyth. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span>Built in Pune, India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
