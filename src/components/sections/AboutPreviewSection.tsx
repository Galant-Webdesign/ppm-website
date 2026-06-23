import { MaskReveal, Reveal } from "@/components/animation/Reveal";

export function AboutPreviewSection() {
  return (
    <section id="about" className="ppm-section bg-ppm-navy text-white">
      <div className="ppm-container ppm-split">
        <Reveal>
          <p className="ppm-label text-white/55">About PPM</p>
        </Reveal>
        <div>
          <MaskReveal>
            <h2 className="ppm-heading">
              A premium maintenance partner for Sydney properties.
            </h2>
          </MaskReveal>
          <Reveal delay={0.12}>
            <p className="ppm-lead ppm-copy-width mt-7 text-white/70">
              PPM works with Sydney property owners, businesses and property
              professionals to deliver high-quality painting, plastering,
              carpentry, strata and remedial works. Every project is approached
              with preparation, precision and respect for the property.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
