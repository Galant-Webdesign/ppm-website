# 05_interaction_system.md

# PPM – Pro Performance Maintenance
## Interaction System

---

## 1. Purpose of This Document

This document defines the interaction and motion system for the PPM – Pro Performance Maintenance website.

It should be used as the reference for:
- scroll animations,
- section transitions,
- hover states,
- hero motion,
- service card interactions,
- before/after interactions,
- paint roller scroll effects,
- mobile animation fallbacks,
- developer implementation notes.

The website should feel premium, architectural, controlled and refined. Motion should support the brand positioning, not distract from it.

---

## 2. Core Motion Principle

The motion language should be based on the physical logic of PPM’s work:

```text
Prepare → Reveal → Paint → Smooth → Finish
```

Animations should feel:
- precise,
- deliberate,
- smooth,
- clean,
- premium,
- realistic,
- restrained.

The user should feel that the page is being carefully finished, painted, revealed and refined as they scroll.

Avoid:
- bouncing,
- cartoon effects,
- excessive rotation,
- chaotic motion,
- gimmicky transitions,
- random animation presets,
- heavy particle effects,
- aggressive parallax,
- motion that feels like a SaaS template.

---

## 3. Signature Interaction System

The primary signature interaction for the website is:

```text
Paint Roller Scroll Effect
```

This effect should become a recognisable visual motif for PPM.

It should simulate a realistic paint roller moving horizontally across the screen during scroll, leaving or revealing a horizontal paint strip behind it.

The effect should feel like the website itself is being painted and finished by PPM.

---

# SIGNATURE EFFECT 01 — PAINT ROLLER SCROLL EFFECT

---

## 4. Effect Description

The Paint Roller Scroll Effect is a scroll-driven animation where a realistic paint roller moves horizontally across the viewport and reveals a painted strip behind it.

The effect should be used as a section transition, divider or visual reveal between key sections of the landing page.

It should not behave like a basic decorative image. It should feel physically connected to the user’s scroll.

---

## 5. User Experience

As the user scrolls down:
1. A transition section becomes pinned or sticky.
2. The roller enters or appears at one side of the screen.
3. The roller moves horizontally across the viewport.
4. A paint strip is revealed directly behind the roller.
5. When the paint strip is complete, the next section continues.

The animation should create the impression that the roller is painting the page in real time.

---

## 6. Recommended Use Cases

Use the Paint Roller Scroll Effect in selected moments only.

Recommended placements:

```text
1. After Hero Section
   A dark navy paint stroke introduces the services section.

2. Between Services and Projects
   The roller paints or reveals a transition into before/after project proof.

3. Before Process Section
   A slower surface-finishing animation reinforces preparation and precision.

4. Before Final CTA
   A short branded paint stroke creates a memorable closing transition.
```

Recommended usage count:

```text
3–5 times maximum across the full landing page.
```

Do not use the effect after every section. It should feel like a premium signature detail, not a repeated gimmick.

---

## 7. Required Assets

The effect should be built from separate assets.

### Required Asset 01 — Roller

```text
roller-navy.png
roller-white.png
```

Description:
- realistic paint roller,
- transparent background,
- PNG/WebP with alpha,
- no checkerboard baked into file,
- white handle,
- metallic holder/frame,
- roller sleeve colour can match the active paint colour.

Recommended source size:
```text
1000–1600 px wide
transparent PNG or WebP
```

Displayed size on desktop:
```text
120–260 px wide depending on section
```

Displayed size on mobile:
```text
80–160 px wide
```

---

### Required Asset 02 — Paint Strip

```text
paint-strip-navy.png
paint-strip-white.png
```

Description:
- painted strip only,
- no roller,
- no wall,
- no text,
- transparent background,
- realistic roller texture,
- natural rough edges,
- colour matched to brand palette.

Recommended source canvas:
```text
3840 × 1200 px
```

Recommended paint strip width:
```text
3200–3600 px
```

Recommended format:
```text
PNG or WebP with alpha transparency
```

SVG can be used only if the texture is intentionally simplified.

---

### Required Asset 03 — Plaster Strip

```text
plaster-strip.png
```

Description:
- isolated plaster / gładź texture strip,
- transparent background,
- realistic rough edges,
- no wall background,
- used for plastering or surface preparation transitions.

Recommended format:
```text
PNG/WebP with alpha
```

---

## 8. Asset Transparency Rules

Every transparent asset must follow these rules:

```text
real alpha transparency,
isolated object only,
no visible background,
no white background,
no gray background,
no checkerboard baked into the file,
no fake transparency,
no background pixels outside the object.
```

