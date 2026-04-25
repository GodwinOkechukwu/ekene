// "use client";

// import { motion } from "framer-motion";
// import { container, fadeUp } from "../lib/animation";

// export default function ExperienceSection() {
//   return (
//     <motion.section
//           id="experience"
//       variants={container}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="mx-auto max-w-6xl py-24"
//     >
//       <motion.h2
//         variants={fadeUp}
//         className="text-3xl font-semibold"
//       >
//         Experience
//       </motion.h2>

//       <motion.div
//         variants={fadeUp}
//         className="mt-10 border-l border-zinc-300 pl-6 dark:border-zinc-700"
//       >
//         <p className="text-sm text-zinc-500">
//           2023 — Present
//         </p>

//         <h3 className="text-lg font-semibold">
//           Frontend Engineer
//         </h3>

//         <p className="text-zinc-600 dark:text-zinc-400">
//           Building scalable web applications with React,
//           Next.js and TypeScript.
//         </p>
//       </motion.div>
//     </motion.section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE } satisfies Transition,
  },
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE } satisfies Transition,
  },
};

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  accentColor: "indigo" | "violet" | "blue" | "teal";
  highlights: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Engineer",
    company: "Transalliance Holdings",
    location: "Victoria Island, Lagos",
    period: "Jan 2026 — Present",
    current: true,
    accentColor: "indigo",
    highlights: [
      "Develop and maintain responsive, high-performance web interfaces for a leading logistics and supply chain organisation with pan-African operations.",
      "Collaborate with product designers and backend engineers to implement modern UI components and ensure seamless API integration.",
      "Champion frontend best practices including component reusability, performance optimisation, and accessibility compliance.",
      "Implementation of scalable design systems and contribute to technical architecture decisions.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS","Chakra UI", "Framer Motion"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Next Gen Digital Technology",
    location: "Lagos, Nigeria",
    period: "Jan 2020 — Dec 2025",
    current: false,
    accentColor: "violet",
    highlights: [
      "Architected Lynspeed, a comprehensive e-learning platform serving 1,000+ students with JAMB prep, career guidance, and skill development tools.",
      "Built Naijaville, a full-cycle smart rental marketplace with real-time WebSocket communication.",
      "Contributed to Payina, a secure fintech application scoring 98 on Lighthouse  with seamless digital transactions and robust Redux state management.",
      "Delivered Miala (logistics & real-time tracking), Dryklin & NXG Job Hub (dual role-based dashboards), and Lynotech (corporate website).",
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux", "WebSockets", "Vite"],
  },
];

const accentMap: Record<
  Experience["accentColor"],
  { chip: string; dot: string; border: string; glow: string; line: string }
> = {
  indigo: {
    chip: "border-indigo-500/30 bg-indigo-500/[0.08] text-indigo-300",
    dot: "bg-indigo-500",
    border: "group-hover:border-indigo-500/25",
    glow: "group-hover:bg-indigo-500/8",
    line: "bg-indigo-500/40",
  },
  violet: {
    chip: "border-violet-500/30 bg-violet-500/[0.08] text-violet-300",
    dot: "bg-violet-500",
    border: "group-hover:border-violet-500/25",
    glow: "group-hover:bg-violet-500/8",
    line: "bg-violet-500/40",
  },
  blue: {
    chip: "border-blue-500/30 bg-blue-500/[0.08] text-blue-300",
    dot: "bg-blue-500",
    border: "group-hover:border-blue-500/25",
    glow: "group-hover:bg-blue-500/8",
    line: "bg-blue-500/40",
  },
  teal: {
    chip: "border-teal-500/30 bg-teal-500/[0.08] text-teal-300",
    dot: "bg-teal-500",
    border: "group-hover:border-teal-500/25",
    glow: "group-hover:bg-teal-500/8",
    line: "bg-teal-500/40",
  },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080810] py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-10">

        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div variants={fadeUp(0)} className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400/70">
              // 04
            </span>
            <div className="h-px w-10 bg-indigo-500/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/20">
              Experience
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp(0.05)}
            className="text-4xl font-bold tracking-tight text-[#f0f0fa] sm:text-5xl"
          >
            Where I&apos;ve{" "}
            <span className="experience-gradient">made impact.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/35"
          >
            5+ years across startups and enterprise shipping products that
            are fast, accessible, and built to last.
          </motion.p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical timeline spine */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.04] md:left-[15px]" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-8"
          >
            {experiences.map((exp) => {
              const accent = accentMap[exp.accentColor];
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariant}
                  className="group relative flex gap-6 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative mt-5 flex-shrink-0">
                    <div
                      className={`relative z-10 h-[22px] w-[22px] rounded-full border-[3px] border-[#080810] ${accent.dot} transition-all duration-300 group-hover:scale-110`}
                    />
                    {exp.current && (
                      <div
                        className={`absolute inset-0 rounded-full ${accent.dot} animate-ping opacity-30`}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 ${accent.border}`}
                  >
                    {/* Top accent line */}
                    <div
                      className={`absolute left-0 top-0 h-px w-full ${accent.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    {/* Header row */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-white/80 transition group-hover:text-white">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm font-medium text-white/40">
                          {exp.company}
                          <span className="mx-1.5 text-white/15">·</span>
                          {exp.location}
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-white/25 tabular-nums">
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="mb-5 space-y-2.5">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/35 group-hover:text-white/45 transition-colors duration-300">
                          <span className={`mt-[7px] h-1 w-1 flex-shrink-0 rounded-full ${accent.dot} opacity-60`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${accent.chip}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover glow */}
                    <div
                      className={`pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Summary bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/6 bg-white/2 px-6 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-white/30">
              4+ years · 2 companies · 8+ shipped products
            </span>
          </div>
          <div className="flex gap-5">
            {(["indigo", "violet"] as Experience["accentColor"][]).map(
              (color, i) => (
                <div key={color} className="flex items-center gap-1.5">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${accentMap[color].dot}`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    {i === 0 ? "Current" : "Previous"}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        .experience-gradient {
          background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }
      `}</style>
    </section>
  );
}