import Image from "next/image";
import {
  BeforeAfterScrollPrep,
  GsapMaskReveal,
} from "@/components/animation/GsapScrollEffects";
import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { transformations } from "@/data/site";

export function BeforeAfterSection() {
  return (
    <section id="projects" className="ppm-section bg-white">
      <div className="ppm-container">
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
            <article
              key={item.title}
              className="overflow-hidden border border-ppm-grey/60 bg-white"
              data-gsap-reveal-item
            >
              <BeforeAfterScrollPrep
                className="relative aspect-[4/3] overflow-hidden bg-ppm-light"
              >
                <Image
                  src={item.beforeImage}
                  alt={item.beforeAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r border-white"
                  aria-hidden="true"
                  data-before-after-reveal
                  style={{ width: "var(--before-after-progress, 50%)" }}
                >
                  <div className="relative h-full w-[200%]">
                    <Image
                      src={item.afterImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className="absolute inset-y-0 w-px bg-white"
                  aria-hidden="true"
                  data-before-after-handle
                  style={{ left: "var(--before-after-progress, 50%)" }}
                />
                <div className="absolute left-5 top-5 rounded-sm bg-ppm-navy px-3 py-2">
                  <p className="ppm-label text-white">After</p>
                </div>
                <div className="absolute right-5 top-5 rounded-sm bg-white px-3 py-2">
                  <p className="ppm-label text-ppm-navy">Before</p>
                </div>
              </BeforeAfterScrollPrep>

              <div className="ppm-card">
                <p className="ppm-label text-ppm-blue">{item.service}</p>
                <h3 className="ppm-subheading mt-7 text-ppm-navy">
                  {item.title}
                </h3>
                <p className="ppm-small mt-5 text-ppm-navy/70">{item.copy}</p>
              </div>
            </article>
          ))}
        </GsapMaskReveal>
      </div>
    </section>
  );
}
