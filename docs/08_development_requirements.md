# 08_development_requirements.md

# PPM – Pro Performance Maintenance
## Development Requirements

---

## 1. Purpose of This Document

This document defines the technical and development requirements for the PPM website.

It should be used as the reference for:
- frontend implementation,
- animation implementation,
- responsive behaviour,
- performance,
- SEO,
- accessibility,
- CMS decisions,
- hosting,
- form handling,
- asset optimisation,
- developer handoff.

The website must feel premium visually, but it must also load quickly, work reliably and convert visitors into enquiries.

---

## 2. Recommended Build Options

There are three acceptable build paths.

---

## 3. Option A — Framer

Recommended if:
- fast delivery is important,
- the site is mostly marketing-focused,
- client needs easy editing,
- custom backend is not required,
- animations can be handled with native Framer tools or small embeds.

Pros:
- fast design-to-publish workflow,
- good visual quality,
- easy hosting,
- CMS options,
- quick iteration.

Cons:
- less control than custom code,
- advanced scroll effects may need custom implementation,
- platform dependency.

Use Framer if speed and visual polish are more important than deep custom code.

---

## 4. Option B — Webflow

Recommended if:
- CMS is important,
- client may update projects/testimonials,
- a professional marketing site is needed,
- visual control and responsiveness are important.

Pros:
- strong CMS,
- good visual building workflow,
- SEO-friendly when built properly,
- good for service sites.

Cons:
- advanced scroll effects can become complex,
- exported code is not ideal,
- platform dependency.

Use Webflow if CMS-driven project galleries or testimonials are important.

---

## 5. Option C — Custom Code

Recommended if:
- full control is needed,
- premium custom animations are important,
- performance should be tightly controlled,
- future expansion is expected.

Recommended stack:

```text
Astro or Next.js
Tailwind CSS
GSAP + ScrollTrigger
Lenis optional
Sanity / Payload / Strapi optional CMS
Vercel / Netlify / Cloudflare Pages
Resend / Formspree / Netlify Forms for form handling
```

Preferred for highest quality:
```text
Astro + Tailwind CSS + GSAP ScrollTrigger + optional Sanity CMS
```

Reason:
- excellent performance for marketing websites,
- strong control over animations,
- lightweight pages,
- good SEO.

---

## 6. Core Technical Requirements

The website must include:

```text
Responsive layout
Sticky navigation
Navigation shrink on scroll
Hero video or image fallback
Service section
Before/after slider
Paint Roller Scroll Effect
Contact form
SEO metadata
Fast image loading
Mobile optimisation
Accessibility basics
Performance optimisation
```

---

## 7. Page Structure Requirements

Initial navigation:

```text
HOME
ABOUT US
SERVICES
CONTACT
```

Recommended anchor IDs:

```text
#home
#about
#services
#projects
#why-ppm
#process
#testimonials
#contact
```

The homepage should support smooth anchor scrolling.

---

## 8. Responsive Requirements

Design must work on:

```text
Mobile: 360–480 px
Tablet: 768 px
Laptop: 1024–1280 px
Desktop: 1440 px
Large desktop: 1920 px+
```

Mobile requirements:
- clear hero headline,
- visible CTA,
- simple menu,
- stacked service cards,
- touch-friendly before/after slider,
- simplified paint roller effect,
- fast loading,
- no horizontal overflow.

---

## 9. Navigation Requirements

Navigation behaviour:
- sticky at top,
- transparent/minimal at top if hero allows,
- shrinks on scroll,
- background becomes solid,
- CTA remains visible,
- mobile menu is clean and easy to use.

Recommended nav CTA:

```text
Get a Free Quote
```

Mobile menu should include direct contact action:
```text
Call Now
WhatsApp Us
```

---

## 10. Hero Video Requirements

If using hero video:

HTML requirements:
```html
<video autoplay muted loop playsinline preload="metadata" poster="/assets/video/hero-poster.webp">
  <source src="/assets/video/hero-desktop.webm" type="video/webm">
  <source src="/assets/video/hero-desktop.mp4" type="video/mp4">
</video>
```

Video requirements:
```text
autoplay
muted
loop
playsinline
poster image
no controls
no audio
optimised file size
```

Recommended desktop video:
```text
1920 × 1080
24/25 FPS
5–10 seconds
2–6 MB
```

Recommended mobile video:
```text
720 × 1280
24/25 FPS
5–10 seconds
1–4 MB
```

Use image fallback when video is disabled or too heavy.

---

## 11. Paint Roller Scroll Effect Requirements

The Paint Roller Scroll Effect must be implemented as separate layers.

Do not animate one flat image of roller and paint together.

Required assets:
```text
roller.png
paint-strip.png
plaster-strip.png optional
```

Required behaviour:
- section pins/sticks during scroll,
- roller moves horizontally,
- paint strip reveals behind roller,
- reveal is controlled by scroll progress,
- roller head stays aligned with reveal edge,
- effect is simplified on mobile.

Recommended implementation:
```text
GSAP ScrollTrigger
transform: translateX()
clip-path / mask / overflow hidden
position: sticky
```

Performance rules:
- animate transforms and opacity,
- avoid layout-heavy animation where possible,
- avoid excessive pinned sections,
- use compressed assets.

---

## 12. Before / After Slider Requirements

The projects section should include a before/after proof mechanism.

