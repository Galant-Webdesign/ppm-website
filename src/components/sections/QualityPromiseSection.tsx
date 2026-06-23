import { qualityPromises } from "@/data/site";

export function QualityPromiseSection() {
  return (
    <section id="why-ppm" className="ppm-section bg-ppm-light">
      <div className="ppm-container grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
        <div>
          <p className="ppm-label text-ppm-blue">
            Project Quality
          </p>
          <h2 className="ppm-heading mt-5 text-ppm-navy">
            A better standard of property maintenance.
          </h2>
          <p className="ppm-lead mt-6 text-ppm-navy/70">
            This placeholder section will become the project quality and
            maintenance promise area, showing why PPM is trusted for homes,
            strata properties and commercial spaces.
          </p>
        </div>

        <div className="grid gap-4">
          {qualityPromises.map((item) => (
            <div
              key={item}
              className="rounded-md border border-ppm-grey/60 bg-white p-6 text-ppm-navy"
            >
              <p className="text-lg font-semibold leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
