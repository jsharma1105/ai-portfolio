# UI Review -- Jay Sharma 3D Portfolio

**Date:** 2026-04-11
**Overall Score:** 16/24
**Screenshots:** Not captured (Playwright browsers not installed; code-only audit against dev server at localhost:5173)

---

## Score Summary

| Pillar | Score | Grade |
|--------|-------|-------|
| Copywriting | 3/4 | Good |
| Visuals | 3/4 | Good |
| Color | 2/4 | Needs Work |
| Typography | 3/4 | Good |
| Spacing | 2/4 | Needs Work |
| Experience Design | 3/4 | Good |

---

## Detailed Findings

### 1. Copywriting (3/4)

**Strengths:**
- About section (About.tsx:9-12) is concise, outcome-focused, and positions Jay well: "9+ years building enterprise-grade cloud systems on Azure."
- Career descriptions (Career.tsx:25-29, 40-44, 57-60, 73-76, 88-90) are specific with company names, tech stacks, and measurable context.
- Work project descriptions include quantified impact: "reducing triage time by 60%", "slashed support resolution time by 45%", "cutting MTTR by 50%" (Work.tsx:12, 22, 30, 39, 47).
- Resume button and contact section provide clear calls-to-action.

**Issues:**
- **Loading screen says "AM" instead of "JS"**: Loading.tsx:49 shows `<a>AM</a>` -- this is a leftover from a template. Should be "JS" to match the navbar (Navbar.tsx:44).
- **Loading marquee text is generic**: Loading.tsx:65 shows "Full Stack Developer" and "Software Engineer" -- these don't emphasize the Azure AI specialization that defines the brand.
- **All project links point to "#"**: Work.tsx:14, 24, 33, 42, 51, 59, 68 -- every project's `link` is `"#"`, making the external-link icon on WorkImage misleading. Two projects use `placeholder.webp` images (lines 59, 68).
- **Social icon links have no accessible labels**: SocialIcons.tsx:48-56 -- the GitHub and LinkedIn icon-only links lack `aria-label` attributes. Screen readers will announce nothing meaningful.
- **Navbar "JS" logo links to `/#`**: Navbar.tsx:43 -- the hash-slash is non-standard; `#` or `/` would be cleaner.

### 2. Visuals (3/4)

**Strengths:**
- The 3D character scene (Three.js/R3F) with GSAP scroll animations creates a strong hero impression.
- Physics-based tech stack spheres (TechStack.tsx) with texture-mapped logos is a memorable interaction.
- Custom cursor with mix-blend-mode difference (Cursor.css:13) adds polish.
- The "What I Do" section has elegant dashed-border SVG framing with corner decorations and flicker animations (WhatIDo.css:88-101, 103-144).
- Career timeline with animated glowing dot (Career.css:99-132) is well-executed.

**Issues:**
- **"What I Do" panel is `display: none` on mobile**: WhatIDo.css:40 sets `.what-box-in { display: none }` -- this entire content panel never shows unless overridden at a breakpoint, but no breakpoint re-enables it. The skill cards (AI & Agents, Cloud & Backend) appear to be invisible by default.
- **TechStack is desktop-only**: MainContainer.tsx:46 wraps TechStack in `isDesktopView &&` (>1024px), so mobile/tablet users never see the tech stack visualization.
- **Fallback for TechStack is bare text**: MainContainer.tsx:47 shows `<div>Loading....</div>` -- four periods, no styling, visible as raw text.
- **Two work projects use placeholder images**: Work.tsx:59, 68 reference `/images/placeholder.webp` for "Alaska Airlines Platform" and "Synapse Analytics Pipeline."

### 3. Color (2/4)

**Strengths:**
- Coherent dark theme with `--backgroundColor: #0a0e17` and light text `#eae5ec` (index.css:11, 22).
- Accent color `--accentColor: #5eead4` (teal/cyan) is used consistently via CSS custom property for section titles, hover states, and highlights.
- Career section has a tasteful gradient text effect (Career.css:20-24).
- Work badges use a well-chosen palette: teal `#5eead4`, purple `#a78bfa`, blue `#60a5fa`, orange `#fb923c` (Work.tsx:73-77).

