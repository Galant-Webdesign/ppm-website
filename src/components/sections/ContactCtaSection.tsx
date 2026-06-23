import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactCtaSection() {
  return (
    <section id="contact" className="ppm-section bg-ppm-navy text-white">
      <div className="ppm-container grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
        <div>
          <p className="ppm-label text-white/55">
            Contact
          </p>
          <h2 className="ppm-heading mt-5">
            Start with a clear quote.
          </h2>
          <p className="ppm-lead mt-6 max-w-2xl text-white/70">
            Tell us what your property needs and the PPM team will provide a
            clear estimate for painting, plastering, carpentry, strata or
            remedial works.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={`mailto:${site.email}`} variant="secondary">
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
        </div>
        <div className="ppm-body rounded-md border border-white/15 p-7 text-white/75">
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{site.location}</p>
        </div>
      </div>
    </section>
  );
}
