"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { usePersona } from "@/context/PersonaContext";

// ── Typewriter hook ───────────────────────────────────────
function useTypewriter(text: string, speed = 34, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// ── Prompt line component ─────────────────────────────────
function PromptLine({ cmd, delay = 0 }: { cmd: string; delay?: number }) {
  const { displayed, done } = useTypewriter(cmd, 32, delay);
  return (
    <div className="prompt-line" style={{ minHeight: "1.6em" }}>
      <span className="prompt-user">guest</span>
      <span className="prompt-path">@portfolio</span>
      <span style={{ color: "var(--text-ghost)" }}>:</span>
      <span className="prompt-path">~</span>
      <span style={{ color: "var(--text-ghost)" }}>$ </span>
      <span className="prompt-cmd">{displayed}</span>
      {!done && <span className="cursor-blink" />}
    </div>
  );
}

// ── Fade in line after delay ──────────────────────────────
function OutputLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── HR Hero ───────────────────────────────────────────────
function HeroHR() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 900),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="content-layer min-h-[100dvh] flex flex-col justify-center px-4 md:px-8 lg:px-16 py-24"
      style={{ background: "transparent" }}
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Terminal window chrome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="term-panel overflow-hidden"
          style={{ boxShadow: "0 4px 40px rgba(5,7,10,0.9)" }}
        >
          {/* Title bar */}
          <div className="terminal-titlebar">
            <div className="terminal-dot terminal-dot--close" />
            <div className="terminal-dot terminal-dot--min" />
            <div className="terminal-dot terminal-dot--max" />
            <span className="terminal-title">deep-terminal — zsh</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 space-y-1" style={{ minHeight: "420px" }}>
            {/* Prompt 1 */}
            <PromptLine cmd="whoami" delay={200} />

            {/* Output: Name + role */}
            {phase >= 1 && (
              <OutputLine delay={0} className="space-y-3 pt-2 pb-4">
                <div>
                  <div
                    className="text-display-xl"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    Juan A.{" "}
                    <span style={{ color: "var(--blue-glow)" }}>Ronaldi</span>
                    <span className="cursor-blink" style={{ marginLeft: "4px" }} />
                  </div>
                  <div
                    className="text-label mt-2"
                    style={{ color: "var(--text-dim)" }}
                  >
                    HR &amp; Operations · Tangerang Selatan · ID
                  </div>
                </div>

                <p
                  className="text-body"
                  style={{ color: "var(--text-dim)", maxWidth: "560px" }}
                >
                  6+ tahun di HR dan operasional — dari event lapangan sampai
                  remote company. Spesialisasi rekrutmen, people ops, dan
                  membangun sistem yang benar-benar dipakai tim.
                </p>
              </OutputLine>
            )}

            {/* Prompt 2 */}
            {phase >= 2 && (
              <div className="pt-2">
                <PromptLine cmd="cat status.log" delay={0} />
              </div>
            )}

            {/* Output: status */}
            {phase >= 3 && (
              <OutputLine delay={0.3} className="pt-1 pb-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-meta">
                  <span>
                    <span style={{ color: "var(--text-ghost)" }}>status</span>
                    <span style={{ color: "var(--text-dim)" }}> = </span>
                    <span style={{ color: "var(--cyan-signal)" }}>
                      ACTIVELY_LOOKING
                    </span>
                  </span>
                  <span>
                    <span style={{ color: "var(--text-ghost)" }}>mode</span>
                    <span style={{ color: "var(--text-dim)" }}> = </span>
                    <span style={{ color: "var(--blue-glow)" }}>
                      &quot;open to the right team&quot;
                    </span>
                  </span>
                  <span>
                    <span style={{ color: "var(--text-ghost)" }}>remote</span>
                    <span style={{ color: "var(--text-dim)" }}> = </span>
                    <span style={{ color: "var(--text-primary)" }}>true</span>
                  </span>
                </div>

                {/* CTA row */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href="#experience"
                    className="term-link inline-flex items-center gap-2 text-body"
                    style={{
                      border: "1px solid var(--line)",
                      padding: "8px 20px",
                      borderRadius: "2px",
                      color: "var(--text-primary)",
                      transition: "border-color 150ms, color 150ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--blue-core)";
                      e.currentTarget.style.color = "var(--blue-glow)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--line)";
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                  >
                    <span style={{ color: "var(--blue-glow)" }}>&gt;</span>
                    {" "}cat experience.log
                  </a>
                  <a
                    href="#contact"
                    className="bracket-link"
                    style={{ padding: "8px 0" }}
                  >
                    [ping contact]
                  </a>
                </div>
              </OutputLine>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Coder Hero ────────────────────────────────────────────
function HeroCoder() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setPhase(0);
    const timers = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="content-layer min-h-[100dvh] flex flex-col justify-center px-4 md:px-8 lg:px-16 py-24"
      style={{ background: "transparent" }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="term-panel overflow-hidden"
          style={{ boxShadow: "0 4px 40px rgba(5,7,10,0.8)" }}
        >
          {/* Title bar */}
          <div className="terminal-titlebar">
            <div className="terminal-dot terminal-dot--close" />
            <div className="terminal-dot terminal-dot--min" />
            <div className="terminal-dot terminal-dot--max" />
            <span className="terminal-title">deep-terminal — zsh · CODER_MODE</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 space-y-1" style={{ minHeight: "480px" }}>
            {/* Top metadata */}
            <div
              className="text-label mb-4"
              style={{ color: "var(--text-ghost)", fontSize: "10px" }}
            >
              [ JUAN_AR ] // PORTFOLIO_v2.6 · TANGERANG-SELATAN · ID
            </div>

            {/* Prompt 1 */}
            <PromptLine cmd="whoami --mode=coder" delay={100} />

            {phase >= 1 && (
              <OutputLine delay={0} className="pt-2 pb-3">
                <div className="text-display-xl" style={{ letterSpacing: "-0.03em" }}>
                  JUAN.
                  <br />
                  <span style={{ color: "var(--blue-glow)" }}>RONALDI</span>
                  {phase < 2 && <span className="cursor-blink" />}
                </div>
                <div className="text-meta mt-3" style={{ color: "var(--text-dim)" }}>
                  engineer. builds things that ship. debugs at 2am by choice.
                </div>
              </OutputLine>
            )}

            {phase >= 2 && (
              <div className="pt-2">
                <PromptLine cmd="cat stack.json | head -3" delay={0} />
              </div>
            )}

            {phase >= 3 && (
              <OutputLine delay={0.2} className="pt-1 pb-3">
                <div
                  className="term-panel p-4"
                  style={{ fontSize: "12px", lineHeight: "1.8", maxWidth: "440px" }}
                >
                  <div>
                    <span style={{ color: "var(--text-ghost)" }}>
                      &quot;frontend&quot;
                    </span>
                    <span style={{ color: "var(--text-dim)" }}>: </span>
                    <span style={{ color: "var(--blue-glow)" }}>
                      [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;]
                    </span>
                    <span style={{ color: "var(--text-dim)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-ghost)" }}>
                      &quot;backend&quot;
                    </span>
                    <span style={{ color: "var(--text-dim)" }}>: </span>
                    <span style={{ color: "var(--blue-glow)" }}>
                      [&quot;Prisma&quot;, &quot;Supabase&quot;, &quot;SQLite&quot;]
                    </span>
                    <span style={{ color: "var(--text-dim)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-ghost)" }}>
                      &quot;mobile&quot;
                    </span>
                    <span style={{ color: "var(--text-dim)" }}>: </span>
                    <span style={{ color: "var(--blue-glow)" }}>
                      [&quot;Kotlin&quot;, &quot;Android&quot;, &quot;Capacitor&quot;]
                    </span>
                  </div>
                </div>
              </OutputLine>
            )}

            {phase >= 4 && (
              <div className="pt-2">
                <PromptLine cmd="ping contact" delay={0} />
                <OutputLine delay={0.5} className="pt-2">
                  <div className="flex flex-wrap gap-4 items-center text-meta">
                    <span>
                      <span style={{ color: "var(--text-dim)" }}>CONNECTING</span>
                      <span className="loading-dots" style={{ color: "var(--cyan-signal)" }} />
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="#projects"
                      className="term-link inline-flex items-center gap-2"
                      style={{
                        border: "1px solid var(--blue-core)",
                        padding: "8px 20px",
                        borderRadius: "2px",
                        color: "var(--blue-glow)",
                        fontSize: "13px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      cat projects.log
                    </a>
                    <a
                      href="https://github.com/jarondsss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bracket-link"
                      style={{ padding: "8px 0", fontSize: "12px" }}
                    >
                      [GH] github.com/jarondsss
                    </a>
                  </div>
                </OutputLine>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  const { persona } = usePersona();
  return persona === "hr" ? <HeroHR /> : <HeroCoder />;
}
