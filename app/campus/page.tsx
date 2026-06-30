import CampusHero from "@/components/CampusHero";
import CampusTeaser from "@/components/CampusTeaser";
import CampusApply from "@/components/CampusApply";

export default function CampusPage() {
  return (
    <main className="flex flex-col w-full bg-klyth-charcoal text-klyth-cream min-h-screen relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:120px_120px]"></div>

      <div className="relative z-10 flex flex-col items-center">
        <CampusHero />
        <CampusTeaser />
        <CampusApply />
      </div>
    </main>
  );
}
