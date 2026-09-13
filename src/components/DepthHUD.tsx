"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { DEPTH_MAX } from "@/hooks/useDepth";
import { useMounted } from "@/hooks/useMounted";

const SECTIONS = [
  { id: "top", label: "whoami" },
  { id: "experience", label: "experience.log" },
  { id: "skills", label: "skills/" },
  { id: "projects", label: "projects.log" },
  { id: "contact", label: "ping contact" },
];

export default function DepthHUD() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const depth = useTransform(scrollYProgress, [0, 1], [0, -DEPTH_MAX]);
  const [depthLabel, setDepthLabel] = useState("-000m");
  const [active, setActive] = useState("top");
  const mounted = useMounted();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setDepthLabel(`-${String(Math.round(v * DEPTH_MAX)).padStart(3, "0")}m`);
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let current = "top";
      for (const s of SECTIONS) {
        if (s.id === "top") continue;
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Suppress unused warning for scrollY/progress/depth — consumed via motion style below
  void scrollY;
  void progress;
  void depth;

  return (
    <>
      {/* Top progress hairline */}
      <motion.div
        className="depth-progress"
        style={mounted ? { scaleX: progress } : undefined}
      />

      {/* Left depth rail — desktop only */}
      <div className="depth-hud" aria-hidden="true">
        <motion.div
          className="depth-hud__value"
          style={{ color: "var(--text-dim)" }}
        >
          {depthLabel}
        </motion.div>
        <div className="depth-hud__rail">
          <motion.div
            className="depth-hud__fill"
            style={mounted ? { scaleY: progress } : undefined}
          />
        </div>
        <div className="depth-hud__sections">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={s.id === "top" ? "#top" : `#${s.id}`}
              aria-hidden="true"
              tabIndex={-1}
              className={`depth-hud__dot${
                active === s.id ? " depth-hud__dot--active" : ""
              }`}
              title={s.label}
            />
          ))}
        </div>
        <div className="depth-hud__label">DEPTH</div>
      </div>
    </>
  );
}
