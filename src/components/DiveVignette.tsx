"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

export default function DiveVignette() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.9]);
  const mounted = useMounted();
  return <motion.div aria-hidden="true" className="dive-vignette" style={mounted ? { opacity } : undefined} />;
}
