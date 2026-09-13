"use client";

import { useEffect } from "react";
import {
  useMotionValue,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";

export interface MouseParallax {
  x: MotionValue<number>;
  y: MotionValue<number>;
  enabled: boolean;
}

export function useMouseParallax(strength = 12): MouseParallax {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      rawX.set(nx * 2 * strength);
      rawY.set(ny * 2 * strength);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY, reduce, strength]);

  const enabled = !reduce;
  return { x, y, enabled };
}
