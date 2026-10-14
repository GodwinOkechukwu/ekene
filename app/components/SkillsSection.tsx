import Reveal from "./motion/Reveal";
import SkillBar from "./motion/SkillBar";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import { skillCategories, skills, type SkillCategory } from "../data/skills";

const categoryMeta: Record<
  SkillCategory,
  { label: string; color: string; bar: string }
> = {
  core: {
    label: "Core",
    color: "text-indigo-300 border-indigo-500/30 bg-indigo-500/7",
    bar: "bg-indigo-500",
  },
  styling: {
    label: "Styling",
    color: "text-violet-300 border-violet-500/30 bg-violet-500/7",
    bar: "bg-violet-500",
  },
  state: {
    label: "State",
    color: "text-blue-300 border-blue-500/30 bg-blue-500/7",
    bar: "bg-blue-500",
  },
  tooling: {
    label: "Tooling",
    color: "text-teal-300 border-teal-500/30 bg-teal-500/7",
    bar: "bg-teal-500",
  },
};

export default function SkillsSection() {
  return (
    <Section id="skills" glow="left">
      <SectionHeader
        index="02"
        label="Tech Stack"
        title={
          <>
            Tools I <span className="text-gradient">think in.</span>
          </>
        }
        description="A curated set of technologies I reach for daily chosen for developer experience, performance, and the ability to ship with confidence."
      />

      <div className="space-y-12">
        {skillCategories.map((cat) => {
          const meta = categoryMeta[cat];
          const items = skills.filter((s) => s.category === cat);
          return (
            <div key={cat}>
              <div className="mb-5 flex items-center gap-3">
                <h3
                  className={`rounded-full border px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${meta.color}`}
                >
                  {meta.label}
                </h3>
                <div aria-hidden="true" className="h-px flex-1 bg-white/5" />
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {items.map((skill, i) => (
                  <li key={skill.name}>
                    <Reveal
                      variant="scaleIn"
                      delay={i * 0.07}
                      hover
                      className="group rounded-xl border border-white/6 bg-white/2 p-4 transition-colors hover:border-white/12 hover:bg-white/4"
                    >
                      <div
                        aria-hidden="true"
                        className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold ${meta.color}`}
                      >
                        {skill.icon}
                      </div>
                      <p className="mb-3 text-sm font-medium text-white/80">
                        {skill.name}
                      </p>
                      <div
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.level}
                        className="h-0.5 w-full overflow-hidden rounded-full bg-white/8"
                      >
                        <SkillBar level={skill.level} className={meta.bar} />
                      </div>
                      <p className="mt-1.5 font-mono text-[10px] text-muted">
                        {skill.level}%
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/6 bg-white/2 px-6 py-4">
        <div className="flex items-center gap-3">
          <div aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs text-muted">
            {skills.length} technologies · actively maintained
          </span>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {skillCategories.map((cat) => (
            <li key={cat} className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${categoryMeta[cat].bar}`}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {categoryMeta[cat].label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
