"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "financial-disclaimer", title: "1. Nature of the Services (Financial Disclaimer)" },
  { id: "eligibility", title: "2. Eligibility and Account Registration" },
  { id: "user-conduct", title: "3. User Conduct and Acceptable Use" },
  { id: "intellectual-property", title: "4. Intellectual Property Rights" },
  { id: "ugc", title: "5. User-Generated Content (UGC)" },
  { id: "live-events", title: "6. Live Events, Cohorts, and Campus Chapters" },
  { id: "payments", title: "7. Payments, Subscriptions, and Refunds" },
  { id: "disclaimers", title: "8. Disclaimers of Warranties" },
  { id: "limitation", title: "9. Limitation of Liability" },
  { id: "indemnification", title: "10. Indemnification" },
  { id: "modifications", title: "11. Modifications to the Services and Terms" },
  { id: "governing-law", title: "12. Governing Law and Dispute Resolution" },
  { id: "severability", title: "13. Severability and Waiver" },
  { id: "contact-info", title: "14. Contact Information" },
];

export default function TermsOfServiceContent() {
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
                  className={`font-sans text-sm transition-all duration-300 line-clamp-1 ${activeSection === section.id ? "text-klyth-olive font-medium" : "text-klyth-cream/40 hover:text-klyth-cream/80"}`}
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-klyth-cream mb-4">Terms of Service</h1>
            <p className="text-klyth-cream/50 text-sm tracking-wide">Last Updated: June 2026</p>
          </div>

          <section id="intro" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">Introduction</h2>
            <p>
              Welcome to Klyth. These Terms of Service ("Terms") govern your access to and use of the Klyth website (klyth.in), our upcoming mobile and web applications, community forums, live events, cohort sprints, and any other related services (collectively, the "Services") provided by Klyth ("Company", "we", "us", or "our").
            </p>
            <p>
              By accessing, registering for, or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
            </p>
          </section>

          <section id="financial-disclaimer" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">1. Nature of the Services (Financial Disclaimer)</h2>
            <p>
              <strong className="text-klyth-olive uppercase tracking-wide text-xs mb-2 block">This is critical. Please read carefully:</strong> 
              Klyth is an educational platform and cultural ecosystem designed to improve financial literacy. <strong className="text-klyth-cream">We are not a registered investment advisor, broker-dealer, financial planner, or tax professional.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">No Professional Advice:</strong> All content, tools, simulations, and community discussions provided through the Services are for educational and informational purposes only. They do not constitute financial, investment, legal, or tax advice.</li>
              <li><strong className="text-klyth-cream/90">User Responsibility:</strong> Personal finance is highly subjective. Any financial decisions or investments you make based on information obtained through Klyth are made strictly at your own risk. You are solely responsible for evaluating the merits and risks associated with the use of any information provided by the Services before making any financial decisions. We strongly recommend consulting with a certified financial professional regarding your specific situation.</li>
            </ul>
          </section>

          <section id="eligibility" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">2. Eligibility and Account Registration</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Age Requirement:</strong> The Services are intended solely for individuals who are 18 years of age or older. If you are under 18, you may only use the Services with the explicit consent and supervision of a parent or legal guardian.</li>
              <li><strong className="text-klyth-cream/90">Waitlist and Beta Access:</strong> Joining the waitlist does not guarantee immediate access to the Klyth app or ecosystem. We reserve the right to grant or deny beta access at our sole discretion.</li>
              <li><strong className="text-klyth-cream/90">Account Security:</strong> When the app launches, you may be required to create an account. You must provide accurate, current, and complete information. You are entirely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
            </ul>
          </section>

          <section id="user-conduct" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">3. User Conduct and Acceptable Use</h2>
            <p>We are building a supportive, peer-to-peer ecosystem. To protect the community, you agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use the Services for any unlawful purpose or in violation of any local, state, national, or international law.</li>
              <li>Provide, promote, or solicit illegal, fraudulent, or highly speculative financial schemes (e.g., "get rich quick" schemes, unauthorized crypto shilling) within the Klyth community forums.</li>
              <li>Harass, abuse, defame, or discriminate against other users, Klyth staff, or event guests.</li>
              <li>Scrape, crawl, or extract data from the Services using automated means.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the Klyth app or website.</li>
              <li>Impersonate any person or entity, including Klyth personnel or financial advisors.</li>
            </ul>
          </section>

          <section id="intellectual-property" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">4. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Klyth's Ownership:</strong> The Services, including but not limited to the app, behavioral engine, website design, text, graphics, educational modules, UI/UX, trademarks, logos, and software, are the exclusive property of Klyth and its licensors. They are protected by copyright, trademark, and other intellectual property laws.</li>
              <li><strong className="text-klyth-cream/90">Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services strictly for your personal, non-commercial, educational use.</li>
            </ul>
          </section>

          <section id="ugc" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">5. User-Generated Content (UGC)</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Your Content:</strong> You retain ownership of any messages, forum posts, or other content you submit to the Klyth community ("UGC").</li>
              <li><strong className="text-klyth-cream/90">License to Klyth:</strong> By posting UGC, you grant Klyth a worldwide, royalty-free, perpetual, irrevocable, and sub-licensable right to use, reproduce, modify, adapt, publish, and display such content in connection with operating and promoting the Services.</li>
              <li><strong className="text-klyth-cream/90">Moderation:</strong> We reserve the right, but have no obligation, to monitor, review, edit, or delete any UGC that we determine, in our sole discretion, violates these Terms or is otherwise objectionable.</li>
            </ul>
          </section>

          <section id="live-events" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">6. Live Events, Cohorts, and Campus Chapters</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Event Changes:</strong> Klyth reserves the right to cancel, reschedule, or alter the format (virtual/offline) of any event, workshop, or cohort sprint without prior notice.</li>
              <li><strong className="text-klyth-cream/90">Campus Ambassadors:</strong> Participation in the Klyth Campus Chapters program is voluntary. Ambassadors are independent community leaders, not employees, agents, or legal representatives of Klyth. Klyth is not liable for the independent actions of Campus Ambassadors.</li>
              <li><strong className="text-klyth-cream/90">Recordings:</strong> By attending virtual or physical Klyth events, you consent to being recorded, photographed, or filmed, and you grant Klyth the right to use such media for promotional and educational purposes.</li>
            </ul>
          </section>

          <section id="payments" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">7. Payments, Subscriptions, and Refunds (Future-Proofing Clause)</h2>
            <p>While core community access and newsletters may be free, certain features (e.g., the Klyth app premium tier, specialized cohort sprints) may require payment.</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Billing:</strong> By providing a payment method, you authorize Klyth or our third-party payment processors to charge the applicable fees.</li>
              <li><strong className="text-klyth-cream/90">Refunds:</strong> Unless explicitly stated otherwise during the checkout process or required by applicable Indian law, all purchases and subscription fees are non-refundable.</li>
            </ul>
          </section>

          <section id="disclaimers" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">8. Disclaimers of Warranties</h2>
            <p className="uppercase tracking-wide text-klyth-cream/90 text-sm leading-relaxed">
              The Services are provided on an "as-is" and "as-available" basis. Klyth expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the services will be uninterrupted, error-free, secure, or that any defects will be corrected. We do not guarantee any specific financial outcomes or results from using the services.
            </p>
          </section>

          <section id="limitation" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">9. Limitation of Liability</h2>
            <p className="uppercase tracking-wide text-klyth-cream/90 text-sm leading-relaxed">
              To the maximum extent permitted by applicable law, in no event shall Klyth, its founders, directors, employees, affiliates, or mentors be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of wealth, data loss, or other intangible losses, arising out of or in connection with your use or inability to use the services, even if we have been advised of the possibility of such damages. In no event shall our total cumulative liability exceed the amount you paid Klyth in the past six (6) months, or one thousand Indian Rupees (INR 1,000), whichever is greater.
            </p>
          </section>

          <section id="indemnification" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Klyth and its team from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms, your misuse of the Services, or your violation of any third-party rights.
            </p>
          </section>

          <section id="modifications" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">11. Modifications to the Services and Terms</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Services (or any part thereof) at any time without notice. We may also update these Terms from time to time. If we make material changes, we will notify you by updating the "Last Updated" date at the top of this document or via email. Your continued use of the Services following the posting of revised Terms constitutes your acceptance of the changes.
            </p>
          </section>

          <section id="governing-law" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">12. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-klyth-cream/90">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</li>
              <li><strong className="text-klyth-cream/90">Jurisdiction:</strong> Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Pune, Maharashtra, India, and you hereby consent to the personal jurisdiction and venue therein.</li>
            </ul>
          </section>

          <section id="severability" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">13. Severability and Waiver</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions of these Terms will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section id="contact-info" className="scroll-mt-32 space-y-6">
            <h2 className="font-serif text-2xl text-klyth-cream font-semibold border-b border-white/5 pb-4">14. Contact Information</h2>
            <p>
              If you have any questions, concerns, or legal notices regarding these Terms, please contact us at:
            </p>
            <div className="bg-[#1C1C1E]/50 border border-white/5 p-6 rounded-2xl mt-6">
              <p className="font-serif text-xl text-klyth-cream mb-2">Klyth</p>
              <p className="text-klyth-cream/80 mb-1"><span className="text-klyth-cream/50">Address:</span> Lohegaon, Pune - 411047, Maharashtra, India</p>
              <p className="text-klyth-cream/80"><span className="text-klyth-cream/50">Email:</span> <a href="mailto:legal@klyth.in" className="text-klyth-olive hover:underline">legal@klyth.in</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
