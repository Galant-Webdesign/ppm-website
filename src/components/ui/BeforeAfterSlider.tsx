"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  afterAlt: string;
  afterImage: string;
  beforeAlt: string;
  beforeImage: string;
  category: string;
  description: string;
  title: string;
};

function clampPosition(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BeforeAfterSlider({
  afterAlt,
  afterImage,
  beforeAlt,
  beforeImage,
  category,
  description,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const updatePosition = useCallback((clientX: number) => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const bounds = frame.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clampPosition(nextPosition));
  }, []);

  return (
    <article
      className="overflow-hidden border border-ppm-grey/60 bg-white shadow-[0_1.5rem_4rem_rgba(0,13,32,0.08)]"
      data-gsap-reveal-item
    >
      <div
        aria-label={`${title} before and after comparison`}
        aria-labelledby={titleId}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(position)}
        className="group relative aspect-[4/3] cursor-ew-resize touch-none overflow-hidden bg-ppm-light outline-none"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setPosition((current) => clampPosition(current - 5));
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            setPosition((current) => clampPosition(current + 5));
          }

          if (event.key === "Home") {
            event.preventDefault();
            setPosition(0);
          }

          if (event.key === "End") {
            event.preventDefault();
            setPosition(100);
          }
        }}
        onPointerCancel={() => setIsDragging(false)}
        onPointerDown={(event) => {
          setIsDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
          updatePosition(event.clientX);
        }}
        onPointerLeave={() => {
          setIsDragging(false);
        }}
        onPointerMove={(event) => {
          if (event.pointerType === "mouse" || isDragging) {
            updatePosition(event.clientX);
          }
        }}
        onPointerUp={(event) => {
          setIsDragging(false);

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        ref={frameRef}
        role="slider"
        tabIndex={0}
      >
        <Image
          alt={beforeAlt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={beforeImage}
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            alt={afterAlt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={afterImage}
          />
        </div>

        <span className="absolute left-5 top-5 rounded-sm bg-ppm-navy px-3 py-2">
          <span className="ppm-label text-white">After</span>
        </span>
        <span className="absolute right-5 top-5 rounded-sm bg-white px-3 py-2 shadow-[0_0.75rem_2rem_rgba(0,13,32,0.12)]">
          <span className="ppm-label text-ppm-navy">Before</span>
        </span>

        <div
          aria-hidden="true"
          className="absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(0,13,32,0.22)]"
          style={{ left: `${position}%` }}
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-ppm-navy/90 shadow-[0_1rem_2.5rem_rgba(0,13,32,0.22)] transition-colors duration-200 group-focus-visible:bg-ppm-navy group-hover:bg-ppm-navy"
          style={{ left: `${position}%` }}
        >
          <span className="h-4 w-px bg-white/80" />
          <span className="ml-1 h-4 w-px bg-white/80" />
        </div>
      </div>

      <div className="ppm-card">
        <p className="ppm-label text-ppm-blue">{category}</p>
        <h3 className="ppm-subheading mt-7 text-ppm-navy" id={titleId}>
          {title}
        </h3>
        <p className="ppm-small mt-5 text-ppm-navy/70">{description}</p>
      </div>
    </article>
  );
}
