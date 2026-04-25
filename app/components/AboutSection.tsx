
"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE } satisfies Transition,
  },
});

const traits = [
  {
    label: "Philosophy",
    value: "Performance is a feature, not an afterthought.",
    icon: "◈",
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/[0.06]",
  },
  {
    label: "Approach",
    value: "Systems thinking — design scales, one-offs don't.",
    icon: "⬡",
    color: "text-violet-400 border-violet-500/30 bg-violet-500/[0.06]",
  },
  {
    label: "Obsession",
    value: "Pixel-perfect UI that feels inevitable.",
    icon: "◉",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/[0.06]",
  },
];

const facts = [
  { value: "4+",   label: "Years of experience" },
  { value: "8+",  label: "Projects shipped" },
  { value: "10+",  label: "Clients worked with" },
  { value: "98%",  label: "Client satisfaction" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080810] py-32"
    >
      {/* Subtle section glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-20 h-100 w-100 rounded-full bg-violet-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-75 w-75 rounded-full bg-indigo-500/[0.07] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp(0)} className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400/70">
              // 01
            </span>
            <div className="h-px flex-1 max-w-10 bg-indigo-500/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/20">
              About
            </span>
          </motion.div>

          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
            {/* Left — text */}
            <div className="flex flex-col gap-8">
              <motion.h2
                variants={fadeUp(0.05)}
                className="text-4xl font-bold leading-tight tracking-tight text-[#f0f0fa] sm:text-5xl"
              >
                Building the web<br />
                <span className="about-gradient">one component at a time.</span>
              </motion.h2>

              <motion.div variants={fadeUp(0.15)} className="space-y-4">
                <p className="text-[15px] leading-[1.8] text-white/40">
                  I'm
                  <span className="font-medium text-white/75 pl-2">Ekene</span>
                  , a frontend engineer with over
                  <span className="font-medium text-white/75 px-2">4+ years</span>
                  of experience crafting modern web interfaces that users actually enjoy.
                  I sit at the intersection of design and engineering fluent in
                  both Figma and TypeScript.
                </p>
                <p className="text-[15px] leading-[1.8] text-white/40">
                  I specialize in building
                  <span className="font-medium text-white/75 px-3">
                    performant, scalable UI systems
                  </span>
                  with React, Next.js, and TypeScript. My work spans design systems,
                  micro-interactions, and architecture that holds up under real-world load.
                </p>
              </motion.div>

              {/* Trait cards */}
              <motion.div variants={fadeUp(0.25)} className="flex flex-col gap-3">
                {traits.map(({ label, value, icon, color }) => (
                  <div
                    key={label}
                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition hover:brightness-110 ${color}`}
                  >
                    <span className="mt-0.5 text-base leading-none">{icon}</span>
                    <div>
                      <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.15em] opacity-60">
                        {label}
                      </p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA row */}
              <motion.div variants={fadeUp(0.35)} className="flex items-center gap-4">
                <a
                  href="#projects"
                  className="about-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
                >
                  See my work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-white/30 underline-offset-4 transition hover:text-white/70 hover:underline"
                >
                  Or get in touch →
                </a>
              </motion.div>
            </div>

            {/* Right — stats + terminal identity card */}
            <motion.div variants={fadeUp(0.2)} className="flex flex-col gap-4">

              {/* Identity card */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/2 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-500 font-mono text-sm font-bold text-white">
                      E
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/80">Ekene</p>
                      <p className="font-mono text-[11px] text-white/30">Frontend Engineer</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/6 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Open to work
                  </span>
                </div>

                <div className="space-y-2.5 border-t border-white/5 pt-5 font-mono text-[12px]">
                  {[
                    { key: "location",  val: "Lagos, Nigeria" },
                    { key: "timezone",  val: "GMT+1" },
                    { key: "remote",    val: "true" },
                    { key: "languages", val: "['EN', 'TS', 'JSX']" },
                    { key: "interests", val: "UI · Perf · DX" },
                  ].map(({ key, val }) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className="w-24 shrink-0 text-white/25">{key}</span>
                      <span className="text-white/10">·</span>
                      <span className="text-indigo-300/80">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {facts.map(({ value, label }) => (
                  <div
                    key={label}
                    className="group rounded-xl border border-white/[0.07] bg-white/2 p-4 transition hover:border-indigo-500/30 hover:bg-indigo-500/4"
                  >
                    <p className="bg-linear-to-br from-[#e0e0f8] to-[#a5b4fc] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-white/30">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-gradient {
          background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }
        .about-btn-primary {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 0 24px rgba(99,102,241,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .about-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.5);
        }
      `}</style>
    </section>
  );
}