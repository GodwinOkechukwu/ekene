
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#080810]/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "border-b border-white/6 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-10 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-8.5 w-8.5 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-500 font-mono text-sm font-bold text-white">
            E
          </div>
          <span className="text-xs uppercase tracking-widest text-white/40">
            Ekene · Portfolio
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.14em] text-white/35 transition hover:text-white/85"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-indigo-500/50 bg-indigo-500/8 px-4.5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-indigo-300 transition hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white sm:inline-block"
        >
          Let's talk ↗
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="text-white/50 transition hover:text-white sm:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 border-t border-white/6 px-10 py-5 sm:hidden"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-white/40 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}