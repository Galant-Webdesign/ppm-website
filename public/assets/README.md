# PPM Public Asset Conventions

Production-ready website assets should live under `public/assets` so Next.js can serve them directly.

Recommended structure:

```text
public/assets/
  logo/
  photography/
    about/
    hero/
    projects/
    services/
    testimonials/
  before-after/
  paint-effects/
  plaster-effects/
  video/
  icons/
  ui/
```

Use lowercase, hyphen-separated names and prefer WebP/AVIF for photos, SVG for logos and icons, and PNG/WebP with real alpha for paint-effect assets.
