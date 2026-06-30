import { Event } from "./types";

// Generates dynamic dates relative to current time to ensure countdowns/statuses stay active in demos
const getRelativeDate = (daysAhead: number, hoursAhead: number = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  d.setHours(d.getHours() + hoursAhead);
  return d.toISOString();
};

export const MOCK_EVENTS: Event[] = [
  {
    id: "1",
    slug: "designing-cultural-layers",
    title: "Designing Cultural Layers in FinTech",
    subtitle: "A masterclass on stripping financial anxiety through Apple-level UX design paradigms.",
    description: "Traditional banking applications are designed to be clinical, cold, and friction-filled. At Klyth, we believe wealth-building should feel native, intuitive, and visually arresting. In this exclusive masterclass, our design team breaks down the exact formulas used to build trust, establish prestige, and drive continuous financial progress using hyper-premium interface engineering.",
    status: "almost-full",
    category: "masterclass",
    format: "virtual",
    coverImage: "/img/banner.png",
    date: getRelativeDate(2, 4), // 2 days, 4 hours from now
    timezone: "EST",
    duration: "90 mins",
    platform: "Zoom Premium",
    capacity: 250,
    registered: 242,
    featured: true,
    host: {
      name: "Ekta Sachdev",
      avatar: "/img/ekta.png"
    },
    speakers: [
      {
        name: "Ekta Sachdev",
        role: "Head of Product & Design, Klyth",
        bio: "Former design lead at premium visual platforms. Specializes in building minimal, high-trust digital interfaces for high-net-worth ecosystems.",
        avatar: "/img/ekta.png",
        socials: {
          linkedin: "https://linkedin.com/in/ekta-sachdev",
          twitter: "https://twitter.com/ekta_design"
        }
      },
      {
        name: "Yasir Eqbal",
        role: "Chief Executive Officer, Klyth",
        bio: "Strategist and visionary leader guiding the cultural alignment of Klyth's technology with the demands of the next generation of builders.",
        avatar: "/img/yasir.png"
      }
    ],
    agenda: [
      {
        time: "10:00 AM - 10:15 AM",
        topic: "The Psychology of Friction in Wealth Apps",
        speaker: "Ekta Sachdev"
      },
      {
        time: "10:15 AM - 10:45 AM",
        topic: "Deep Dive: Playfair Display vs. Inter Type Scale Architectures",
        speaker: "Ekta Sachdev"
      },
      {
        time: "10:45 AM - 11:15 AM",
        topic: "Interactive Review: Redesigning a Legacy Transaction Ledger live",
        speaker: "Ekta Sachdev"
      },
      {
        time: "11:15 AM - 11:30 AM",
        topic: "Closing AMA: Exclusivity and Scale",
        speaker: "Yasir Eqbal"
      }
    ],
    learningPoints: [
      {
        title: "Master Visual Restraint",
        description: "Learn how to build high-converting interfaces using only 8 brand colors and standard editorial layout rules."
      },
      {
        title: "Tactile Motion Language",
        description: "Implement physical feedback models like the Klyth Lift to make digital actions feel tangible."
      },
      {
        title: "High-Net-Worth Trust Mechanics",
        description: "Understand the design cues that communicate luxury, security, and prestige instantly."
      }
    ],
    faq: [
      {
        question: "Will a recording be available?",
        answer: "Yes, all registered members will receive access to the ultra-high-definition recording and design templates within 24 hours of the live session."
      },
      {
        question: "Do I need design experience to attend?",
        answer: "No, this is highly beneficial for founders, product managers, developers, and designers alike. We focus on high-level principles as well as direct code implementation."
      },
      {
        question: "Is there a limit on seats?",
        answer: "Yes, to keep the interactive Q&A session intimate, we limit masterclasses to 250 registered attendees."
      }
    ],
    registrationUrl: "#rsvp",
    calendarLinks: {
      google: "https://calendar.google.com",
      apple: "https://calendar.apple.com",
      outlook: "https://outlook.live.com",
      ics: "#ics"
    },
    tags: ["Design", "Fintech", "UX", "Exclusive"],
    relatedEvents: ["2", "3"],
    seo: {
      title: "Designing Cultural Layers in FinTech | Klyth Masterclass",
      description: "Join Ekta Sachdev live to master Apple-level UX design paradigms in financial applications."
    }
  },
  {
    id: "2",
    slug: "engineering-high-throughput-ledgers",
    title: "Engineering High-Throughput Ledger Systems",
    subtitle: "Under the hood of Klyth's financial engine: secure, distributed, and real-time backend models.",
    description: "Scale requires impeccable engineering. Join our tech lead as we map out the design patterns of our proprietary transaction pipelines. We'll discuss double-entry ledger safety, optimistic concurrency, and sub-millisecond execution speeds necessary for modern wealth platforms.",
    status: "live",
    category: "workshop",
    format: "virtual",
    coverImage: "/img/banner.png",
    date: getRelativeDate(0, 1), // Started 1 hour ago (or happening live)
    timezone: "GMT",
    duration: "120 mins",
    platform: "Discord Stage",
    capacity: 500,
    registered: 490,
    featured: false,
    host: {
      name: "Abhiman Raj",
      avatar: "/img/abhiman.png"
    },
    speakers: [
      {
        name: "Abhiman Raj",
        role: "Head of Engineering, Klyth",
        bio: "Systems architect specializing in distributed ledger technologies and low-latency transaction processing engines.",
        avatar: "/img/abhiman.png",
        socials: {
          linkedin: "https://linkedin.com/in/abhiman-raj"
        }
      }
    ],
    agenda: [
      {
        time: "2:00 PM - 2:30 PM",
        topic: "Immutability and Double-Entry Core Layouts"
      },
      {
        time: "2:30 PM - 3:15 PM",
        topic: "Sharding and Dynamic Ledger Queries"
      },
      {
        time: "3:15 PM - 4:00 PM",
        topic: "Performance Benchmark & live Stress Testing"
      }
    ],
    learningPoints: [
      {
        title: "Ledger Consistency Protocols",
        description: "Guarantee transaction safety using strict state validation and distributed locks."
      },
      {
        title: "Low Latency Architectures",
        description: "Learn how to optimize database indices and local memory caches for sub-10ms query times."
      }
    ],
    faq: [
      {
        question: "Is this workshop interactive?",
        answer: "Yes, we will provide a GitHub repository for participants to clone and run load tests locally during the workshop."
      }
    ],
    registrationUrl: "#rsvp",
    calendarLinks: {
      google: "https://calendar.google.com",
      apple: "https://calendar.apple.com",
      outlook: "https://outlook.live.com",
      ics: "#ics"
    },
    tags: ["Engineering", "Backend", "Scale", "Rust"],
    relatedEvents: ["1"],
    seo: {
      title: "Engineering High-Throughput Ledger Systems | Klyth Workshop",
      description: "Deep dive into secure ledger systems and distributed transaction engines with Abhiman Raj."
    }
  },
  {
    id: "3",
    slug: "building-generational-wealth",
    title: "Building Generational Wealth: The Creator Economy Roster",
    subtitle: "An offline, private round-table with founders and creators on aligning digital equity with asset generation.",
    description: "Capital is changing. In this closed-door offline session in New York, we bring together leading digital creators, startup founders, and financial operators. We will outline actionable strategies to move from cash flow optimization to building generational, asset-backed equity platforms.",
    status: "upcoming",
    category: "ama",
    format: "offline",
    coverImage: "/img/banner.png",
    date: getRelativeDate(10), // 10 days from now
    timezone: "EST",
    duration: "180 mins",
    location: "Klyth HQ, SoHo, NY",
    capacity: 50,
    registered: 38,
    featured: false,
    host: {
      name: "Yasir Eqbal",
      avatar: "/img/yasir.png"
    },
    speakers: [
      {
        name: "Yasir Eqbal",
        role: "Chief Executive Officer, Klyth",
        bio: "Financial operator focused on transitioning builder communities from traditional banking pipelines to custom asset layers.",
        avatar: "/img/yasir.png",
        socials: {
          twitter: "https://twitter.com/yasir_eqbal"
        }
      }
    ],
    agenda: [
      {
        time: "6:00 PM - 7:00 PM",
        topic: "Private Reception & High-Net-Worth Networking"
      },
      {
        time: "7:00 PM - 8:30 PM",
        topic: "Roundtable Discussion: Digital Equity and Private Asset Allocation"
      },
      {
        time: "8:30 PM - 9:00 PM",
        topic: "Closing VIP Cocktails"
      }
    ],
    learningPoints: [
      {
        title: "Asset Diversification",
        description: "Move liquid digital earnings into stable, high-yield private investments."
      },
      {
        title: "Equity Architecture",
        description: "Learn how to structure creator-led ventures to attract long-term institutional backers."
      }
    ],
    faq: [
      {
        question: "How do I secure an invite?",
        answer: "This is an invite-only event. Please submit your RSVP application, and our concierge team will review and confirm your seat within 48 hours."
      }
    ],
    registrationUrl: "#rsvp",
    calendarLinks: {
      google: "https://calendar.google.com",
      apple: "https://calendar.apple.com",
      outlook: "https://outlook.live.com",
      ics: "#ics"
    },
    tags: ["Strategy", "Creators", "Equity", "Private Session"],
    relatedEvents: ["1"],
    seo: {
      title: "Generational Wealth & Creator Equity | Klyth Offline Session",
      description: "Exclusive round-table in SoHo, NY for digital builders and creators."
    }
  },
  {
    id: "4",
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale: From Token to Component",
    subtitle: "A retrospective look at designing and implementing the core Klyth Design System.",
    description: "In this session, we walk through how a single visual language has been scaled from Figma files into a production Next.js codebase. We discuss CSS variables, Tailwind configurations, design tokens, and building premium custom components that scale across products.",
    status: "registration-closed", // Past event
    category: "masterclass",
    format: "virtual",
    coverImage: "/img/banner.png",
    date: getRelativeDate(-5), // 5 days ago
    timezone: "PST",
    duration: "90 mins",
    platform: "Zoom Archive",
    capacity: 300,
    registered: 300,
    featured: false,
    host: {
      name: "Ekta Sachdev",
      avatar: "/img/ekta.png"
    },
    speakers: [
      {
        name: "Ekta Sachdev",
        role: "Head of Product & Design, Klyth",
        bio: "Specialist in typography systems and hyper-clean responsive front-end layout styling.",
        avatar: "/img/ekta.png"
      }
    ],
    agenda: [],
    learningPoints: [],
    faq: [],
    registrationUrl: "",
    calendarLinks: { google: "", apple: "", outlook: "", ics: "" },
    tags: ["Design System", "CSS", "Next.js"],
    seo: {
      title: "Design Systems at Scale | Klyth Archive",
      description: "Access the recording and documentation of the Klyth Design System masterclass."
    }
  },
  {
    id: "5",
    slug: "founders-secrets-funding-architectures",
    title: "Founders' Secrets: Funding & Capital Architectures",
    subtitle: "How to raise capital without sacrificing your long-term equity control.",
    description: "Navigating early-stage venture backing is a minefield of unfavorable terms and dilution. Yasir Eqbal hosts a deep conversation on venture debt, modern syndicates, and keeping control of your board.",
    status: "registration-closed", // Past event
    category: "ama",
    format: "virtual",
    coverImage: "/img/banner.png",
    date: getRelativeDate(-12), // 12 days ago
    timezone: "EST",
    duration: "60 mins",
    platform: "Vimeo Private Archive",
    capacity: 200,
    registered: 200,
    featured: false,
    host: {
      name: "Yasir Eqbal",
      avatar: "/img/yasir.png"
    },
    speakers: [
      {
        name: "Yasir Eqbal",
        role: "CEO, Klyth",
        bio: "Venture capitalist and founder who raised over $50M in seed-to-growth stages.",
        avatar: "/img/yasir.png"
      }
    ],
    agenda: [],
    learningPoints: [],
    faq: [],
    registrationUrl: "",
    calendarLinks: { google: "", apple: "", outlook: "", ics: "" },
    tags: ["Capital", "Venture", "Funding"],
    seo: {
      title: "Funding & Capital Architectures | Klyth AMA Archive",
      description: "Review Yasir Eqbal's masterclass on capital generation and equity preservation."
    }
  }
];

export const getEvents = async (): Promise<Event[]> => {
  return MOCK_EVENTS;
};

export const getEventBySlug = async (slug: string): Promise<Event | undefined> => {
  return MOCK_EVENTS.find(e => e.slug === slug);
};
