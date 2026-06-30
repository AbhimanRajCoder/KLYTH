import FaqHero from "@/components/FaqHero";
import FaqAccordion from "@/components/FaqAccordion";
import FaqSupportCTA from "@/components/FaqSupportCTA";

export default function FAQPage() {
  return (
    <main className="flex flex-col w-full bg-klyth-charcoal text-klyth-cream min-h-screen relative overflow-hidden">
      {/* Extremely subtle background texture/grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <FaqHero />
        <FaqAccordion />
        <FaqSupportCTA />
      </div>
    </main>
  );
}
