import { Reveal } from "@/components/animation/Reveal";

export function PaintTransitionPlaceholderSection() {
  return (
    <section
      aria-label="Future paint roller transition"
      className="bg-ppm-navy py-16 text-white"
    >
      <div className="ppm-container">
        <Reveal>
          <p className="ppm-label text-white/55">Paint Roller Transition</p>
          <p className="ppm-body ppm-copy-width mt-5 text-white/70">
            Static placeholder for the signature PPM paint roller transition.
            Scroll-driven motion will be added in a later animation phase.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
