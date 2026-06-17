import HomeHero from "@/components/HomeHero";
import ProblemSection from "@/components/ProblemSection";
import SolutionBento from "@/components/SolutionBento";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-color-klyth-charcoal">
      <HomeHero />
      <ProblemSection />
      <SolutionBento />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}
