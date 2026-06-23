import { Reveal } from "@/components/animation/Reveal";
import { trustItems } from "@/data/site";

export function TrustIntroStrip() {
  return (
    <section className="border-b border-ppm-grey/40 bg-white">
      <div className="ppm-container grid gap-x-8 gap-y-4 py-7 sm:grid-cols-2 lg:grid-cols-6">
        {trustItems.map((item) => (
          <Reveal key={item}>
            <p className="ppm-label text-ppm-blue">{item}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
