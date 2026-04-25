
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Navbar from "./ui/Navbar";
import SocialButtons from "./ui/Socialbuttons";
import StatCard from "./ui/Statcard";
import TerminalCard from "./ui/Terminalcard";
import TypedText from "./ui/Typedtext";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: EASE,
  } satisfies Transition,
});

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.8,
    delay: 0.5,
    ease: EASE,
  } satisfies Transition,
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas || !ctx) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawGrid(ctx, canvas.width, canvas.height);
    }

    function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
      ctx.clearRect(0, 0, w, h);
      const size = 48;
      ctx.strokeStyle = "rgba(99,102,241,0.18)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= w; x += size) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y <= h; y += size) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      for (let x = 0; x <= w; x += size) {
        for (let y = 0; y <= h; y += size) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(99,102,241,0.5)";
          ctx.fill();
        }
      }
    }

    window.addEventListener("resize", resize);
    setTimeout(resize, 100);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#080810] text-[#e8e8f0]">
      {/* Grid canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      />

      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-1 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-24 -top-28 h-125 w-125 rounded-full bg-indigo-500/12 blur-[80px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-100 w-100 rounded-full bg-purple-500/8 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-75 w-75 rounded-full bg-blue-500/[0.07] blur-[80px]" />

      {/* Scan line */}
      <div className="scan-line pointer-events-none absolute left-0 right-0 z-2 h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent" />

      <Navbar />

      {/* Hero body */}
      <div className="relative z-5 flex flex-1 grid-cols-[1fr_380px] flex-col gap-12 px-10 py-12 md:grid md:items-center">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.div {...fadeUp(0.1)} className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5">
            <span className="relative flex h-1.75 w-1.75">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.75 w-1.75 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400">
              Available for opportunities
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-400/80">
            // Frontend Engineer
          </motion.p>

          <motion.h1 {...fadeUp(0.3)} className="text-[clamp(3.2rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            <span className="block text-[#f0f0fa]">Ekene</span>
            <span className="hero-name-gradient block">Builds.</span>
          </motion.h1>

          <motion.div {...fadeUp(0.45)} className="border-l-2 border-indigo-500 pl-3 font-mono text-sm text-white/25">
            React · Next.js · TypeScript &nbsp;
            <em className="not-italic text-white/55">→ 3+ years crafting at scale</em>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-sm text-indigo-500">$&gt;</span>
            <TypedText />
          </motion.div>

          <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-3">
            <a href="#projects">

            <button className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white">
              <ArrowRight className="h-4 w-4" />
              View Projects
            </button>
            </a>
            <a  href="/Ekene_Godwin_CV.pdf">

            <button className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white/50 transition hover:border-white/30 hover:text-white">
              Download CV
              <Download className="h-3.5 w-3.5" />
            </button>
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.85)}>
            <SocialButtons />
          </motion.div>
        </div>

        {/* Right */}
        <motion.div {...fadeRight} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2.5">
            <StatCard target={4} suffix="+" label="Years exp." delay={700} />
            <StatCard target={8} suffix="+" label="Projects shipped" delay={800} />
            <StatCard target={10} suffix="+" label="Clients served" delay={900} />
            <StatCard target={98} suffix="%" label="On-time delivery" delay={1000} />
          </div>
          <StatCard target={0} suffix={""} label={""} />
          <TerminalCard />
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="relative z-5 flex items-center justify-between border-t border-white/4 px-10 py-4">
        <span className="text-[11px] uppercase tracking-widest text-white/15">
          Lagos, Nigeria · GMT+1
        </span>
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-white/20">
          Scroll to explore
          <div className="flex h-5 w-5 animate-bounce items-center justify-center rounded-full border border-white/10">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .hero-name-gradient {
          background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }
        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 0 30px rgba(99,102,241,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(99,102,241,0.5); }
        .scan-line { animation: scanDown 6s linear infinite; }
        @keyframes scanDown { from{top:0;opacity:0.6} 80%{opacity:0.6} to{top:100%;opacity:0} }
      `}</style>
    </div>
  );
}