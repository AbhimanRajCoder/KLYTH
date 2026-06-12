# Klyth Design System

> Version 1.0
> Official Brand Design Documentation

---

# Introduction

The Klyth Design System serves as the single source of truth for all visual design decisions across the Klyth ecosystem.

This document defines the official visual language, color architecture, typography hierarchy, component behavior, material principles, and implementation standards required to maintain consistency across:

* Website
* Web Application
* Mobile Application
* Marketing Assets
* Pitch Decks
* Social Media
* Internal Design Resources

The Klyth aesthetic bridges **Old Money heritage** with **Hyper-Modern Technology**.

It relies on:

* Extreme minimalism
* Strong visual hierarchy
* Premium editorial typography
* Deep dark foundations
* Strategic accent usage
* Surgical use of gamification

No additional colors, fonts, shadows, or visual systems should be introduced without updating this document.

---

# 1. Color System

## Design Philosophy

The Klyth color system intentionally restricts itself to only **8 core colors**.

This limitation creates:

* Brand consistency
* Premium perception
* Reduced visual noise
* Better accessibility
* Stronger recognition

The visual identity is built on:

* Dark foundations
* Soft premium typography
* Earth-inspired action colors
* Luxury metallic reward colors

---

# 1.1 Backgrounds & Surfaces

These colors establish the architectural foundation of every screen.

| Category        | Color Name     | Hex     |
| --------------- | -------------- | ------- |
| Main Background | Matte Charcoal | #121212 |
| Surface / Card  | Soft Obsidian  | #1C1C1E |

### Matte Charcoal (#121212)

Purpose:

* Primary page background
* Application shell
* Landing page canvas
* Full-screen sections

Characteristics:

* Deep
* Neutral
* Non-distracting
* Premium dark foundation

---

### Soft Obsidian (#1C1C1E)

Purpose:

* Glass cards
* Floating containers
* Navigation bars
* Modals
* Popups

Characteristics:

* Slight elevation
* Softer than charcoal
* Maintains hierarchy

---

# 1.2 Typography & Foreground

Pure white is forbidden.

Klyth uses a premium cream tone to simulate luxury paper and reduce eye fatigue.

| Category       | Color Name      | Value                 |
| -------------- | --------------- | --------------------- |
| Primary Text   | Pearl Cream     | #F5F2EB               |
| Secondary Text | Pearl Cream 70% | rgba(245,242,235,0.7) |
| Disabled Text  | Pearl Cream 40% | rgba(245,242,235,0.4) |

### Primary Text

Used for:

* Headlines
* Body copy
* Active icons
* Navigation

---

### Secondary Text

Used for:

* Metadata
* Descriptions
* Captions
* Sub-headlines

---

### Disabled Text

Used for:

* Disabled actions
* Archived content
* Inactive states

---

# 1.3 Primary Brand Core

## Matte Olive

| Category      | Hex     |
| ------------- | ------- |
| Primary Brand | #4A5D23 |

Purpose:

* Primary CTA buttons
* Active navigation
* Core branding
* Focus states

Characteristics:

* Grounded
* Mature
* Premium
* Trustworthy

Usage Rule:

Never dilute Matte Olive.

Use only at full opacity for action-driving elements.

---

# 1.4 Secondary Accents

These colors represent achievement, rewards, progression, and premium status.

---

## Energetic Gold

| Category      | Hex     |
| ------------- | ------- |
| Accent Tier 1 | #E2B842 |

Purpose:

* Achievement states
* Premium rewards
* VIP status
* Progress completion
* Success animations

---

### Official Metallic Gradient

Never use flat gold for large surfaces.

```css
linear-gradient(
  135deg,
  #EDCF72 0%,
  #E2B842 50%,
  #CFA536 100%
)
```

---

## Platinum

| Category      | Hex     |
| ------------- | ------- |
| Accent Tier 2 | #E5E4E2 |

Purpose:

* Premium badges
* Locked features
* Hardware-style elements
* Secondary rewards

Rule:

Never use Platinum for body text.

---

# 1.5 System Feedback

## Oxblood

| Category        | Hex     |
| --------------- | ------- |
| Error / Warning | #8E3533 |

Purpose:

* Form validation
* Destructive actions
* Warnings
* Critical alerts

Characteristics:

* Mature
* Serious
* Non-generic

---

# 1.6 Structural Elements

## Ghost Gray

| Category           | Hex     |
| ------------------ | ------- |
| Borders & Dividers | #2C2C2E |

Purpose:

* Card outlines
* Separators
* Progress tracks
* Navigation borders

Characteristics:

* Subtle
* Invisible architecture

---

# 2. Material Rules

