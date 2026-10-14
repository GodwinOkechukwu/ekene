export default function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {children}
    </span>
  );
}
