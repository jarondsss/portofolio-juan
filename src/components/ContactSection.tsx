"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { usePersona } from "@/context/PersonaContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ── Uptime counter ─────────────────────────────────────────
function useUptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      setSeconds(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

// ── Prompt display ─────────────────────────────────────────
function SectionPrompt({ cmd }: { cmd: string }) {
  return (
    <div className="prompt-line mb-3">
      <span className="prompt-user">guest</span>
      <span className="prompt-path">@portfolio</span>
      <span style={{ color: "var(--text-ghost)" }}>:</span>
      <span className="prompt-path">~</span>
      <span style={{ color: "var(--text-ghost)" }}>$ </span>
      <span className="prompt-cmd">{cmd}</span>
    </div>
  );
}

// ── Contact links ──────────────────────────────────────────
const contactLinks = [
  {
    label: "[EMAIL]",
    value: "anjurondali@gmail.com",
    href: "mailto:anjurondali@gmail.com",
    note: "preferred",
  },
  {
    label: "[GITHUB]",
    value: "github.com/jarondsss",
    href: "https://github.com/jarondsss",
    note: null,
  },
  {
    label: "[LINKEDIN]",
    value: "linkedin/juan-akbar-ronaldi",
    href: "https://www.linkedin.com/in/juan-akbar-ronaldi-81772236b",
    note: null,
  },
];

// ── System status bar ──────────────────────────────────────
function SystemStatusBar() {
  const uptime = useUptime();
  return (
    <div className="status-bar mt-16">
      <span className="status-indicator" />
      <span>SESSION_UPTIME: {uptime}</span>
      <span style={{ color: "var(--line)" }}>|</span>
      <span>LOCATION: PAMULANG · TANGERANG SELATAN · ID</span>
      <span style={{ color: "var(--line)" }}>|</span>
      <span>REMOTE: TRUE</span>
      <span style={{ color: "var(--line)" }}>|</span>
      <div className="ml-auto flex gap-4">
        <a
          href="https://github.com/jarondsss"
          target="_blank"
          rel="noopener noreferrer"
          className="bracket-link"
        >
          [GH]
        </a>
        <a
          href="https://www.linkedin.com/in/juan-akbar-ronaldi-81772236b"
          target="_blank"
          rel="noopener noreferrer"
          className="bracket-link"
        >
          [LI]
        </a>
        <a href="mailto:anjurondali@gmail.com" className="bracket-link">
          [MAIL]
        </a>
      </div>
    </div>
  );
}

// ── HR Contact ─────────────────────────────────────────────
function ContactHR() {
  return (
    <section
      id="contact"
      className="content-layer section-panel px-4 md:px-8 lg:px-16 py-28"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-12" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionPrompt cmd="ping contact" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-display mb-3">
            contact
            <span style={{ color: "var(--blue-glow)" }}>/</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-body mb-10"
            style={{ color: "var(--text-dim)", maxWidth: "480px" }}
          >
            Terbuka untuk posisi HR, konsultasi operasional, dan kolaborasi yang berdampak nyata.
          </motion.p>

          {/* Contact entries */}
          <motion.div variants={stagger} className="space-y-2 mb-10">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={fadeUp}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="term-panel-hover flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-4"
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    color: "var(--blue-glow)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    minWidth: "90px",
                    flexShrink: 0,
                  }}
                >
                  {link.label}
                </span>
                <span
                  className="text-meta flex-1"
                  style={{ color: "var(--text-dim)", transition: "color 120ms" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
                  }}
                >
                  {link.value}
                </span>
                {link.note && (
                  <span
                    style={{
                      color: "var(--cyan-signal)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    [{link.note}]
                  </span>
                )}
                <span style={{ color: "var(--text-ghost)", fontSize: "11px" }}>
                  ↗
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer metadata */}
          <motion.div
            variants={fadeUp}
            className="text-meta"
            style={{ color: "var(--text-ghost)", fontSize: "11px" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--cyan-signal)",
                boxShadow: "0 0 6px var(--cyan-signal)",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />
            Actively looking for the right team · Open to remote
          </motion.div>
        </motion.div>
      </div>

      <SystemStatusBar />
    </section>
  );
}

// ── Coder Contact ──────────────────────────────────────────
function ContactCoder() {
  const [pingPhase, setPingPhase] = useState(0);

  useEffect(() => {
    setPingPhase(0);
    const timers = [
      setTimeout(() => setPingPhase(1), 600),
      setTimeout(() => setPingPhase(2), 1200),
      setTimeout(() => setPingPhase(3), 1900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="contact"
      className="content-layer section-void px-4 md:px-8 lg:px-16 py-28"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-12" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionPrompt cmd="ping contact --open" />
          </motion.div>

          {pingPhase >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-meta mb-1"
              style={{ color: "var(--text-dim)", fontSize: "11px" }}
            >
              PING contact.server — 56 data bytes
            </motion.div>
          )}
          {pingPhase >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-meta mb-4"
              style={{ color: "var(--cyan-signal)", fontSize: "11px" }}
            >
              64 bytes from juan@portfolio: icmp_seq=1 ttl=64 time=1ms
            </motion.div>
          )}

          {pingPhase >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.h2 variants={fadeUp} className="text-display mb-10">
                connect
                <span style={{ color: "var(--blue-glow)" }}>/</span>
              </motion.h2>

              {/* Contact table */}
              <div
                className="flex items-center gap-6 py-2 mb-1"
                style={{
                  borderBottom: "1px solid var(--line)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  color: "var(--text-ghost)",
                }}
              >
                <span style={{ width: "90px" }}>CHANNEL</span>
                <span style={{ flex: 1 }}>ADDRESS</span>
                <span style={{ width: "60px" }}>STATUS</span>
              </div>

              <div className="mb-12">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "24px",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--line)",
                      textDecoration: "none",
                      transition: "background 120ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(30,99,200,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <span
                      style={{
                        color: "var(--blue-glow)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        width: "90px",
                        flexShrink: 0,
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        color: "var(--text-dim)",
                        fontSize: "12px",
                        letterSpacing: "0.03em",
                        flex: 1,
                      }}
                    >
                      {link.value}
                    </span>
                    <span
                      style={{
                        color: "var(--cyan-signal)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        width: "60px",
                        flexShrink: 0,
                      }}
                    >
                      OPEN
                    </span>
                  </a>
                ))}
              </div>

              {/* EOF */}
              <div
                style={{
                  color: "var(--text-ghost)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                }}
              >
                [ EOF ] // JUAN_AR PORTFOLIO_v2.6 · {new Date().getFullYear()}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <SystemStatusBar />
    </section>
  );
}

export default function ContactSection() {
  const { persona } = usePersona();
  return persona === "hr" ? <ContactHR /> : <ContactCoder />;
}
