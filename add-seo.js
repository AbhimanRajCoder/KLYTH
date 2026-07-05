const fs = require('fs');
const path = require('path');

const seoData = {
  about: { title: "About Us | Klyth", desc: "Discover the origin, team, and mentorship behind Klyth." },
  campus: { title: "Campus Chapters | Klyth", desc: "Bring financial growth to your university with Klyth Campus Chapters." },
  contact: { title: "Contact Us | Klyth", desc: "Get in touch with the Klyth team." },
  faq: { title: "FAQ | Klyth", desc: "Frequently asked questions about Klyth." },
  mission: { title: "Our Mission | Klyth", desc: "Our mission to empower a generation to grow financially with confidence." },
  privacy: { title: "Privacy Policy | Klyth", desc: "Klyth Privacy Policy." },
  terms: { title: "Terms of Service | Klyth", desc: "Klyth Terms of Service." },
};

Object.entries(seoData).forEach(([route, data]) => {
  const pagePath = path.join(__dirname, 'app', route, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    if (!content.includes('export const metadata')) {
      const meta = `import { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: "${data.title}",\n  description: "${data.desc}",\n};\n\n`;
      fs.writeFileSync(pagePath, meta + content);
      console.log(`Updated ${route}`);
    }
  }
});

const clientSeoData = {
  ecosystem: { title: "The Ecosystem | Klyth", desc: "Explore the Klyth financial ecosystem." },
  join: { title: "Join Klyth | Secure Your Spot", desc: "Secure your priority invitation to Klyth." },
};

Object.entries(clientSeoData).forEach(([route, data]) => {
  const layoutPath = path.join(__dirname, 'app', route, 'layout.tsx');
  if (!fs.existsSync(layoutPath)) {
    const content = `import { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: "${data.title}",\n  description: "${data.desc}",\n};\n\nexport default function Layout({ children }: { children: React.ReactNode }) {\n  return children;\n}\n`;
    fs.writeFileSync(layoutPath, content);
    console.log(`Created layout for ${route}`);
  }
});
