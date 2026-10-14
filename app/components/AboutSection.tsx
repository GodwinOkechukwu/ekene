import Reveal from "./motion/Reveal";
import ButtonLink from "./ui/ButtonLink";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import StatusBadge from "./ui/StatusBadge";
import { profile } from "../data/profile";

const traits = [
  {
    label: "Philosophy",
    value: "Performance is a feature, not an afterthought.",
    icon: "◈",
    color: "text-indigo-300 border-indigo-500/30 bg-indigo-500/6",
  },
  {
    label: "Approach",
    value: "Systems thinking  design scales, one-offs don't.",
    icon: "⬡",
    color: "text-violet-300 border-violet-500/30 bg-violet-500/6",
  },
  {
    label: "Obsession",
    value: "Pixel-perfect UI that feels inevitable.",
    icon: "◉",
    color: "text-blue-300 border-blue-500/30 bg-blue-500/6",
  },
];

const details = [
  { key: "location", val: profile.location },
  { key: "timezone", val: profile.timezone },
  { key: "remote", val: "true" },
  { key: "languages", val: "['EN', 'TS', 'JSX']" },
  { key: "interests", val: "UI · Perf · DX" },
];

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            Building the web
            <br />
            <span className="text-gradient">one component at a time.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1} className="space-y-4 text-[15px] leading-[1.8] text-muted">
            <p>
              I&apos;m{" "}
              <strong className="font-medium text-white/85">{profile.displayName}</strong>, a
              frontend engineer with{" "}
              <strong className="font-medium text-white/85">
                {profile.yearsExperience}+ years
              </strong>{" "}
              of experience crafting modern web interfaces that users actually
              enjoy. I sit at the intersection of design and engineering 
              fluent in both Figma and TypeScript.
            </p>
            <p>
              I specialise in building{" "}
              <strong className="font-medium text-white/85">
                performant, scalable UI systems
              </strong>{" "}
              with React, Next.js and TypeScript. My work spans design systems,
              micro-interactions and architecture that holds up under
              real-world load.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {traits.map(({ label, value, icon, color }, i) => (
              <li key={label}>
                <Reveal
                  delay={0.15 + i * 0.07}
                  className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${color}`}
                >
                  <span aria-hidden="true" className="mt-0.5 text-base leading-none">
                    {icon}
                  </span>
                  <div>
                    <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.15em] opacity-70">
                      {label}
                    </p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.35} className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" className="py-2.5">
              See my work →
            </ButtonLink>
            <a
              href="#contact"
              className="text-sm font-medium text-muted underline-offset-4 transition hover:text-white hover:underline"
            >
              Or get in touch
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-white/8 bg-white/2 p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-500 font-mono text-sm font-bold text-white"
                >
                  {profile.displayName[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/85">{profile.displayName}</p>
                  <p className="font-mono text-[11px] text-muted">{profile.role}</p>
                </div>
              </div>
              <StatusBadge>Open to work</StatusBadge>
            </div>

            <dl className="space-y-2.5 border-t border-white/5 pt-5 font-mono text-[12px]">
              {details.map(({ key, val }) => (
                <div key={key} className="flex items-center gap-2">
                  <dt className="w-24 shrink-0 text-muted">{key}</dt>
                  <dd className="text-indigo-300">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
