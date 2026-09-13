"use client";

import { useEffect, useState } from "react";

/** True only after client mount — use to gate MotionValue styles and avoid SSR hydration mismatch. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
