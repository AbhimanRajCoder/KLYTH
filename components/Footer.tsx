"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const logoPath = "M1328.66 2285.21C1328.6 2285.54 1328.57 2285.89 1328.57 2286.23V2299.56C1328.57 2299.85 1328.59 2300.15 1328.64 2300.43L1727.56 4993.18C1728.09 4996.77 1725.31 5000 1721.67 5000H998.165C995.141 5000 992.597 4997.73 992.251 4994.73L729.178 2705.27C728.832 2702.27 726.288 2700 723.264 2700H720.238C716.951 2700 714.286 2702.66 714.286 2705.95V4994.05C714.286 4997.33 711.62 5000 708.333 5000H5.95215C2.6652 5000 0.000377608 4997.33 0 4994.05V3245.24L1415.44 1789.32L1328.66 2285.21ZM3222.28 0C3225.57 0.000200948 3228.24 2.66497 3228.24 5.95215V4351.19C3228.24 4354.48 3230.9 4357.14 3234.19 4357.14H3522.28C3525.57 4357.14 3528.24 4359.81 3528.24 4363.09V4994.05C3528.24 4997.33 3525.57 5000 3522.28 5000H2519.9C2516.61 5000 2513.95 4997.33 2513.95 4994.05V5.95215C2513.95 2.66474 2516.61 0 2519.9 0H3222.28ZM4933.08 0C4936.22 0 4938.82 2.44525 4939.02 5.58301L5045.81 1721.43L5074.16 2430C5074.28 2433.19 5076.91 2435.71 5080.1 2435.71H5082.95C5086.15 2435.71 5088.77 2433.19 5088.9 2430L5117.24 1721.43L5224.04 5.58301C5224.23 2.44531 5226.83 8.07189e-05 5229.98 0H5946.02C5949.67 0 5952.46 3.24904 5951.91 6.85352L5438.74 3356.69C5438.69 3356.99 5438.67 3357.29 5438.67 3357.6V4994.05C5438.67 4997.33 5436.01 5000 5432.72 5000H4730.34C4727.05 5000 4724.38 4997.33 4724.38 4994.05V3357.6C4724.38 3357.29 4724.36 3356.99 4724.32 3356.69L4211.15 6.85352C4210.6 3.24916 4213.39 0.000191728 4217.03 0H4933.08ZM8126.58 0C8129.86 0 8132.53 2.66485 8132.53 5.95215V636.905C8132.53 640.193 8129.86 642.857 8126.58 642.857H7781.34C7778.05 642.857 7775.39 645.522 7775.39 648.81V4994.05C7775.39 4997.33 7772.72 5000 7769.43 5000H7067.05C7063.77 5000 7061.1 4997.33 7061.1 4994.05V648.81C7061.1 645.522 7058.44 642.858 7055.15 642.857H6709.91C6706.62 642.857 6703.96 640.193 6703.96 636.905V5.95215C6703.96 2.66485 6706.62 0 6709.91 0H8126.58ZM9662.01 0C9665.3 5.62752e-05 9667.96 2.66488 9667.96 5.95215V2179.76C9667.97 2183.05 9670.63 2185.71 9673.92 2185.71H9804.87C9808.16 2185.71 9810.82 2183.05 9810.82 2179.76V5.95215C9810.82 2.6649 9813.49 4.64528e-05 9816.77 0H10519.2C10522.4 2.67521e-06 10525.1 2.66485 10525.1 5.95215V4994.05C10525.1 4997.34 10522.4 5000 10519.2 5000H9816.77C9813.49 5000 9810.82 4997.33 9810.82 4994.05V2834.52C9810.82 2831.24 9808.16 2828.57 9804.87 2828.57H9673.92C9670.63 2828.57 9667.96 2831.24 9667.96 2834.52V4994.05C9667.96 4997.33 9665.3 5000 9662.01 5000H8959.63C8956.34 5000 8953.68 4997.33 8953.68 4994.05V5.95215C8953.68 2.66474 8956.34 0 8959.63 0H9662.01ZM708.333 0.000976562C711.62 0.000976562 714.286 2.66572 714.286 5.95312V2015.48C714.287 2018.76 716.951 2021.43 720.238 2021.43H723.347C726.336 2021.43 728.861 2019.21 729.249 2016.25L992.18 5.18164C992.567 2.21778 995.093 0.00102974 998.082 0.000976562H1721.49C1725.18 0.000976562 1727.99 3.33626 1727.35 6.97852L1415.44 1789.3L0 2530.36V5.95215C0.000248094 2.6651 2.6651 0.00121791 5.95215 0.000976562H708.333Z";

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
    <footer className="relative w-full bg-[#000000] border-t border-klyth-ghost text-klyth-cream font-sans transition-colors duration-300 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1 — Brand (Takes wider span on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/img/Primary Logo.svg"
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

      {/* Large SVG Logo Watermark with Fill Effect */}
      <div className="w-full flex justify-center items-center pointer-events-none select-none pt-12 md:pt-20 pb-4 relative px-4 md:px-8">
        <div className="relative w-[75%] md:w-[60%] lg:w-[50%] max-w-4xl mx-auto aspect-[10526/5000]">
          {/* Base Outline SVG */}
          <svg viewBox="0 0 10526 5000" fill="none" className="absolute inset-0 w-full h-full">
            <path d={logoPath} stroke="rgba(255, 255, 255, 0.15)" strokeWidth="20" />
          </svg>

          {/* Animated Gold SVG */}
          <motion.svg 
            viewBox="0 0 10526 5000" 
            fill="none" 
            className="absolute inset-0 w-full h-full"
            animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 100%)", "inset(0 100% 0 0)"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.8, 1]
            }}
          >
            <defs>
              <linearGradient id="gold-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EDCF72" />
                <stop offset="50%" stopColor="#E2B842" />
                <stop offset="100%" stopColor="#CFA536" />
              </linearGradient>
            </defs>
            <path d={logoPath} fill="url(#gold-gradient-footer)" />
          </motion.svg>
        </div>
      </div>

        {/* 8.3 Bottom Bar */}
        <div className="relative z-10 mt-16 md:mt-20 pt-8 border-t border-klyth-ghost flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-klyth-cream/40 text-center sm:text-left">
          <div>© 2026 Klyth. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span>Built in Pune, India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
