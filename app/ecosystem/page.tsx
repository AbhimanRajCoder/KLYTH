"use client";

import { motion } from "framer-motion";
import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import EcosystemPersonalLayer from "@/components/ecosystem/EcosystemPersonalLayer";
import EcosystemCommunityLayer from "@/components/ecosystem/EcosystemCommunityLayer";
import EcosystemMacroLayer from "@/components/ecosystem/EcosystemMacroLayer";
import EcosystemFinalCTA from "@/components/ecosystem/EcosystemFinalCTA";

export default function EcosystemPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex flex-col w-full bg-klyth-charcoal min-h-screen text-klyth-cream overflow-x-hidden"
    >
      <EcosystemHero />
      <EcosystemPersonalLayer />
      <EcosystemCommunityLayer />
      <EcosystemMacroLayer />
      <EcosystemFinalCTA />
    </motion.main>
  );
}