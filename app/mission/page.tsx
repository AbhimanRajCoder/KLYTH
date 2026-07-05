import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | Klyth",
  description: "Our mission to empower a generation to grow financially with confidence.",
};

import MissionHero from "@/components/MissionHero";
import MissionBrokenReality from "@/components/MissionBrokenReality";
import MissionEmpathyShift from "@/components/MissionEmpathyShift";
import MissionMonolithConcept from "@/components/MissionMonolithConcept";
import MissionFinalCTA from "@/components/MissionFinalCTA";

export default function MissionPage() {
  return (
    <main className="flex flex-col w-full bg-color-klyth-charcoal">
      <MissionHero />
      <MissionBrokenReality />
      <MissionEmpathyShift />
      <MissionMonolithConcept />
      <MissionFinalCTA />
    </main>
  );
}