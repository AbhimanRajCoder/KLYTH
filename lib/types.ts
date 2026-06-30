export interface Speaker {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface AgendaItem {
  time: string;
  topic: string;
  speaker?: string;
}

export interface LearningPoint {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'upcoming' | 'live' | 'almost-full' | 'sold-out' | 'cancelled' | 'registration-closed';
  category: 'ama' | 'workshop' | 'masterclass';
  format: 'virtual' | 'offline';
  coverImage: string;
  gallery?: string[];
  date: string; // ISO String format
  timezone: string;
  duration: string;
  location?: string;
  platform?: string;
  capacity: number;
  registered: number;
  featured: boolean;
  host: {
    name: string;
    avatar: string;
  };
  speakers: Speaker[];
  agenda: AgendaItem[];
  learningPoints: LearningPoint[];
  faq: FAQItem[];
  registrationUrl: string;
  calendarLinks: {
    google: string;
    apple: string;
    outlook: string;
    ics: string;
  };
  tags: string[];
  relatedEvents?: string[]; // Array of Event IDs or slugs
  seo: {
    title: string;
    description: string;
  };
}
