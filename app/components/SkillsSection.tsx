
"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE } satisfies Transition,
  },
});

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE } satisfies Transition,
  },
};

type Skill = {
  name: string;
  level: number; // 0–100
  category: "core" | "styling" | "tooling" | "state";
  icon: string;
};

const skills: Skill[] = [
  { name: "React",         level: 95, category: "core",    icon: "⚛" },
  { name: "Next.js",       level: 92, category: "core",    icon: "▲" },
  { name: "TypeScript",    level: 90, category: "core",    icon: "TS" },
  { name: "JavaScript",    level: 96, category: "core",    icon: "JS" },
  { name: "Tailwind CSS",  level: 93, category: "styling", icon: "✦" },
  { name: "Framer Motion", level: 85, category: "styling", icon: "◎" },
  { name: "Chakra UI",         level: 90, category: "styling", icon: "◈" },
  { name: "Redux",         level: 82, category: "state",   icon: "⬡" },
  { name: "Zustand",       level: 88, category: "state",   icon: "◉" },
  { name: "React Query",   level: 86, category: "state",   icon: "⟳" },
  { name: "Git",           level: 91, category: "tooling", icon: "⌥" },
  { name: "Vitest",        level: 78, category: "tooling", icon: "⬨" },
];

const categoryMeta: Record<Skill["category"], { label: string; color: string; bar: string }> = {
  core:    { label: "Core",    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/[0.07]",  bar: "bg-indigo-500" },
  styling: { label: "Styling", color: "text-violet-400 border-violet-500/30 bg-violet-500/[0.07]", bar: "bg-violet-500" },
  state:   { label: "State",   color: "text-blue-400   border-blue-500/30   bg-blue-500/[0.07]",   bar: "bg-blue-500"   },
  tooling: { label: "Tooling", color: "text-teal-400   border-teal-500/30   bg-teal-500/[0.07]",   bar: "bg-teal-500"   },
};

const grouped = (["core", "styling", "state", "tooling"] as Skill["category"][]).map(
  (cat) => ({ cat, items: skills.filter((s) => s.category === cat) })
);

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#080810] py-32">
      {/* Section divider glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-indigo-500/[0.06] blur-[90px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[300px] w-[300px] rounded-full bg-violet-500/[0.05] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div variants={fadeUp(0)} className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400/70">// 02</span>
            <div className="h-px w-10 bg-indigo-500/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/20">Tech Stack</span>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-4xl font-bold tracking-tight text-[#f0f0fa] sm:text-5xl">
            Tools I <span className="skills-gradient">think in.</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/35">
            A curated set of technologies I reach for daily — chosen for developer experience,
            performance, and the ability to ship with confidence.
          </motion.p>
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-12">
          {grouped.map(({ cat, items }) => {
            const meta = categoryMeta[cat];
            return (
              <div key={cat}>
                {/* Category label */}
                <div className="mb-5 flex items-center gap-3">
                  <span className={`rounded-full border px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${meta.color}`}>
                    {meta.label}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.04]" />
                </div>

                {/* Cards */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
                >
                  {items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={scaleIn}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-white/[0.12] hover:bg-white/[0.04]"
                    >
                      {/* Icon */}
                      <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold ${meta.color}`}>
                        {skill.icon}
                      </div>

                      {/* Name */}
                      <p className="mb-3 text-sm font-medium text-white/70 group-hover:text-white/90 transition">
                        {skill.name}
                      </p>

                      {/* Progress bar */}
                      <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          className={`h-full rounded-full ${meta.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: EASE }}
                        />
                      </div>
                      <p className="mt-1.5 font-mono text-[10px] text-white/20">{skill.level}%</p>

                      {/* Subtle corner glow on hover */}
                      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-indigo-500/0 blur-xl transition-all duration-500 group-hover:bg-indigo-500/10" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom bar — overall summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs text-white/30">
              {skills.length} technologies · actively maintained
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {(["core", "styling", "state", "tooling"] as Skill["category"][]).map((cat) => (
              <div key={cat} className="flex items-center gap-1.5">
                <div className={`h-1.5 w-1.5 rounded-full ${categoryMeta[cat].bar}`} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                  {categoryMeta[cat].label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-gradient {
          background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }
      `}</style>
    </section>
  );
}