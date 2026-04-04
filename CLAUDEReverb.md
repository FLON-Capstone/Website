# Reverb — Claude Code Frontend Instructions

## How to Use This File

This file works in tandem with the **frontend-design skill**. When building any page or component:
1. Read this file for product context, design system tokens, and page specs
2. Apply the frontend-design skill's principles for motion, spatial composition, and aesthetic execution
3. The design system here (colors, type, spacing) is the source of truth — the frontend-design skill governs *how* to execute it with craft and intentionality

The frontend-design skill's "never do" list applies here too: no generic layouts, no predictable component patterns, no cookie-cutter execution. Reverb should feel like something a designer who cares deeply about audio and focus built.

---

## What We're Building

Reverb is an AI-powered audio platform for students and busy professionals. It turns a user's schedule, coursework, and meeting notes into personalized on-demand audio — a smart daily briefing, adaptive study sessions, and a searchable transcript library. Think of it as **"The Daily" podcast, but for your own life.**

The target user is a college student like Maya: perpetually in motion, overwhelmed by fragmented tools, and hungry for something that fits inside the time she already has. The product lives in her AirPods — while getting ready, walking to class, or on the Stairmaster.

---

## Aesthetic Direction

**Core feeling:** Crisp, confident, and alive. Reverb should feel like a product that's sharp enough to be taken seriously but energetic enough to not feel like enterprise software. Clean white space with moments of vivid blue — like a well-designed magazine that suddenly plays sound.

**Tone:** Light mode, editorial, high-contrast. The blue is the voice of the product — it appears on things that matter: active states, CTAs, playback, urgency. Everything else is structured, airy, and precise. Think the clarity of a great editorial site meets the energy of a sports broadcast.

**References to hold in mind:**
- The clean grid discipline of a well-designed editorial site (The Atlantic, Bloomberg Businessweek online)
- The confidence of a sports or media app that knows what it is
- Linear's precision and intentionality, but warmer and less "dev tool"
- The contrast of a conductor's score — black, white, and one arresting color

---

## Design System

### Color Palette
```
--bg-primary: #ffffff           /* primary background — clean white */
--bg-surface: #f5f6f8           /* card/panel surfaces — very light gray */
--bg-elevated: #eef0f4          /* elevated elements, modals, hover trays */
--accent-blue: #2563eb          /* primary accent — vivid royal blue */
--accent-blue-hover: #1d4ed8    /* hover/pressed state of primary blue */
--accent-blue-light: #eff4ff    /* blue tint for backgrounds, tags, chips */
--accent-blue-muted: #93b4f7    /* secondary/disabled blue states */
--text-primary: #0a0a0b         /* near-black, primary labels */
--text-secondary: #5c5f6a       /* secondary labels, metadata */
--text-tertiary: #9ea3b0        /* placeholders, disabled text */
--border-subtle: #e4e6eb        /* dividers, card borders */
--border-medium: #c9ccd4        /* stronger borders, active outlines */
--green-active: #16a34a         /* playback active, success, completion */
--red-alert: #dc2626            /* urgency flags, errors */
```

### Typography

**Primary typeface: IBM Plex Sans** — used for all UI. Geometric but humanist, authoritative but approachable. Its serif and monospace siblings keep the type family tight and coherent.

```css
/* Load via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

**Usage rules:**
- `IBM Plex Sans` — all UI, body copy, navigation, labels, buttons, metadata
- `IBM Plex Serif` — display/hero headlines, feature section titles, pull quotes; italic weight for editorial emphasis
- `IBM Plex Mono` — timestamps, transcripts, data values, code-adjacent text

**Type scale:**
```
--text-xs:   11px / 1.4  /* labels, badges */
--text-sm:   13px / 1.5  /* metadata, captions */
--text-base: 15px / 1.6  /* body, UI default */
--text-md:   17px / 1.5  /* card titles, emphasis */
--text-lg:   21px / 1.4  /* section headers */
--text-xl:   28px / 1.3  /* page titles */
--text-2xl:  38px / 1.2  /* feature headers */
--text-3xl:  54px / 1.1  /* hero display */
--text-4xl:  72px / 1.0  /* max hero, landing only */
```

Font weight conventions:
- 400 — body, secondary labels
- 500 — UI labels, nav items, card titles
- 600 — section headers, emphasis
- 700 — CTAs, hero headlines; use sparingly

### Spacing System
8pt base grid:
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
--space-32: 128px
```

