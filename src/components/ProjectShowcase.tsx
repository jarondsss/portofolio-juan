"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
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
  show: { transition: { staggerChildren: 0.07 } },
};

// ── Project data ───────────────────────────────────────────
const projects = [
  {
    index: "01",
    ts: "2024-11-03T02:41:00",
    name: "personal-hr",
    stack: "Next.js · Prisma · TypeScript · SQLite · Tailwind",
    desc: "Full-stack HR management — attendance, payroll, employee data. Built to actually replace spreadsheets.",
    url: "https://personal-hr-henna.vercel.app/",
    status: "LIVE",
    lines: [
      "> Attendance module with real-time status",
      "> Payroll calculation engine",
      "> Employee database with search & filters",
      "> SOP document management",
    ],
  },
  {
    index: "02",
    ts: "2024-12-19T23:08:00",
    name: "logileap",
    stack: "Next.js · TypeScript · Supabase · OpenAI · Leaflet · Recharts",
    desc: "Logistics tracking app with AI integration, maps, and real-time data visualization.",
    url: "https://logileap.vercel.app/",
    status: "LIVE",
    lines: [
      "> Real-time fleet tracking on Leaflet maps",
      "> AI-powered delivery ETA prediction via OpenAI",
      "> Analytics dashboard with Recharts",
      "> Supabase realtime sync",
    ],
  },
  {
    index: "03",
    ts: "2025-01-07T14:22:00",
    name: "mastermove-landing",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
    desc: "Landing page for Mastermove Indonesia.",
    url: "https://www.mastermoveindonesia.com/",
    status: "LIVE",
    lines: [
      "> Fully responsive marketing landing",
      "> Framer Motion entrance animations",
      "> SEO-optimized metadata",
    ],
  },
  {
    index: "04",
    ts: "2025-02-14T19:55:00",
    name: "alokasi",
    stack: "React · Vite · Capacitor · Recharts · Framer Motion",
    desc: "Mobile-ready budget & cash book app with charts and animations.",
    url: "#",
    status: "LOCAL",
    lines: [
      "> Cash flow tracking with category tagging",
      "> Recharts bar + donut charts",
      "> Capacitor wrapping for Android install",
      "> Offline-first storage",
    ],
  },
  {
    index: "05",
    ts: "2025-03-02T03:17:00",
    name: "driving-app",
    stack: "Android · Kotlin · Gradle",
    desc: "Native Android driver mode app with voice selection and batch message support.",
    url: "#",
    status: "LOCAL",
    lines: [
      "> Batch WhatsApp message sender",
      "> Voice TTS for route instructions",
      "> Driver session state management",
    ],
  },
];

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

// ── Format timestamp ───────────────────────────────────────
function formatTs(iso: string) {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// ── Project row with accordion ─────────────────────────────
function ProjectRow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeUp} className="term-panel mb-2">
      {/* Log entry line */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4"
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
          <span
            className="log-timestamp flex-shrink-0"
            style={{ color: "var(--text-ghost)", minWidth: "36px" }}
          >
            [{project.index}]
          </span>
          <span
            className="log-timestamp flex-shrink-0 hidden md:inline"
            style={{ color: "var(--text-ghost)" }}
          >
            {formatTs(project.ts)}
          </span>
          <span className="log-name flex-shrink-0">{project.name}</span>
          <span className="log-sep hidden sm:inline">—</span>
          <span className="log-stack hidden sm:inline">{project.stack}</span>

          <div className="ml-auto flex items-center gap-3 flex-shrink-0">
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                color:
                  project.status === "LIVE"
                    ? "var(--cyan-signal)"
                    : "var(--text-ghost)",
              }}
            >
              {project.status === "LIVE" ? "● LIVE" : "○ LOCAL"}
            </span>
            <span
              style={{
                color: "var(--text-ghost)",
                fontSize: "12px",
                transition: "transform 150ms",
                display: "inline-block",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              &gt;
            </span>
          </div>
        </div>
      </button>

      {/* Accordion — fade + height 150ms */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 160ms ease, opacity 150ms ease",
        }}
      >
        <div
          className="px-5 pb-5"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          {/* Stack detail (mobile) */}
          <div
            className="log-stack mt-3 mb-3 sm:hidden"
            style={{ fontSize: "11px" }}
          >
            {project.stack}
          </div>

          {/* Description */}
          <p className="log-desc mb-3 mt-3">{project.desc}</p>

          {/* Implementation notes */}
          <div className="space-y-1 mb-4">
            {project.lines.map((line, i) => (
              <div key={i} className="text-meta" style={{ fontSize: "11px" }}>
                <span style={{ color: "var(--text-ghost)" }}>  </span>
                <span style={{ color: "var(--text-dim)" }}>{line}</span>
              </div>
            ))}
          </div>

          {/* Link */}
          {project.url !== "#" && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="term-link"
              style={{ fontSize: "12px" }}
            >
              [open ↗ {project.url.replace("https://", "")}]
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── HR view — same projects but presented differently ──────
function HRProjectsView() {
  return (
    <section
      id="projects"
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
            <SectionPrompt cmd="cat projects.log" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display mb-2">
            projects
            <span style={{ color: "var(--blue-glow)" }}>.log</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-meta mb-10"
            style={{ color: "var(--text-dim)" }}
          >
            Side work — self-taught full-stack dev membangun tools yang solve real problems.
          </motion.p>

          {projects.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Coder view ─────────────────────────────────────────────
function CoderProjectsView() {
  return (
    <section
      id="projects"
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
            <SectionPrompt cmd="cat projects.log" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display mb-10">
            projects
            <span style={{ color: "var(--blue-glow)" }}>.log</span>
          </motion.h2>

          {projects.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function ProjectShowcase() {
  const { persona } = usePersona();
  return persona === "hr" ? <HRProjectsView /> : <CoderProjectsView />;
}
