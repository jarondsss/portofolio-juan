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
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-green-400 px-6 text-center font-mono">
      <p className="text-xs text-green-600 mb-2">&gt; whoami</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
        <span className="text-green-400">Juan</span>
      </h1>
      <p className="text-lg md:text-xl text-green-300 max-w-xl">
        HR guy by day. Vibe coder by night. Building stuff that works, one commit at a time. 🧑💻
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="px-6 py-3 bg-green-400 text-black rounded-full hover:bg-green-300 transition font-bold">
          See Projects
        </a>
        <a href="https://github.com/jarondsss" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition">
          GitHub
        </a>
      </div>
    </section>
  );
}
