import { GsapMaskReveal } from "@/components/animation/GsapScrollEffects";
import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { services } from "@/data/site";

export function ServicesOverviewSection() {
  return (
    <section id="services" className="ppm-section bg-ppm-light">
      <div className="ppm-container">
        <Reveal className="ppm-section-kicker">
          <p className="ppm-label text-ppm-blue">Services</p>
          <MaskReveal>
            <h2 className="ppm-heading mt-5 text-ppm-navy">
              Specialist finishing and maintenance services.
            </h2>
          </MaskReveal>
          <Reveal delay={0.1}>
            <p className="ppm-lead mt-6 text-ppm-navy/70">
              From painting and plastering to carpentry, strata and remedial
              works, PPM delivers premium trade services for Sydney residential,
              commercial and managed properties. Every project is approached
              with preparation, precision and respect for the property.
            </p>
          </Reveal>
        </Reveal>

        <GsapMaskReveal className="ppm-card-grid mt-20 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="ppm-card flex min-h-full flex-col border border-ppm-grey/60 bg-white"
              data-gsap-reveal-item
            >
              <p className="ppm-label text-ppm-blue">{service.title}</p>
              <h3 className="mt-8 text-2xl font-semibold leading-tight text-ppm-navy">
                {service.benefit}
              </h3>
              <p className="ppm-small mt-6 flex-1 text-ppm-navy/70">
                {service.copy}
              </p>
              <a
                href="#contact"
                className="ppm-label mt-10 border-t border-ppm-grey/60 pt-5 text-ppm-navy"
              >
                {service.cta}
              </a>
            </article>
          ))}
        </GsapMaskReveal>
      </div>
    </section>
  );
}
