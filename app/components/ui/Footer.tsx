"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowUpRight, MessageCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE },
  },
});

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080810] pt-20 pb-10">
      {/* Top Divider Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-75 w-75 rounded-full bg-indigo-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-75 w-75 rounded-full bg-violet-500/5 blur-[100px]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
          <div className="flex h-8.5 w-8.5 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-500 font-mono text-sm font-bold text-white">
            E
          </div>
          <span className="text-xs uppercase tracking-widest text-white/40">
            Ekene · Portfolio
          </span>
        </div>

          {/* Navigation */}
          <motion.div variants={fadeUp(0.1)}>
            <p className="text-sm font-semibold text-white/70 mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-white/40 transition hover:text-white"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp(0.2)}>
            <p className="text-sm font-semibold text-white/70 mb-4">
              Connect
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/GodwinOkechukwu"
                target="_blank"
                className="group flex items-center gap-2 text-white/40 transition hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://wa.me/23408158212395?text=Hi%20I%20just%20checked%20your%20portfolio%20and%20I'd%20like%20to%20work%20with%20you"
                target="_blank"
                className="group flex items-center gap-2 text-white/40 transition hover:text-white"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a
                href="mailto:kenesongodwin@gmail.com"
                target="_blank"
                className="group flex items-center gap-2 text-white/40 transition hover:text-white"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp(0.3)}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row"
        >
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Okechukwu Ekene Godwin. All rights reserved.
          </p>

          <p className="text-xs text-white/20">
            Built with Next.js • Tailwind • Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}