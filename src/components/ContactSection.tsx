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
    <section
      id="contact"
      style={{ background: "#0a0a0a", fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {/* Section header */}
      <div
        className="px-6 md:px-16 py-10 border-b"
        style={{ borderColor: "#1a1a1a" }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={fadeUp}
            style={{ color: "#e61919", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", display: "block" }}
          >
            // CONNECT
          </motion.span>
          <motion.h2
            variants={fadeUp}
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
            OPEN TO
            <br />
            <span style={{ color: "#e61919" }}>COLLABORATION</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Contact links */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="px-6 md:px-16"
      >
        {/* Column header */}
        <div
          className="flex items-center gap-8 py-3 border-b"
          style={{ borderColor: "#1a1a1a" }}
        >
          <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em", width: "80px" }}>CHANNEL</span>
          <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.2em" }}>ADDRESS</span>
        </div>

        {[
          { label: "[ EMAIL ]", value: "anjurondali@gmail.com", href: "mailto:anjurondali@gmail.com" },
          { label: "[ GITHUB ]", value: "github.com/jarondsss", href: "https://github.com/jarondsss" },
          { label: "[ LINKEDIN ]", value: "linkedin/juan-akbar-ronaldi", href: "https://www.linkedin.com/in/juan-akbar-ronaldi-81772236b" },
        ].map((item) => (
          <motion.a
            key={item.label}
            variants={fadeUp}
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="coder-row group"
            style={{ gap: "32px", textDecoration: "none" }}
          >
            <span style={{ color: "#e61919", fontSize: "10px", letterSpacing: "0.14em", width: "100px", flexShrink: 0 }}>
              {item.label}
            </span>
            <span
              style={{
                color: "#666",
                fontSize: "12px",
                letterSpacing: "0.04em",
                flex: 1,
              }}
              className="group-hover:text-[#eaeaea] transition-colors"
            >
              {item.value}
            </span>
            <span style={{ color: "#e61919", fontSize: "11px" }}>&gt;&gt;&gt;</span>
          </motion.a>
        ))}

        {/* Metadata footer */}
        <motion.div
          variants={fadeUp}
          className="py-10 flex flex-col gap-2"
        >
          <div style={{ color: "#333", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            LOCATION: PAMULANG · TANGERANG SELATAN · ID
          </div>
          <div style={{ color: "#333", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            AVAILABILITY: OPEN · REMOTE-FRIENDLY · FREELANCE OK
          </div>
          <div style={{ color: "#1a1a1a", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "16px" }}>
            [ EOF ] // JUAN_AR PORTFOLIO_v2.6 · {new Date().getFullYear()}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

