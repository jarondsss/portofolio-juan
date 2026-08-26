"use client";

import { createContext, useContext, useState } from "react";

type Persona = "hr" | "coder";

interface PersonaContextType {
  persona: Persona;
  togglePersona: () => void;
}

const PersonaContext = createContext<PersonaContextType | null>(null);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersona] = useState<Persona>("hr");

  const togglePersona = () => {
    setPersona((prev) => (prev === "hr" ? "coder" : "hr"));
  };

  return (
    <PersonaContext.Provider value={{ persona, togglePersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used inside PersonaProvider");
  return ctx;
}
