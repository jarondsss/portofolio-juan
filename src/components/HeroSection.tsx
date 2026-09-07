"use client";

import { motion, Variants } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] },
  }),
};

const marqueeItems = [
  "Human Resources",
  "People Management",
  "Recruitment",
  "Operations",
  "Employee Relations",
  "Onboarding",
  "HR Policy",
  "Conflict Resolution",
  "Talent Acquisition",
  "Payroll",
  "Performance Review",
  "Culture Building",
  "Team Leadership",
  "Offboarding",
  "SOP Implementation",
];

export default function HeroSection() {
  const { persona } = usePersona();

  if (persona === "hr") {
    return (
      <section className="hr-bg min-h-[100dvh] flex flex-col justify-center px-6 relative overflow-hidden">
        {/* Ambient blue glow — fixed, GPU safe */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(66,133,244,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Right vertical marquee */}
        <div
          className="absolute right-0 top-0 bottom-0 hidden lg:flex flex-col items-end overflow-hidden"
          style={{
            width: "200px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
          aria-hidden="true"
        >
          <div className="marquee-track flex flex-col gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.2em] uppercase whitespace-nowrap"
                style={{ color: "var(--ink-light)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Eyebrow tag */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-8"
          >
            <span className="eyebrow-tag">HR & Operations · Tangerang Selatan</span>
          </motion.div>

          {/* Display name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-7xl md:text-[clamp(5rem,10vw,8rem)] font-bold leading-[0.92] mb-6"
            style={{ color: "var(--foreground)", letterSpacing: "-0.04em" }}
          >
            Juan A.<br />
            <span style={{ color: "var(--accent)" }}>Ronaldi</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "320px", opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="h-px mb-8"
            style={{ background: "linear-gradient(to right, var(--accent), transparent)" }}
          />

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
            className="text-lg md:text-xl leading-relaxed max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            6+ tahun di HR dan operasional — dari event lapangan sampai remote company. Spesialisasi di rekrutmen, people ops, dan membangun sistem yang benar-benar dipakai tim.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="mt-12 flex gap-4 flex-wrap items-center"
          >
            <a
              href="#experience"
              className="cta-primary inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              View Experience
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                background: "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
              }}
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
            className="mt-10 flex items-center gap-2"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#34a853", boxShadow: "0 0 0 3px rgba(52,168,83,0.2)" }}
            />
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              Actively looking for the right team
            </span>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="coder-scanlines min-h-[100dvh] flex flex-col justify-center px-6 md:px-16 relative overflow-hidden"
      style={{ background: "#0a0a0a", fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {/* Top metadata bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-4 border-b"
        style={{ borderColor: "#1a1a1a" }}
      >
        <span style={{ color: "#444", fontSize: "10px", letterSpacing: "0.12em" }}>
          [ JUAN_AR ] // PORTFOLIO_v2.6
        </span>
        <span style={{ color: "#444", fontSize: "10px", letterSpacing: "0.12em" }}>
          UNIT / D-01 · TANGERANG-SELATAN · ID
        </span>
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6"
        >
          <span
            style={{
              color: "#e61919",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            /// CODER_MODE · ACTIVE
          </span>
        </motion.div>

        {/* Macro headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          style={{
            fontSize: "clamp(4.5rem, 14vw, 11rem)",
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: "#eaeaea",
          }}
        >
          JUAN.
          <br />
          <span style={{ color: "#e61919" }}>RONALDI</span>
        </motion.h1>

        {/* Red divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          style={{
            height: "2px",
            background: "#e61919",
            transformOrigin: "left",
            margin: "24px 0",
          }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          style={{
            color: "#666",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          HR professional / self-taught developer — building full-stack apps,
          Android tools, and logistics systems that actually work.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.45}
          className="mt-10 flex gap-4 flex-wrap items-center"
        >
          <a href="#projects" className="cta-coder">
            SEE PROJECTS
            <span style={{ color: "#e61919" }}>&gt;&gt;&gt;</span>
          </a>
          <a
            href="https://github.com/jarondsss"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-coder-ghost"
          >
            GITHUB ↗
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="mt-16 grid grid-cols-2 md:grid-cols-4"
          style={{ border: "1px solid #1a1a1a" }}
        >
          {[
            { label: "[ PROJECTS ]", value: "05" },
            { label: "[ STACK ]", value: "12+" },
            { label: "[ FOCUS ]", value: "FULLSTACK" },
            { label: "[ STATUS ]", value: "OPEN" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="p-5"
              style={{
                borderRight: i < 3 ? "1px solid #1a1a1a" : "none",
                borderBottom: "none",
              }}
            >
              <div style={{ color: "#444", fontSize: "9px", letterSpacing: "0.18em", marginBottom: "8px" }}>
                {item.label}
              </div>
              <div
                style={{
                  color: item.label === "[ STATUS ]" ? "#4af626" : "#eaeaea",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Availability */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="mt-6 flex items-center gap-3"
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: "#4af626",
              boxShadow: "0 0 8px #4af626",
            }}
          />
          <span style={{ color: "#444", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Open to freelance, collab, and full-time remote
          </span>
        </motion.div>
      </div>
    </section>
  );
}
