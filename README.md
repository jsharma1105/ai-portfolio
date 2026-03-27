# Jay Sharma — 3D Portfolio

Personal developer portfolio built with React, Three.js, and GSAP. Features a 3D character scene, physics-based tech stack visualization, scroll-driven animations, and a carousel project showcase.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **3D:** Three.js, React Three Fiber, Drei, Rapier (physics), Postprocessing
- **Animation:** GSAP (ScrollSmoother, ScrollTrigger, SplitText)
- **Build:** Vite
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/
    Character/       # 3D character model (Three.js/R3F)
    Landing.tsx      # Hero section with animated intro
    About.tsx        # About me section
    WhatIDo.tsx      # Skills panel with expand/collapse
    Career.tsx       # Career timeline
    Work.tsx         # Project carousel
    TechStack.tsx    # Physics-based 3D tech stack spheres
    Contact.tsx      # Contact info and social links
    Navbar.tsx       # Navigation with ScrollSmoother
    Cursor.tsx       # Custom cursor with blend mode
    Loading.tsx      # Loading screen with progress animation
    SocialIcons.tsx  # Fixed social icon bar
  context/
    LoadingProvider.tsx
  data/
    boneData.ts
  types/
public/
  models/            # 3D models and HDR environment
  images/            # Project and tech stack images
```

## License

MIT
