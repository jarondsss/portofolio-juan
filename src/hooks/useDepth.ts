"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";

export const DEPTH_MAX = 300;

export interface DepthState {
  scrollYProgress: MotionValue<number>;
  depth: MotionValue<number>;
  depthText: MotionValue<string>;
}

export function useDepth(): DepthState {
  const { scrollYProgress } = useScroll();
  const depth = useTransform(scrollYProgress, [0, 1], [0, -DEPTH_MAX]);
  const depthText = useTransform(scrollYProgress, (v: number) => {
    const m = Math.round(v * DEPTH_MAX);
    return `-${String(m).padStart(3, "0")}m`;
  });
  return { scrollYProgress, depth, depthText };
}
