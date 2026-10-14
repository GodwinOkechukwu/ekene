import { ArrowRight, Download } from "lucide-react";
import Reveal from "./motion/Reveal";
import ButtonLink from "./ui/ButtonLink";
import Container from "./ui/Container";
import SocialButtons from "./ui/SocialButtons";
import StatCard from "./ui/StatCard";
import StatusBadge from "./ui/StatusBadge";
import TerminalCard from "./ui/TerminalCard";
import TypedText from "./ui/TypedText";
import { profile } from "../data/profile";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-28 h-96 w-96 rounded-full bg-indigo-500/12 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-purple-500/8 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="scan-line pointer-events-none absolute inset-x-0 z-0 h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent"
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center gap-12 pb-12 pt-28 md:grid md:grid-cols-[1fr_380px] md:items-center">
        <div className="flex flex-col gap-7">
          <Reveal delay={0.1}>
            <StatusBadge>Available for opportunities</StatusBadge>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
              {`// ${profile.role}`}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-heading">
              <span className="block">{profile.displayName}</span>
              <span className="text-gradient block">Builds.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="border-l-2 border-indigo-500 pl-3 font-mono text-sm text-muted">
              React · Next.js · TypeScript{" "}
              <span className="text-white/70">
                → {profile.yearsExperience}+ years crafting at scale
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-0.5 font-mono text-sm text-indigo-500">
                $&gt;
              </span>
              <TypedText />
            </div>
          </Reveal>

          <Reveal delay={0.7} className="flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              View Projects
            </ButtonLink>
            <ButtonLink href={profile.cv} variant="ghost" download>
              Download CV
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.85}>
            <SocialButtons />
          </Reveal>
        </div>

        <Reveal delay={0.5} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2.5">
            {profile.stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={700 + i * 100} />
            ))}
          </div>
          <TerminalCard />
        </Reveal>
      </Container>

      <Container className="relative z-10 flex items-center justify-between border-t border-white/5 py-4">
        <span className="text-[11px] uppercase tracking-widest text-muted">
          {profile.location} · {profile.timezone}
        </span>
        <a
          href="#about"
          className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted transition hover:text-white sm:flex"
        >
          Scroll to explore
          <span
            aria-hidden="true"
            className="flex h-5 w-5 animate-bounce items-center justify-center rounded-full border border-white/10 motion-reduce:animate-none"
          >
            ↓
          </span>
        </a>
      </Container>
    </section>
  );
}
