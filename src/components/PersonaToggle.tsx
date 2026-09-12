"use client";

import { usePersona } from "@/context/PersonaContext";

export default function PersonaToggle() {
  const { persona, togglePersona } = usePersona();

  return (
    <button
      onClick={togglePersona}
      className="persona-toggle"
      aria-label={persona === "hr" ? "Switch to Coder mode" : "Switch to HR mode"}
    >
      <span style={{ color: "var(--cyan-signal)", fontSize: "10px" }}>●</span>
      {persona === "hr" ? "> coder --mode" : "> hr --mode"}
    </button>
  );
}
