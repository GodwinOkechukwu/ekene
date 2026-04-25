"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
}

export default function StatCard({ target, suffix, label, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started.current) return;
      started.current = true;

      const duration = 1400;
      const step = target / (duration / 16);
      let current = 0;

      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        setCount(Math.round(current));
        if (current >= target) clearInterval(interval);
      }, 16);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="group rounded-xl border border-white/[0.07] bg-white/2 p-4 transition hover:border-indigo-500/30 hover:bg-indigo-500/4">
      <div className="bg-linear-to-br from-[#e0e0f8] to-[#a5b4fc] bg-clip-text text-[26px] font-bold leading-none tracking-tight text-transparent">
        {count}{suffix}
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-widest text-white/30">
        {label}
      </div>
    </div>
  );
}