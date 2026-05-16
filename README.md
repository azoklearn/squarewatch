# Watch Square

Ultra-premium editorial site for Watch Square — a private house for the dealing, collection and documentation of exceptional timepieces.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS (custom luxury palette: ivory / ink / bordeaux / champagne)
- Framer Motion (slow, restrained editorial motion)
- Fonts: Cormorant Garamond (serif headings) + Satoshi (sans body)

## Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

```
app/
  layout.tsx        Root, fonts & metadata
  page.tsx          Page composition
  globals.css       Design tokens, paper grain, hairlines

components/
  Navigation.tsx          Floating glass nav, mobile sheet
  Hero.tsx                Editorial split hero, line-reveal H1
  Marquee.tsx             Maisons represented — slow scroll
  TrustSection.tsx        Authenticated / Documented / Curated
  CollectionSection.tsx   Asymmetric watch grid, hover reveal
  DocumentationSection.tsx Dark institutional chapter, sticky title
  PrivateSourcingSection.tsx Sourcing process + CTA
  AboutSection.tsx        Scrub text-reveal, signed
  ContactSection.tsx      Editorial form with success state
  Footer.tsx              Ink footer + giant wordmark
  Logo.tsx                Inline SVG logo

lib/
  watches.ts        Mock catalogue (Patek, AP, Rolex, VC, Lange, FPJ)
```

## Design rules enforced

- Palette strictly limited: ivory (#F4EFE6), ink (#0E0D0B), bordeaux (#6B1A20), champagne (#C9B79A)
- No gradients beyond subtle ambient washes
- No emojis, no SaaS iconography, no stock badge stamps
- Roman numerals for section eyebrows (I — VII) per editorial convention
- All motion is slow (1.0s–1.6s) and uses the same cubic ease
- Respects `prefers-reduced-motion`
