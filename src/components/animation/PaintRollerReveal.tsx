"use client";

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

type PaintRollerRevealProps = {
  items: string[];
};

const paintAsset = "/assets/paint-effects/paint-strip-white.png";
const rollerAsset = "/assets/paint-effects/roller-white.png";
const ROLLER_CONTACT_OFFSET_RATIO = 0.06;

export function PaintRollerReveal({ items }: PaintRollerRevealProps) {
  const rootRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const paintRef = useRef<HTMLDivElement>(null);
  const rollerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const scene = sceneRef.current;
    const paint = paintRef.current;
    const roller = rollerRef.current;
    const about = document.querySelector<HTMLElement>(
      "[data-paint-about-sync]",
    );

    if (!root || !scene || !paint || !roller) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (shouldReduceMotion()) {
      gsap.set(paint, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(roller, { autoAlpha: 0 });
      if (about) {
        gsap.set(about, { autoAlpha: 1, y: 0 });
      }
      return;
    }

    registerScrollTrigger();

    const context = gsap.context(() => {
      if (about) {
        gsap.set(about, { autoAlpha: 0, y: isDesktop ? 40 : 28 });
      }

      if (!isDesktop) {
        gsap.set(paint, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(roller, { autoAlpha: 0 });

        if (about) {
          gsap.to(about, {
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 92%",
              once: true,
            },
            y: 0,
          });
        }

        return;
      }

      const getRollerContactOffset = () => {
        return roller.offsetWidth * ROLLER_CONTACT_OFFSET_RATIO;
      };

      const getFinalContactEdge = () => {
        return roller.offsetLeft + getRollerContactOffset();
      };

      const renderPaintProgress = (progress: number) => {
        const contactEdge = getFinalContactEdge() * progress;
        const rightInset = Math.max(scene.offsetWidth - contactEdge, 0);

        gsap.set(paint, {
          clipPath: `inset(0px ${rightInset}px 0px 0px)`,
        });

        gsap.set(roller, {
          autoAlpha: 1,
          x: -getFinalContactEdge() * (1 - progress),
        });

        if (about) {
          const aboutProgress = gsap.utils.clamp(0, 1, (progress - 0.12) / 0.85);

          gsap.set(about, {
            autoAlpha: aboutProgress,
            y: 40 * (1 - aboutProgress),
          });
        }
      };

      renderPaintProgress(0);

      // The roller graphic includes a handle, but the paint contact point is
      // the left roller head/cylinder. ROLLER_CONTACT_OFFSET_RATIO aligns the
      // paint reveal edge to that cylinder instead of the handle or full image.
      // The stripe position is approved and must not be changed in this
      // animation block; only the paint mask and roller x offset are animated.
      ScrollTrigger.create({
        trigger: root,
        start: "top bottom-=96",
        // Increase/decrease this value to adjust animation speed.
        end: "+=922",
        scrub: 1,
        invalidateOnRefresh: true,
        onRefresh: (self) => renderPaintProgress(self.progress),
        onUpdate: (self) => renderPaintProgress(self.progress),
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      aria-label="PPM trust highlights"
      className="pointer-events-none relative z-20 -mt-[4.5rem] overflow-x-clip bg-transparent"
      data-paint-transition
      ref={rootRef}
    >
      <div className="hidden h-52 md:block">
        <div
          className="relative flex h-52 items-start overflow-hidden"
          ref={sceneRef}
        >
          {/* This wrapper controls the static stripe position: -mt-[4.5rem] places about 35% of the 13rem stripe over the Hero and 65% below it. */}
          <div className="relative h-52 w-full overflow-visible">
            <div
              className="absolute inset-x-0 top-0 z-10 h-52 overflow-hidden [clip-path:inset(0%_100%_0%_0%)]"
              ref={paintRef}
            >
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-fill"
                draggable="false"
                src={paintAsset}
              />
              <ul className="ppm-container relative z-10 grid h-full items-center gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-6">
                {items.map((item) => (
                  <li
                    className="ppm-label max-w-40 text-balance text-center text-ppm-navy"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-0 z-20 w-[clamp(12rem,17vw,19rem)] select-none lg:right-2"
              draggable="false"
              ref={rollerRef}
              src={rollerAsset}
            />
          </div>
        </div>
      </div>

      <div className="bg-transparent px-4 py-6 md:hidden">
        <div className="mx-auto max-w-xl overflow-hidden bg-white px-5 py-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li
                className="ppm-label text-center text-ppm-navy opacity-100"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
