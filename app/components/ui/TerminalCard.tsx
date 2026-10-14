export default function TerminalCard() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-indigo-500/20 bg-surface/80 p-4 font-mono"
    >
      <div className="mb-3 flex items-center gap-1.5 border-b border-white/5 pb-3">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-amber-500" />
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-muted">
          ekene@portfolio ~ zsh
        </span>
      </div>

      <div className="space-y-0.5 text-[11px] leading-[1.8]">
        <p>
          <span className="text-indigo-400">❯ </span>
          <span className="text-white/70">git log --oneline -3</span>
        </p>
        <p>
          <span className="text-green-400">a3f91c2</span>
          <span className="text-muted"> feat: ship design system v2</span>
        </p>
        <p>
          <span className="text-green-400">d7b22e1</span>
          <span className="text-muted"> perf: lighthouse score 98/100</span>
        </p>
        <p>
          <span className="text-green-400">09c4a7f</span>
          <span className="text-muted"> fix: eliminate CLS on hero</span>
        </p>
        <p className="mt-1.5">
          <span className="text-indigo-400">❯ </span>
          <span className="text-amber-400">npm run build</span>
        </p>
        <p className="text-muted">&nbsp; ✓ compiled ready to ship</p>
      </div>
    </div>
  );
}
