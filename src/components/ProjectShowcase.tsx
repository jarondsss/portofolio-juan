"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } },
};

const showcaseProjects = [
  {
    index: "01",
    name: "PERSONAL-HR",
    label: "Personal HR",
    desc: "Full-stack HR management — attendance, payroll, employee data. Built to actually replace spreadsheets.",
    tech: ["Next.js", "Prisma", "TypeScript", "SQLite", "Tailwind"],
    url: "https://personal-hr-henna.vercel.app/",
    terminal: [
      "> npm run build",
      "✓ compiled successfully",
      "",
      "> prisma db push",
      "✓ database schema synced",
      "",
      "ROUTES:",
      "  /dashboard     employees, leave, payroll",
      "  /employees     CRUD + search + export",
      "  /payroll       monthly calculation",
      "  /reports       attendance analytics",
    ],
  },
  {
    index: "02",
    name: "LOGILEAP",
    label: "LogiLeap",
    desc: "Logistics tracking with AI integration, real-time maps, and revenue visualization.",
    tech: ["Next.js", "Supabase", "OpenAI", "Recharts", "Leaflet"],
    url: "https://logileap.vercel.app/",
    terminal: [
      "> npm run dev",
      "▲ Next.js ready on port 3000",
      "",
      "INTEGRATIONS:",
      "  OpenAI GPT-4  →  route optimization",
      "  Supabase      →  realtime fleet data",
      "  Leaflet       →  live map tracking",
      "  Recharts      →  revenue dashboard",
      "",
      "STATUS: 12 trucks active ///",
    ],
  },
  {
    index: "03",
    name: "MASTERMOVE",
    label: "Mastermove Landing",
    desc: "Landing page for Mastermove Indonesia, domestic & international logistics company.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://www.mastermoveindonesia.com/",
    terminal: [
      "> vercel deploy --prod",
      "✓ deployed to production",
      "",
      "URL: mastermoveindonesia.com",
      "",
      "PERF SCORES:",
      "  Performance   98",
      "  Accessibility 96",
      "  Best Practice 100",
      "  SEO           100",
    ],
  },
  {
    index: "04",
    name: "ALOKASI",
    label: "Alokasi",
    desc: "Mobile-ready digital cash book. Budget tracking, chart visualizations, Capacitor native build.",
    tech: ["React", "Vite", "Capacitor", "Recharts", "Framer Motion"],
    url: "#",
    terminal: [
      "> npx cap build android",
      "✓ Android APK generated",
      "",
      "FEATURES:",
      "  Cash book       income / expense",
      "  Budget tracking monthly limits",
      "  Charts          spending trends",
      "  Offline         local SQLite",
      "",
      "TARGET: Android 8+ ///",
    ],
  },
  {
    index: "05",
    name: "DRIVING-APP",
    label: "Driving App",
    desc: "Native Android driver mode — voice selection, batch message support, GPS navigation assist.",
    tech: ["Android", "Kotlin", "Gradle"],
    url: "#",
    terminal: [
      "> ./gradlew assembleRelease",
      "BUILD SUCCESSFUL in 42s",
      "",
      "FEATURES:",
      "  Voice TTS      ID Female / EN Male",
      "  Batch msg      queue & auto-send",
      "  Driver mode    locked UI, GPS",
      "  Dark mode      OLED optimized",
      "",
      "MIN SDK: API 26 (Android 8.0)",
    ],
  },
];

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const project = showcaseProjects[active];

  return (
    <section
      id="projects"
      style={{ background: "#0a0a0a", fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {/* Section header */}
      <div
        className="px-6 md:px-16 py-10 border-b"
        style={{ borderColor: "#1a1a1a" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span style={{ color: "#e61919", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            // PROJECTS
          </span>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#eaeaea",
              marginTop: "12px",
            }}
          >
            BUILT &amp;
            <br />
            <span style={{ color: "#333" }}>SHIPPED</span>
          </h2>
        </motion.div>
      </div>

      {/* Bento grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="coder-grid px-6 md:px-16"
        style={{ gridTemplateColumns: "1fr 1.7fr", minHeight: "520px" }}
      >
        {/* Project list */}
        <div className="coder-cell border-r" style={{ borderColor: "#1a1a1a" }}>
          {/* List header */}
          <div
            className="flex items-center gap-4 px-4 py-3 border-b"
            style={{ borderColor: "#1a1a1a" }}
          >
            <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em" }}>#</span>
            <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em" }}>PROJECT_NAME</span>
          </div>

          {showcaseProjects.map((proj, i) => (
            <button
              key={proj.name}
              onClick={() => setActive(i)}
              className={`coder-row w-full text-left ${active === i ? "active" : ""}`}
              style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px", padding: "16px" }}
            >
              <div className="flex items-center gap-3 w-full">
                <span style={{ color: "#333", fontSize: "9px", width: "20px" }}>{proj.index}</span>
                <span
                  style={{
                    color: active === i ? "#eaeaea" : "#666",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    flex: 1,
                  }}
                >
                  {proj.name}
                </span>
                <span style={{ color: active === i ? "#e61919" : "#333", fontSize: "11px" }}>&gt;&gt;&gt;</span>
              </div>
              <div style={{ paddingLeft: "23px" }}>
                <div className="flex flex-wrap gap-1 mt-1">
                  {proj.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      style={{
                        color: "#444",
                        fontSize: "9px",
                        letterSpacing: "0.08em",
                        border: "1px solid #222",
                        padding: "1px 6px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span style={{ color: "#333", fontSize: "9px" }}>+{proj.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Preview panel */}
        <div className="coder-cell flex flex-col">
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-6 py-3 border-b"
            style={{ borderColor: "#1a1a1a" }}
          >
            <span style={{ color: "#e61919", fontSize: "10px", letterSpacing: "0.12em" }}>
              {project.index} / {project.name}
            </span>
            {project.url !== "#" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#444", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}
                className="hover:text-[#eaeaea] transition-colors"
              >
                LIVE DEMO ↗
              </a>
            )}
          </div>

          {/* Terminal output */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="flex-1 p-6"
            style={{ background: "#050505" }}
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 mb-4">
              <div style={{ width: "8px", height: "8px", background: "#e61919" }} />
              <div style={{ width: "8px", height: "8px", background: "#333" }} />
              <div style={{ width: "8px", height: "8px", background: "#333" }} />
              <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.12em", marginLeft: "8px" }}>
                ~/projects/{project.name.toLowerCase()}
              </span>
            </div>

            {/* Terminal lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {project.terminal.map((line, i) => (
                <div key={i} style={{ fontSize: "11px", lineHeight: 1.6 }}>
                  {line === "" ? (
                    <br />
                  ) : line.startsWith(">") ? (
                    <span style={{ color: "#4af626" }}>{line}</span>
                  ) : line.startsWith("✓") ? (
                    <span style={{ color: "#4af626" }}>{line}</span>
                  ) : line.startsWith("BUILD") ? (
                    <span style={{ color: "#4af626" }}>{line}</span>
                  ) : line.startsWith("▲") || line.startsWith("URL") ? (
                    <span style={{ color: "#eaeaea" }}>{line}</span>
                  ) : line.includes(":") && !line.startsWith(" ") ? (
                    <span style={{ color: "#e61919" }}>{line}</span>
                  ) : (
                    <span style={{ color: "#555" }}>{line}</span>
                  )}
                </div>
              ))}
              <div style={{ color: "#4af626", fontSize: "11px", marginTop: "8px" }}>
                █<span style={{ animation: "none", opacity: 0.6 }}>_</span>
              </div>
            </div>
          </motion.div>

          {/* Description bar */}
          <div
            className="px-6 py-4 border-t"
            style={{ borderColor: "#1a1a1a" }}
          >
            <p style={{ color: "#555", fontSize: "11px", lineHeight: 1.7, letterSpacing: "0.02em" }}>
              {project.desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile: stacked layout */}
      <style>{`
        @media (max-width: 767px) {
          .coder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="py-10" style={{ background: "#0a0a0a" }} />
    </section>
  );
}
