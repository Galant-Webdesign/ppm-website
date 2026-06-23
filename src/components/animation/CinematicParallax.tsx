"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let scrollTriggerRegistered = false;

function registerScrollTrigger() {
  if (!scrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }
}

function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type CinematicParallaxRootProps = {
  ariaLabelledBy?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function CinematicParallaxRoot({
  ariaLabelledBy,
  children,
  className,
  id,
}: CinematicParallaxRootProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (
      !root ||
      shouldReduceMotion() ||
      !window.matchMedia("(min-width: 768px)").matches
    ) {
      return;
    }

    registerScrollTrigger();

    const context = gsap.context(() => {
      const layers = Array.from(
        root.querySelectorAll<HTMLElement>("[data-cinematic-parallax-layer]"),
      );

      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallaxY ?? 0);

        if (!speed) {
          return;
        }

        gsap.set(layer, { willChange: "transform" });

        gsap.to(layer, {
          ease: "none",
          y: speed,
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      aria-labelledby={ariaLabelledBy}
      className={className}
      data-cinematic-parallax-root
      id={id}
      ref={rootRef}
    >
      {children}
    </section>
  );
}

type CinematicParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function CinematicParallaxLayer({
  children,
  className,
  y = 0,
}: CinematicParallaxLayerProps) {
  return (
    <div
      className={className}
      data-cinematic-parallax-layer
      data-parallax-y={y}
    >
      {children}
    </div>
  );
}
