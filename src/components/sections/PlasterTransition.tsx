export function PlasterTransition() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 -mb-14 -mt-16 h-52 overflow-hidden bg-ppm-light sm:-mb-20 sm:-mt-20 sm:h-64 lg:-mb-32 lg:-mt-36 lg:h-[30rem]"
    >
      <img
        alt=""
        className="absolute left-1/2 top-0 h-full w-full min-w-[54rem] -translate-x-1/2 select-none object-cover object-center opacity-100"
        draggable={false}
        src="/assets/paint-effects/plaster-strip02.png"
      />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-ppm-light" />
    </div>
  );
}
