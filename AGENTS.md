<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — PPM Website

This repository contains the website project for PPM – Pro Performance Maintenance.

The agent must treat the `/docs` directory as the main source of truth for brand, content, structure, visual direction, animations, assets and technical requirements.

## Project documentation structure

Always read and follow these files before implementing major changes:

- `/docs/01_brand_brief.md` — main brand strategy, positioning, tone and business context.
- `/docs/02_visual_direction.md` — visual style, colors, layout mood, typography direction and art direction.
- `/docs/03_website_structure.md` — website pages, sections, navigation and content hierarchy.
- `/docs/04_services_content.md` — services, service descriptions and service-related copy.
- `/docs/05_interaction_system.md` — animation rules, scroll effects, interaction behavior and motion language.
- `/docs/06_assets_guidelines.md` — rules for using images, logos, paint effects, video and visual assets.
- `/docs/07_copywriting_direction.md` — writing style, messaging, CTA tone and copy rules.
- `/docs/08_development_requirements.md` — technical stack, performance, responsiveness, SEO and accessibility requirements.

## Asset structure

Project assets are stored in:

- `/docs/assets/logo/`
- `/docs/assets/photos/`
- `/docs/assets/paint-effects/`
- `/docs/assets/video/`

When implementing the website, use assets according to `/docs/06_assets_guidelines.md`.

If assets need to be served publicly by Next.js, copy or move optimized production-ready files into the `/public` directory while preserving a clear structure, for example:

- `/public/assets/logo/`
- `/public/assets/photos/`
- `/public/assets/paint-effects/`
- `/public/assets/video/`

Do not invent assets if real project assets exist in `/docs/assets`.

## Technology stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- GSAP + ScrollTrigger
- Three.js / React Three Fiber / Drei
- Lenis for smooth scrolling when appropriate

## Implementation rules

- Always inspect existing files before editing.
- Do not overwrite unrelated files.
- Do not create generic sections if the documentation contains specific direction.
- Build the website in phases.
- Prefer reusable components.
- Keep animation code inside client components.
- Use `"use client"` only where required.
- Keep server components as the default where possible.
- Prioritize performance, accessibility and responsive behavior.
- Avoid heavy 3D unless it clearly improves the visual experience.
- For corporate pages, use subtle premium 3D accents rather than full 3D scenes.

## Recommended source structure

Use this structure unless the project already has a better one:

- `src/app/` — App Router pages and layouts.
- `src/components/` — reusable UI components.
- `src/components/sections/` — page sections.
- `src/components/animation/` — animation-specific components.
- `src/lib/` — utilities and animation helpers.
- `src/data/` — structured content extracted from docs if needed.
- `public/assets/` — optimized assets used by the website.

## PPM visual direction

The PPM website should feel:

- premium
- modern
- architectural
- precise
- clean
- trustworthy
- cinematic but not overloaded

Use this color palette:

- `#000d20`
- `#0f2c4d`
- `#cbcbcb`
- `#e9e9e9`
- `#ffffff`

## Required pages

The main navigation should include:

- HOME
- ABOUT US
- SERVICES
- CONTACT

## Required interaction system

Implement the interaction system described in `/docs/05_interaction_system.md`, especially:

- reveal through masks
- before/after scroll or slider experience
- blueprint grid animation
- premium project hover
- paint-fill CTA
- living navbar
- subtle cinematic parallax
- signature PPM line system
- architectural line drawing animations

## Workflow for Codex

Before coding a major feature:

1. Read `AGENTS.md`.
2. Read the relevant files from `/docs`.
3. Inspect the current project structure.
4. Prepare a concise implementation plan.
5. Implement only the requested scope.
6. Run `npm run lint` and/or `npm run build` when appropriate.
7. Summarize changed files and any remaining issues.

Do not build the entire website in one step unless explicitly requested.