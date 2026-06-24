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

type AboutCurtainRevealProps = {
  children: ReactNode;
  className?: string;
};

export function AboutCurtainReveal({
  children,
  className,
}: AboutCurtainRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || shouldReduceMotion()) {
      return;
    }

    registerScrollTrigger();

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const context = gsap.context(() => {
      const imageLayer = root.querySelector<HTMLElement>("[data-about-image]");
      const textLayer = root.querySelector<HTMLElement>("[data-about-text]");
      const lineLayer = root.querySelector<HTMLElement>("[data-about-line]");

      gsap.set(root, {
        autoAlpha: 0,
        clipPath: isDesktop ? "inset(18% 0% 0% 0%)" : "inset(8% 0% 0% 0%)",
        y: isDesktop ? 48 : 20,
      });

      gsap.set(imageLayer, { y: isDesktop ? 36 : 0 });
      gsap.set(textLayer, { y: isDesktop ? 18 : 0 });
      if (lineLayer) {
        gsap.set(lineLayer, { scaleX: 0, transformOrigin: "left center" });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: isDesktop ? "top 88%" : "top 92%",
          end: isDesktop ? "top 38%" : "top 68%",
          scrub: isDesktop ? 1 : false,
        },
      });

      timeline
        .to(
          root,
          {
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            y: 0,
          },
          0,
        )
        .to(imageLayer, { ease: "none", y: 0 }, 0)
        .to(textLayer, { ease: "none", y: 0 }, 0);

      if (lineLayer) {
        timeline.to(lineLayer, { ease: "none", scaleX: 1 }, 0.1);
      }
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div className={className} data-about-curtain-reveal ref={rootRef}>
      {children}
    </div>
  );
}
