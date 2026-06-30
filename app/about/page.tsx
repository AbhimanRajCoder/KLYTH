import AboutHero from "@/components/AboutHero";
import AboutOrigin from "@/components/AboutOrigin";
import AboutTeam from "@/components/AboutTeam";
import AboutMentorship from "@/components/AboutMentorship";
import EcosystemFinalCTA from "@/components/EcosystemFinalCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-[#0a0a0a] text-klyth-cream min-h-screen relative overflow-hidden">
      {/* 
        The background should feel slightly darker and more cinematic on this page 
        to evoke a sense of seriousness, trust, and authority.
      */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <AboutHero />
        <AboutOrigin />
        <AboutTeam />
        <AboutMentorship />
        <EcosystemFinalCTA />
      </div>
    </main>
  );
}
