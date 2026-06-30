"use client";

import { motion } from "framer-motion";
import EcosystemHero from "@/components/EcosystemHero";
import EcosystemPillar1 from "@/components/EcosystemPillar1";
import EcosystemPillar2 from "@/components/EcosystemPillar2";
import EcosystemPillar3 from "@/components/EcosystemPillar3";
import EcosystemPillar4 from "@/components/EcosystemPillar4";
import EcosystemPillar5 from "@/components/EcosystemPillar5";
import EcosystemPillar6 from "@/components/EcosystemPillar6";
import EcosystemPillar7 from "@/components/EcosystemPillar7";
import EcosystemFinalCTA from "@/components/EcosystemFinalCTA";

export default function EcosystemPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="flex flex-col w-full bg-klyth-charcoal min-h-screen text-klyth-cream overflow-hidden"
    >
      <EcosystemHero />
      <EcosystemPillar1 />
      <EcosystemPillar2 />
      <EcosystemPillar3 />
      <EcosystemPillar4 />
      <EcosystemPillar5 />
      <EcosystemPillar6 />
      <EcosystemPillar7 />
      <EcosystemFinalCTA />
    </motion.main>
  );
}