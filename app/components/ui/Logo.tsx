import { profile } from "../../data/profile";

export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-500 font-mono text-sm font-bold text-white"
      >
        {profile.displayName[0]}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted">
        {profile.displayName} · Portfolio
      </span>
    </span>
  );
}
