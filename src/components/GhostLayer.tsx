"use client";

import ParallaxSection from "./ParallaxSection";

export default function GhostLayer({
  text,
  speed = "slow",
}: {
  text: string;
  speed?: "slow" | "normal" | "fast" | "reverse";
}) {
  return (
    <div aria-hidden="true" className="ghost-layer">
      <ParallaxSection speed={speed}>
        <div className="ghost-text">{text}</div>
      </ParallaxSection>
    </div>
  );
}
