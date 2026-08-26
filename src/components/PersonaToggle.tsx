"use client";

import { usePersona } from "@/context/PersonaContext";

export default function PersonaToggle() {
  const { persona, togglePersona } = usePersona();

  return (
    <button
      onClick={togglePersona}
      className="fixed top-6 right-6 z-40 text-xs font-medium tracking-widest uppercase transition-all duration-500"
      style={
        persona === "hr"
          ? {
              color: "var(--accent)",
              background: "var(--accent-soft)",
              border: "1px solid rgba(26,115,232,0.2)",
              padding: "8px 18px",
              borderRadius: "9999px",
              letterSpacing: "0.12em",
              boxShadow: "0 2px 12px rgba(26,115,232,0.1)",
            }
          : {
              background: "#22c55e",
              color: "#000",
              border: "none",
              padding: "8px 16px",
              borderRadius: "9999px",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }
      }
    >
      {persona === "hr" ? "Coder Mode" : "> hr --mode"}
    </button>
  );
}
