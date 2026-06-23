import { GsapMaskReveal } from "@/components/animation/GsapScrollEffects";
import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section id="process" className="ppm-section bg-white">
      <div className="ppm-container">
        <Reveal className="ppm-section-kicker">
          <p className="ppm-label text-ppm-blue">
            Process
          </p>
          <MaskReveal>
            <h2 className="ppm-heading mt-5 text-ppm-navy">
              A clean process from first call to final finish.
            </h2>
          </MaskReveal>
        </Reveal>

        <GsapMaskReveal className="ppm-card-grid mt-20 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="border-t border-ppm-grey/70 pt-6"
              data-gsap-reveal-item
            >
              <p className="ppm-label text-ppm-blue">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-ppm-navy">
                {step.title}
              </h3>
              <p className="ppm-small mt-4 text-ppm-navy/70">
                {step.copy}
              </p>
            </article>
          ))}
        </GsapMaskReveal>
      </div>
    </section>
  );
}
