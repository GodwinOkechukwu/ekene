import Container from "./Container";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  glow?: "left" | "right";
};

/** Standard page section: anchor target, divider line, ambient glow, container. */
export default function Section({
  id,
  children,
  className = "",
  glow = "right",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 sm:py-28 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-20 h-80 w-80 rounded-full bg-violet-500/5 blur-[100px] ${
          glow === "right" ? "-right-40" : "-left-40"
        }`}
      />
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
