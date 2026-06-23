import {
  CinematicParallaxLayer,
  CinematicParallaxRoot,
} from "@/components/animation/CinematicParallax";
import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <CinematicParallaxRoot
      id="home"
      className="relative isolate overflow-hidden text-white"
      ariaLabelledBy="home-title"
    >
      <CinematicParallaxLayer
        y={22}
        className="absolute inset-x-0 -bottom-6 -top-6 -z-[30]"
      >
        <video
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/assets/video/hero-desktop.mp4" type="video/mp4" />
        </video>
      </CinematicParallaxLayer>

      <CinematicParallaxLayer
        y={34}
        className="pointer-events-none absolute inset-0 -z-[25] opacity-35"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,203,203,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,203,203,0.12)_1px,transparent_1px)] bg-[size:72px_72px]"
        />
      </CinematicParallaxLayer>

      <CinematicParallaxLayer
        y={72}
        className="pointer-events-none absolute inset-0 -z-[15] hidden lg:block"
      >
        <div
          aria-hidden="true"
          className="absolute left-[7vw] top-[24%] h-px w-[28vw] bg-white/20"
        />
        <div
          aria-hidden="true"
          className="absolute right-[12vw] top-[32%] h-[34vh] w-px bg-ppm-grey/20"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[18%] right-[8vw] h-px w-[22vw] bg-ppm-grey/25"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[22%] left-[50vw] h-28 w-44 border border-white/15"
        />
      </CinematicParallaxLayer>

      <div className="absolute inset-0 -z-[5] bg-ppm-navy/28" />
      <div className="absolute inset-0 -z-[4] bg-[linear-gradient(90deg,rgba(0,13,32,0.74)_0%,rgba(0,13,32,0.44)_48%,rgba(0,13,32,0.22)_100%)]" />

      <div className="ppm-container grid min-h-[calc(100vh-5rem)] gap-14 py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-40">
        <CinematicParallaxLayer y={-4}>
          <Reveal>
            <p className="ppm-label text-white/60">
              Sydney, NSW / Residential & Commercial
            </p>
          </Reveal>
          <MaskReveal delay={0.08}>
            <h1 id="home-title" className="ppm-display mt-8 max-w-5xl">
              Premium painting, finishing and maintenance for Sydney properties.
            </h1>
          </MaskReveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight text-white">
              Residential and commercial projects, finished with precision.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="ppm-lead ppm-copy-width mt-6 text-white/72">
              PPM delivers refined painting, plastering, carpentry, strata and
              remedial services for Sydney homeowners, builders, property
              managers and commercial clients.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <Button
                href="#contact"
                variant="outline"
                className="border-white/35 bg-transparent text-white hover:border-white hover:bg-white/50 hover:text-ppm-navy"
              >
                Get a Free Quote
              </Button>
              <Button
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                variant="outline"
                className="border-white/35 bg-transparent text-white hover:border-white hover:bg-white/50 hover:text-ppm-navy"
              >
                Call {site.phone}
              </Button>
            </div>
          </Reveal>
        </CinematicParallaxLayer>

        <CinematicParallaxLayer y={-64}>
          <Reveal delay={0.22} y={40}>
            <aside
              aria-label="Service quote request form"
              className="lg:justify-self-end"
            >
              <HeroQuoteForm />
            </aside>
          </Reveal>
        </CinematicParallaxLayer>
      </div>
    </CinematicParallaxRoot>
  );
}
