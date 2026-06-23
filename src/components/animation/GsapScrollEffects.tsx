"use client";

import type { CSSProperties, ReactNode } from "react";
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

type GsapMaskRevealProps = {
  children: ReactNode;
  className?: string;
};

export function GsapMaskReveal({ children, className }: GsapMaskRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || shouldReduceMotion()) {
      return;
    }

    registerScrollTrigger();

    const context = gsap.context(() => {
      const items = root.querySelectorAll<HTMLElement>(
        "[data-gsap-reveal-item]",
      );
      const targets = items.length ? Array.from(items) : [root];

      gsap.set(targets, {
        autoAlpha: 0,
        clipPath: "inset(10% 0% 0% 0%)",
        y: 32,
      });

      gsap.to(targets, {
        autoAlpha: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.9,
        ease: "power3.out",
        stagger: targets.length > 1 ? 0.08 : 0,
        y: 0,
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div className={className} data-gsap-mask-reveal ref={rootRef}>
      {children}
    </div>
  );
}

type GsapParallaxProps = {
  amount?: number;
  children: ReactNode;
  className?: string;
};

export function GsapParallax({
  amount = 32,
  children,
  className,
}: GsapParallaxProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (
      !root ||
      shouldReduceMotion() ||
      !window.matchMedia("(min-width: 1024px)").matches
    ) {
      return;
    }

    registerScrollTrigger();

    const trigger =
      root.closest<HTMLElement>("[data-gsap-parallax-trigger]") ?? root;

    const context = gsap.context(() => {
      gsap.to(root, {
        ease: "none",
        y: amount,
        scrollTrigger: {
          trigger,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => context.revert();
  }, [amount]);

  return (
    <div className={className} data-gsap-parallax ref={rootRef}>
      {children}
    </div>
  );
}

type BeforeAfterScrollPrepProps = {
  children: ReactNode;
  className?: string;
};

export function BeforeAfterScrollPrep({
  children,
  className,
}: BeforeAfterScrollPrepProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || shouldReduceMotion()) {
      return;
    }

    registerScrollTrigger();

    const context = gsap.context(() => {
      gsap.fromTo(
        root,
        { "--before-after-progress": "48%" },
        {
          "--before-after-progress": "56%",
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div
      className={className}
      data-before-after
      data-before-after-scroll-prep
      ref={rootRef}
      style={
        {
          "--before-after-progress": "50%",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
