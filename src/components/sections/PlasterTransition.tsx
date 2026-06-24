export function PlasterTransition() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 -my-12 h-28 overflow-hidden bg-gradient-to-b from-white via-ppm-light to-ppm-light sm:-my-14 sm:h-36 lg:-my-20 lg:h-52"
    >
      <img
        alt=""
        className="absolute inset-x-0 top-0 h-full w-full select-none object-cover object-top opacity-95"
        draggable={false}
        src="/assets/paint-effects/plaster-strip.png"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-ppm-light" />
    </div>
  );
}
