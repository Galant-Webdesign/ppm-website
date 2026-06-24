import Image from "next/image";
import { AboutCurtainReveal } from "@/components/animation/AboutCurtainReveal";

export function AboutPreviewSection() {
  return (
    <section className="bg-white pb-[var(--section-y)] pt-0" id="about">
      <AboutCurtainReveal className="ppm-container relative overflow-hidden">
        <div className="grid gap-12 pt-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:pt-14">
          <div data-about-image>
            <figure className="border border-ppm-grey/70 bg-ppm-light p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-ppm-grey/40">
                <Image
                  alt="Marcel, owner of PPM - Pro Performance Maintenance"
                  className="object-cover object-[52%_42%]"
                  fill
                  priority={false}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  src="/assets/photos/marcel-owner.jpg"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-ppm-grey/70 px-2 pt-4">
                <span className="ppm-label text-ppm-blue">Marcel</span>
                <span className="ppm-label text-ppm-navy/55">Owner / PPM</span>
              </figcaption>
            </figure>
          </div>

          <div
            className="py-10 lg:py-14"
            data-about-text
          >
            <p className="ppm-label text-ppm-blue">About PPM</p>
            <h2 className="ppm-heading mt-6 text-ppm-navy">
              A premium maintenance partner for Sydney properties.
            </h2>
            <div className="ppm-copy-width mt-8 space-y-6 text-ppm-navy/72">
              <p className="ppm-lead">
                I'm Marcel, the owner of PPM. For the past 10 years, I've been
                building a maintenance company focused on precision, reliable
                communication and high-quality finishes for Sydney properties.
              </p>
              <p className="ppm-body">
                We deliver premium maintenance solutions for residential and
                commercial clients, from painting and plastering to carpentry
                and property preparation. Whether you are building, renovating
                or preparing a property for sale, our team is committed to
                careful workmanship and results that make the space feel
                complete.
              </p>
            </div>

            <dl className="mt-12 grid gap-4 border-t border-ppm-grey/70 pt-6 sm:grid-cols-3">
              <div>
                <dt className="ppm-label text-ppm-blue">Experience</dt>
                <dd className="mt-3 text-xl font-semibold leading-tight text-ppm-navy">
                  10 years
                </dd>
              </div>
              <div>
                <dt className="ppm-label text-ppm-blue">Properties</dt>
                <dd className="mt-3 text-xl font-semibold leading-tight text-ppm-navy">
                  Residential & Commercial
                </dd>
              </div>
              <div>
                <dt className="ppm-label text-ppm-blue">Services</dt>
                <dd className="mt-3 text-xl font-semibold leading-tight text-ppm-navy">
                  Painting / Plastering / Carpentry
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </AboutCurtainReveal>
    </section>
  );
}