**Issues:**
- **Hardcoded color values everywhere**: Over 40 unique hardcoded hex values across CSS files instead of CSS custom properties. Examples:
  - `#22d3ee` in Landing.css:24,64,97 (cyan glow circles)
  - `#14b8a6` in Career.css:93,104 and Landing.css:237 (teal variant -- different from `--accentColor`)
  - `#2dd4bf` in Loading.css:80,307 (yet another teal)
  - `#0d9488` in Career.css:20 (dark teal)
  - There are at least 4 distinct teal/cyan values: `#5eead4`, `#22d3ee`, `#14b8a6`, `#2dd4bf`, `#0d9488`, `#67e8f9`, `#a5f3fc`. These are all Tailwind teal/cyan shades but used ad hoc without a token system.
- **Gray values are inconsistent**: `#c8c8c8` (Work.css:24), `#adacac` (Work.css:114,133), `#ccc` (Navbar.css:29, Contact.css:40), `#5e5e5e` (SocialIcons.css:59), `#363636` (Work.css:61-62), `#393939` (Work.css:235). These should be tokenized.
- **Loading screen uses light background**: Loading.css:6 sets `background-color: #e0f2f1` (mint) which sharply contrasts with the dark `#0a0e17` main site. The transition from light to dark may jar users.
- **No contrast-safe enforcement**: The `#adacac` text on `#0a0e17` background yields approximately 6.7:1 which passes, but `#5e5e5e` on dark (SocialIcons.css:59) yields roughly 3.5:1 -- borderline for WCAG AA on normal text.

### 4. Typography (3/4)

**Strengths:**
- Single font family "Geist" used throughout (index.css:1,4,33) -- clean, modern choice.
- Font weights are purposeful: 200-300 for body/descriptions, 400-500 for medium emphasis, 600 for headings and labels.
- Responsive font sizing with media queries across all sections (Landing.css:265-397, Career.css:145-244).
- The career section heading uses gradient text for visual interest.

**Issues:**
- **Excessive font size variety**: Counting distinct `font-size` values across all CSS: 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 23px, 25px, 28px, 30px, 32px, 33px, 35px, 38px, 40px, 42px, 45px, 48px, 50px, 55px, 60px, 65px, 70px, 75px, 80px, plus `calc(4vw + 25px)` and `1.9vw`. That is 30+ distinct sizes with no apparent scale system.
- **About paragraph is unusually large**: About.css:27-29 sets `font-size: 33px; font-weight: 600; line-height: 36px` for a paragraph -- this reads more like a heading than body text. The line-height ratio (36/33 = 1.09) is too tight for comfortable reading.
- **`user-select: none` on root**: index.css:18-20 disables text selection globally. This is hostile to users who want to copy email addresses, project descriptions, or certification names from the Contact section.

### 5. Spacing (2/4)

**Strengths:**
- Section-level spacing is generous with `padding: 80px 0`, `padding: 120px 0px`, `margin-bottom: 250px` providing breathing room between major sections.
- The `section-container` class (App.css:1-3) provides consistent max-widths across breakpoints.
- Carousel spacing is well-structured with `gap: 60px` between content and image (Work.css:82).

**Issues:**
- **No spacing scale or token system**: All spacing is arbitrary pixel values. Margins and paddings use: 5px, 6px, 7px, 8px, 10px, 12px, 16px, 20px, 25px, 30px, 35px, 40px, 50px, 70px, 80px, 90px, 100px, 120px, 200px, 250px. There is no 4px or 8px base grid.
- **Career section has extreme bottom margin**: Career.css:11 sets `margin-bottom: 250px` which is then overridden to `0` at 1025px (Career.css:184). This 250px gap on desktop seems excessive.
- **Negative margins for layout hacks**: Career.css:183 uses `margin-top: -200px` and line 184 uses `margin-bottom: 0` at 1025px. The mobile breakpoint at 600px (Career.css:238) uses `margin-top: -70px`. These negative margins suggest layout issues being patched.
- **Inconsistent container widths**: `section-container` is 1300px (App.css:2), `about-section` uses `var(--cWidth)` (About.css:9), `whatIDO` uses `var(--cWidth)` (WhatIDo.css:9), career-section uses `section-container` class but also has its own margin. The content width strategy varies per section.
- **`what-box-in` uses `margin-left: 200px`**: WhatIDo.css:38 -- this large left margin pushes content far right, then shrinks to 50px at 1400px (WhatIDo.css:281) and -50px at 1024px (WhatIDo.css:294). Negative margin at 1024px is another layout patch.
- **Inline styles in Contact.tsx**: Line 58 uses `style={{ fontWeight: 300, fontSize: "15px", opacity: 0.6 }}` bypassing the CSS system entirely.