Before using the asset on the website, test it on:
- white background,
- #000d20 background,
- red background,
- transparent checker preview.

If a visible rectangle, fake checkerboard or white/gray panel appears, the asset is not production-ready.

---

## 9. Paint Colour Variants

Use the brand palette for paint effects.

Approved colours:

```text
#000d20 — main dark navy
#00142e — deep paint navy
#011b4c — alternate deep navy
#0f2c4d — secondary navy
#ffffff — white paint
#d7d7d7 — plaster/wall neutral
#e9e9e9 — light background surface
```

Preferred paint strip colours:

```text
#000d20
#00142e
#011b4c
#ffffff
```

Avoid:
- random blue tones,
- excessive gradients,
- bright construction colours,
- yellow/black contractor colours,
- decorative rainbow transitions.

---

## 10. Animation Direction

The roller should move on the horizontal axis.

Possible directions:

```text
left-to-right
right-to-left
```

Both directions can be used across different page sections to create variation.

Recommended behaviour:
- roller moves smoothly with scroll progress,
- paint strip reveal stays visually connected to roller head,
- paint appears exactly behind the roller,
- movement feels physical and realistic,
- no excessive bouncing,
- no exaggerated spinning.

Optional subtle details:
- slight vertical micro-movement,
- very subtle roller rotation,
- tiny easing variation,
- slight speed ramp at start/end.

Keep subtle.

---

## 11. Technical Implementation Concept

The effect should be implemented as a layered scroll animation.

Required layers:

```text
Layer 1: Section background
Layer 2: Paint strip reveal container / mask
Layer 3: Paint strip asset
Layer 4: Roller asset
Layer 5: Optional foreground content
```

Recommended technical pattern:

```text
section height: 160–240vh
inner wrapper: position sticky
roller: transform translateX()
paint reveal: clip-path, mask, width, or overflow hidden
scroll progress: controls both roller movement and reveal width
```

---

## 12. Recommended HTML Structure

Example structure:

```html
<section class="paint-transition">
  <div class="paint-transition__sticky">
    <div class="paint-transition__scene">

      <div class="paint-transition__reveal">
        <img 
          src="/assets/paint-strip.png" 
          alt="" 
          class="paint-transition__strip"
        />
      </div>

      <img 
        src="/assets/roller.png" 
        alt="" 
        class="paint-transition__roller"
      />

    </div>
  </div>
</section>
```

Decorative images should use empty alt text:

```html
alt=""
```

---

## 13. Recommended CSS Logic

Example CSS direction:

```css
.paint-transition {
  position: relative;
  height: 200vh;
}

.paint-transition__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.paint-transition__scene {
  position: relative;
  width: min(90vw, 1600px);
  height: 240px;
}

.paint-transition__reveal {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  height: 160px;
  width: 0;
}

.paint-transition__strip {
  position: absolute;
  height: 100%;
  width: 1600px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
}

.paint-transition__roller {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(120px, 12vw, 240px);
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
```

Final values should be adjusted per section.

---

## 14. GSAP / ScrollTrigger Implementation Notes

Recommended library:

```text
GSAP + ScrollTrigger
```

Reason:
- precise scroll control,
- scrubbed animation,
- pinned sections,
- performance-friendly transforms,
- strong compatibility with complex reveal effects.

Recommended logic:

```text
ScrollTrigger pins the section.
Scroll progress maps from 0 to 1.
Roller X position moves from startX to endX.
Paint reveal width or clip-path expands according to progress.
```

Pseudo-code:

```js
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".paint-transition",
  start: "top top",
  end: "+=1400",
  scrub: true,
  pin: ".paint-transition__sticky",
  onUpdate: (self) => {
    const progress = self.progress;

    // Move roller
    // Reveal paint strip
  }
});
```

---

## 15. Framer / React Implementation Notes

If building in React or Framer:

Use:
```text
useScroll()
useTransform()
motion.div
```

Concept:
- scrollYProgress controls roller translateX,
- scrollYProgress controls mask width or clip-path,
- use responsive variants for mobile.

Recommended:
- keep animation component reusable,
- define direction as a prop,
- define colour/asset variant as a prop,
- define intensity as a prop.

Example component name:

```text
PaintRollerTransition
```

Suggested props:

```text
direction: "left-to-right" | "right-to-left"
paintAsset: string
rollerAsset: string
height: "short" | "medium" | "long"
background: "dark" | "light" | "transparent"
mobileFallback: boolean
```

---

## 16. Webflow / No-Code Implementation Notes

