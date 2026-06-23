import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function FinalCtaSection() {
  return (
    <section className="ppm-section bg-ppm-navy text-white">
      <div className="ppm-container">
        <Reveal className="max-w-5xl">
          <p className="ppm-label text-white/55">Start Your Project</p>
          <MaskReveal>
            <h2 className="ppm-heading mt-5">
              Ready to improve, repair or finish your property?
            </h2>
          </MaskReveal>
          <Reveal delay={0.12}>
            <p className="ppm-lead ppm-copy-width mt-7 text-white/70">
              Tell us what your property needs and the PPM team will provide a
              clear estimate for painting, plastering, carpentry, strata or
              remedial works.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" variant="secondary">
                Get a Free Quote
              </Button>
              <Button
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                variant="outline"
                className="border-white/35 text-white hover:border-white hover:bg-white hover:text-ppm-navy"
              >
                Call {site.phone}
              </Button>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