### 6. Experience Design (3/4)

**Strengths:**
- **Loading screen is creative**: The bouncing ball game animation, percentage counter, and expanding-circle transition (Loading.tsx, Loading.css) create an engaging wait experience.
- **ScrollSmoother integration**: Navbar.tsx:13-21 configures GSAP ScrollSmoother for buttery scroll on desktop.
- **Hover interactions are polished**: HoverLinks component (HoverLinks.tsx) provides a clean text-slide hover effect. Custom cursor follows mouse with easing (Cursor.tsx:16-24). Social icons have magnetic follow effect (SocialIcons.tsx:10-35).
- **Carousel is well-built**: Work carousel (Work.tsx) with prev/next arrows, dot indicators, proper aria-labels, and CSS transform transitions.
- **Touch device handling**: WhatIDo.tsx:11-17 detects `ScrollTrigger.isTouch` and switches from hover to click interactions.

**Issues:**
- **No ErrorBoundary anywhere**: No error boundary wraps the Three.js canvas, physics simulation, or any component. A WebGL crash would white-screen the entire site.
- **Memory leak in SocialIcons**: SocialIcons.tsx:36-37 uses `requestAnimationFrame(updatePosition)` in a loop that never gets cancelled. The cleanup function (line 38-39) removes the event listener from `elem` but the `rAF` loop runs forever.
- **Memory leak in Cursor**: Cursor.tsx:16-24 starts a `requestAnimationFrame` loop that is never cancelled on unmount.
- **Event listener leak in TechStack**: TechStack.tsx:140-148 adds click event listeners to `.header a` elements inside `useEffect` but never removes them. Also uses `setInterval` without cleanup.
- **Loading progress is simulated**: Loading.tsx:95-135 `setProgress` function fakes loading with `Math.random()` -- it does not track actual asset loading. The percentage is artificial.
- **No Suspense fallback in App.tsx**: App.tsx:12-14 has `<Suspense>` without a `fallback` prop, meaning nothing renders while lazy components load (just blank).
- **Mobile gets no 3D content for TechStack**: MainContainer.tsx:46 conditionally renders TechStack only on desktop (>1024px). Mobile users see no tech stack section at all -- it just disappears from the page.

---

## Top Priority Fixes

1. **Fix the "AM" branding on loading screen (Loading.tsx:49)** -- Users see "AM" first before anything else loads, creating immediate brand confusion. Change to "JS" to match the navbar logo. Also update the loading marquee text (Loading.tsx:65) to include "Azure AI Specialist" alongside the generic titles.

2. **Tokenize hardcoded colors into CSS custom properties** -- There are 4-6 distinct teal/cyan values and 6+ gray values scattered across CSS files. Create `--teal-400`, `--teal-500`, `--gray-300`, `--gray-500`, `--gray-700` (or similar) custom properties in `:root` and replace all hardcoded hex values. This will make the palette maintainable and catch contrast issues.

3. **Add ErrorBoundary around Three.js components and fix memory leaks** -- The site has no error boundary, so any WebGL failure crashes the entire page. Wrap the 3D character and TechStack canvas in a React ErrorBoundary with a graceful fallback. Additionally, cancel `requestAnimationFrame` loops in Cursor.tsx and SocialIcons.tsx on component unmount to prevent memory leaks.

---

## Files Audited

- `index.html`
- `src/App.tsx`
- `src/App.css`
- `src/index.css`
- `src/components/Landing.tsx`
- `src/components/About.tsx`
- `src/components/WhatIDo.tsx`
- `src/components/Career.tsx`
- `src/components/Work.tsx`
- `src/components/TechStack.tsx`
- `src/components/Contact.tsx`
- `src/components/Navbar.tsx`
- `src/components/SocialIcons.tsx`
- `src/components/Cursor.tsx`
- `src/components/Loading.tsx`
- `src/components/MainContainer.tsx`
- `src/components/WorkImage.tsx`
- `src/components/HoverLinks.tsx`
- `src/components/styles/Work.css`
- `src/components/styles/Landing.css`
- `src/components/styles/About.css`
- `src/components/styles/Career.css`
- `src/components/styles/Contact.css`
- `src/components/styles/WhatIDo.css`
- `src/components/styles/Navbar.css`
- `src/components/styles/SocialIcons.css`
- `src/components/styles/Cursor.css`
- `src/components/styles/Loading.css`
- `src/components/styles/style.css`

---

## UI REVIEW COMPLETE
