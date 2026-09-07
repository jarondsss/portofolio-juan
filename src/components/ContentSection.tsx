"use client";

import { motion, Variants } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

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

const projects = [
  {
    name: "personal-hr",
    desc: "Full-stack HR management app — attendance, payroll, employee data.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind", "SQLite"],
    url: "https://personal-hr-henna.vercel.app/",
  },
  {
    name: "logileap",
    desc: "Logistics tracking app with AI integration, maps, and real-time data visualization.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Supabase", "OpenAI", "Recharts", "Leaflet"],
    url: "https://logileap.vercel.app/",
  },
  {
    name: "mastermove-landing",
    desc: "Landing page for Mastermove Indonesia.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://www.mastermoveindonesia.com/",
  },
  {
    name: "alokasi",
    desc: "Mobile-ready budget & cash book app with charts and animations.",
    tech: ["React", "Vite", "Capacitor", "Recharts", "Framer Motion"],
    url: "#",
  },
  {
    name: "driving-app",
    desc: "Native Android driver mode app with voice selection and batch message support.",
    tech: ["Android", "Kotlin", "Gradle"],
    url: "#",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="hr-bg px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <span className="eyebrow-tag">Pengalaman Kerja</span>
          <h2
            className="mt-6 text-4xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            Tempat saya belajar<br />
            <span style={{ color: "var(--accent)" }}>di lapangan langsung</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6"
        >
          {hrExperience.map((exp) => (
            <motion.div
              key={exp.role + exp.company}
              variants={fadeUp}
              className="pixel-card p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                    {exp.company}
                    <span style={{ color: "var(--muted)" }}> · {exp.location}</span>
                  </p>
                </div>
                <span
                  className="text-xs whitespace-nowrap px-3 py-1 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid rgba(26,115,232,0.15)" }}
                >
                  {exp.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="hr-bg-alt px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <span className="eyebrow-tag">Kompetensi</span>
          <h2
            className="mt-6 text-4xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            Keahlian yang diterapkan<br />
            <span style={{ color: "var(--accent)" }}>setiap hari di tempat kerja</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {hrSkillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="pixel-card p-6"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "var(--accent)" }}>
                {group.category}
              </p>
              <div className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm py-2 px-3 rounded-lg"
                    style={{ color: "var(--foreground)", background: "var(--accent-soft)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="hr-bg px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <span className="eyebrow-tag">Pendidikan</span>
          <h2
            className="mt-6 text-4xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            Latar belakang<br />
            <span style={{ color: "var(--accent)" }}>akademik</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <motion.div variants={fadeUp} className="pixel-card p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                  Universitas Muhammadiyah Jakarta
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  Ilmu Komunikasi · Cirendeu
                </p>
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid rgba(26,115,232,0.15)" }}
              >
                S1
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pixel-card p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                  SMKN 1 Kabupaten Tangerang
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  Teknik Komputer dan Jaringan · Panongan
                </p>
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid rgba(26,115,232,0.15)" }}
              >
                2017
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

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

function CoderSkillsSection() {
  return (
    <section
      id="skills"
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
            // TECH_ARSENAL
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
            STACK
            <br />
            <span style={{ color: "#333" }}>BREAKDOWN</span>
          </h2>
        </motion.div>
      </div>

      {/* Stack table */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="px-6 md:px-16"
      >
        {/* Table header */}
        <div
          className="flex items-center gap-8 py-3 border-b"
          style={{ borderColor: "#1a1a1a" }}
        >
          <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em", width: "32px" }}>#</span>
          <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em", flex: 1 }}>TECHNOLOGY</span>
          <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em", width: "120px" }}>CATEGORY</span>
          <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em", width: "32px" }}></span>
        </div>

        {coderStack.map((item) => (
          <motion.div
            key={item.index}
            variants={fadeUp}
            className="coder-row group"
            style={{ gap: "32px" }}
          >
            <span style={{ color: "#333", fontSize: "10px", letterSpacing: "0.1em", width: "32px" }}>
              {item.index}
            </span>
            <span
              style={{
                color: "#eaeaea",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                flex: 1,
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                color: "#444",
                fontSize: "9px",
                letterSpacing: "0.18em",
                width: "120px",
              }}
            >
              {item.category}
            </span>
            <span style={{ color: "#e61919", fontSize: "11px", width: "32px" }}>&gt;&gt;&gt;</span>
          </motion.div>
        ))}

        <div className="py-10" />
      </motion.div>
    </section>
  );
}

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