## Glassmorphism Standard

All elevated surfaces must follow:

```css
background: rgba(28, 28, 30, 0.6);
backdrop-filter: blur(20px);
border: 1px solid #2C2C2E;
```

Purpose:

* Consistent visual identity
* Depth without clutter

---

## Shadow System

Traditional black shadows are prohibited.

Every element should cast a shadow using its own color.

Example:

```css
box-shadow:
0 0 30px rgba(74,93,35,0.30);
```

Examples:

* Olive button → Olive shadow
* Gold badge → Gold glow
* Oxblood alert → Oxblood shadow

---

# 3. Typography System

## Design Philosophy

Klyth uses a strict two-font architecture.

The visual tension between these fonts creates the signature Klyth identity.

| Role                 | Font             |
| -------------------- | ---------------- |
| Editorial Authority  | Playfair Display |
| Functional Interface | Inter            |

No additional font families are permitted.

---

# 3.1 Playfair Display

## The Heritage Authority

Playfair Display represents:

* Wealth
* Exclusivity
* Legacy
* Editorial luxury

Use only when visual impact is required.

---

### Approved Usage

* Hero Headlines
* Section Titles
* Pull Quotes
* Marketing Covers
* Landing Pages

---

### Prohibited Usage

* Body Text
* Navigation
* Buttons
* Inputs
* Forms
* Dashboards
* Data Tables

---

# 3.2 Inter

## The Invisible Engine

Inter powers the entire user experience.

Characteristics:

* Frictionless
* Clinical
* Modern
* Highly legible

---

### Approved Usage

* Body copy
* Navigation
* Buttons
* Forms
* Inputs
* Data tables
* Financial metrics
* Legal content

---

# 4. Typography Hierarchy

## Hero Headline (H1)

| Property | Value             |
| -------- | ----------------- |
| Font     | Playfair Display  |
| Weight   | Bold              |
| Purpose  | Primary page hook |

---

## Section Headline (H2)

| Property | Value              |
| -------- | ------------------ |
| Font     | Playfair Display   |
| Weight   | SemiBold           |
| Purpose  | Section separation |

---

## Eyebrow Label

| Property  | Value     |
| --------- | --------- |
| Font      | Inter     |
| Weight    | Bold      |
| Transform | Uppercase |
| Tracking  | Wide      |

Example:

```
THE STATUS QUO
THE KLYTH WAY
THE ECOSYSTEM
```

---

## Body Text

| Property    | Value |
| ----------- | ----- |
| Font        | Inter |
| Weight      | 400   |
| Line Height | 1.6   |

---

## CTA Buttons

| Property | Value |
| -------- | ----- |
| Font     | Inter |
| Weight   | 600   |

---

## Financial Metrics

| Property | Value   |
| -------- | ------- |
| Font     | Inter   |
| Weight   | 600–700 |

Rule:

Never use Playfair Display for numbers.

---

## Legal Content

| Property    | Value   |
| ----------- | ------- |
| Font        | Inter   |
| Line Height | 1.6–1.8 |
| Max Width   | 75ch    |

Purpose:

Maximum readability.

---

# 5. Global CSS Variables

```css
:root {

  /* Colors */

  --klyth-charcoal: #121212;
  --klyth-obsidian: #1C1C1E;
  --klyth-cream: #F5F2EB;
  --klyth-ghost: #2C2C2E;
  --klyth-olive: #4A5D23;
  --klyth-gold: #E2B842;
  --klyth-platinum: #E5E4E2;
  --klyth-oxblood: #8E3533;

  /* Typography */

  --klyth-font-serif: 'Playfair Display', serif;
  --klyth-font-sans: 'Inter', sans-serif;
}
```

---

# 6. Accessibility Standards

## Contrast

Minimum:

* AA compliance required
* AAA preferred where possible

---

## Typography

Minimum body size:

```css
16px
```

Recommended:

```css
18px
```

---

## Touch Targets

Minimum:

```css
44px × 44px
```

---

## Focus States

Interactive elements must always include:

* Visible focus ring
* Olive accent
* Keyboard accessibility

---

# 7. Design Principles

Every screen, interaction, and marketing asset should satisfy these principles:

### Timeless over Trendy

Avoid temporary design trends.

---

### Premium over Loud

Luxury comes from restraint.

---

### Functional over Decorative

Every visual element must serve a purpose.

---

### Editorial over Corporate

Think premium magazine.

Not enterprise dashboard.

---

### Confidence over Complexity

The interface should feel inevitable.

Not overwhelming.

---

# Final Rule

When in doubt:

Remove elements.

Increase spacing.

Reduce color usage.

Trust typography.

Let the darkness breathe.
