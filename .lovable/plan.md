# WE've Got Talent — Landing Site Plan

A premium, graphic-rich marketing site for the WE Got Talent weekend hiring hackathon, built to impress recruiters and sponsors. Hybrid structure: one cinematic landing page with two deeper sub-pages for Recruiters and Sponsors.

## Site Map

```
/                  Home (long scrolling landing)
/recruiters        Deep recruiter pitch + how-to-partner
/sponsors          Deep sponsor pitch + tiers
```

Sticky top nav (transparent over hero, solid on scroll) with: Logo · Event · Recruiters · Sponsors · Contact (CTA button).
Footer on every page: tagline, quick links, social, "Powered by The Women Engineers Community".

## Visual Direction (matches the deck)

- Palette: deep ink/charcoal background, magenta/hot pink primary, soft cream surfaces, gold accent for awards.
- Signature motif: floating SVG diamonds (pink + purple, varied sizes, subtle drift/parallax on scroll).
- Background grids, soft radial glows behind headlines.
- Typography: bold display sans for headlines (e.g. Space Grotesk / Sora), clean geometric sans for body (Inter).
- Micro-interactions: number count-up on stats, fade-up on scroll, hover lift on cards, animated underline on nav.
- Fully responsive — mobile gets stacked cards, larger touch targets, hero diamonds reduced in count for performance.

## Page 1 — Home (`/`)

1. **Hero** — Full-viewport. Floating diamond cluster, "WE've Got Talent" oversized, sub: "A Weekend Hiring Hackathon · June 2026". Two CTAs: *Partner with us* / *Sponsor us* (Calendly links). Small chips: "0–6 YOE · Open Source · YouTube Showcase".
2. **Why this is a win-win** — 4 animated stat cards (100+, 100%, 50+, Top 1%) with diamond icons.
3. **Alumni work at** — Marquee/grid of 15 company names with subtle logos-style chips.
4. **The WE Program + WINGS AI** — Two-column feature block with diamond accents.
5. **The Event** — BUILD · SHOWCASE · HIRE three-up with icons, plus participation/submission/timeline strip.
6. **How it Works** — 5-step horizontal timeline (vertical on mobile) with connecting diamond markers.
7. **Awards** — Two-card layout: Partner Choice + WE Champion, gold accents.
8. **For Recruiters / For Sponsors** — Two large gateway cards linking into sub-pages.
9. **Final CTA band** — Dark with diamond pattern: "Let's Make it Happen" + Partner / Sponsor buttons.
10. **Footer**.

## Page 2 — Recruiters (`/recruiters`)

- Hero strip: "Hire from WE Got Talent" with diamond accents.
- **Why hire from us** — 4 feature cards (Pre-vetted, Direct Pipeline, See Them in Action, Diverse by Design).
- **What your company gets** — 6-card grid (Choose Winners, Open Source Proof, Structured Timeline, Employer Branding, Flexibility, Resume Drive).
- **How to partner** — 4-step numbered flow.
- CTA band: "Schedule a partner call" → Calendly.

## Page 3 — Sponsors (`/sponsors`)

- Hero strip: "Sponsor WE Got Talent".
- **Why sponsor** — 4 feature cards (Amplify Brand, Shape the Future, Community Goodwill, Tech Sponsorships).
- **Sponsorship Options** — 3 premium tier cards: Prize Sponsor · Mentor Sponsor · Dev Sponsor, each with bullet perks. Note: "We welcome other contributions too".
- "What sponsorship funds" — small visual breakdown (conference seats, learning, mentorship, prizes).
- CTA band: "Become a sponsor" → Calendly.

## CTAs

All primary CTAs (Partner, Sponsor, Schedule a call) link to a Calendly URL. A single placeholder URL constant will be used and clearly marked so it can be swapped. Secondary email link in footer.

## Graphics Approach

- Custom SVG diamond components (single, cluster, scattered field) — reused across pages with different densities and rotations.
- New illustrative SVG accents: dotted grids, soft gradient blobs, connector lines for the timeline, badge/ribbon for awards.
- Lightweight scroll-triggered motion using Tailwind transitions + Intersection Observer (no heavy animation libs).

## Technical Notes

- React Router: add `/recruiters` and `/sponsors` routes above the catch-all in `App.tsx`.
- Components: `Navbar`, `Footer`, `Diamond`, `DiamondField`, `SectionHeading`, `StatCard`, `FeatureCard`, `TierCard`, `TimelineStep`, `CTASection`.
- Design tokens in `index.css` + `tailwind.config.ts`: extend with `magenta`, `ink`, `cream`, `gold` semantic tokens (HSL).
- Fonts loaded via Google Fonts in `index.html`.
- All images/icons rendered as inline SVG — no PDF asset extraction needed; crisp at every resolution.
- `<title>`, meta description, OG image set per route via a small `Seo` helper.
