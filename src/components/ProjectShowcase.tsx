"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } },
};

// ── Mockup: Personal HR ──────────────────────────────────────────────
function PersonalHRMockup() {
  return (
    <div className="w-full h-full bg-[#0f0f0f] rounded-lg overflow-hidden flex text-[10px] font-mono select-none">
      {/* Sidebar */}
      <div className="w-[28%] bg-[#141414] border-r border-[#252525] flex flex-col p-3 gap-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[8px] font-bold">A</div>
          <span className="text-[#aaa] text-[9px]">Admin</span>
        </div>
        {["Dashboard", "Employees", "Leave", "Payroll", "Documents"].map((item, i) => (
          <div key={item} className={`px-2 py-1.5 rounded text-[9px] ${i === 0 ? "bg-indigo-500/20 text-indigo-400" : "text-[#666]"}`}>{item}</div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-3 flex flex-col gap-2">
        {/* Tabs */}
        <div className="flex gap-2 mb-1">
          {["Overview", "Analytics", "Reports"].map((t, i) => (
            <div key={t} className={`px-2 py-0.5 rounded-full text-[8px] border ${i === 0 ? "border-indigo-500 text-indigo-400 bg-indigo-500/10" : "border-[#333] text-[#555]"}`}>{t}</div>
          ))}
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[["24", "Employees"], ["3", "On Leave"], ["98%", "Attendance"]].map(([val, label]) => (
            <div key={label} className="bg-[#1a1a1a] border border-[#252525] rounded p-2">
              <div className="text-indigo-400 font-bold text-[11px]">{val}</div>
              <div className="text-[#555] text-[8px]">{label}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="bg-[#1a1a1a] border border-[#252525] rounded p-2 flex-1">
          <div className="text-[#666] text-[8px] mb-1.5 border-b border-[#252525] pb-1">Recent Employees</div>
          {["Budi Santoso", "Ani Rahayu", "Doni Pratama"].map((name) => (
            <div key={name} className="flex justify-between items-center py-0.5 border-b border-[#1f1f1f]">
              <span className="text-[#aaa] text-[8px]">{name}</span>
              <span className="text-[8px] px-1 rounded bg-green-500/10 text-green-400">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mockup: Logileap ─────────────────────────────────────────────────
function LogileapMockup() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] rounded-lg overflow-hidden flex text-[10px] font-mono select-none">
      {/* Sidebar */}
      <div className="w-[26%] bg-[#111] border-r border-[#222] flex flex-col p-3 gap-2">
        <div className="text-green-400 font-bold text-[10px] mb-2">LogiLeap</div>
        {["Dashboard", "Operations", "Finance", "Master", "Settings"].map((item, i) => (
          <div key={item} className={`px-2 py-1 rounded text-[8px] ${i === 0 ? "bg-green-500/15 text-green-400" : "text-[#555]"}`}>{item}</div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-3 flex flex-col gap-2">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[["12", "Trucks", "text-blue-400"], ["5", "En Route", "text-yellow-400"], ["Rp4.2M", "Revenue", "text-green-400"]].map(([val, label, cls]) => (
            <div key={label} className="bg-[#181818] border border-[#252525] rounded p-2">
              <div className={`font-bold text-[11px] ${cls}`}>{val}</div>
              <div className="text-[#555] text-[8px]">{label}</div>
            </div>
          ))}
        </div>
        {/* Bar chart mockup */}
        <div className="bg-[#181818] border border-[#252525] rounded p-2 flex-1">
          <div className="text-[#555] text-[8px] mb-2">Monthly Revenue</div>
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-green-500/30 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m) => (
              <span key={m} className="text-[7px] text-[#444]">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mockup: Mastermove Landing ───────────────────────────────────────
function MastermoveMockup() {
  return (
    <div className="w-full h-full bg-[#061426] rounded-lg overflow-hidden flex flex-col select-none">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-white text-[9px] font-bold tracking-widest uppercase">Mastermove</span>
        <div className="flex gap-2">
          {["Services", "About", "Contact"].map((item) => (
            <span key={item} className="text-white/40 text-[8px]">{item}</span>
          ))}
        </div>
      </div>
      {/* Hero */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061426]/60 to-[#061426]/80" />
        {/* Fake image bg */}
        <div className="absolute inset-0 bg-[#0a2040]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, #1a4080 20px, #1a4080 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #1a4080 20px, #1a4080 21px)"
          }} />
        </div>
        <div className="relative z-10 text-center">
          <div className="text-white/50 text-[8px] tracking-[0.2em] uppercase mb-1">Domestic · International</div>
          <div className="text-white font-bold text-[14px] leading-tight">Fast & Reliable</div>
          <div className="text-orange-400 text-[9px] mt-1">Logistics Solutions</div>
          <div className="mt-3 px-3 py-1 bg-orange-500 rounded text-white text-[8px] inline-block">Get Quote</div>
        </div>
        {/* Slider dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`rounded-full h-1.5 ${active ? "w-5 bg-orange-500" : "w-1.5 bg-white/30"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mockup: Alokasi (Mobile) ─────────────────────────────────────────
function AlokasiMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] rounded-lg select-none">
      {/* Phone frame */}
      <div className="w-[55%] h-[90%] bg-[#111] rounded-[20px] border border-[#333] overflow-hidden flex flex-col shadow-2xl">
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 py-1 bg-[#111]">
          <span className="text-[#666] text-[7px]">9:41</span>
          <div className="flex gap-1">
            <div className="w-2 h-1 bg-[#666] rounded-sm" />
            <div className="w-1 h-1 bg-[#666] rounded-full" />
          </div>
        </div>
        {/* App header */}
        <div className="px-3 py-2 border-b border-[#222]">
          <div className="text-emerald-400 font-bold text-[10px]">Alokasi</div>
          <div className="text-[#555] text-[7px]">Buku Kas Digital</div>
        </div>
        {/* Balance card */}
        <div className="mx-2 mt-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-3">
          <div className="text-white/70 text-[7px]">Saldo</div>
          <div className="text-white font-bold text-[13px]">Rp 2.450.000</div>
        </div>
        {/* Mini chart */}
        <div className="px-2 mt-2">
          <div className="text-[#555] text-[7px] mb-1">Pengeluaran</div>
          <div className="flex items-end gap-0.5 h-8">
            {[30, 60, 40, 80, 55, 70, 45].map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-500/40 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        {/* Transactions */}
        <div className="px-2 mt-2 flex-1">
          {[["Makan Siang", "-Rp 35K"], ["Gaji", "+Rp 5JT"], ["Transport", "-Rp 20K"]].map(([label, amount]) => (
            <div key={label} className="flex justify-between py-1 border-b border-[#1f1f1f]">
              <span className="text-[#888] text-[7px]">{label}</span>
              <span className={`text-[7px] ${amount.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mockup: Driving App (Android) ────────────────────────────────────
function DrivingAppMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] rounded-lg select-none">
      {/* Phone frame */}
      <div className="w-[55%] h-[90%] bg-[#121212] rounded-[20px] border border-[#333] overflow-hidden flex flex-col shadow-2xl">
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 py-1 bg-[#121212]">
          <span className="text-[#666] text-[7px]">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-1.5 border border-[#666] rounded-sm">
              <div className="w-2/3 h-full bg-green-500 rounded-sm" />
            </div>
          </div>
        </div>
        {/* App header */}
        <div className="bg-[#1a1a2e] px-3 py-2">
          <div className="text-blue-400 font-bold text-[10px]">Driver Mode</div>
          <div className="text-[#555] text-[7px]">Navigation Assistant</div>
        </div>
        {/* Map mockup */}
        <div className="mx-2 mt-2 h-20 bg-[#1a1a2e] rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 10px, #3344aa 10px, #3344aa 11px), repeating-linear-gradient(90deg, transparent, transparent 15px, #3344aa 15px, #3344aa 16px)"
          }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg shadow-blue-500/50" />
          <div className="absolute bottom-1 right-1 bg-[#111]/80 px-1 py-0.5 rounded text-[6px] text-blue-300">GPS Active</div>
        </div>
        {/* Voice selection */}
        <div className="px-3 mt-2">
          <div className="text-[#555] text-[7px] mb-1">Voice Assistant</div>
          <div className="flex gap-1">
            {["ID Female", "EN Male"].map((v, i) => (
              <div key={v} className={`px-2 py-0.5 rounded-full text-[7px] border ${i === 0 ? "border-blue-500 text-blue-400 bg-blue-500/10" : "border-[#333] text-[#555]"}`}>{v}</div>
            ))}
          </div>
        </div>
        {/* Batch messages */}
        <div className="px-3 mt-2 flex-1">
          <div className="text-[#555] text-[7px] mb-1">Incoming Messages</div>
          {["Order #124 — pickup ready", "Route updated — toll via Cikampek"].map((msg) => (
            <div key={msg} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded px-2 py-1 mb-1">
              <span className="text-[#888] text-[7px]">{msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Projects data ────────────────────────────────────────────────────
const showcaseProjects = [
  {
    name: "personal-hr",
    label: "Personal HR",
    desc: "Full-stack HR management — attendance, payroll, employee data.",
    tech: ["Next.js", "Prisma", "TypeScript", "SQLite"],
    url: "https://personal-hr-henna.vercel.app/",
    mockup: PersonalHRMockup,
  },
  {
    name: "logileap",
    label: "LogiLeap",
    desc: "Logistics tracking with AI, maps, and real-time revenue charts.",
    tech: ["Next.js", "Supabase", "OpenAI", "Recharts"],
    url: "https://logileap.vercel.app/",
    mockup: LogileapMockup,
  },
  {
    name: "mastermove-landing",
    label: "Mastermove",
    desc: "Landing page for an Indonesia-based logistics company.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://www.mastermoveindonesia.com/",
    mockup: MastermoveMockup,
  },
  {
    name: "alokasi",
    label: "Alokasi",
    desc: "Mobile-ready digital cash book with charts and budget tracking.",
    tech: ["React", "Vite", "Capacitor", "Recharts"],
    url: "#",
    mockup: AlokasiMockup,
  },
  {
    name: "driving-app",
    label: "Driving App",
    desc: "Android driver mode app with voice assistant and batch messages.",
    tech: ["Android", "Kotlin", "Gradle"],
    url: "#",
    mockup: DrivingAppMockup,
  },
];

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const project = showcaseProjects[active];
  const Mockup = project.mockup;

  return (
    <section className="bg-black py-24 px-6 font-mono">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mb-12 text-center">
          <span className="text-green-600 text-xs tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl font-bold text-green-400 mt-3">&gt; ls projects/</h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-[1fr_1.6fr] gap-8 items-start">
          {/* Project list */}
          <div className="flex flex-col gap-2">
            {showcaseProjects.map((proj, i) => (
              <button
                key={proj.name}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-lg border transition-all group ${
                  active === i
                    ? "border-green-500 bg-green-950/30 text-green-400"
                    : "border-green-900/50 text-green-800 hover:border-green-700 hover:text-green-600"
                }`}
              >
                <div className="font-bold text-sm">
                  <span className="opacity-50 mr-1">./</span>{proj.label}
                </div>
                <div className="text-xs mt-0.5 opacity-60 leading-snug">{proj.desc}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.tech.map((t) => (
                    <span key={t} className={`text-[10px] px-1.5 py-0.5 rounded border ${active === i ? "border-green-800 text-green-600" : "border-green-900/40 text-green-900"}`}>{t}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Mockup preview */}
          <div className="sticky top-24">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="aspect-[4/3] w-full border border-green-900/50 rounded-xl overflow-hidden bg-[#0a0a0a] shadow-2xl shadow-green-950/30"
            >
              <Mockup />
            </motion.div>
            {project.url !== "#" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-400 text-sm transition-colors"
              >
                <span>→ Live Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
