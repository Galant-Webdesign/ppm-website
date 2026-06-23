"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

export function BlueprintAccentLoader() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;

    import("./BlueprintAccentScene").then((module) => {
      if (isMounted) {
        setScene(() => module.default);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative h-52 overflow-hidden border border-white/15 bg-ppm-navy/35 md:h-64">
      <BlueprintAccentFallback />
      {Scene ? <Scene /> : null}
    </div>
  );
}

function BlueprintAccentFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,203,203,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,203,203,0.12)_1px,transparent_1px)] bg-[size:32px_32px]"
    >
      <div className="absolute left-8 top-8 h-24 w-36 border border-white/20" />
      <div className="absolute bottom-8 right-8 h-20 w-28 border border-ppm-grey/30" />
      <div className="absolute left-8 right-8 top-1/2 h-px bg-white/20" />
      <div className="absolute bottom-10 left-8 h-px w-28 bg-ppm-grey/40" />
    </div>
  );
}
