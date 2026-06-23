import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { qualityPromises } from "@/data/site";

export function WhyChooseSection() {
  return (
    <section id="why-ppm" className="ppm-section bg-ppm-navy text-white">
      <div className="ppm-container">
        <div className="ppm-split">
          <Reveal>
            <p className="ppm-label text-white/55">Why PPM</p>
          </Reveal>
          <div>
            <MaskReveal>
              <h2 className="ppm-heading">
                Professional from quote to final clean-up.
              </h2>
            </MaskReveal>
            <Reveal delay={0.12}>
              <p className="ppm-lead ppm-copy-width mt-7 text-white/70">
                PPM combines experienced trades, organised communication and
                clean workmanship to deliver reliable results for residential,
                commercial and managed properties.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="ppm-card-grid mt-20 md:grid-cols-4">
          {qualityPromises.map((item) => (
            <article
              key={item}
              className="ppm-card border border-white/15"
            >
              <h3 className="text-lg font-semibold leading-snug">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
