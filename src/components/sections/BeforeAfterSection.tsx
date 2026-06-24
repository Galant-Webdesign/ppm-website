import { GsapMaskReveal } from "@/components/animation/GsapScrollEffects";
import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { transformations } from "@/data/site";

export function BeforeAfterSection() {
  return (
    <section
      id="projects"
      className="ppm-section relative overflow-hidden bg-ppm-light"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-scroll opacity-100 contrast-[1.08] brightness-[0.98] md:bg-fixed"
        style={{
          backgroundImage: "url('/assets/paint-effects/plaster-strip04.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/5 via-transparent to-white/10"
      />

      <div className="ppm-container relative z-10">
        <div className="ppm-split">
          <Reveal>
            <p className="ppm-label text-ppm-blue">Before / After</p>
          </Reveal>
          <div>
            <MaskReveal>
              <h2 className="ppm-heading text-ppm-navy">
                Recent transformations, finished with precision.
              </h2>
            </MaskReveal>
            <Reveal delay={0.12}>
              <p className="ppm-lead ppm-copy-width mt-7 text-ppm-navy/70">
                Explore examples of painting, carpentry and repair work
                completed with care, preparation and attention to detail.
              </p>
            </Reveal>
          </div>
        </div>

        <GsapMaskReveal className="mt-20 grid gap-8 lg:grid-cols-2">
          {transformations.map((item) => (
            <BeforeAfterSlider
              afterAlt={item.afterAlt}
              afterImage={item.afterImage}
              beforeAlt={item.beforeAlt}
              beforeImage={item.beforeImage}
              category={item.service}
              description={item.copy}
              key={item.title}
              title={item.title}
            />
          ))}
        </GsapMaskReveal>
      </div>
    </section>
  );
}
