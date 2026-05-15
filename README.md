# Rajath — Portfolio

A world-class, ultra-premium, cinematic portfolio for **Rajath** — Software Engineer & Full Stack Developer, MCA Gold Medalist (CGPA 9.82).

Built with **Next.js 15 (App Router) · TypeScript · TailwindCSS · Framer Motion · React Three Fiber · Lenis**. Designed for Apple-level polish, Linear-smooth interactions, and Awwwards-tier motion.

## Quick start

```bash
# 1. install deps
npm install

# 2. run dev
npm run dev

# 3. build for production
npm run build && npm start
```

Then open <http://localhost:3000>.

## What's inside

```
src/
├── app/                  # Next.js App Router (layout, page, sitemap, robots)
├── components/
│   ├── ui/               # Button, Badge, Card primitives
│   ├── effects/          # CustomCursor, GradientMesh, NoiseTexture, ParticleField,
│   │                     # SpotlightArea, TiltCard, Marquee
│   ├── common/           # ThemeProvider, SmoothScrollProvider, SectionHeading, MagneticButton
│   ├── layout/           # Navbar, Footer, ScrollProgress, ThemeToggle
│   ├── hero/             # Cinematic hero with R3F particles
│   ├── about/            # Storytelling card + animated stat counters
│   ├── experience/       # Animated vertical timeline with spotlight hover
│   ├── projects/         # Filterable, tilt-cardable, gradient project showcase
│   ├── skills/           # Glassmorphic skill grid + dual marquee
│   ├── achievements/     # Gold-medal cards with spotlight
│   └── contact/          # Floating glass form with live validation
├── hooks/                # useMousePosition, useMagneticEffect, useCountUp, useMediaQuery
├── lib/                  # utils, constants, animations, metadata
├── data/                 # projects, experience, skills, achievements
├── types/                # shared types
└── styles/               # (extend here)
```

## Personalising

Edit **`src/lib/constants.ts`** for your name, email, socials and resume URL.
Edit **`src/data/*.ts`** for experience, projects, skills and achievements.

Drop your PDF at `public/resume/Rajath_Resume_2025.pdf`.

## Production checklist

- Open Graph / Twitter cards in [`src/lib/metadata.ts`](src/lib/metadata.ts)
- `sitemap.xml` and `robots.txt` are auto-generated
- Replace contact form's simulated submit with Formspree/Resend (see `src/components/contact/Contact.tsx`)
- Add a `public/og.png` (1200×630) before going live

## Tech stack

- **Framework** — Next.js 15, React 19, TypeScript
- **Styling** — TailwindCSS, `tailwind-merge`, `class-variance-authority`
- **Motion** — Framer Motion, GSAP-ready
- **3D** — React Three Fiber, drei, three.js
- **Scroll** — Lenis (smooth scroll)
- **Icons** — lucide-react
- **Theming** — next-themes

## License

MIT. Make it yours.
