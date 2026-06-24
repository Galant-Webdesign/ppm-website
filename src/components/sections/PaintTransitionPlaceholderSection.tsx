export function PaintTransitionPlaceholderSection() {
  return (
    <section
      aria-label="Partner logos separator"
      className="bg-ppm-navy py-5 sm:py-6 lg:py-8"
    >
      <div className="ppm-container">
        <p className="ppm-label text-white">Brands we've worked with:</p>
        <img
          alt="PPM partner logos pattern"
          className="mx-auto mt-5 h-auto w-full max-w-[68rem] object-contain sm:mt-6"
          height={211}
          src="/assets/partners/partners-pattern01.png?v=3"
          width={2186}
        />
      </div>
    </section>
  );
}
