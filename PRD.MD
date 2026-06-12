# Klyth — Product Requirements Document
**Version:** 1.0  
**Last Updated:** June 2026  
**Status:** In Development

---

## Table of Contents

1. [Overview](#1-overview)
2. [Design System](#2-design-system)
3. [Global Components](#3-global-components)
4. [Pages](#4-pages)
   - 4.1 [Home (`/`)](#41-home-)
   - 4.2 [Mission (`/mission`)](#42-mission-mission)
   - 4.3 [Ecosystem (`/ecosystem`)](#43-ecosystem-ecosystem)
   - 4.4 [Events Hub (`/events`)](#44-events-hub-events)
   - 4.5 [Individual Event (`/events/[slug]`)](#45-individual-event-eventsslug)
   - 4.6 [Campus Chapters (`/campus`)](#46-campus-chapters-campus)
   - 4.7 [Join (`/join`)](#47-join-join)
   - 4.8 [FAQ (`/faq`)](#48-faq-faq)
   - 4.9 [About (`/about`)](#49-about-about)
   - 4.10 [Contact (`/contact`)](#410-contact-contact)
   - 4.11 [Privacy Policy (`/privacy`)](#411-privacy-policy-privacy)
   - 4.12 [Terms of Service (`/terms`)](#412-terms-of-service-terms)
5. [Page Visibility Rules](#5-page-visibility-rules)

---

## 1. Overview

**Product:** Klyth Marketing & Waitlist Website  
**Tagline:** Financial Growth, Rewired.  
**Contact:** hello@klyth.in  
**HQ:** Lohegaon, Pune – 411047, India

### Purpose
A 12-page marketing site that guides visitors through a narrative funnel — from initial curiosity → understanding the problem → seeing the solution → joining the waitlist. The site must establish trust in the financial space, drive waitlist signups, and act as a hub for live events and campus growth.

### Tech Assumptions
- Framework: Next.js (recommended for page transitions and SSR)
- Animation: Framer Motion
- Icons: Font Awesome (`https://fontawesome.com`)
- Fonts: Google Fonts (Playfair Display + Inter)
- Forms/Registration: Tally or Luma (external embeds)
- Email: SendGrid / Resend / AWS SES (transactional auto-responder)

---

## 2. Design System

### 2.1 Color Palette (CSS Variables)

Define in `:root` before any component work.

| Variable | Hex | Usage |
|---|---|---|
| `--klyth-charcoal` | `#121212` | Main canvas / page background |
| `--klyth-obsidian` | `#1C1C1E` | Glass card base color |
| `--klyth-cream` | `#F5F2EB` | All primary text |
| `--klyth-ghost` | `#2C2C2E` | Borders, dividers |
| `--klyth-olive` | `#4A5D23` | Primary CTAs, active states, focus glows |
| `--klyth-gold` | `#E2B842` | Tier 1 rewards, pulses, "in development" badges |
| `--klyth-platinum` | `#E5E4E2` | Tier 2 hardware, "locked" / "coming soon" UI |
| `--klyth-oxblood` | `#8E3533` | Errors, validation warnings |

**Rules:**
- Background across all pages: `--klyth-charcoal`
- All typography defaults to `--klyth-cream`; secondary/sub text at 70% opacity
- No new grays or opacities outside this 8-color system

### 2.2 Glassmorphism Standard

Every card, container, and modal across the site must use these exact values:

| Property | Value |
|---|---|
| Background | `--klyth-obsidian` at 60% opacity |
| Blur | `backdrop-blur-md` (Tailwind) or equivalent |
| Border | 1px solid `--klyth-ghost` |

### 2.3 Typography

**Fonts:** Playfair Display + Inter  
Import: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap`

```css
:root {
  --klyth-font-serif: 'Playfair Display', serif;
  --klyth-font-sans: 'Inter', sans-serif;
}
body { font-family: var(--klyth-font-sans); color: var(--klyth-cream); line-height: 1.6; }
h1, h2, h3 { font-family: var(--klyth-font-serif); line-height: 1.2; }
```

| Element | Font | Weight | Notes |
|---|---|---|---|
| Hero H1 | Playfair Display | 700 Bold | Massive, center-aligned on desktop |
| Section H2 | Playfair Display | 700 Bold | Commands authority |
| Pull-quotes | Playfair Display | 400 Italic | Massive, center-aligned |
| Navbar links | Inter | 500 Medium | — |
| Eyebrow/label text | Inter | 600 Bold | Uppercase, `letter-spacing: widest` |
| Buttons (CTAs) | Inter | 600 SemiBold | — |
| Format tags / pills | Inter | 500 Medium | 12–14px |
| Body text | Inter | 400 Regular | — |
| Stats/numbers | Inter | 600 Bold | NOT Playfair |
| Marquee text | Inter | 500 Medium | All-caps |
| Legal pages (H1, H2, body) | Inter | varies | No Playfair on `/privacy` or `/terms` |

### 2.4 Component Standards

**Primary CTA Buttons**
- Shape: Solid pill
- Fill: `--klyth-olive`
- Hover: `box-shadow` using olive at 30% opacity (blurry glow lift)
- Font: Inter SemiBold 600

**Disabled / Ghost Buttons**
- No background
- Border: `--klyth-ghost`
- Text: 40% opacity
- Cursor: `not-allowed`

**Badge Tags**
- "In development": pill border `--klyth-gold`, subtle glow
- "In beta": pill border `--klyth-olive`, subtle glow
- "Locked / Coming soon": `--klyth-platinum` elements

**Forms (Focus State)**
- Active border: `--klyth-olive` glow
- Invalid border: `--klyth-oxblood`
- Custom checkbox: fills with `--klyth-olive`, checkmark in `--klyth-cream`
- Floating labels: smoothly scale down and float top-left on focus

**Icons:** Font Awesome (socials, chevrons, arrows, `+`, checkmarks, etc.)

---

## 3. Global Components

### 3.1 Navbar

**Visibility:** All pages **except** `/join`

**Content:**
- Left: Klyth logo → links to `/`
- Center: The Ecosystem (`/ecosystem`) · Events (`/events`) · The Mission (`/mission`)
- Right: "Join" button (pill, `--klyth-olive`) → `/join`

**Behavior & Animations:**

| State | Appearance |
|---|---|
| Top of page (≤ 20px scroll) | Fully transparent background |
| Scrolled (> 20px) | Glassmorphism standard + 1px bottom border (`--klyth-ghost`) |

- **Link hover:** Thin `--klyth-gold` line expands outward from center of the word; retracts on un-hover
- **CTA button:** Pill shape, subtle hover lift

**Mobile/Tablet:**
- Hide center links and CTA
- Show hamburger icon (far right)
- On click: Full-screen frosted glass overlay
  - Links stacked vertically, massively sized
  - Cascade fade-in-up animation (one by one)
  - "Join" button: full-width, at bottom of overlay

---

### 3.2 Footer

**Visibility:** All pages **except** `/join`

**Top Hook Section** (full-width, above main grid)

| Show on | Hide on |
|---|---|
| `/`, `/mission`, `/ecosystem`, `/campus`, `/about`, `/faq`, `/privacy`, `/terms` | `/events`, `/events/[slug]`, `/contact` |

- Headline: "Ready to grow differently?"
- CTA: "Step Into the Ecosystem" → `/join`

**Main Grid (4 columns):**

| Col 1 — Brand | Col 2 — Explore | Col 3 — Klyth | Col 4 — Legal |
|---|---|---|---|
| Logo + "Financial Growth, Rewired." | The Ecosystem `/ecosystem` | The Mission `/mission` | Privacy Policy `/privacy` |
| Instagram icon | Live Events `/events` | About Us `/about` | Terms of Service `/terms` |
| X (Twitter) icon | Campus Chapters `/campus` | Contact Us `/contact` | |
| LinkedIn icon | | FAQ `/faq` | |
| Email icon → `mailto:hello@klyth.in` | | | |

Column 1 gets slightly wider span so tagline doesn't wrap.

**Bottom Bar:**
- Left: © 2026 Klyth. All rights reserved.
- Right: Built in Pune, India.

**UI Details:**
- Background: `#000000` or `--klyth-charcoal` (pitch black feel)
- Top separator: 1px `--klyth-ghost`
- Link hover: text shifts to full `--klyth-cream` + nudges 2–3px right
- Social icons: on hover, glow with their respective brand colors (Instagram gradient, X white/black, LinkedIn blue)

**Responsive:**
- Tablet: 2×2 grid
- Mobile: Single vertical stack (Col 1 → Explore → Klyth → Legal); center-align bottom bar

---

## 4. Pages

---

### 4.1 Home (`/`)

#### Section 1 — Hero

| Field | Content |
|---|---|
| Headline | Financial Growth, Rewired. |
| Sub-headline | Empowering a generation to grow financially with confidence. No boring lectures, no financial anxiety—just intuitive systems, daily habits, and a community that moves forward together. |
| CTA | Step Into the Ecosystem → `/join` |

**UI/Animation:**
- Full viewport height (`100vh`)
- Text perfectly centered (vertically + horizontally), generous breathing room
- **Text reveal:** Mask reveal (words slide upward from invisible line) — headline → sub-headline → button, staggered
- **Button:** Magnetic cursor effect on desktop (button gently pulls toward cursor; cursor sticks to center); soft blurry glow expands on hover. Disable on mobile (use standard tap color change instead)
- **Background:** Slow, barely noticeable moving gradient or shifting blur ("breathing" effect)

**Responsive:** `min-h-screen`; reduced headline size on mobile; CTA min 48px tall; disable magnetic cursor on touch

---

#### Section 2 — The Problem

| Field | Content |
|---|---|
| Eyebrow | The Status Quo |
| Headline | We were taught complex formulas, but left blind to our own financial reality. |
| Body intro | "You spent years in classrooms... expected to make life-altering financial decisions completely in the dark. But the deepest flaw isn't just the lack of education—it is the lack of context..." |

**Three cards (right side):**

| Card | Title | Body |
|---|---|---|
| 1 | The "One-Size-Fits-All" Trap | YouTube/textbooks/guru courses offer generic blueprints. Zero personalization. Total engagement failure. |
| 2 | The AI Chatbot Illusion | Chatbots give textbook data, not a personalized path. No structure, no roadmap. |
| 3 | The Finfluencer Echo Chamber | Viral creators push hype-driven advice for views, not your portfolio. |

**UI/Animation:**
- **Layout:** Sticky scroll — left side (headline + intro) sticks; right side cards scroll normally
- **Card scrubbing:** Center-of-screen card = 100% opacity; others dim to 30% + slight shrink
- **Typography:** "Personal finance is deeply personal." gets glowing text effect or animated underline
- **Responsive (< 1024px):** Stack vertically; disable sticky scroll; use IntersectionObserver fade-in-up per card

---

#### Section 3 — The Solution

| Field | Content |
|---|---|
| Eyebrow | The Klyth Way |
| Headline | Financial growth is not a course. It is a daily habit. |
| Sub-headline | We aren't just teaching finance. We are building the infrastructure for financially intelligent living. |

**7 Pillar Cards:**

| # | Title | Tag | Description |
|---|---|---|---|
| 1 | The Klyth App: Your Hyper-Personalized Financial Roadmap | In development | Flagship app with gamified, adaptive micro-lessons |
| 2 | Live Workshops & Events: Connecting You With the Experts | — | Virtual + offline events with SEBI advisors and pros |
| 3 | Campus Ambassador Rollouts: A Grassroots Movement | In development | Student leaders bringing Klyth to their campuses |
| 4 | Institutional Partnerships: Bridging the Education Gap | — | Direct university integrations |
| 5 | Action-Oriented Cohort Sprints: From Theory to Execution | In beta | Guided, time-bound group programs |
| 6 | The Community Ecosystem: Breaking the Money Taboo | In beta | Peer-to-peer moderated forums |
| 7 | Bite-Sized Financial Intelligence: Insights Built for Youth | — | Newsletter translating macro events for youth |

**UI/Animation:**
- **Layout:** Asymmetric Bento Box grid. Pillar 1 (App) takes up ~half the grid
- **Tags:** Small pill badges — gold glow for "in development", olive glow for "in beta"
- **Cards:** Glassmorphism standard
- **Hover spotlight:** Soft circular light follows cursor behind glass cards, glowing card borders
- **3D tilt:** Card gently tilts in 3D toward mouse direction on hover
- **Entrance:** Cards cascade in (scale from 80% → 100%) like puzzle pieces, sequentially on scroll
- **Responsive:** Tablet = 2-col masonry; mobile = single column. Disable tilt and spotlight on touch; keep cascade entrance

---

#### Section 4 — Social Proof

| Metric | Value |
|---|---|
| Headline | A generation ready to grow differently. |
| Stat 1 | 12,500+ Waitlisted for the Ecosystem |
| Stat 2 | 500+ Hours of Live Expert Mentorship Delivered |
| Stat 3 | 100% Focus on Personalized Execution (Zero BS) |

**UI/Animation:**
- Layout: Wide horizontal banner; numbers use Inter Bold 600 — largest text on entire site
- **Number tally:** Count up from 0 on scroll-enter, ease-out
- **Marquee:** Infinite looping ribbon below/behind numbers (right → left): *"Stop Surviving. Start Scaling. • The Money Taboo is Broken. • Financial Growth, Rewired."*
- **Responsive:** Stack vertically on mobile; scale numbers to fit viewport

---

#### Section 5 — Final CTA

| Field | Content |
|---|---|
| Headline | Stop surviving. Start scaling. |
| Body | The era of one-size-fits-all financial anxiety is over. Join the movement to unlock priority beta access, exclusive workshop invites, and the personalized systems you need to build real wealth. |
| CTA | Unlock Early Access → `/join` |
| Subtext | Join the generation rewiring their financial future. |

**UI/Animation:**
- Layout: Content inside a massive, rounded floating card with empty space around it
- **"Portal" scroll effect:** Card slowly scales up as user scrolls to it (zoom-in feel). Disable on mobile (fade-in instead)
- **Input/button fusion:** Single pill shape — email input on left, "Unlock" button on right (fused). Break apart on screens < 400px: email field on top, full-width button below
- **Attention pulse:** Button breathing animation (scale ±2% loop)
- Reduce heavy padding on mobile

---

### 4.2 Mission (`/mission`)

#### Section 1 — Hero

| Field | Content |
|---|---|
| Headline | The system taught us how to work for money, but not how money works. |
| Sub-headline | We spent two decades preparing for careers, but zero hours preparing for the wealth those careers generate. It's time to rewrite the rules for a generation left to figure it out alone. |

**UI/Animation:**
- Editorial style, full height (`100vh`), text massive, left-aligned, bottom-left quadrant with dramatic negative space
- **Entrance:** Word-by-word mask reveal (left to right), sub-headline fades in 500ms after headline
- Scroll indicator: thin vertical line at bottom, slowly grows downward
- **Responsive:** `min-h-screen`, center-align, speed up word animation slightly

---

#### Section 2 — The Broken Reality

| Field | Content |
|---|---|
| Eyebrow | The Reality Check |
| Headline | The internet is full of financial advice. And it is completely broken. |
| Pull-quote | "We are drowning in information, but starving for systems." |

**Three flip cards:**

| They gave us | We actually needed |
|---|---|
| Generic textbooks and courses | Hyper-personalized roadmaps |
| Hype-driven Finfluencers | Grounded, actionable systems |
| Isolated AI Chatbots | Structure and community |

**UI/Animation:**
- Cards: Frosted glass; hover/scroll triggers 180° Y-axis flip revealing "We needed" side
- Pull-quote: Massive, centered, italic (Playfair Display), acts as visual break
- **Responsive (touch):** Replace flip with static layout — "They gave us" in muted/crossed-out style; "We needed" below in bold, softly highlighted box

---

#### Section 3 — The Empathy Shift

| Field | Content |
|---|---|
| Headline | Your financial anxiety is not your fault. It is a design flaw. |
| Body | "If you feel overwhelmed looking at your bank account... The confusion is intentional... You are not 'bad with money.'... We are ending the era of financial gatekeeping. Klyth is where the anxiety stops, and the momentum begins." |

**UI/Animation:**
- Narrow reading width (~65ch / 600px), centered (personal letter feel)
- **Scroll-triggered dimming:** Background dims 10–15% on entry (spotlight effect)
- **Text highlight:** "You are not 'bad with money.'" gets `--klyth-gold` at 20% opacity animating left-to-right behind the text

---

#### Section 4 — The Monolith Concept

| Field | Content |
|---|---|
| Eyebrow | The Identity |
| Headline | The Key to the Monolith. |
| Body | "True financial freedom is not built on isolated hacks... We named our platform Klyth as a conceptual blend of 'Key' and 'Monolith.' We provide the key: the technology, the community, the expert access... You build the monolith: the long-term habits, the mindset shifts..." |

**UI/Animation:**
- Split-screen: text on one side, abstract 3D monolithic shape / slow geometric animation on other
- **Parallax:** Visual moves at slower speed than text on scroll
- **Responsive:** Stack vertically; visual on top (scaled down), text below; disable parallax

---

#### Section 5 — Final CTA

| Field | Content |
|---|---|
| Headline | Enough theory. Let's build the system. |
| Body | We know exactly why the system is broken. Now, step inside and see exactly how we are fixing it. |
| CTA | See How We're Rewiring It → `/ecosystem` |

**UI/Animation:**
- Clean, minimal, center-aligned
- Button hover: arrow icon slides right; slight lift + soft shadow
- Optional: Framer Motion page transition (slide left or wipe) to `/ecosystem`
- **Responsive:** Full-width button on mobile

---

### 4.3 Ecosystem (`/ecosystem`)

#### Global Cohesiveness Rules

- **Ecosystem Spine:** Faint 1px vertical line (`--klyth-ghost`) running down page center/left margin. Glowing pulse (`--klyth-gold`) travels down it as user scrolls
- **Glassmorphism:** All components use identical standard (obsidian 60%, blur-md, ghost border)
- **Hover accent:** All spotlight/glow effects use the same accent color profile

---

#### Section 1 — Hero

| Field | Content |
|---|---|
| Headline | Financial Growth, Rewired. Inside the Ecosystem. |
| Sub-headline | We are not building just another course you will buy and abandon. We are building a comprehensive cultural layer—fusing behavioral technology, real-world action, and peer accountability to make financial growth a daily, automatic habit. |

**UI/Animation:**
- Cinematic full height (`100vh`), text centered
- **Entrance:** "Blur-in" — headline starts blurred + slightly scaled up, sharpens into focus over 800ms
- **Background:** Slow-moving mesh network / particle effect (dots + lines connecting/disconnecting)
- **Responsive:** `min-h-screen`; scale down headline; reduce particle count on mobile

---

#### Pillars 1–7

Each pillar is a distinct section. Summary of layouts and key interactions:

| Pillar | Layout | Tag | Key UI Detail |
|---|---|---|---|
| 1 — The Klyth App | Split-screen: text left, abstract app UI right | In development | App UI elements "assemble" on scroll-enter; tilt toward cursor on hover |
| 2 — Live Workshops | Text centered top; horizontal drag-to-scroll carousel below | — | Cards scale 5% on hover, push adjacent cards; CTA → `/events` |
| 3 — Campus Ambassador | Split-screen: text right, graphic left | In development | Ripple/seed animation (expanding concentric rings); speeds up as user scrolls over; CTA → `/campus` |
| 4 — Institutional Partnerships | Full-width glassmorphism card | — | Background shifts from `--klyth-charcoal` to `#000000` as user hits center of section |
| 5 — Cohort Sprints | Split-screen: text left, vertical timeline/progress tracker right | In beta | Timeline fills step-by-step as user scrolls through text |
| 6 — Community Ecosystem | Centered text; abstract floating chat bubbles / avatars in background | In beta | Hover over bubble: pauses drift, snaps to focus, expands |
| 7 — Bite-Sized Intelligence | Split-screen: text right, cascading "news card" stack left | — | Cards float upward in infinite slow loop; hover pauses |

**Carousel mock data (Pillar 2):**
1. "Mastering the 50/30/20 Rule" — Virtual Workshop — Klyth Network
2. "First Salary Playbook" — Exclusive AMA — Guest Creator
3. "Navigating Tech Layoffs: Financial Defense" — Live Q&A — Wealth Strategist
4. "Index Funds Deconstructed" — Masterclass — Klyth Mentorship Team

---

#### Section 9 — Final CTA

| Field | Content |
|---|---|
| Headline | Stop surviving. Start scaling. |
| Body | The ecosystem is built. The community is waiting. It is time to replace financial anxiety with unstoppable momentum. |
| CTA | Step Into the Ecosystem → `/join` |

**UI/Animation:**
- Rounded container, heavy padding, centered
- Container slowly expands on scroll-enter (zoom-in feel); disable on mobile (fade-in)
- Button: pulsing shadow (visual heartbeat); full-width on mobile

---

### 4.4 Events Hub (`/events`)

**Card interaction standard ("Klyth Lift"):** On hover — card elevates in 3D, soft glow tracks cursor behind glass, cover image scales +3%

---

#### Section 1 — Hero

| Field | Content |
|---|---|
| Headline | Learn together. Grow together. |
| Sub-headline | Step into the cultural layer. Join live masterclasses, interactive workshops, and exclusive creator AMAs designed to turn financial theory into real-world momentum. |

**UI:** Medium height (50–60vh) so tops of event cards are visible below; text centered; "fade-up and focus" entrance animation

---

#### Section 2 — Upcoming Events

| Field | Content |
|---|---|
| Eyebrow | Secure Your Spot |
| Headline | Next in the Ecosystem |

**Mock Event Card:**

| Field | Value |
|---|---|
| Format Tag | Virtual Live Stream |
| Date | June 28, 2026 \| 7:00 PM IST |
| Title | Mock Event: The Founders' AMA |
| Hosted By | Klyth Founding Team |
| Guests | Guest Creator & Industry Mentor |
| Description | An exclusive, behind-the-scenes deep dive into the Klyth ecosystem roadmap. |
| CTA | RSVP Now → `/events/mock-event` |

**Layout:** CSS Grid — 2–3 cards per row on desktop  
**Card anatomy:** Cover image + format tag (top half); date, title, host, description, RSVP button (bottom half)

**Empty State (no events scheduled):**
- Wide glassmorphic centered card
- Muted 3D calendar icon
- Text: "We are brewing something big behind the scenes. No live events at this exact moment."
- CTA: "Join the Ecosystem" → `/join`

**Responsive:** Single-column stack on mobile; empty state scales smoothly

---

#### Section 3 — Past Highlights

| Eyebrow | The Archive |
| Headline | Catch up on what you missed. |

**Archive Cards:**

| # | Title | Format | Date | Host |
|---|---|---|---|---|
| 1 | Mastering the 50/30/20 Rule | Virtual Workshop | May 10, 2026 | Klyth Network |
| 2 | First Salary Playbook | Exclusive AMA | May 24, 2026 | Guest Creator |
| 3 | Navigating Tech Layoffs: Financial Defense | Live Q&A | June 1, 2026 | Wealth Strategist |
| 4 | Index Funds Deconstructed | Masterclass | June 3, 2026 | Klyth Mentorship Team |

**UI:**
- Grayscale filter or 30% reduced opacity on cover images
- Hover: image returns to full color + scales up
- CTA button: "Ah, you missed it." — ghost style, `cursor: not-allowed`, no anchor tag
- Layout: Horizontal drag-to-scroll carousel
- **Responsive:** Touch-swipe enabled; `scroll-snap-type: x mandatory` for card locking

---

### 4.5 Individual Event (`/events/[slug]`)

*Reference page: `/events/mock-event`*

---

#### Section 1 — Hero

| Field | Value |
|---|---|
| Format Tag | Virtual Live Stream (gold glowing pill) |
| Headline | Mock Event: The Founders' AMA |
| Date/Time | June 28, 2026 \| 7:00 PM IST |
| Sub-headline | An exclusive, behind-the-scenes deep dive into the Klyth ecosystem roadmap. Learn how to build your initial wealth system step-by-step and ask your most pressing questions live... |
| CTA | RSVP for Free (opens Luma/Tally modal or redirect) |

**Layout:** Split-screen — text left, cover image right; text slides in from left, image scales 110%→100% on load  
**Responsive:** Stack vertically — image top, then tag, headline, sub-headline, CTA; center-align

---

#### Section 2 — What You'll Learn

| Eyebrow | The Agenda |
| Headline | Why you need to be in this room. |
| Intro | "We are stripping away the fluff. This 60-minute session is purely focused on actionable systems..." |

**Three points:**
1. The Ecosystem Roadmap — Exclusive first look at the Klyth app and behavioral engine
2. Building Your First Wealth System — From zero to automated financial defense in 30 days
3. Unfiltered Q&A — Direct answers from founders and mentors

**UI:** Custom glowing checkmark icons (not bullets); each point in a subtle glassmorphic container; staggered cascade on scroll (150ms delay between each)

---

#### Section 3 — Speakers

| Eyebrow | The Hosts |
| Headline | Learn from the builders. |

| Speaker | Name | Credential |
|---|---|---|
| 1 | Klyth Founding Team | Vision, Product, and Technical Execution |
| 2 | Guest Creator & Industry Mentor | Top-tier Finance Influencer & Market Strategist |

**UI:** 2-col CSS grid; circular or rounded-square avatars with inner shadow; hover: image zoom +5%, credential highlights

---

#### Section 4 — Sticky RSVP Bar

**Content:**
- Left: "Mock Event: The Founders' AMA | June 28, 7:00 PM IST"
- Right: "RSVP Now" button

**Behavior:**
- Hidden while Hero CTA button is visible on screen (IntersectionObserver)
- Slides up from bottom after user scrolls past Hero CTA
- `position: fixed; bottom: 0; width: 100%`; glassmorphism; 1px top border; high z-index
- **Mobile:** Hide event title/date text; full-width "RSVP Now" button only

---

### 4.6 Campus Chapters (`/campus`)

---

#### Section 1 — Hero

| Field | Content |
|---|---|
| Eyebrow | Grassroots Growth |
| Headline | Bring Klyth to Your Campus. |
| Sub-headline | We are building a decentralized movement to rewire how an entire generation views money. Become the financial catalyst at your university. The Klyth Campus Chapters are almost here. |

**UI:** 70vh, all text centered; "Rise and Glow" entrance (headline rises from mask, sweeping highlight glides across); abstract node network background  
**Responsive:** `min-h-[50vh]`; scale down headline; simplify node network

---

#### Section 2 — Coming Soon Teaser

| Eyebrow | Under Construction |
| Headline | We are designing the ultimate student leadership experience. |

**Body:** "We are currently finalizing the blueprint... We are looking for visionaries..."

**Three sneak peek cards:**

| Perk | Description |
|---|---|
| Funded Campus Events | Official Klyth backing to host workshops and AMAs on campus |
| Exclusive Network Access | Direct mentorship from founding team, industry leaders, top finance creators |
| Leadership & Upward Mobility | Real-world experience, resume boost, beta access, ambassador-only perks |

**UI:** Glassmorphic cards, "locked/frosted" visual state with padlock icon or "In Development" pill (`--klyth-platinum`); hover clears frost, card elevates, glow emanates  
**Responsive:** Vertical card stack; disable hover-defrost; static "In Development" badge

---

#### Section 3 — Apply Now

| Eyebrow | The Alpha Phase |
| Headline | Don't wait for the official launch. Claim your campus today. |
| Body | "Want to skip the line? We are opening up a secret backdoor..." |
| CTA | Drop us an email (hello@klyth.in) |

**Button action:** `mailto:hello@klyth.in?subject=Klyth%20Campus%20Chapter%20-%20Early%20Application`  

**Copy to clipboard:** Text snippet "hello@klyth.in" below button; on click copies to clipboard, briefly shows "Copied! ✓" then reverts  
**Attention pulse:** Button breathing animation (±2% scale loop)  
**UI:** Premium floating container with distinct gradient border; button + copy email stacked vertically on mobile

---

### 4.7 Join (`/join`)

> ⚠️ **No navbar. No footer.** Locked conversion funnel only.

**Layout:** Full viewport (`100vh`) background; centered glassmorphic container split into 2 columns (desktop)

---

#### Left Column — Value Proposition

| Field | Content |
|---|---|
| Headline | Step into the Ecosystem. |
| Sub-headline | The era of financial anxiety is over. Secure your spot at the forefront of a generation rewiring how they build wealth. |

**Benefits checklist** (custom glowing checkmark icons, not bullets):

| Benefit | Description |
|---|---|
| Priority App Beta Access | First to experience the Klyth app before public launch |
| VIP Event Invites | Early-access RSVPs to closed-door workshops and AMAs |
| The Financial Rewiring Newsletter | Bite-sized, actionable financial systems weekly |
| Day-One Community Entry | Priority access to closed-door peer forums |
| Priority Cohort Selection | Skip waitlist for 30-day financial action sprints |

**Animations:** Cascade in on page load — Headline → Sub-headline → 5 benefits (100ms delay each); key phrases like "Jump the line" / "Zero fluff" in slightly brighter text

---

#### Right Column — Form: Step 1

**Fields:**
- First Name
- Primary Email Address
- Checkbox (required): "I agree to receive the Klyth newsletter, event invites, and product updates, and I accept the [Terms of Service] and [Privacy Policy]."
  - TOS links to `/terms` (new tab)
  - Privacy links to `/privacy` (new tab)
  - Links: underline or `--klyth-olive` accent color

**CTA:** "Unlock Access"

**Logic:**
- Button disabled + `cursor: not-allowed` until checkbox is checked
- On check: button smoothly transitions to full olive active state
- On click: button shows spinning loader immediately
- Client-side validate → POST to DB/waitlist provider → no page reload
- Custom checkbox: fills olive, cream checkmark; legal text 12px muted

---

#### Right Column — Step 2 (Post-Submit, same container)

**Transition:** Step 1 slides out left (opacity 0); Step 2 slides in from right

| Field | Content |
|---|---|
| Confirmation | You're in. Your spot is secured. (animated SVG checkmark) |
| Sub-headline | To help us hyper-personalize your early access roadmap, tell us a bit about your current focus. |
| Question | What is your #1 financial goal right now? |

**Goal options (glassmorphic toggle cards):**
1. Building an emergency fund from scratch
2. Making my first real investment
3. Managing and clearing debt
4. Scaling a startup, side-hustle, or business
5. Automating my monthly budget

**CTA:** "Save My Profile & Finish"

**On success:** Right column swaps to final state — massive glowing checkmark + "Welcome to Klyth. Keep an eye on your inbox."

**Responsive (< 1024px):** Stack vertically — Headline → Sub-headline → Form → Benefits Checklist (benefits move below form as final persuasion). Ensure form inputs are positioned so mobile keyboard doesn't cover the CTA button.

---

### 4.8 FAQ (`/faq`)

---

#### Section 1 — Hero

| Field | Content |
|---|---|
| Headline | Got Questions? We've Got Answers. |
| Sub-headline | Everything you need to know about the Klyth ecosystem, the upcoming app, and how we are rewiring financial growth for a new generation. |

**UI:** Compact 40vh hero; "Soft Drop" entrance (headline fades in, drops from slightly above over 600ms); user can see first FAQ items without scrolling

---

#### Section 2 — Accordion

| Eyebrow | The Details |
| Headline | Frequently Asked Questions |

**Questions & Answers:**

| # | Category | Q | A |
|---|---|---|---|
| 1 | The App | When does the Klyth app officially launch? | "We are currently in closed beta... By joining the ecosystem today, you guarantee your spot at the front of the line..." |
| 2 | Pricing & Access | Is Klyth free to use? | "Joining the community, newsletter, and most events are free. The app will have a free tier plus premium cohort sprints." |
| 3 | Value Proposition | How is this different from watching YouTube finance videos? | "YouTube = one-size-fits-all. Klyth = hyper-personalized system with gamified habits, peer accountability, and execution roadmaps." |
| 4 | Live Events | Do I need to be a finance expert to attend? | "Absolutely not. Built for beginners, students, and early-career professionals. Zero Wall Street jargon." |
| 5 | Security & Privacy | How do you handle my personal data? | "We don't sell data. Information is encrypted and used strictly to improve your experience." |

**UI/Animation:**
- Single centered column, max-width 800px / 65ch
- Each question: frosted glass rectangle, 1px border, `+` or chevron icon right-aligned
- **Hover:** Border glows `--klyth-olive`
- **Open animation:** Smooth `max-height` CSS transition (no snap); `+` rotates 45° to `×` (or chevron flips 180°); answer text fades in over 300ms
- **Responsive:** Full-width tap targets (entire card, not just icon)

---

#### Section 3 — Still Need Help?

| Headline | Still can't find what you're looking for? |
| Body | We are here to help you navigate the ecosystem. Reach out to our team and we'll get back to you with the clarity you need. |
| CTA | Contact Support → `/contact` |

**UI:** Separated by generous vertical space; soft highlight container; button lifts + shadow + arrow shifts right on hover

---

### 4.9 About (`/about`)

**Aesthetic:** Slightly darker, more cinematic than rest of site. "Redacted/Locked" style for coming-soon sections (heavy frosted glass + shifting internal gradient, NOT plain gray placeholders)

---

#### Section 1 — Hero

| Field | Content |
|---|---|
| Headline | Built by the generation we are solving for. |
| Sub-headline | We aren't Wall Street executives or traditional bankers. We are a team of technologists, designers, and builders who experienced the exact same financial anxiety you did—and decided to engineer a way out of it. |

**UI:** 60–70vh; text centered; "Text Reveal" entrance (headline scales 105%→100% over 1s); abstract topographical map or interlocking geometric lines background (very faint)

---

#### Section 2 — Origin Story (Teaser)

| Eyebrow | The Catalyst |
| Headline | The Blueprint is Loading... |
| Tag | Documenting our journey |

**Body:** "Klyth was not born in a boardroom. It was born out of shared frustration... We are currently documenting the full, unfiltered story..."  
**Subtext:** "The full origin documentary and founding manifesto will be unlocked here shortly."

**UI:** Center-aligned, max 70ch; frosted glass cinematic placeholder below text (blurry image behind frost); hover reveals faint loading ring or pulsing play button

---

#### Section 3 — Core Team (Teaser)

| Eyebrow | The Builders |
| Headline | A synergy of vision, design, and code. |

**Three team cards (3-column grid):**

| Card | Role | Detail |
|---|---|---|
| 1 — The Vision | Visionary Leadership & Strategy | Architecting the movement, business model, and mission |
| 2 — The Interface | Product, UI & UX Design | Apple/Notion-level aesthetic and intuitive user journeys |
| 3 — The Engine | Technical & Full-Stack Execution | Secure, scalable, gamified backend |

**UI:** Abstract 3D shape per card instead of headshots (glowing sphere / floating glass pane / geometric cube); "Identity Locked" / "Revealing Soon" pill badge on each; hover: shape slowly rotates/levitates, card border glows  
**Responsive:** Single vertical stack

---

#### Section 4 — Mentorship & Backing (Teaser)

| Eyebrow | The Support System |
| Headline | Guided by the best in the industry. |

**Three backing highlights:**
1. Startup Accelerators — Elite high-growth tech cohorts
2. Tech Leadership Mentorship — Executives from global tech giants (incl. Microsoft Startups)
3. Industry Vetting — SEBI-registered advisors and fintech founders

**UI:** Split-screen — text left, 2×2 "Placeholder Logo Boxes" right (dark squares with shifting gradients + faint padlock icons); cursor spotlight tracks over logo grid; hover illuminates padlocks  
**Responsive:** Stack vertically; horizontal swipeable row or 2-col grid for logo boxes

---

### 4.10 Contact (`/contact`)

**Layout:** Split-screen — Left: Native form; Right: Directory

---

#### Section 1 — Hero

| Headline | Let's Talk. |
| Sub-headline | Whether you have a question about the ecosystem, want to partner with us, or just want to say hi—we are here for it. |

**UI:** Compact 30–40vh; "Soft Drop" entrance; center-aligned; user sees form immediately

---

#### Section 2 — Left Column: Contact Form

| Eyebrow | Send a Message |

**Fields:**

| Field | Required |
|---|---|
| First Name | Yes |
| Last Name | No |
| Email Address | Yes |
| Phone Number | No |
| How can we help? (textarea) | Yes |

**CTA:** "Send Message"  
**Footer text (12px, muted gray):** "By submitting this form, you agree to our [Terms of Service] and acknowledge our [Privacy Policy]." (both link to respective pages, open new tab)

**UI/Logic:**
- Floating labels (scale down to top-left on focus)
- Focus border: `--klyth-olive` glow
- Textarea: resizable vertically, min-height set
- Button: loading spinner on click
- Client-side validation → POST to backend → no page reload
- **Success state:** Form fades out; "Message Sent. We'll be in touch shortly." + green checkmark fades in
- **Auto-responder email triggered:**
  - Subject: `Message received. We're on it.`
  - Body: `Hi [First Name], Thanks for reaching out to Klyth. This is just a quick note to let you know we've received your message. Our team will get back to you as soon as possible. — The Klyth Team`

---

#### Section 3 — Right Column: Directory

| Eyebrow | Direct Routing |
| Headline | Skip the queue. Reach the right desk. |

**Contact emails** (each with "Copy to Clipboard" icon — on click shows "Copied! ✓"):

| Purpose | Email |
|---|---|
| Support & General Queries | hello@klyth.in |
| Partnerships & Creators | partnerships@klyth.in |
| Press & Media | founders@klyth.in |
| Careers | careers@klyth.in |
| Legal | legal@klyth.in |

| Eyebrow | Headquarters |
| Address | Lohegaon, Pune – 411047, India |

| Eyebrow | The Community |
| Instagram | @klyth.in → https://www.instagram.com/klyth.in/ |
| X (Twitter) | @klythhq → https://x.com/klythhq |
| LinkedIn | Klyth → https://www.linkedin.com/company/klyth |

**UI:** Bento-style or divider-separated blocks; social icons glow with platform brand colors on hover; email addresses in bold/distinct weight  
**Responsive:** Stack vertically — Hero → Form → Directory

---

### 4.11 Privacy Policy (`/privacy`)

**Layout:** 2-column sticky TOC (desktop)
- Left 25%: Sticky table of contents — highlights current section via IntersectionObserver
- Right 75%: Legal text, max-width 75ch, line-height 1.6–1.8
- TOC click: smooth scroll to section
- **Mobile (< 1024px):** Hide left sidebar; show collapsible "Jump to Section" dropdown at top

**Typography:** Inter only (no Playfair); high legibility, generous spacing

**Last Updated:** June 2026

**Sections:**
1. Introduction
2. Information We Collect (A: Provided by user; B: Collected automatically)
3. How We Use Your Information
4. How We Share Your Information
5. Data Retention
6. Data Security
7. Your Data Rights & Choices
8. Third-Party Links
9. Children's Privacy
10. Changes to this Privacy Policy
11. Grievance Officer & Contact Information — `legal@klyth.in`, Lohegaon, Pune – 411047, India

*(Full legal text as specified in source document)*

---

### 4.12 Terms of Service (`/terms`)

**Layout:** Same 2-column sticky TOC structure as `/privacy`
- TOC links use `scroll-behavior: smooth`
- **Mobile:** Collapsible "Jump to Section" dropdown

**Typography:** Inter only; line-height 1.6–1.8; max reading width 75ch

**Last Updated:** June 2026

**Sections:**
1. Nature of the Services (Financial Disclaimer) — ⚠️ Critical: Klyth is educational only, not investment advice
2. Eligibility and Account Registration (18+ requirement)
3. User Conduct and Acceptable Use
4. Intellectual Property Rights
5. User-Generated Content (UGC)
6. Live Events, Cohorts, and Campus Chapters
7. Payments, Subscriptions, and Refunds (Future-proofing clause)
8. Disclaimers of Warranties (AS-IS)
9. Limitation of Liability
10. Indemnification
11. Modifications to the Services and Terms
12. Governing Law and Dispute Resolution (Pune, India courts)
13. Severability and Waiver
14. Contact Information — `legal@klyth.in`

*(Full legal text as specified in source document)*

---

## 5. Page Visibility Rules

### Navbar & Footer

| Page | Navbar | Footer | Footer Top Hook (CTA) |
|---|---|---|---|
| `/` | ✅ | ✅ | ✅ Show |
| `/mission` | ✅ | ✅ | ✅ Show |
| `/ecosystem` | ✅ | ✅ | ✅ Show |
| `/events` | ✅ | ✅ | ❌ Hide |
| `/events/[slug]` | ✅ | ✅ | ❌ Hide |
| `/campus` | ✅ | ✅ | ✅ Show |
| `/join` | ❌ | ❌ | N/A |
| `/faq` | ✅ | ✅ | ✅ Show |
| `/about` | ✅ | ✅ | ✅ Show |
| `/contact` | ✅ | ✅ | ❌ Hide |
| `/privacy` | ✅ | ✅ | ✅ Show |
| `/terms` | ✅ | ✅ | ✅ Show |

---

*End of PRD — Klyth v1.0*