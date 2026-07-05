import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Klyth",
  description: "Get in touch with the Klyth team.",
};

import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactDirectory from "@/components/ContactDirectory";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full bg-klyth-charcoal text-klyth-cream min-h-screen relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#1C1C1E]/20 to-transparent"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <ContactHero />
        
        {/* Split Layout */}
        <section className="w-full max-w-7xl px-6 pb-40 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          <div className="md:col-span-7 lg:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-5 lg:col-span-5 h-full">
            <ContactDirectory />
          </div>

        </section>
      </div>
    </main>
  );
}