### Border Radius
```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 14px
--radius-xl: 20px
--radius-pill: 9999px
```

### Elevation / Shadow
Light mode shadows should feel grounded, not floaty:
```css
--shadow-sm:        0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-card:      0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
--shadow-modal:     0 16px 48px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06);
--shadow-glow-blue: 0 0 24px rgba(37, 99, 235, 0.2);
```

---

## Core Pages & Components

### 1. Landing Page (`/`)
The marketing homepage. Goal: communicate the core value prop in under 5 seconds and drive signups.

**Above the fold:**
- Full-screen hero, white background. Large IBM Plex Serif italic headline — something like *"Your day, in your ears."*
- Animated audio waveform as a background motif — thin blue vertical bars, subtle, atmospheric — not a gimmick
- Subhead in IBM Plex Sans 400, --text-md, --text-secondary
- Primary CTA: "Get Early Access" — solid --accent-blue pill button, white text, IBM Plex Sans 600
- Secondary: "See how it works" — ghost button, blue text, underline on hover
- Editorial asymmetry — headline left-aligned, waveform or app mockup floating right

**Below the fold sections:**
- **The Problem:** 3-column pain point cards on --bg-surface. Lucide icon in blue, bold label, 2-sentence description.
- **Feature Showcase:** Alternating left/right layout for each core feature (Briefing, Study Mode, Recording, Action Stack) — mockup/illustration on one side, description opposite. Blue accent on feature number or label.
- **How It Works:** Large numbered steps — IBM Plex Serif italic numerals in --accent-blue, step title in Sans 600, short description in 400.
- **Social Proof:** Pull quote card styled as a transcript excerpt — IBM Plex Mono, blue 3px left border, timestamp label. Use Maya's quote: *"I know everything that's due, I just never know what to actually do right now."*
- **Final CTA banner:** Full-width --bg-elevated section, centered headline in Serif, email input + blue submit button.

### 2. Dashboard (`/dashboard`)
The main authenticated view.

**Layout:** Left sidebar (240px, --bg-surface, 1px right border --border-subtle) + main content area (--bg-primary)

**Sidebar:**
- Reverb wordmark + small waveform glyph (blue)
- Nav items: Today, Briefing, Study, Library, Settings — IBM Plex Sans 500, --text-secondary default, --text-primary + blue 3px left indicator bar on active
- Bottom: streak counter + user avatar with thin blue ring

**Main content — Today view:**
- **Briefing card** (top, full-width): White card, --shadow-card, blue 4px left border, "Today's Briefing" label in --accent-blue Sans 600, play button in solid blue pill, waveform animation inline, 3 priority preview bullets below
- **Action Stack panel:** Task rows with custom blue checkbox, urgency color chips, time estimate in --text-tertiary IBM Plex Mono
- **Upcoming:** Compact 3-event timeline strip with thin blue vertical timeline line
- **Quick Record:** Floating action button bottom-right, solid --accent-blue circle, mic icon, subtle --shadow-glow-blue

### 3. Study Mode (`/study`)
Where users configure and consume study sessions.

**Left panel (40%):** Upload zone (dashed --border-medium, drag-and-drop, hover fills --accent-blue-light), course selector, format picker
**Format picker:** Three stacked card options — Lecture, Podcast, Response. Icon in blue, name in Sans 600, one-line description in --text-secondary. Selected: --accent-blue border (2px) + --accent-blue-light background.
**Right panel (60%):** Once generated — waveform scrubber (blue filled progress bar), playback controls, speed selector, synchronized transcript in IBM Plex Mono with active line highlighted in --accent-blue-light + blue left tick mark.

### 4. Library (`/library`)
Searchable archive of transcripts, sessions, documents.

**Layout:** Full-width search bar (top, --accent-blue focus ring) + filter chip row + 3-column card grid
**Cards on --bg-surface, --shadow-sm, hover → --shadow-card + border shifts to --border-medium:**
- Recording card: duration badge in --accent-blue-light/blue text, action item count, date in IBM Plex Mono
- Study session card: subject tag, format label, completion % bar in --accent-blue
- Document card: file type icon, upload date, estimated word count

### 5. Audio Player (Global, Persistent)
Docked to bottom of screen — always visible when something is playing.

White bar, full-width, --shadow-card top shadow, 2px solid --accent-blue top border when active.
**Contains:** Track title (Sans 500) + source label (Sans 400, --text-secondary) | waveform scrubber (blue fill) | play/pause (blue icon button) | skip ±15s | playback speed pill | expand chevron (opens full-screen modal)

