"use client";

import { motion, Variants } from "framer-motion";
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

// ── Data ──────────────────────────────────────────────────

const hrExperience = [
  {
    role: "Human Resources Manager",
    company: "Native Productions",
    location: "Remote · Bali",
    period: "Aug 2024 — Present",
    desc: "Mengelola operasional HR secara end-to-end untuk remote creative company — rekrutmen, kebijakan kerja, onboarding, hingga memahami dan menangani kebutuhan tim yang tersebar.",
  },
  {
    role: "Operational Officer",
    company: "PT Time Travel Indonesia",
    location: "Jakarta",
    period: "Aug 2023 — Dec 2023",
    desc: "Membangun sistem operasional yang terstruktur dari proses yang sebelumnya berjalan berdasarkan kebiasaan — sehingga dapat diikuti dan direplikasi oleh seluruh tim.",
  },
  {
    role: "Head of Crew",
    company: "HIM Corporation",
    location: "Serpong",
    period: "Nov 2022 — Aug 2023",
    desc: "Memimpin tim lapangan di beberapa lokasi sekaligus — mengelola jadwal, supervisi harian, dan menjaga performa tim dalam kondisi operasional yang dinamis.",
  },
  {
    role: "Event Manager",
    company: "Kampung Dongeng Indonesia",
    location: "Jakarta",
    period: "Feb 2018 — Apr 2022",
    desc: "Merencanakan dan mengeksekusi ratusan acara edukasi anak selama 4 tahun — koordinasi relawan, manajemen anggaran terbatas, dan memastikan setiap event berjalan sesuai standar.",
  },
];

const hrSkillGroups = [
  {
    category: "People & Talent",
    skills: ["Rekrutmen & Seleksi", "Talent Acquisition", "Employee Relations", "Offboarding & Exit Interview"],
  },
  {
    category: "Ops & Admin",
    skills: ["HR Administration", "Database Karyawan", "Payroll", "Implementasi SOP"],
  },
  {
    category: "Leadership",
    skills: ["Resolusi Konflik", "Desain Kebijakan HR", "Team Leadership", "Culture Building"],
  },
];

const coderStack = [
  { index: "01", name: "NEXT.JS", category: "FRONTEND" },
  { index: "02", name: "TYPESCRIPT", category: "FRONTEND" },
  { index: "03", name: "TAILWIND CSS", category: "FRONTEND" },
  { index: "04", name: "FRAMER MOTION", category: "FRONTEND" },
  { index: "05", name: "REACT / VITE", category: "FRONTEND" },
  { index: "06", name: "PRISMA ORM", category: "BACKEND" },
  { index: "07", name: "SUPABASE", category: "BACKEND" },
  { index: "08", name: "SQLITE", category: "BACKEND" },
  { index: "09", name: "OPENAI API", category: "AI / DATA" },
  { index: "10", name: "RECHARTS", category: "AI / DATA" },
  { index: "11", name: "LEAFLET", category: "AI / DATA" },
  { index: "12", name: "KOTLIN / ANDROID", category: "MOBILE" },
  { index: "13", name: "CAPACITOR", category: "MOBILE" },
  { index: "14", name: "GRADLE", category: "MOBILE" },
];

// ── Section header prompt ─────────────────────────────────
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

