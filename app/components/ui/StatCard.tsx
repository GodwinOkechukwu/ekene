"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
}

const DURATION = 1400;

export default function StatCard({
  target,
  suffix,
  label,
  delay = 0,
}: StatCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame = 0;
    const timer = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1);
        setCount(Math.round(target * progress));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [inView, reduceMotion, target, delay]);

  const value = reduceMotion ? target : count;

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/8 bg-white/2 p-4 transition hover:border-indigo-500/30 hover:bg-indigo-500/5"
    >
      <div className="bg-linear-to-br from-[#e0e0f8] to-[#a5b4fc] bg-clip-text text-[26px] font-bold leading-none tracking-tight text-transparent tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}
