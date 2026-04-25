export default function TerminalCard() {
  return (
    <div className="rounded-xl border border-indigo-500/20 bg-[rgba(10,10,20,0.7)] p-4 font-mono">
      {/* Traffic lights */}
      <div className="mb-3 flex items-center gap-1.5 border-b border-white/5 pb-3">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-amber-500" />
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-white/20">
          ekene@portfolio ~ zsh
        </span>
      </div>

      {/* Lines */}
      <div className="space-y-0.5 text-[11px] leading-[1.8]">
        <p>
          <span className="text-indigo-400">❯ </span>
          <span className="text-white/60">git log --oneline -3</span>
        </p>
        <p>
          <span className="text-green-400">a3f91c2</span>
          <span className="text-white/35"> feat: ship design system v2</span>
        </p>
        <p>
          <span className="text-green-400">d7b22e1</span>
          <span className="text-white/35"> perf: lighthouse score 98/100</span>
        </p>
        <p>
          <span className="text-green-400">09c4a7f</span>
          <span className="text-white/35"> fix: eliminate CLS on hero</span>
        </p>
        <p className="mt-1.5">
          <span className="text-indigo-400">❯ </span>
          <span className="text-amber-400">npm run build</span>
        </p>
        <p className="text-white/20">
          &nbsp; ✓ compiled in 1.2s — ready to ship
        </p>
      </div>
    </div>
  );
}