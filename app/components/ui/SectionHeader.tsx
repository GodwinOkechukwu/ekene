import Reveal from "../motion/Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
};

export default function SectionHeader({
  index,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-14">
      <Reveal className="mb-6 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400">
          {`// ${index}`}
        </span>
        <span aria-hidden="true" className="h-px w-10 bg-indigo-500/30" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