If building in Webflow:
- use a sticky section,
- put roller and paint strip in absolute layers,
- animate roller X movement with scroll interaction,
- animate reveal mask width or clip-path with scroll interaction,
- hide or simplify on mobile.

If Webflow cannot handle the exact effect smoothly, use custom code embed with GSAP.

---

## 17. Direction Variant A — Left to Right

Use when:
- introducing a new section,
- creating a forward/progressive motion,
- leading the user into services or project proof.

Visual logic:

```text
roller starts left
roller moves right
paint appears behind it
```

Recommended placements:
- after hero,
- before services,
- before final CTA.

---

## 18. Direction Variant B — Right to Left

Use when:
- creating visual contrast,
- transitioning from dark to light,
- revealing a project section,
- balancing the page rhythm.

Visual logic:

```text
roller starts right
roller moves left
paint appears behind it
```

Recommended placements:
- between services and projects,
- before testimonials,
- before contact.

---

## 19. Paint Reveal Variants

### Variant 01 — Paint Strip Reveal

The roller reveals a horizontal navy paint strip.

Use for:
- section divider,
- strong branded transition,
- hero-to-services movement.

---

### Variant 02 — White Paint on Navy

White paint is revealed over a dark navy background.

Use for:
- transitioning from dark to light section,
- before project area,
- CTA reveal.

---

### Variant 03 — Plaster / Gładź Reveal

A white plaster strip is revealed, like the page surface is being smoothed.

Use for:
- plastering service section,
- process section,
- craftsmanship-focused transition.

---

### Variant 04 — Partial Painted Wall Shape

A large diagonal or angled painted shape reveals part of the next section.

Use for:
- hero overlay,
- dramatic section intro,
- editorial transition.

Keep this variant subtle and controlled.

---

## 20. Interaction Placement Map

Recommended placement map for PPM homepage:

```text
After Hero:
PaintRollerTransition variant: navy paint strip
Direction: left-to-right
Purpose: introduce services

Between Services and Projects:
PaintRollerTransition variant: white paint or navy paint
Direction: right-to-left
Purpose: reveal transformation/proof section

Before Process:
PlasterRevealTransition variant: plaster/gładź strip
Direction: left-to-right
Purpose: connect to preparation and finishing

Before Final CTA:
Short PaintRollerTransition variant: #000d20 or #00142e
Direction: left-to-right
Purpose: branded closing motion
```

---

## 21. Standard Reveal Animations

Beyond the roller effect, use a restrained reveal system.

### Text Reveal

Use:
- opacity,
- y movement,
- line mask reveal,
- slight stagger.

Avoid:
- letters flying in,
- extreme split text effects,
- random rotations.

Recommended:
```text
duration: 0.6–1.0s
ease: power3.out / cubic-bezier premium ease
stagger: 0.04–0.08s
```

---

### Image Reveal

Use:
- clip-path reveal,
- mask reveal,
- subtle scale from 1.04 to 1.0,
- opacity transition.

Avoid:
- aggressive zooms,
- 3D flips,
- spinning images.

---

### Card Reveal

Use:
- subtle upward motion,
- opacity,
- staggered reveal.

Recommended:
```text
translateY: 24–48px
opacity: 0 to 1
stagger: 0.08–0.12s
```

---

## 22. Service Card Interactions

Service cards should feel premium and tactile.

Recommended hover behaviour:
- image slightly scales up,
- overlay appears subtly,
- title or CTA shifts slightly,
- border opacity changes,
- background may move from light to dark navy,
- CTA becomes visible.

Avoid:
- extreme card lifts,
- heavy shadows,
- loud colour changes,
- spinning icons.

---

## 23. Before / After Interaction

The before/after section should use one of these:

### Preferred: Slider Reveal

User drags a vertical or diagonal slider to reveal before/after.

Motion:
- smooth drag,
- clear but minimal handle,
- labels: Before / After,
- no large arrows unless refined.

### Alternative: Scroll Reveal

As user scrolls, after image reveals over before image.

This can connect nicely with the paint/finish theme.

Avoid:
- cheap before/after collages,
- oversized arrows,
- crowded layouts.

---

## 24. Navigation Interaction

Navigation should be sticky and transform on scroll.

Behaviour:
- starts larger and more open,
- shrinks after scroll,
- background becomes more solid,
- logo remains visible,
- CTA remains accessible.

Suggested changes on scroll:
```text
padding decreases
logo size slightly decreases
background opacity increases
blur backdrop optional
```

Keep it premium and subtle.

---

## 25. Button Interaction

Primary CTA button should have a refined hover state.