---

## Interaction & Motion Principles

These work in tandem with the frontend-design skill's motion guidelines:

- **Page transitions:** Fade + subtle upward translate (180ms, ease-out). No slides or flips.
- **Audio waveform bars:** SVG or CSS bars with staggered `animation-delay` — bars scale on Y axis to pulse during playback. --accent-blue fill, thin and precise, 20–24 bars.
- **Card hover:** `translateY(-2px)` + shadow escalates + border shifts to --border-medium. 140ms ease.
- **CTA button hover:** --accent-blue-hover background, scale(1.02). Active: scale(0.97).
- **Focus states:** 2px solid --accent-blue outline, 2px offset on all interactive elements. Never remove outlines.
- **Loading:** Shimmer skeleton using `background: linear-gradient(90deg, --bg-surface, --bg-elevated, --bg-surface)` animated left-to-right. No spinners.
- **Nudge notifications:** Slide in from right. Blue left border for action item nudges, red for urgency. Auto-dismiss after 4s.

---

## Component Patterns

### Briefing Card
```
┌─────────────────────────────────────────┐
│▌ Today's Briefing              12 min   │  ← blue 4px left border
│  ─────────────────────────────────────  │
│  · Midterm Friday — 2 days out          │
│  · 2 flagged emails from Prof. Heller   │
│  · Club meeting at 7pm                  │
│                              [▶ Play]   │  ← blue pill button
└─────────────────────────────────────────┘
```

### Action Stack Item
```
┌─────────────────────────────────────────┐
│  [✓]  Review Econ lecture notes         │  ← blue fill on check
│       45 min  ·  Due Friday             │  ← IBM Plex Mono, --text-tertiary
│       [URGENT]                          │  ← red chip
└─────────────────────────────────────────┘
```
Chip colors: red bg `#fef2f2` + `#dc2626` text for urgent · amber for tomorrow · --accent-blue-light + --accent-blue for this week · --bg-surface + --text-tertiary for later

### Format Picker Card
```
┌─────────────────────────────────────────┐
│  🎙  Podcast Mode                        │  ← Lucide icon, --accent-blue
│      Two AI hosts discuss and unpack    │
│      your material together.            │
└─────────────────────────────────────────┘
```
Selected state: 2px solid --accent-blue border + --accent-blue-light background tint

### Pull Quote / Transcript Excerpt
```
┌─────────────────────────────────────────┐
│▌ "I know everything that's due,         │  ← 3px --accent-blue left border
│  I just never know what to actually     │
│  do right now."                         │
│                                         │
│  — Maya C.   [00:00:42]                 │  ← IBM Plex Mono, --text-tertiary
└─────────────────────────────────────────┘
```

---

## Tech Stack Assumptions
- **Framework:** React with Vite or Next.js — follow whatever is in the repo
- **Styling:** Tailwind CSS + CSS custom properties for design tokens, OR CSS modules — follow the repo's existing convention
- **Animation:** Framer Motion for page transitions and component animations
- **Icons:** Lucide React
- **Fonts:** IBM Plex Sans + Serif + Mono via Google Fonts

Do not introduce new dependencies without flagging it first.

---

## Always Do
- Light mode is the primary and only experience. No dark mode toggle unless explicitly requested.
- Every screen should feel like one coherent product — same type, same tokens, same voice.
- Build responsively from the start. Maya is on her phone. Mobile and tablet matter.
- Audio waveform motifs appear throughout as a subtle design language — in the logo, on cards, in the player, in empty states.
- Blue is reserved for things that matter: active states, CTAs, playback, urgency, links. Don't dilute it by using it decoratively everywhere.
- Maintain WCAG AA contrast ratios. --accent-blue on white passes; verify edge cases.
- Empty states should be warm and instructional, written like the product has a voice.

## Never Do
- No dark backgrounds as the primary surface — this is a light mode product.
- No cyan, teal, sky blue, or electric blue. The blue is royal/cobalt: `#2563eb` is the anchor.
- No Inter, Roboto, Arial, or system fonts. IBM Plex is the typeface family — use all three cuts.
- No cluttered dashboards. Every element earns its place.
- No generic loading spinners. Skeleton screens only.
- No purple gradients, frosted glass everywhere, or "AI startup" visual clichés.
- Don't make it look like Notion, Linear, or any other existing tool. Reverb is audio-first and should feel like nothing else.
