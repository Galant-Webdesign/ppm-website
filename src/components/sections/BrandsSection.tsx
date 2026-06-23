import { MaskReveal, Reveal } from "@/components/animation/Reveal";

export function BrandsSection() {
  return (
    <section className="border-y border-ppm-grey/40 bg-ppm-light py-16">
      <div className="ppm-container ppm-split md:items-center">
        <Reveal>
          <p className="ppm-label text-ppm-blue">Partners</p>
        </Reveal>
        <div>
          <MaskReveal>
            <h2 className="ppm-subheading text-ppm-navy">
              Brands and partners we have worked with.
            </h2>
          </MaskReveal>
          <Reveal delay={0.12}>
            <p className="ppm-body ppm-copy-width mt-5 text-ppm-navy/70">
              Placeholder area for the approved monochrome partner logo strip
              from the source materials.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