Recommended effects:
- subtle fill transition,
- slight text movement,
- border opacity shift,
- small arrow movement,
- no exaggerated scaling.

Possible button style:

```text
dark navy fill + white text
hover: secondary navy or inverted outline
```

Avoid:
- neon glow,
- heavy shadows,
- aggressive bounce,
- cheap gradient effects.

---

## 26. Hero Video / Hero Motion

If using video in hero:
- loop smoothly,
- mute audio,
- no controls,
- use poster image,
- use overlay for text readability,
- keep file lightweight.

Motion:
- subtle background video,
- headline mask reveal,
- CTA fade/reveal,
- trust markers fade in.

Avoid:
- fast cuts,
- distracting footage,
- shaky movement,
- video that harms readability.

---

## 27. Parallax Direction

Use parallax sparingly.

Allowed:
- subtle image movement,
- surface texture drifting slightly,
- paint/plaster asset moving at slower speed,
- hero background moving subtly.

Avoid:
- strong parallax that makes text hard to read,
- multiple layers moving aggressively,
- mobile-heavy parallax.

Recommended:
```text
desktop only or reduced on mobile
small movement range
transform-based animation
```

---

## 28. Mobile Motion Rules

Mobile should prioritise performance and clarity.

On mobile:
- reduce pinned sections,
- shorten scroll distance,
- simplify paint roller effect,
- use smaller assets,
- reduce parallax,
- keep CTA accessible,
- avoid long scroll traps.

Recommended mobile fallback for roller:
```text
short automatic reveal,
static painted divider,
or simple fade/slide transition.
```

Respect reduced motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable or simplify major motion */
}
```

---

## 29. Performance Rules

Motion must not damage the website’s performance.

Rules:
- animate transform and opacity where possible,
- avoid animating layout-heavy properties frequently,
- use will-change only when needed,
- compress assets,
- use WebP/AVIF where possible,
- lazy-load below-the-fold images,
- do not overuse GSAP timelines,
- avoid multiple pinned sections stacked too closely,
- test on mobile.

Hero video:
- MP4 H.264 fallback,
- WebM if possible,
- muted,
- loop,
- no audio,
- poster image,
- optimised size.

---

## 30. Accessibility Rules

Motion should be accessible.

Requirements:
- support reduced motion,
- avoid flashing,
- avoid fast repeated movement,
- do not hide important content behind motion only,
- ensure CTA remains usable during animations,
- avoid scroll-jacking that traps users too long,
- keep interactions understandable.

Decorative assets:
```html
alt=""
aria-hidden="true"
```

Functional before/after controls should remain accessible.

---

## 31. Interaction Naming Convention

Use consistent names for components.

Suggested component names:

```text
PaintRollerTransition
PaintStripReveal
PlasterRevealTransition
BeforeAfterSlider
StickyNav
RevealText
RevealImage
ServiceCard
ProjectCard
TrustBar
FinalCTA
```

Suggested CSS/data attributes:

```text
data-reveal
data-reveal-text
data-reveal-image
data-paint-transition
data-before-after
data-sticky-nav
```

---

## 32. Developer Handoff Notes

Every interaction should include:
- purpose,
- trigger,
- animation type,
- desktop behaviour,
- mobile behaviour,
- reduced motion fallback,
- asset requirements,
- performance notes.

For the Paint Roller Scroll Effect specifically, developer must know:
- roller and paint strip are separate assets,
- paint reveal must stay aligned with roller head,
- effect must be controlled by scroll progress,
- do not use a single flat image of roller + paint as the animation,
- use mask/clip/overflow reveal,
- simplify on mobile.

---

## 33. Editing and Expanding This File

When new effects are added to the project, update this file directly.

Recommended process:
1. Add a new effect section.
2. Give it a clear name.
3. Define its purpose.
4. Define where it appears.
5. Define visual behaviour.
6. Define technical behaviour.
7. Define mobile fallback.
8. Define what to avoid.

Use this template:

```text
# EFFECT NAME

Purpose:
Where it appears:
Visual behaviour:
Technical behaviour:
Assets required:
Desktop behaviour:
Mobile behaviour:
Reduced motion fallback:
Avoid:
```

This file should remain the central source of truth for all motion and interaction decisions.

---

## 34. Final Interaction Principle

PPM’s interaction system should make the website feel:

```text
painted,
prepared,
revealed,
smoothed,
finished.
```

Motion should communicate craftsmanship and control.

The goal is not to impress users with animation complexity. The goal is to make the experience feel premium, memorable and directly connected to PPM’s work.
