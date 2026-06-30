import TermsOfServiceContent from "@/components/TermsOfServiceContent";

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col w-full bg-[#121212] text-klyth-cream min-h-screen relative overflow-hidden">
      <div className="relative z-10 w-full flex flex-col items-center">
        <TermsOfServiceContent />
      </div>
    </main>
  );
}
