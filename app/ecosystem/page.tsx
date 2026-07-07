"use client";

import { motion } from "framer-motion";
import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import Pillar1App from "@/components/ecosystem/Pillar1App";
import Pillar2Events from "@/components/ecosystem/Pillar2Events";
import Pillar3Campus from "@/components/ecosystem/Pillar3Campus";
import Pillar4Institutional from "@/components/ecosystem/Pillar4Institutional";
import Pillar5Cohorts from "@/components/ecosystem/Pillar5Cohorts";
import Pillar6Community from "@/components/ecosystem/Pillar6Community";
import Pillar7Intelligence from "@/components/ecosystem/Pillar7Intelligence";
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
      <Pillar1App />
      <Pillar2Events />
      <Pillar3Campus />
      <Pillar4Institutional />
      <Pillar5Cohorts />
      <Pillar6Community />
      <Pillar7Intelligence />
      <EcosystemFinalCTA />
    </motion.main>
  );
}