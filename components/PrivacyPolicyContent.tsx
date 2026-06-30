"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-your-information", title: "2. How We Use Your Information" },
  { id: "how-we-share-your-information", title: "3. How We Share Your Information" },
  { id: "data-retention", title: "4. Data Retention" },
  { id: "data-security", title: "5. Data Security" },
  { id: "your-data-rights", title: "6. Your Data Rights & Choices" },
  { id: "third-party-links", title: "7. Third-Party Links" },
  { id: "childrens-privacy", title: "8. Children's Privacy" },
  { id: "changes-to-privacy-policy", title: "9. Changes to this Privacy Policy" },
  { id: "grievance-officer", title: "10. Grievance Officer & Contact Information" },
];

export default function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observers = new Map();
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
        observers.set(section.id, element);
      }
    });

    return () => {
      observers.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 relative">
      
      {/* Mobile Dropdown TOC (Hidden on Desktop) */}
      <div className="md:hidden w-full mb-8 z-20">
        <div className="bg-[#1C1C1E] border border-white/5 rounded-xl p-4">
          <span className="font-sans font-semibold text-klyth-cream text-sm mb-3 block">Table of Contents</span>
          <select 
            className="w-full bg-[#1C1C1E]/50 border border-white/10 text-klyth-cream text-sm rounded-lg p-3 outline-none"
            value={activeSection}
            onChange={(e) => {
              const id = e.target.value;
              const element = document.getElementById(id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {sections.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Left Column: Sticky Table of Contents (Desktop only) */}
      <div className="hidden md:block md:col-span-3 lg:col-span-3 relative">
        <div className="sticky top-32 flex flex-col">
          <span className="font-sans font-medium uppercase tracking-widest text-klyth-olive text-[10px] mb-8 block">
            Table of Contents
          </span>
          <ul className="flex flex-col gap-4 border-l border-white/5 pl-4 relative">
            {sections.map((section) => (
              <li key={section.id} className="relative">
                <a 
                  href={`#${section.id}`}
                  onClick={(e) => handleScroll(e, section.id)}
                  className={`font-sans text-sm transition-all duration-300 ${activeSection === section.id ? "text-klyth-olive font-medium" : "text-klyth-cream/40 hover:text-klyth-cream/80"}`}
                >
                  {section.title}
                </a>
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[2px] h-4 bg-klyth-olive rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Legal Text */}
      <div className="md:col-span-9 lg:col-span-9">
        <div className="max-w-[75ch] font-sans text-klyth-cream/70 text-base md:text-lg leading-[1.8] space-y-12">
          
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-klyth-cream mb-4">Privacy Policy</h1>
            <p className="text-klyth-cream/50 text-sm tracking-wide">Last Updated: June 2026</p>
          </div>

          {/* Section: Introduction */}
          <section id="intro" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">Introduction</h2>
            <p>
              Welcome to Klyth ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (klyth.in), interact with our ecosystem, attend our events, or join our waitlist and community platforms (collectively, the "Services").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>

          {/* Section 1 */}
          <section id="information-we-collect" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">1. Information We Collect</h2>
            <p>
              To provide our hyper-personalized financial ecosystem, we collect data directly from you, automatically through your device, and occasionally from third-party partners.
            </p>
            
            <h3 className="font-sans font-semibold text-klyth-cream mt-8 mb-4">A. Personal Information You Provide to Us:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Identity & Contact Data:</strong> First name, last name, email address, and phone number when you join the waitlist, subscribe to our newsletter, or contact support.</li>
              <li><strong className="text-klyth-cream/90">Profiling & Financial Goal Data:</strong> Information regarding your financial goals (e.g., building an emergency fund, managing debt), age bracket, and educational/professional status provided during our progressive profiling surveys.</li>
              <li><strong className="text-klyth-cream/90">Event Registration Data:</strong> Information submitted when you RSVP for live virtual or physical events, including campus affiliation if applying for the Campus Ambassador program.</li>
              <li><strong className="text-klyth-cream/90">Community Contributions:</strong> Any data, text, or media you choose to submit to our community forums, AMAs, or interactive platforms.</li>
            </ul>

            <h3 className="font-sans font-semibold text-klyth-cream mt-8 mb-4">B. Information Collected Automatically:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Usage Data:</strong> Information about how you interact with our website, including time spent on pages, buttons clicked, and navigation paths.</li>
              <li><strong className="text-klyth-cream/90">Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, operating system, and device identifiers.</li>
              <li><strong className="text-klyth-cream/90">Cookies & Tracking Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to monitor activity on our Services and store certain information to improve your user experience.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="how-we-use-your-information" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">2. How We Use Your Information</h2>
            <p>
              We do not sell your personal data. We use the information we collect strictly to operate, maintain, and improve the Klyth ecosystem. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Provide and Personalize Services:</strong> To create your hyper-personalized financial learning roadmap and deliver content tailored to your specific financial goals.</li>
              <li><strong className="text-klyth-cream/90">Communicate with You:</strong> To send waitlist updates, newsletter distributions, event RSVPs, and administrative notices (such as security alerts or policy updates).</li>
              <li><strong className="text-klyth-cream/90">Manage Events & Communities:</strong> To register you for masterclasses, facilitate peer-to-peer forum access, and manage Campus Chapter applications.</li>
              <li><strong className="text-klyth-cream/90">Analytics and Improvement:</strong> To analyze user behavior, identify usage trends, and improve the UI/UX and educational efficacy of the Klyth platform.</li>
              <li><strong className="text-klyth-cream/90">Legal Compliance:</strong> To comply with applicable legal obligations, resolve disputes, and enforce our agreements.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="how-we-share-your-information" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">3. How We Share Your Information</h2>
            <p>
              We only share your information with third parties in the following strictly controlled circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Service Providers:</strong> We may share your data with trusted third-party vendors who perform services for us, such as email delivery (e.g., newsletters), cloud hosting, analytics, and event registration management (e.g., Luma, Tally). These providers are contractually bound to keep your data secure and use it only for the purposes we specify.</li>
              <li><strong className="text-klyth-cream/90">Business Transfers:</strong> If Klyth is involved in a merger, acquisition, restructuring, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal data.</li>
              <li><strong className="text-klyth-cream/90">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency), including compliance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023 of India.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="data-retention" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">4. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. Waitlist and newsletter data will be retained until you unsubscribe or request deletion. Usage data is generally retained for a shorter period, except when this data is used to strengthen the security or improve the functionality of our Services, or we are legally obligated to retain it for longer periods.
            </p>
          </section>

          {/* Section 5 */}
          <section id="data-security" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">5. Data Security</h2>
            <p>
              The security of your data is paramount. We implement commercially reasonable, industry-standard technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use absolute best practices to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section id="your-data-rights" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">6. Your Data Rights & Choices</h2>
            <p>
              Depending on your jurisdiction, including rights under Indian data protection laws, you have specific rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Right to Access:</strong> You may request a copy of the personal data we hold about you.</li>
              <li><strong className="text-klyth-cream/90">Right to Rectification:</strong> You may request that we correct any inaccurate or incomplete personal data.</li>
              <li><strong className="text-klyth-cream/90">Right to Erasure (Right to be Forgotten):</strong> You may request that we delete your personal data from our systems, subject to certain legal exceptions.</li>
              <li><strong className="text-klyth-cream/90">Right to Withdraw Consent:</strong> Where we rely on your consent to process your personal data (e.g., marketing newsletters), you have the right to withdraw that consent at any time by clicking the "unsubscribe" link in our emails or contacting us directly.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact our Grievance Officer using the details provided in Section 10.
            </p>
          </section>

          {/* Section 7 */}
          <section id="third-party-links" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">7. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites, plug-ins, and applications that are not operated by us. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
          </section>

          {/* Section 8 */}
          <section id="childrens-privacy" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">8. Children's Privacy</h2>
            <p>
              Our Services are intended for young adults, students, and early-career professionals. We do not knowingly collect personal identifiable information from anyone under the age of 18 without verifiable parental consent. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </section>

          {/* Section 9 */}
          <section id="changes-to-privacy-policy" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">9. Changes to this Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Section 10 */}
          <section id="grievance-officer" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">10. Grievance Officer & Contact Information</h2>
            <p>
              In accordance with the Information Technology Act, 2000, and the rules made thereunder, if you have any questions, concerns, or grievances regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-[#1C1C1E]/50 border border-white/5 p-6 rounded-2xl mt-6">
              <p className="font-serif text-xl text-klyth-cream mb-2">Klyth</p>
              <p className="text-klyth-cream/80 mb-1"><span className="text-klyth-cream/50">Address:</span> Lohegaon, Pune - 411047, Maharashtra, India</p>
              <p className="text-klyth-cream/80"><span className="text-klyth-cream/50">Email:</span> <a href="mailto:legal@klyth.in" className="text-klyth-olive hover:underline">legal@klyth.in</a></p>
            </div>
            <p className="italic text-sm text-klyth-cream/40 mt-4">
              (Please allow up to 30 days for us to process and respond to data-related requests.)
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
