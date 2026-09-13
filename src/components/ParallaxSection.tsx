"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

type Speed = "slow" | "normal" | "fast" | "reverse";

const RANGE: Record<Speed, [number, number]> = {
  slow: [50, -50],
  normal: [28, -28],
  fast: [84, -84],
  reverse: [-36, 36],
};

export default function ParallaxSection({
  children,
  speed = "normal",
  className = "",
  offset = ["start end", "end start"] as const,
}: {
  children: React.ReactNode;
  speed?: Speed;
  className?: string;
  offset?: readonly string[] | string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: ref as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  });
  const [from, to] = RANGE[speed];
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  // Selalu render motion.div agar ref useScroll tidak putus.
  // style undefined saat SSR / first-render agar hydration sama,
  // MotionValue baru dipasang setelah mount — animasi tetap jalan.
  return (
    <motion.div
      ref={ref}
      style={mounted && !reduce ? { y } : undefined}
      className={`parallax-layer ${className}`}
    >
      {children}
    </motion.div>
  );
}
