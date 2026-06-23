# 06_assets_guidelines.md

# PPM – Pro Performance Maintenance
## Assets Guidelines

---

## 1. Purpose of This Document

This document defines the asset requirements for the PPM website.

It should be used as the source of truth for:
- logos,
- photography,
- service images,
- hero video,
- paint roller assets,
- plaster assets,
- before/after images,
- icons,
- file formats,
- export settings,
- naming conventions,
- optimisation requirements.

All assets should support the premium positioning of PPM as a refined painting, finishing and maintenance partner in Sydney.

---

## 2. Core Asset Principle

Every asset should feel:

- realistic,
- premium,
- clean,
- architectural,
- professional,
- brand-consistent,
- suitable for residential, commercial and strata audiences.

Avoid:
- cheap stock imagery,
- generic handyman visuals,
- yellow/black contractor branding,
- unrealistic AI distortions,
- fake-looking hands/tools,
- low-resolution images,
- over-edited construction scenes,
- cluttered backgrounds,
- messy visual noise.

---

## 3. Required Asset Folders

Recommended folder structure:

```text
assets/
  logo/
  photography/
    hero/
    services/
    projects/
    testimonials/
  video/
  paint-effects/
  plaster-effects/
  icons/
  before-after/
  ui/
  about/
```

---

## 4. Logo Assets

Required logo versions:

```text
logo-ppm-white.svg
logo-ppm-navy.svg
logo-ppm-black.svg
logo-ppm-white.png
logo-ppm-navy.png
```

Preferred format:

```text
SVG
```

PNG should be used only when SVG is not practical.

Logo usage:
- white logo on #000d20 or #0f2c4d,
- navy/dark logo on #ffffff or #e9e9e9,
- no distortion,
- no glow,
- no bevel,
- no unnecessary shadows,
- no fake 3D,
- no stretching,
- maintain clear space.

Logo should appear:
- navigation,
- footer,
- hero if appropriate,
- worker uniforms,
- final CTA,
- contact section.

---

## 5. Brand Colour References

Primary palette:

```text
#000d20 — main colour
#0f2c4d — secondary navy
#cbcbcb — neutral grey
#e9e9e9 — light grey
#ffffff — white
```

Additional production colours used in assets:

```text
#081c33 — navy workwear / roller paint variant
#00142e — deep paint strip variant
#011b4c — alternate deep navy paint variant
#d7d7d7 — plaster/wall neutral
```

All generated assets should stay within this palette unless a photo naturally requires neutral environmental colours.

---

## 6. Photography Direction

Photography should show real-looking workers performing real tasks.

Required service photo categories:

```text
Painting
Plastering
Carpentry
Strata
Remedial
```

Workers should wear:
- navy workwear close to #081c33 or #000d20,
- PPM logo in white,
- practical work trousers,
- gloves when relevant,
- clean but realistic trade clothing.

Photography should feel:
- premium,
- editorial,
- realistic,
- clean,
- bright where appropriate,
- suitable for a high-end property service website.

Avoid:
- fake AI-looking workers,
- distorted hands,
- distorted tools,
- unreadable or malformed logos,
- messy construction chaos,
- overly staged smiles,
- random unbranded stock workers.

---

## 7. Hero Video Assets

Hero video should be optimised for web performance.

Recommended exports:

```text
hero-desktop.webm
hero-desktop.mp4
hero-mobile.webm
hero-mobile.mp4
hero-poster-desktop.webp
hero-poster-mobile.webp
```

Recommended desktop video settings:

```text
Format: MP4 fallback + WebM preferred
Codec: H.264 for MP4
Resolution: 1920 × 1080 or 1600 × 900
FPS: 24 or 25
Duration: 5–10 seconds
Audio: removed / muted
Target weight: 2–6 MB
```

Recommended mobile video settings:

```text
Resolution: 720 × 1280 or 1080 × 1920
FPS: 24 or 25
Duration: 5–10 seconds
Audio: removed / muted
Target weight: 1–4 MB
```

Hero video should:
- loop seamlessly,
- not distract from headline readability,
- have a poster image fallback,
- not be 4K,
- not be 60 FPS,
- not include audio,
- not be too visually busy.

---

## 8. Service Image Requirements

### Painting

Asset direction:
- worker painting an interior or exterior wall,
- roller with navy paint if brand-focused,
- clean residential/commercial setting,
- visible PPM uniform,
- proper painting posture and tools.

Suggested file names:

```text
service-painting-01.webp
service-painting-02.webp
service-painting-01.png
service-painting-02.png
```

---

### Plastering

Asset direction:
- worker applying plaster with trowel,
- wall smoothing,
- skim coat texture,
- fresh plaster surface,
- visible PPM uniform.

Suggested file names:

```text
service-plastering-01.webp
service-plastering-02.webp
service-plastering-01.png
service-plastering-02.png
```

---

### Carpentry

Asset direction:
- worker fitting timber trim, shelf, cabinetry or deck board,
- realistic drill/tool use,
- clean interior or property setting,
- visible PPM uniform.

Suggested file names:

```text
service-carpentry-01.webp
service-carpentry-02.webp
service-plastering-01.png
service-plastering-02.png
```

---

