import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="ppm-section bg-white">
      <div className="ppm-container">
        <div className="ppm-split">
          <Reveal>
            <p className="ppm-label text-ppm-blue">Testimonials</p>
          </Reveal>
          <div>
            <MaskReveal>
              <h2 className="ppm-heading text-ppm-navy">
                Trusted by Sydney property owners.
              </h2>
            </MaskReveal>
            <Reveal delay={0.12}>
              <p className="ppm-lead ppm-copy-width mt-7 text-ppm-navy/70">
                PPM clients consistently highlight excellent workmanship,
                punctuality, cleanliness, trust and professional communication.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="ppm-card-grid mt-20 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="ppm-card border border-ppm-grey/60 bg-ppm-light"
            >
              <p className="ppm-small text-ppm-navy/70">{testimonial.copy}</p>
              <p className="mt-8 font-semibold text-ppm-navy">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
