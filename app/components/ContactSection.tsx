
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  },
});

export default function ContactSection() {
  return (
    <section       id="contact" className="relative overflow-hidden bg-[#080810] py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-3xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="pointer-events-none absolute -top-20 right-0 h-75 w-75 rounded-full bg-indigo-500/6 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-62.5 w-62.5 rounded-full bg-violet-500/5 blur-[80px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-justify"
      >
        {/* Top label */}
        <motion.div variants={fadeUp(0)} className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400/70">
                      // 05
                    </span>
                    <div className="h-px flex-1 max-w-10 bg-indigo-500/30" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/20">
                      Contact
                    </span>
         </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp(0.05)}
          className="text-4xl font-bold md:tracking-tight text-[#f0f0fa] sm:text-5xl"
        >
          Let’s <br className="md:hidden"/> create something
          <span className="contact-gradient px-2">impactful.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp(0.1)}
          className="mx-auto mt-5 max-w-6xl text-[15px] leading-relaxed text-white/35"
        >
          I’m open to new opportunities, collaborations, and interesting
          problems. If you have something in mind, let’s talk.
        </motion.p>


        {/* CTA */}
         <motion.div
      variants={fadeUp(0.2)}
      className="mt-10 flex justify-center"
    >
      <motion.a
  href="https://wa.me/23408158212395?text=Hi%20I%20just%20checked%20your%20portfolio%20and%20I'd%20like%20to%20work%20with%20you"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -4, scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20"
>
  <Mail className="w-4 h-4" />
  Contact Me
  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10" />
</motion.a>
    </motion.div>
      </motion.div>

      {/* Gradient text animation */}
      <style>{`
        .contact-gradient {
          background: linear-gradient(90deg, #6366f1, #a855f7, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }
      `}</style>
    </section>
  );
}