### Strata

Asset direction:
- worker maintaining common area,
- corridor, lobby, stairwell or managed property space,
- patching, inspection or surface repair,
- professional, clean environment.

Suggested file names:

```text
service-strata-01.webp
service-strata-02.webp
service-plastering-01.png
service-plastering-02.png
```

---

### Remedial

Asset direction:
- worker repairing cracks or damaged surfaces,
- wall patching,
- concrete/masonry/plaster repair,
- realistic tools,
- controlled repair scene.

Suggested file names:

```text
service-remedial-01.webp
service-remedial-02.webp
service-plastering-01.png
service-plastering-02.png
```

---

## 9. Before / After Assets

Before/after assets should prove quality without making the design feel cheap.

Recommended:
- use paired images with similar framing,
- crop consistently,
- avoid messy collage layouts,
- preserve realistic colour,
- ensure “after” image feels premium and clean.

Suggested file naming:

```text
project-01-before.webp
project-01-after.webp
project-02-before.webp
project-02-after.webp
project-01-before.png
project-01-after.png
project-02-before.png
project-02-after.png
```

Recommended ratio:

```text
16:9
4:3
or consistent project card ratio
```

---

## 10. Paint Roller Assets

The Paint Roller Scroll Effect requires separate transparent assets.

Required files:

```text
roller-navy.png
roller-white.png
paint-strip-navy.png
paint-strip-white.png
paint-strip-000d20.png
paint-strip-00142e.png
plaster-strip.png
partial-paint-shape.png
wordker-footer.png
```

### Roller Asset

Requirements:
- realistic paint roller,
- transparent background,
- white handle,
- metallic frame,
- roller sleeve can be #000d20, #00142e, #081c33 or white depending on variant,
- no shadow plate,
- no wall background,
- no checkerboard baked into file.

Preferred format:

```text
PNG with alpha or WebP with alpha
```

Suggested source size:

```text
1000–1600 px wide
```

---

### Paint Strip Asset

Requirements:
- strip only,
- no roller,
- transparent background,
- realistic roller-painted edge,
- uniform colour if specified,
- no gradients unless explicitly required,
- no checkerboard baked into file,
- no wall, no text, no background.

Recommended source canvas:

```text
3840 × 1200 px
```

Recommended strip width:

```text
3200–3600 px
```

Preferred formats:

```text
PNG/WebP with alpha for realistic texture
SVG for simplified vector strip
```

---

### Plaster Strip Asset

Requirements:
- isolated plaster/gładź shape,
- realistic rough edge,
- transparent background,
- no gray wall background,
- no fake checkerboard,
- suitable as scroll/parallax overlay.

Recommended source canvas:

```text
3840 × 1200 px
```

---

## 11. Transparency Rules

For all transparent assets:

```text
real alpha transparency,
isolated object only,
no visible background,
no white background,
no gray background,
no checkerboard baked into the file,
no background pixels outside the object.
```

Quality test:
- place asset on #000d20,
- place asset on #ffffff,
- place asset on red,
- place asset on image background.

If any rectangle, checkerboard or white/gray panel appears, the asset is not production-ready.

---

## 12. Image Export Rules

Recommended production formats:

```text
AVIF — best compression where supported
WebP — primary production format
PNG — transparent working files / fallback
JPG — only for non-transparent photos when required
SVG — logos, icons, simplified vector shapes
```

Recommended:
- keep source files large,
- export production versions smaller,
- compress all website images,
- avoid uploading huge PNGs for normal photos,
- use responsive image sizes.

---

## 13. Recommended Image Sizes

### Hero Images

```text
Desktop: 2400 × 1350 px
Mobile: 1080 × 1350 px or 1080 × 1920 px
```

### Service Cards

```text
1600 × 2000 px for portrait
1600 × 1200 px for landscape
```

### Project Images

```text
1920 × 1080 px
or 1600 × 1200 px
```

### Paint/Plaster Effects

```text
3840 × 1200 px
```

### Logo

```text
SVG preferred
PNG fallback at 2x or 3x scale
```

---

## 14. Icon Assets

Icons should be:
- SVG,
- line-based,
- minimal,
- architectural,
- consistent stroke width,
- monochrome.

Possible icons:
- insured,
- licensed,
- experienced,
- clean & tidy,
- residential,
- commercial,
- strata,
- free quote,
- process steps.

Avoid:
- colourful clipart,
- cartoon icons,
- inconsistent icon packs,
- overly detailed construction icons.

---

## 15. Asset Naming Convention

Use lowercase, hyphen-separated names.

Examples:

```text
logo-ppm-white.svg
hero-video-desktop.mp4
hero-poster-desktop.webp
service-painting-worker.webp
paint-strip-00142e.png
roller-00142e.png
plaster-strip-white.png
before-after-project-01-before.webp
before-after-project-01-after.webp
icon-insured.svg
```

Avoid:
- spaces,
- Polish characters,
- random export names,
- “final-final-v2.png”,
- unreadable file names.

---

## 16. Final Asset Principle

Every asset must support this perception:

```text
PPM is premium, organised, professional and trusted in Sydney properties.
```

If an asset makes the brand feel cheap, generic, messy or fake, it should not be used.
