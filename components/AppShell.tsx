"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname() || "";
  const isJoinPage = pathname === "/join";
  const isComingSoonPage = pathname === "/";

  if (isJoinPage || isComingSoonPage) {
    return <main className="flex-1 flex flex-col">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-klyth-charcoal">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
