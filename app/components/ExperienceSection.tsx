import Reveal from "./motion/Reveal";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import { accents } from "../lib/accents";
import { experiences } from "../data/experience";
import { profile } from "../data/profile";

export default function ExperienceSection() {
  return (
    <Section id="experience" glow="left">
      <SectionHeader
        index="04"
        label="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">made impact.</span>
          </>
        }
        description="Startups and enterprise, shipping products that are fast, accessible, and built to last."
      />

      <ol className="relative space-y-8">
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-2.75 top-2 w-px bg-white/5 md:left-3.75"
        />
        {experiences.map((exp, i) => {
          const accent = accents[exp.accent];
          return (
            <li key={exp.id}>
              <Reveal
                delay={i * 0.1}
                className="group relative flex gap-6 md:gap-8"
              >
                <div aria-hidden="true" className="relative mt-5 shrink-0">
                  <div
                    className={`relative z-10 h-5.5 w-5.5 rounded-full border-[3px] border-background ${accent.dot} transition-transform duration-300 group-hover:scale-110`}
                  />
                  {exp.current && (
                    <div
                      className={`absolute inset-0 animate-ping rounded-full ${accent.dot} opacity-30 motion-reduce:animate-none`}
                    />
                  )}
                </div>

                <article className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors duration-300 group-hover:border-white/15">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-white/90">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-muted">
                        {exp.company}
                        <span aria-hidden="true" className="mx-1.5">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] tabular-nums text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mb-5 space-y-2.5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden="true"
                          className={`mt-1.75 h-1 w-1 shrink-0 rounded-full ${accent.dot}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <li key={tag}>
                        <Tag className={accent.chip}>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border border-white/6 bg-white/2 px-6 py-4">
        <div aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 motion-reduce:animate-none" />
        <span className="font-mono text-xs text-muted">
          {profile.yearsExperience}+ years · {experiences.length} companies · 8+ shipped products
        </span>
      </Reveal>
    </Section>
  );
}
