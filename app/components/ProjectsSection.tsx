"use client";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE } satisfies Transition,
  },
});

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE } satisfies Transition,
  },
};

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  liveUrl: string;
  featured: boolean;
  metric?: { value: string; label: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Lynspeed — All-in-One JAMB Prep Platform",
    description:
      "Lynspeed empowers Nigerian youth to succeed beyond exams by combining JAMB preparation, career guidance, and practical skill development in one platform.",
    tags: ["React", "TypeScript", "Tailwind", "Redux",],
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    accentColor: "indigo",
    liveUrl: "https://www.lynspeed.com.ng/",
    
    featured: false,
    metric: { value: "60+", label: "Components" },
  },
  {
    id: 2,
    title: "Naijaville — Smart Rental Marketplace",
    description:
      "Naijaville lets you find, tour, sign agreements, pay, and move into a rental all in one platform.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Redux tool kit"],
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    accentColor: "blue",
    liveUrl: "https://naijaville.com/",
    featured: false,
    metric: { value: "40%", label: "Faster load" },
  },
  {
    id: 3,
    title: "Payina — Fintech App Concept",
    description:
      "Manage money anytime, anywhere with a secure, user-friendly platform offering seamless transactions and personalized financial solutions.",
    tags: ["React.js", "Vite", "Tailwiind", "Redux"],
    gradient: "from-violet-600 via-pink-600 to-rose-600",
    accentColor: "violet",
    liveUrl: "https://payina.com.ng/",
    featured: false,
    metric: { value: "98", label: "Lighthouse" },
  },
  {
    id: 4,
    title: "Dev Portfolio — v2",
    description:
      "This very site. Built with Next.js 15, Framer Motion, and a dark cinematic design system. Open-sourced and fully accessible.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accentColor: "teal",
    liveUrl: "#",
    featured: false,
  },
];

const accentMap: Record<string, { chip: string; glow: string; border: string }> = {
  indigo: {
    chip:   "border-indigo-500/30 bg-indigo-500/[0.08] text-indigo-300",
    glow:   "group-hover:bg-indigo-500/10",
    border: "group-hover:border-indigo-500/30",
  },
  blue: {
    chip:   "border-blue-500/30 bg-blue-500/[0.08] text-blue-300",
    glow:   "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
  },
  violet: {
    chip:   "border-violet-500/30 bg-violet-500/[0.08] text-violet-300",
    glow:   "group-hover:bg-violet-500/10",
    border: "group-hover:border-violet-500/30",
  },
  teal: {
    chip:   "border-teal-500/30 bg-teal-500/[0.08] text-teal-300",
    glow:   "group-hover:bg-teal-500/10",
    border: "group-hover:border-teal-500/30",
  },
};

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#080810] py-32">
      {/* Divider glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-10 h-100 w-100 rounded-full bg-indigo-500/6 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-75 w-75 rounded-full bg-violet-500/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div variants={fadeUp(0)} className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400/70">// 03</span>
            <div className="h-px w-10 bg-indigo-500/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/20">Projects</span>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-4xl font-bold tracking-tight text-[#f0f0fa] sm:text-5xl">
            Things I've <span className="projects-gradient">shipped.</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/35">
            A selection of projects across product, open source, and client work.
            Each one taught me something new about building at scale.
          </motion.p>
        </motion.div>

        {/* Featured — large cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-6 grid gap-5 md:grid-cols-2"
        >
          {featured.map((project) => {
            const accent = accentMap[project.accentColor];
            return (
              <motion.div
                key={project.id}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/2 p-6 transition-colors duration-300 ${accent.border}`}
              >
                {/* Gradient thumbnail */}
                <div className={`relative mb-5 h-44 overflow-hidden rounded-xl bg-linear-to-br ${project.gradient}`}>
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />
                  {/* Metric badge */}
                  {project.metric && (
                    <div className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                      <p className="font-mono text-lg font-bold leading-none text-white">{project.metric.value}</p>
                      <p className="font-mono text-[10px] text-white/60">{project.metric.label}</p>
                    </div>
                  )}
                  {/* Corner glow */}
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 bg-white/20 ${accent.glow}`} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-semibold text-white/80 transition group-hover:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/35">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${accent.chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-4 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/10 hover:text-white"
                  >
                    Live <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Hover glow behind card */}
                <div className={`pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Rest — compact row cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {rest.map((project) => {
            const accent = accentMap[project.accentColor];
            return (
              <motion.div
                key={project.id}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-xl border border-white/6 bg-white/2 p-5 transition-colors duration-300 ${accent.border}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Gradient dot */}
                    <div className={`mb-3 h-2 w-8 rounded-full bg-linear-to-r ${project.gradient}`} />
                    <h3 className="mb-1.5 text-sm font-semibold text-white/70 transition group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-white/30">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${accent.chip}`}>
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="rounded-full border border-white/[0.07] px-2 py-0.5 font-mono text-[10px] text-white/20">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2">
                    <a target="_blank" href={project.liveUrl} className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/8 text-white/30 transition hover:border-white/20 hover:text-white/70">
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/GodwinOkechukwu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/2 px-6 py-2.5 text-sm text-white/40 transition hover:border-white/20 hover:text-white/70"
          >
            <Github size={15} />
            View all projects on GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .projects-gradient {
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