import { PaintRollerReveal } from "@/components/animation/PaintRollerReveal";
import { trustItems } from "@/data/site";

export function TrustIntroStrip() {
  return <PaintRollerReveal items={trustItems} />;
}
