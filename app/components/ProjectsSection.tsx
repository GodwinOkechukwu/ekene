import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./motion/Reveal";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import { accents } from "../lib/accents";
import { projects, type Project } from "../data/projects";
import { profile } from "../data/profile";

function LiveLink({ project }: { project: Project }) {
  if (!project.liveUrl) return null;
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title} (opens in a new tab)`}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-4 py-1.5 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-indigo-400"
    >
      Live site <ArrowUpRight size={12} aria-hidden="true" />
    </a>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const accent = accents[project.accent];
  return (
    <Reveal
      delay={(index % 2) * 0.1}
      hover
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors duration-300 ${accent.border}`}
    >
      <div
        aria-hidden="true"
        className={`relative mb-5 h-44 overflow-hidden rounded-xl bg-linear-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />
        {project.metric && (
          <div className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
            <p className="font-mono text-lg font-bold leading-none text-white">
              {project.metric.value}
            </p>
            <p className="font-mono text-[10px] text-white/70">
              {project.metric.label}
            </p>
          </div>
        )}
      </div>

      <h3 className="text-base font-semibold text-white/90">{project.title}</h3>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted">
        {project.tagline}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag className={accent.chip}>{tag}</Tag>
          </li>
        ))}
      </ul>

      <LiveLink project={project} />
    </Reveal>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        label="Projects"
        title={
          <>
            Things I&apos;ve <span className="text-gradient">shipped.</span>
          </>
        }
        description="A selection of projects across product, client work and open source. Each one taught me something new about building at scale."
      />

      <ul className="mb-6 grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => (
          <li key={project.id}>
            <FeaturedCard project={project} index={i} />
          </li>
        ))}
      </ul>

      {rest.length > 0 && (
        <ul className="grid gap-4">
          {rest.map((project) => {
            const accent = accents[project.accent];
            return (
              <li key={project.id}>
                <Reveal
                  hover
                  className={`group relative overflow-hidden rounded-xl border border-white/6 bg-white/2 p-5 transition-colors duration-300 ${accent.border}`}
                >
                  <div
                    aria-hidden="true"
                    className={`mb-3 h-2 w-8 rounded-full bg-linear-to-r ${project.gradient}`}
                  />
                  <h3 className="text-sm font-semibold text-white/90">
                    {project.title}{" "}
                    <span className="font-normal text-muted">
                      — {project.tagline}
                    </span>
                  </h3>
                  <p className="mt-1.5 mb-3 text-xs leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Tag className={accent.chip}>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>
      )}

      <Reveal delay={0.2} className="mt-12 flex justify-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-6 py-2.5 text-sm text-muted transition hover:border-white/20 hover:text-white"
        >
          <Github size={15} aria-hidden="true" />
          View all projects on GitHub
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