Preferred:
```text
interactive before/after slider
```

Requirements:
- touch-friendly,
- accessible labels,
- clear before/after states,
- smooth drag,
- optimised images,
- consistent image dimensions.

Avoid:
- heavy third-party sliders unless necessary,
- unoptimised large image pairs,
- visual clutter.

---

## 13. Contact Form Requirements

Required fields:

```text
Name
Email
Phone
Service Required
Property Type
Message
Preferred Contact Method
Optional Photo Upload
```

Service options:
```text
Painting
Plastering
Carpentry
Strata
Remedial
Other
```

Property type options:
```text
Residential
Commercial
Strata
Investment Property
Other
```

Form requirements:
- validation,
- clear success message,
- clear error states,
- spam protection,
- mobile-friendly inputs,
- large tap targets.

Possible form handling:
```text
Formspree
Netlify Forms
Resend
Make/Zapier/n8n automation
Custom API endpoint
```

Success message example:
```text
Thank you. Your enquiry has been received and the PPM team will get back to you shortly.
```

---

## 14. SEO Requirements

Each page should include:

```text
title tag
meta description
Open Graph title
Open Graph description
Open Graph image
canonical URL
structured headings
alt text
sitemap.xml
robots.txt
schema markup
```

Recommended schema:
```text
LocalBusiness
HomeAndConstructionBusiness
ProfessionalService
```

Primary SEO targets:
```text
Painting Sydney
Plastering Sydney
Carpentry Sydney
Strata Maintenance Sydney
Remedial Repairs Sydney
Property Maintenance Sydney
Residential Painting Sydney
Commercial Painting Sydney
```

Do not keyword stuff. Keep copy premium and natural.

---

## 15. Performance Requirements

Target Lighthouse scores:

```text
Performance: 85+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
```

Optimisation rules:
- compress all images,
- use WebP/AVIF,
- lazy-load below-the-fold media,
- preload hero poster if needed,
- avoid unnecessary JS,
- avoid heavy animation libraries unless justified,
- use responsive images,
- avoid 4K video backgrounds,
- remove audio from videos,
- optimise fonts.

---

## 16. Image Requirements

Use responsive image delivery.

Recommended:
```html
<picture>
  <source srcset="/image.avif" type="image/avif">
  <source srcset="/image.webp" type="image/webp">
  <img src="/image.jpg" alt="..." loading="lazy">
</picture>
```

Hero images may use eager loading if above the fold.

Below-the-fold images should use:
```text
loading="lazy"
```

---

## 17. Font Requirements

Use a limited font system.

Recommended:
```text
1 primary font family
2 weights for body
2–3 weights for headings
font-display: swap
```

Avoid:
- many font families,
- heavy variable fonts if not needed,
- decorative fonts,
- loading unused weights.

---

## 18. Accessibility Requirements

Minimum requirements:
- semantic HTML,
- correct heading hierarchy,
- alt text for meaningful images,
- empty alt for decorative assets,
- keyboard-accessible navigation,
- visible focus states,
- sufficient colour contrast,
- reduced motion support,
- readable font sizes,
- large tap targets on mobile.

Reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 19. Animation Requirements

Recommended animation tools:
```text
GSAP ScrollTrigger for custom code
Framer Motion for React/Framer
Webflow Interactions for Webflow
CSS transitions for simple hovers
```

Animation rules:
- use transform and opacity,
- keep motion subtle,
- simplify on mobile,
- avoid scroll-jacking,
- no overuse of pinned sections,
- ensure content remains accessible.

---

## 20. Analytics Requirements

Recommended tools:
```text
Google Analytics 4
Google Search Console
Plausible optional
Meta Pixel optional if running ads
```

Track:
- quote form submissions,
- phone click,
- WhatsApp click,
- service card clicks,
- before/after interaction,
- CTA clicks,
- scroll depth.

---

## 21. Security and Reliability Requirements

If using forms:
- use spam protection,
- avoid exposing API keys,
- validate inputs,
- use HTTPS,
- use secure hosting,
- keep dependencies updated.

If using WordPress:
- minimise plugins,
- use security plugin,
- keep core/themes/plugins updated,
- use caching,
- use image optimisation.

---

## 22. CMS Requirements

CMS is optional for the first version.

Use CMS if client needs to update:
- projects,
- testimonials,
- service pages,
- before/after images,
- blog/insights.

Recommended CMS options:
```text
Framer CMS
Webflow CMS
Sanity
Payload CMS
Strapi
WordPress only if required
```

---

## 23. Deployment Requirements

Recommended hosting:
```text
Vercel
Netlify
Cloudflare Pages
Framer hosting
Webflow hosting
```

Required:
- custom domain,
- SSL,
- redirects,
- sitemap,
- Google Search Console,
- contact form testing,
- mobile testing.

---

## 24. Browser Testing

Test on:
```text
Chrome
Safari
Firefox
Edge
iOS Safari
Android Chrome
```

Test:
- navigation,
- hero video,
- contact form,
- before/after slider,
- paint roller animation,
- mobile layout,
- performance,
- reduced motion.

---

## 25. Final Development Principle

The website should be:

```text
premium in appearance,
fast in performance,
clear in structure,
easy to contact,
reliable on mobile,
and technically clean.
```

Do not sacrifice speed and usability for decorative motion.
