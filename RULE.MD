# Klyth — RULE.md
**Derived from:** PRD v1.0  
**Last Updated:** June 2026  
**Purpose:** Single source of truth for all design, development, and content decisions across the Klyth marketing site.

---

## TABLE OF CONTENTS

1. [Color System](#1-color-system)
2. [Typography](#2-typography)
3. [Glassmorphism Standard](#3-glassmorphism-standard)
4. [Component Rules](#4-component-rules)
5. [Animation Rules](#5-animation-rules)
6. [Layout & Responsiveness](#6-layout--responsiveness)
7. [Navbar Rules](#7-navbar-rules)
8. [Footer Rules](#8-footer-rules)
9. [Page-Level Rules](#9-page-level-rules)
10. [Page Visibility Matrix](#10-page-visibility-matrix)
11. [Copy & Content Rules](#11-copy--content-rules)
12. [Tech Stack Rules](#12-tech-stack-rules)

---


Architecture & Structure:

Create reusable, scalable, and maintainable component-based architecture.
Separate all UI sections into dedicated components.
Implement a fully modular folder structure with clear separation of concerns.
Follow industry-standard Next.js/React architecture and best practices.
Ensure components are highly reusable and configurable through props.

Development Standards:

Use TypeScript throughout the project.
Implement strict typing for all components, hooks, API responses, and utilities.
Eliminate duplicated code and extract reusable logic.
Follow SOLID principles and clean architecture patterns.
Ensure proper error handling and loading states.
Add meaningful comments only where necessary.
Use consistent naming conventions across the codebase.

UI/UX Requirements:

Match the design specifications from design.md.
Maintain visual consistency across all pages.
Use proper spacing, typography hierarchy, and responsive layouts.
Ensure excellent mobile, tablet, and desktop responsiveness.
Build modern SaaS-quality interfaces with polished interactions.

Performance:

Optimize rendering and component reusability.
Implement lazy loading where appropriate.
Minimize unnecessary re-renders.
Follow Next.js performance best practices.'

Output Requirements:

First provide the proposed folder structure.
Then generate the required layout architecture.
Then generate reusable UI components.
Then generate feature-specific components.
Finally implement pages using the reusable architecture.

The final codebase should be production-ready, scalable, maintainable, and structured for long-term growth.







## 1. Color System

### 1.1 CSS Variables (define in `:root` before any component)

```css
:root {
  --klyth-charcoal:  #121212; /* Main canvas / page background */
  --klyth-obsidian:  #1C1C1E; /* Glass card base color          */
  --klyth-cream:     #F5F2EB; /* All primary text               */
  --klyth-ghost:     #2C2C2E; /* Borders, dividers              */
  --klyth-olive:     #4A5D23; /* Primary CTAs, active states    */
  --klyth-gold:      #E2B842; /* Tier 1 rewards, pulses, badges */
  --klyth-platinum:  #E5E4E2; /* Tier 2 hardware, locked UI     */
  --klyth-oxblood:   #8E3533; /* Errors, validation warnings    */
}
```

### 1.2 Color Usage Rules

| Rule | Detail |
|---|---|
| Page background | Always `--klyth-charcoal` |
| Default text | Always `--klyth-cream` |
| Secondary/sub-text | `--klyth-cream` at 70% opacity |
| CTAs | Background `--klyth-olive` |
| Errors / invalid fields | `--klyth-oxblood` |
| "In development" badge | Border `--klyth-gold` + subtle glow |
| "In beta" badge | Border `--klyth-olive` + subtle glow |
| "Locked / Coming soon" | `--klyth-platinum` elements |
| No new colors | Do not introduce any hex, rgb, or named color outside this 8-color system |
| No new opacities | Do not use opacity values outside those explicitly defined per component in this document |

---

## 2. Typography

### 2.1 Font Import

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
```

### 2.2 CSS Variables

```css
:root {
  --klyth-font-serif: 'Playfair Display', serif;
  --klyth-font-sans:  'Inter', sans-serif;
}

body {
  font-family: var(--klyth-font-sans);
  color: var(--klyth-cream);
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--klyth-font-serif);
  line-height: 1.2;
}
```

### 2.3 Type Scale Rules

| Element | Font | Weight | Notes |
|---|---|---|---|
| Hero H1 | Playfair Display | 700 Bold | Massive; center-aligned on desktop |
| Section H2 | Playfair Display | 700 Bold | Commands authority |
| Pull-quotes | Playfair Display | 400 Italic | Massive; center-aligned |
| Navbar links | Inter | 500 Medium | — |
| Eyebrow / label text | Inter | 600 Bold | Uppercase; `letter-spacing: widest` |
| Buttons (CTAs) | Inter | 600 SemiBold | — |
| Format tags / pills | Inter | 500 Medium | 12–14px |
| Body text | Inter | 400 Regular | — |
| Stats / numbers | Inter | 600 Bold | Never use Playfair for numbers |
| Marquee text | Inter | 500 Medium | All-caps |
| Legal pages (`/privacy`, `/terms`) | Inter only | varies | No Playfair on legal pages at all |

---

## 3. Glassmorphism Standard

Every card, container, and modal across the entire site uses these exact values — no exceptions.

| Property | Value |
|---|---|
| Background | `--klyth-obsidian` at 60% opacity |
| Blur | `backdrop-blur-md` (Tailwind) or `backdrop-filter: blur(12px)` (CSS) |
| Border | `1px solid var(--klyth-ghost)` |

> ⚠️ Do not deviate from these three values on any card or container. Custom blur amounts or opacity values are not permitted.

---

## 4. Component Rules

### 4.1 Primary CTA Buttons

| Property | Value |
|---|---|
| Shape | Solid pill (`border-radius: 9999px`) |
| Fill | `--klyth-olive` |
| Hover | `box-shadow` with olive at 30% opacity (blurry glow lift) |
| Font | Inter SemiBold 600 |
| Min tap height (mobile) | 48px |

### 4.2 Disabled / Ghost Buttons

| Property | Value |
|---|---|
| Background | None (transparent) |
| Border | `1px solid var(--klyth-ghost)` |
| Text | 40% opacity |
| Cursor | `not-allowed` |

### 4.3 Badge Pills

| Badge | Style |
|---|---|
| "In development" | Pill border `--klyth-gold`; subtle gold glow |
| "In beta" | Pill border `--klyth-olive`; subtle olive glow |
| "Locked / Coming soon" | `--klyth-platinum` elements; padlock icon |

### 4.4 Form Fields

| State | Style |
|---|---|
| Active / focused border | `--klyth-olive` glow |
| Invalid / error border | `--klyth-oxblood` |
| Checkbox (checked) | Fill `--klyth-olive`; checkmark in `--klyth-cream` |
| Label behavior | Floating — smoothly scales down and floats top-left on focus |

### 4.5 Icons

- Use **Font Awesome** exclusively for: socials, chevrons, arrows, `+`, checkmarks, etc.
- Custom glowing checkmark icons on `/join` benefit checklist and `/events/[slug]` agenda — these are not Font Awesome; style per-component.

### 4.6 Accordion (FAQ)

| State | Behavior |
|---|---|
| Default | Frosted glass rectangle, 1px border, `+` icon right-aligned |
| Hover | Border glows `--klyth-olive` |
| Open | Smooth `max-height` CSS transition; `+` rotates 45° to `×` (or chevron flips 180°); answer fades in over 300ms |
| Mobile tap target | Entire card, not just icon |

### 4.7 Event Cards ("Klyth Lift")

Standard hover interaction for all event cards:
- Card elevates in 3D
- Soft glow tracks cursor behind glass
- Cover image scales +3%

### 4.8 Copy-to-Clipboard Pattern

Used on `/campus` and `/contact`:
- Show email address as text
- Clipboard icon button beside it
- On click: text briefly changes to "Copied! ✓" then reverts to original email

---

## 5. Animation Rules

### 5.1 Global Entrance Types

| Name | Description | Where Used |
|---|---|---|
| Mask Reveal | Words slide upward from invisible line; staggered | Home Hero, Mission Hero |
| Blur-In | Headline starts blurred + slightly scaled up; sharpens into focus over 800ms | Ecosystem Hero |
| Soft Drop | Headline fades in, drops from slightly above over 600ms | FAQ Hero, Contact Hero |
| Text Reveal (scale) | Headline scales 105%→100% over 1s | About Hero |
| Rise and Glow | Headline rises from mask; sweeping highlight glides across text | Campus Hero |
| Fade-in-up | Opacity 0→1 + translateY downward; trigger on IntersectionObserver | Fallback / mobile |
| Card Cascade | Cards scale 80%→100% sequentially on scroll | Home Section 3, /join benefits |

### 5.2 Specific Animation Rules

| Component | Rule |
|---|---|
| Navbar link hover | Thin `--klyth-gold` underline expands outward from word center; retracts on un-hover |
| Magnetic cursor (desktop only) | Home Hero CTA button gently pulls toward cursor. **Disabled on all touch/mobile devices.** |
| Sticky scroll (Home Section 2) | Left column sticks; right cards scroll. **Disabled on screens < 1024px.** |
| Card scrubbing | Center-of-screen card = 100% opacity; others dim to 30% + slight shrink |
| 3D tilt on cards | Card tilts toward mouse on hover. **Disabled on touch devices.** |
| Hover spotlight | Soft circular light follows cursor behind glass cards. **Disabled on touch devices.** |
| Number count-up | Stats count from 0 on scroll-enter, ease-out |
| Marquee | Infinite right-to-left loop; content: "Stop Surviving. Start Scaling. • The Money Taboo is Broken. • Financial Growth, Rewired." |
| Portal zoom | CTA containers scale up slowly on scroll-enter. **Replaced with fade-in on mobile.** |
| Button breathing | Primary CTAs pulse ±2% scale on loop (attention signal) |
| Sticky RSVP bar | Hidden while Hero CTA is on screen (IntersectionObserver); slides up from bottom after Hero CTA exits viewport |
| Flip cards (Mission) | 180° Y-axis flip on hover/scroll. **On touch: static layout — "They gave us" in muted/crossed-out style; "We needed" below in bold box.** |
| Page transition | Optional Framer Motion slide-left or wipe on `/mission` → `/ecosystem` CTA |
| Mobile hamburger overlay | Full-screen frosted glass; links cascade fade-in-up one by one; "Join" button full-width at bottom |
| Join page Step 1 → Step 2 | Step 1 slides out left (opacity 0); Step 2 slides in from right |
| Campus frost defrost | Hover clears frost on locked cards, card elevates, glow emanates. **Disabled on touch.** |
| Ecosystem Spine pulse | Faint 1px `--klyth-ghost` vertical line; `--klyth-gold` pulse travels down it as user scrolls |
| Ecosystem Pillar 3 ripple | Expanding concentric rings; speeds up as user scrolls over section |
| Ecosystem Pillar 5 timeline | Fills step-by-step as user scrolls through text |
| Ecosystem Pillar 6 bubbles | Chat bubbles drift; hover pauses drift, snaps to focus, expands |
| Ecosystem Pillar 7 cards | Cards float upward in infinite slow loop; hover pauses |
| Ecosystem Pillar 4 bg shift | Background transitions from `--klyth-charcoal` to `#000000` as user hits center of section |
| About Section 2 placeholder | Hover reveals faint loading ring or pulsing play button behind frosted cinematic placeholder |
| About Section 3 shapes | Abstract 3D shape per team card slowly rotates/levitates on hover; card border glows |
| About Section 4 logo grid | Cursor spotlight tracks over logo grid; hover illuminates padlock icons |
| Past events archive | Cover images grayscale/30% opacity at rest; hover returns full color + scales up |

---

## 6. Layout & Responsiveness

### 6.1 Breakpoints

| Name | Width |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1023px |
| Desktop | ≥ 1024px |

### 6.2 Global Layout Rules

- All page backgrounds: `--klyth-charcoal`
- Hero sections: `100vh` (or `min-h-screen`) on full pages; shorter where specified (e.g. `/faq` hero = 40vh, `/contact` hero = 30–40vh, `/events` hero = 50–60vh)
- Reading-width content (legal pages, FAQ answers, Mission Section 3): max-width `75ch` or `800px`; center-aligned
- No horizontal overflow on any page

### 6.3 Responsive Rules by Component

| Component | Tablet | Mobile |
|---|---|---|
| Navbar center links | Hide | Hide |
| Navbar CTA button | Hide | Hide |
| Navbar | Show hamburger icon | Show hamburger icon |
| Home Hero magnetic cursor | Disable | Disable |
| Home Section 2 sticky scroll | Disable | Disable |
| Home Section 2 cards | Vertical stack + fade-in-up | Vertical stack + fade-in-up |
| Home Section 3 Bento grid | 2-col masonry | Single column |
| Home Section 3 tilt + spotlight | Disable | Disable |
| Home Section 5 fused input | — | Email on top; full-width button below (< 400px) |
| Footer grid | 2×2 grid | Single vertical stack; center bottom bar |
| Mission Section 2 flip cards | — | Static layout (crossed-out / bold box) |
| Mission Section 4 parallax | Disable | Disable |
| Mission Hero | Center-align | Center-align; speed up word animation |
| Ecosystem Hero | Scale down headline; reduce particle count | Same |
| Ecosystem Pillar 3 ripple | — | Simplify |
| Events cards | Single column | Single column |
| Events archive carousel | Touch-swipe; `scroll-snap-type: x mandatory` | Same |
| Individual Event hero | Stack vertically (image top → tag → headline → sub → CTA; center) | Same |
| Individual Event sticky bar | Full bar | Hide title/date; full-width RSVP button only |
| Campus hero | `min-h-[50vh]`; simplify node network | Same |
| Campus locked cards hover | Disable | Disable (static "In Development" badge) |
| Join layout | Vertical stack: Headline → Sub → Form → Benefits | Same |
| Join keyboard | Position form so keyboard does not cover CTA | — |
| About Section 3 | Single vertical stack | Single vertical stack |
| About Section 4 logos | 2-col grid | Horizontal swipeable row or 2-col grid |
| Contact layout | Stack: Hero → Form → Directory | Same |
| Legal TOC | Sticky left sidebar (25%) | Hide sidebar; collapsible "Jump to Section" dropdown at top |

---

## 7. Navbar Rules

**Shown on:** All pages except `/join`

### 7.1 Content

| Zone | Content |
|---|---|
| Left | Klyth logo → links to `/` |
| Center | The Ecosystem (`/ecosystem`) · Events (`/events`) · The Mission (`/mission`) |
| Right | "Join" pill button (`--klyth-olive`) → `/join` |

### 7.2 Scroll Behavior

| Scroll position | Appearance |
|---|---|
| ≤ 20px from top | Fully transparent background |
| > 20px | Glassmorphism standard + 1px bottom border (`--klyth-ghost`) |

### 7.3 Desktop Hover

- Link hover: thin `--klyth-gold` underline expands outward from word center; retracts on un-hover.

### 7.4 Mobile / Hamburger Overlay

- Hamburger icon far right
- On click: full-screen frosted glass overlay
- Links stacked vertically, massively sized
- Cascade fade-in-up animation (one by one)
- "Join" button: full-width, anchored to bottom of overlay

---

## 8. Footer Rules

**Shown on:** All pages except `/join`

### 8.1 Top Hook Section

| Visible on | Hidden on |
|---|---|
| `/`, `/mission`, `/ecosystem`, `/campus`, `/about`, `/faq`, `/privacy`, `/terms` | `/events`, `/events/[slug]`, `/contact` |

- Headline: "Ready to grow differently?"
- CTA: "Step Into the Ecosystem" → `/join`

### 8.2 Main Grid (4-column desktop)

| Col 1 — Brand | Col 2 — Explore | Col 3 — Klyth | Col 4 — Legal |
|---|---|---|---|
| Logo + tagline | The Ecosystem `/ecosystem` | The Mission `/mission` | Privacy Policy `/privacy` |
| Instagram icon | Live Events `/events` | About Us `/about` | Terms of Service `/terms` |
| X (Twitter) icon | Campus Chapters `/campus` | Contact Us `/contact` | |
| LinkedIn icon | | FAQ `/faq` | |
| Email → `mailto:hello@klyth.in` | | | |

- Col 1 gets wider span so tagline does not wrap.

### 8.3 Bottom Bar

| Side | Content |
|---|---|
| Left | © 2026 Klyth. All rights reserved. |
| Right | Built in Pune, India. |

### 8.4 Footer UI Details

- Background: `#000000` (pitch black)
- Top separator: `1px solid var(--klyth-ghost)`
- Link hover: text shifts to full `--klyth-cream` + nudges 2–3px right
- Social icon hover: glow with platform brand colors (Instagram gradient, X white, LinkedIn blue)

---

## 9. Page-Level Rules

### 9.1 Home (`/`)

- Section 2 left column is sticky during card scroll on desktop only.
- Section 3 Bento grid: Pillar 1 card takes ~50% of grid area.
- Section 5 email input and button are fused pill on desktop; split vertically on < 400px screens.
- Stats section: use Inter Bold 600 for numbers — these are the largest text elements on the entire site.
- Marquee copy (exact): *"Stop Surviving. Start Scaling. • The Money Taboo is Broken. • Financial Growth, Rewired."*

### 9.2 Mission (`/mission`)

- Hero text: left-aligned, bottom-left quadrant, dramatic negative space (desktop).
- Scroll indicator: thin vertical line at bottom; slowly grows downward.
- Section 3 pull-quote: Playfair Display Italic; massive; acts as visual break.
- Section 4 parallax: visual moves slower than text on scroll. Disabled on mobile.

### 9.3 Ecosystem (`/ecosystem`)

- Ecosystem Spine (faint `--klyth-ghost` vertical line + `--klyth-gold` scrolling pulse) runs down entire page.
- All 7 pillar sections must maintain identical glassmorphism and hover accent standards.
- Pillar 2 carousel mock events (4 items) listed in PRD Section 4.3 must be used as placeholder data.

### 9.4 Events Hub (`/events`)

- Hero height: 50–60vh so tops of event cards are visible on load.
- "Klyth Lift" hover standard applies to all event cards.
- Past events: "Ah, you missed it." CTA is ghost button with `cursor: not-allowed` and no `<a>` tag.
- Archive: horizontal drag-to-scroll carousel; `scroll-snap-type: x mandatory`.
- Empty state (no upcoming events): wide glassmorphic centered card with muted 3D calendar icon + CTA → `/join`.

### 9.5 Individual Event (`/events/[slug]`)

- Reference slug: `mock-event`.
- Sticky RSVP bar logic: hidden while hero CTA is in viewport (IntersectionObserver); slides up from bottom after hero CTA exits.
- RSVP action: opens Luma or Tally modal, or redirects.

### 9.6 Campus Chapters (`/campus`)

- Email button action: `mailto:hello@klyth.in?subject=Klyth%20Campus%20Chapter%20-%20Early%20Application`
- Copy email snippet shows "Copied! ✓" then reverts.
- Locked card "defrost" on hover: desktop only.

### 9.7 Join (`/join`)

- **No navbar. No footer. No external links except `/terms` and `/privacy` (new tab).**
- Button disabled + `cursor: not-allowed` until checkbox is checked.
- On checkbox check: button smoothly transitions to full olive active state.
- On submit click: button shows spinning loader immediately; client-side validate → POST → no page reload.
- Step 2 goal options are glassmorphic toggle cards (not radio buttons or checkboxes styled generically).
- Final confirmation state: massive glowing checkmark + "Welcome to Klyth. Keep an eye on your inbox."
- Mobile: form inputs must be positioned so the mobile keyboard does not cover the CTA button.

### 9.8 FAQ (`/faq`)

- Max content width: 800px / 65ch; single centered column.
- Each accordion item: entire card is the tap target on mobile.
- "Still Need Help?" section links to `/contact`.

### 9.9 About (`/about`)

- Section aesthetic: slightly darker, more cinematic than rest of site.
- "Coming soon" / locked states must use "Redacted/Locked" style (heavy frosted glass + shifting internal gradient) — **not** plain gray placeholders.
- Team cards use abstract 3D shapes (no real headshots).
- All three team cards carry "Identity Locked / Revealing Soon" pill badge.

### 9.10 Contact (`/contact`)

- Auto-responder email must fire on form submit:
  - Subject: `Message received. We're on it.`
  - Body: `Hi [First Name], Thanks for reaching out to Klyth. This is just a quick note to let you know we've received your message. Our team will get back to you as soon as possible. — The Klyth Team`
- Success state: form fades out; "Message Sent. We'll be in touch shortly." + green checkmark fades in.
- Each email in the directory has a clipboard icon; on click shows "Copied! ✓".
- Social icons glow with platform brand colors on hover.

### 9.11 Privacy Policy (`/privacy`) & Terms of Service (`/terms`)

- **No Playfair Display. Inter only.**
- Body line-height: 1.6–1.8.
- Max reading width: 75ch.
- Desktop: sticky left TOC (25% width); active section highlighted via IntersectionObserver.
- Mobile: left sidebar hidden; collapsible "Jump to Section" dropdown at top.
- TOC clicks: smooth scroll (`scroll-behavior: smooth`).
- Both pages: last updated June 2026.
- `/terms` Section 1: must include financial disclaimer — Klyth is **educational only**, not investment advice.
- `/terms` Section 2: 18+ eligibility requirement must be stated.
- `/terms` Section 12: governing law = Pune, India courts.
- `/privacy` Section 11: Grievance Officer contact = `legal@klyth.in`, Lohegaon, Pune – 411047, India.

---

## 10. Page Visibility Matrix

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

## 11. Copy & Content Rules

### 11.1 Brand Voice

- Direct, ambitious, empathetic. Speaks to financial anxiety without amplifying it.
- "We" = Klyth as a collective movement. "You" = the user/visitor.
- No Wall Street jargon. No generic motivational filler.

### 11.2 Fixed Strings (do not paraphrase)

| Location | Exact String |
|---|---|
| Site tagline | Financial Growth, Rewired. |
| Marquee | Stop Surviving. Start Scaling. • The Money Taboo is Broken. • Financial Growth, Rewired. |
| Footer tagline | Financial Growth, Rewired. |
| Footer copyright | © 2026 Klyth. All rights reserved. |
| Footer credit | Built in Pune, India. |
| Footer CTA headline | Ready to grow differently? |
| Footer CTA button | Step Into the Ecosystem |
| HQ address | Lohegaon, Pune – 411047, India |
| Primary contact | hello@klyth.in |

### 11.3 Email Directory (exact)

| Purpose | Email |
|---|---|
| Support & General | hello@klyth.in |
| Partnerships & Creators | partnerships@klyth.in |
| Press & Media | founders@klyth.in |
| Careers | careers@klyth.in |
| Legal | legal@klyth.in |

### 11.4 Social Links (exact)

| Platform | Handle | URL |
|---|---|---|
| Instagram | @klyth.in | https://www.instagram.com/klyth.in/ |
| X (Twitter) | @klythhq | https://x.com/klythhq |
| LinkedIn | Klyth | https://www.linkedin.com/company/klyth |

---

## 12. Tech Stack Rules

| Concern | Decision |
|---|---|
| Framework | Next.js (SSR + page transitions) |
| Animation | Framer Motion |
| Icons | Font Awesome |
| Fonts | Google Fonts — Playfair Display + Inter (see import above) |
| Forms / Registration | Tally or Luma (external embeds) |
| Email (transactional) | SendGrid / Resend / AWS SES |
| Styling | Tailwind CSS preferred (glassmorphism via `backdrop-blur-md`) |
| Scroll-trigger detection | IntersectionObserver API (native) |
| Cursor effects | Disable all on touch/mobile devices |
| State management | Keep minimal; forms are stateless POST with no page reload |

---

*End of RULE.md — Klyth v1.0*

