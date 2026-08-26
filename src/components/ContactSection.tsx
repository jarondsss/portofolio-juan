"use client";

import { motion, Variants } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ContactSection() {
  const { persona } = usePersona();
  const ref = useScrollReveal();

  if (persona === "hr") {
    return (
      <section id="contact" className="hr-bg-alt px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <span className="eyebrow-tag">Kontak</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
            >
              Terbuka untuk posisi HR, konsultasi operasional,<br />
              <span style={{ color: "var(--accent)" }}>dan kolaborasi yang berdampak nyata</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base mb-3 max-w-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Tersedia untuk peran HR, konsultasi operasional, dan people ops.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm mb-12"
              style={{ color: "var(--ink-light)" }}
            >
              Pamulang, Tangerang Selatan · Terbuka untuk kerja remote
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:anjurondali@gmail.com"
                className="cta-primary inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                anjurondali@gmail.com
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  ↗
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/juan-akbar-ronaldi-81772236b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-300"
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
                LinkedIn Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="bg-black py-24 px-6 text-center font-mono">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">&gt; contact --me</h2>
        <p className="text-green-700 mb-8">Hit me up. Let&apos;s build something cool.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/jarondsss" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-400 text-black rounded-full hover:bg-green-300 transition font-bold">
            GitHub
          </a>
          <a href="mailto:anjurondali@gmail.com" className="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

