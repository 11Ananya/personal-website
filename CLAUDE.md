# Ananya Dabas — Personal Portfolio Website

## Project Overview
Personal portfolio site built from `ananya_portfolio_prd.docx`. Chromatic glass aesthetic targeting Summer 2026 internship seekers. The site itself is a project — demonstrates frontend depth and design taste.

## Stack
- **Next.js 16.1.7** (App Router, TypeScript strict)
- **Tailwind CSS v4** — CSS-based config via `@theme` in `globals.css`, NOT `theme.extend` in tailwind.config.ts
- **Framer Motion v12** — scroll animations, custom cursor spring
- **@splinetool/react-spline v4** — Spline 3D scene in hero
- **shadcn/ui** — Card, Badge, Button (dark theme)
- **Lucide React** — icons throughout
- **Google Fonts** — Cormorant Garamond (serif), Inter (sans), JetBrains Mono (mono)

## Design System
### Colors (CSS custom properties in globals.css)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#0a0a0a` | Page background |
| `--bg-deep` | `#000000` | Section backgrounds |
| `--accent-purple` | `#8b5cf6` | Primary accent, glows, borders |
| `--accent-teal` | `#2dd4bf` | Secondary accent |
| `--accent-blue` | `#3b82f6` | Tertiary accent |
| `--glass-bg` | `rgba(255,255,255,0.04)` | Glass card backgrounds |
| `--glass-border` | `rgba(255,255,255,0.08)` | Glass card borders |

### Fonts
- Display/headings: `font-serif` → Cormorant Garamond (`--font-cormorant`)
- Body: `font-sans` → Inter (`--font-inter`)
- Code/labels: `font-mono` → JetBrains Mono (`--font-jetbrains`)

### Key CSS classes
- `.chromatic-layer` + `.chromatic-layer-1/2/3` — animated gradient background
- `.noise-overlay` — subtle film grain at 3% opacity
- `.glass-card` — glass morphism base
- `.gradient-text` — purple→teal gradient text fill
- `.marquee-wrapper` — masked infinite ticker container

## File Structure
```
app/
  layout.tsx          # Fonts (next/font), metadata, CustomCursor
  page.tsx            # Imports all sections, Navbar, Footer
  globals.css         # CSS vars, @theme, @keyframes, chromatic classes

components/
  ui/
    button.tsx        # shadcn Button
    badge.tsx         # shadcn Badge
    card.tsx          # shadcn Card
    cursor.tsx        # Custom cursor — 12px dot + 40px spring-lag ring
    marquee.tsx       # Infinite horizontal ticker (CSS animation)
    splite.tsx        # SplineScene — lazy Spline wrapper
    spotlight.tsx     # Aceternity SVG spotlight (animate-spotlight)
    stat-pill.tsx     # Stat display pill (value + label)
    tech-pill.tsx     # Dark glass skill pill
  layout/
    navbar.tsx        # Floating pill, scroll-aware blur/border
    footer.tsx        # 4-column: brand, navigate, contact, currently
  sections/
    hero.tsx          # 100vh, 2-col, ChromaticBg + Card + Spotlight + Spline
    about.tsx         # Bio, 4 stat pills, glass AD initials panel
    experience.tsx    # Vertical timeline, 2 ExperienceCards
    projects.tsx      # 4 alternating ProjectCards
    skills.tsx        # Grouped TechPill grid + Marquee
    cta.tsx           # Pulsing glow, email + GitHub CTAs

lib/
  data.ts             # ALL content — edit here, never in JSX
  motion.ts           # Framer Motion variants: fadeInUp, staggerContainer, cardReveal, pillFadeIn
  utils.ts            # cn() from shadcn

tailwind.config.ts    # Tailwind v4 config (content paths only — NO darkMode array, NO theme.extend)
```

## Content — lib/data.ts
All hardcoded strings live here. Exports:
- `HERO` — name, role, tagline, email, githubUrl, linkedinUrl, CTAs
- `ABOUT` — bio, stats[]
- `EXPERIENCE` — 2 items: Eon Media (AI/ML, May–Aug 2025), Talent4Assure (SWE, May–Aug 2024)
- `PROJECTS` — 4 items: InfraLens, 3D Portfolio, IntelliLog, Law Firm Mgmt
- `SKILLS` — 4 groups: Languages, Frameworks, Cloud, Tools
- `NAV_LINKS`, `FOOTER_COLS`, `ALL_SKILLS_MARQUEE`

## Animation Variants — lib/motion.ts
| Variant | Effect |
|---------|--------|
| `fadeInUp` | opacity 0→1, y 40→0, 0.6s easeOut |
| `staggerContainer` | staggerChildren 0.1s |
| `cardReveal` | opacity+y+scale, 0.7s easeOut |
| `pillFadeIn` | opacity+scale 0.8→1, 0.4s |
| `viewportConfig` | `{ once: true, amount: 0.2 }` |

All `whileInView` animations use `viewport={viewportConfig}`.

## Key Implementation Notes
- **Tailwind v4**: Do NOT add `darkMode: ["class"]` to tailwind.config.ts — it causes a type error. Custom tokens go in `globals.css` `@theme` block.
- **Spline scene URL**: `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode` (chrome humanoid robot)
- **Spline on mobile**: Hidden via `hidden md:block` — saves performance budget
- **Custom cursor**: Disabled on mobile via CSS (touch devices)
- **Chromatic bg**: 3 `will-change: transform` layers — GPU composited, no layout thrash
- **Marquee**: Pure CSS `animation: marquee 30s linear infinite` — no JS scroll listener
- **Fonts**: Loaded via `next/font/google` in `app/layout.tsx` — zero CLS

## Dev Commands
```bash
npm run dev          # Start dev server (usually port 3000)
npm run build        # Production build
npm run start        # Serve production build
```

## Build Status
✅ Builds successfully (`npm run build` passes TypeScript + static generation)
✅ All 4 static pages generated: `/` and `/_not-found`

## Owner
Ananya Dabas · adabas@uwaterloo.ca · University of Waterloo CS 2028