// ── HR Experience Section ─────────────────────────────────
function ExperienceSection() {
  return (
    <section
      id="experience"
      className="content-layer section-void px-4 md:px-8 lg:px-16 py-28"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section divider */}
        <div className="section-divider mb-12" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Prompt */}
          <motion.div variants={fadeUp}>
            <SectionPrompt cmd="cat experience.log" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-display mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            experience
            <span style={{ color: "var(--blue-glow)" }}>.log</span>
          </motion.h2>

          {/* Experience log entries */}
          <motion.div variants={stagger} className="space-y-2">
            {hrExperience.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                variants={fadeUp}
                className="term-panel-hover p-5 md:p-6"
              >
                {/* Log line header */}
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 mb-3">
                  <div className="flex items-start gap-3 flex-wrap">
                    <span
                      className="log-timestamp flex-shrink-0 mt-1"
                      style={{ color: "var(--text-ghost)", minWidth: "32px" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="log-name">{exp.role}</span>
                      <span className="log-sep">—</span>
                      <span className="log-stack">{exp.company}</span>
                      <span
                        style={{
                          color: "var(--text-ghost)",
                          fontSize: "11px",
                          marginLeft: "6px",
                        }}
                      >
                        · {exp.location}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      color: "var(--text-ghost)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="log-desc"
                  style={{ paddingLeft: "48px" }}
                >
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── HR Skills Section ─────────────────────────────────────
function SkillsSection() {
  return (
    <section
      className="content-layer section-panel px-4 md:px-8 lg:px-16 py-24"
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
            <SectionPrompt cmd="ls -la skills/" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-display mb-10"
          >
            skills
            <span style={{ color: "var(--blue-glow)" }}>/</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {hrSkillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="term-panel p-5"
              >
                <div
                  className="text-label mb-4"
                  style={{ color: "var(--blue-glow)", borderBottom: "1px solid var(--line)", paddingBottom: "8px" }}
                >
                  # {group.category}
                </div>
                <div className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="prompt-line"
                      style={{ fontSize: "12px" }}
                    >
                      <span style={{ color: "var(--text-ghost)" }}>  — </span>
                      <span style={{ color: "var(--text-primary)" }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── HR Education Section ──────────────────────────────────
function EducationSection() {
  return (
    <section
      className="content-layer section-void px-4 md:px-8 lg:px-16 py-24"
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
            <SectionPrompt cmd="cat education.log" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-display mb-10"
          >
            education
            <span style={{ color: "var(--blue-glow)" }}>.log</span>
          </motion.h2>

          <motion.div variants={stagger} className="space-y-2">
            {[
              {
                idx: "01",
                name: "Universitas Muhammadiyah Jakarta",
                field: "Ilmu Komunikasi",
                location: "Cirendeu",
                degree: "S1",
              },
              {
                idx: "02",
                name: "SMKN 1 Kabupaten Tangerang",
                field: "Teknik Komputer dan Jaringan",
                location: "Panongan",
                degree: "2017",
              },
            ].map((edu) => (
              <motion.div
                key={edu.name}
                variants={fadeUp}
                className="term-panel-hover p-5 md:p-6"
              >
                <div className="flex flex-wrap items-start gap-x-6 gap-y-1">
                  <span
                    className="log-timestamp flex-shrink-0 mt-1"
                    style={{ color: "var(--text-ghost)", minWidth: "32px" }}
                  >
                    {edu.idx}
                  </span>
                  <div className="flex-1">
                    <span className="log-name">{edu.name}</span>
                    <span className="log-sep">—</span>
                    <span className="log-stack">{edu.field}</span>
                    <span
                      style={{
                        color: "var(--text-ghost)",
                        fontSize: "11px",
                        marginLeft: "6px",
                      }}
                    >
                      · {edu.location}
                    </span>
                  </div>
                  <span
                    style={{
                      color: "var(--text-ghost)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                    }}
                  >
                    [{edu.degree}]
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Coder Stack Section ───────────────────────────────────
function CoderSkillsSection() {
  return (
    <section
      id="skills"
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
            <SectionPrompt cmd="cat stack.json" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-display mb-10"
          >
            stack
            <span style={{ color: "var(--blue-glow)" }}>.json</span>
          </motion.h2>

          {/* Table header */}
          <div
            className="flex items-center gap-6 py-2 mb-1"
            style={{
              borderBottom: "1px solid var(--line)",
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "var(--text-ghost)",
            }}
          >
            <span style={{ width: "32px" }}>#</span>
            <span style={{ flex: 1 }}>TECHNOLOGY</span>
            <span style={{ width: "120px" }}>CATEGORY</span>
          </div>

          {/* Stack rows */}
          <motion.div variants={stagger}>
            {coderStack.map((item) => (
              <motion.div
                key={item.index}
                variants={fadeUp}
                className="flex items-center gap-6 py-3"
                style={{
                  borderBottom: "1px solid var(--line)",
                  cursor: "default",
                  transition: "background 120ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(30,99,200,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span style={{ color: "var(--text-ghost)", fontSize: "10px", width: "32px" }}>
                  {item.index}
                </span>
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    flex: 1,
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    color: "var(--text-ghost)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    width: "120px",
                  }}
                >
                  {item.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────
export default function ContentSection() {
  const { persona } = usePersona();

  if (persona === "hr") {
    return (
      <>
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </>
    );
  }

  return <CoderSkillsSection />;
}
