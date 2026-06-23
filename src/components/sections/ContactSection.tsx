import { MaskReveal, Reveal } from "@/components/animation/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="ppm-section bg-white">
      <div className="ppm-container grid gap-12 md:grid-cols-[1fr_0.85fr] md:items-start">
        <div>
          <Reveal>
            <p className="ppm-label text-ppm-blue">Contact</p>
          </Reveal>
          <MaskReveal>
            <h2 className="ppm-heading mt-5 text-ppm-navy">
              Request a quote from PPM.
            </h2>
          </MaskReveal>
          <Reveal delay={0.12}>
            <p className="ppm-lead ppm-copy-width mt-7 text-ppm-navy/70">
              Send through your details and a short description of the work
              required. The PPM team will review your enquiry and get back to
              you with the next steps.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href={`mailto:${site.email}`}>Submit Enquiry</Button>
              <Button
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                variant="outline"
              >
                Call Now
              </Button>
            </div>
          </Reveal>
        </div>

        <address className="ppm-body not-italic text-ppm-navy/70">
          <div className="ppm-card border border-ppm-grey/60 bg-ppm-light">
            <p className="font-semibold text-ppm-navy">{site.fullName}</p>
            <p className="mt-4">{site.phone}</p>
            <p>{site.email}</p>
            <p>{site.location}</p>
            <p>{site.facebook}</p>
          </div>
        </address>
      </div>
    </section>
  );
}
