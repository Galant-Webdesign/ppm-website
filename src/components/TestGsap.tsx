"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestGsap() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-[160vh] bg-ppm-light px-10 py-40">
      <div className="mb-[80vh] text-ppm-navy/70">
        Przewiń niżej, żeby uruchomić animację GSAP.
      </div>

      <div
        ref={boxRef}
        className="max-w-xl rounded-2xl bg-ppm-navy p-8 text-2xl font-semibold text-white"
      >
        GSAP ScrollTrigger działa.
      </div>
    </section>
  );
}
