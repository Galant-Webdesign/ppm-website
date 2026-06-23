import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { audienceGroups } from "@/data/site";

export function AudienceSplitSection() {
  return (
    <section className="ppm-section bg-ppm-light">
      <div className="ppm-container">
        <Reveal className="ppm-section-kicker">
          <p className="ppm-label text-ppm-blue">Property Types</p>
          <MaskReveal>
            <h2 className="ppm-heading mt-5 text-ppm-navy">
              For homes, businesses and managed properties.
            </h2>
          </MaskReveal>
        </Reveal>

        <div className="ppm-card-grid mt-20 md:grid-cols-2">
          {audienceGroups.map((group) => (
            <article
              key={group.title}
              className="ppm-card border border-ppm-grey/60 bg-white"
            >
              <h3 className="ppm-subheading text-ppm-navy">{group.title}</h3>
              <p className="ppm-body mt-6 text-ppm-navy/70">{group.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
