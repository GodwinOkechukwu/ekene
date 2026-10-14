import { ArrowUpRight, Github, Mail, MessageCircle } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { profile, whatsappUrl } from "../../data/profile";
import Container from "./Container";
import Logo from "./Logo";

const connect = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-10 pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"
      />

      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role} building fast, accessible and polished web
              products from {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-sm font-semibold text-white/80">Navigate</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1 text-muted transition hover:text-white"
                  >
                    {label}
                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="opacity-0 transition group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold text-white/80">Connect</p>
            <ul className="flex flex-col gap-3 text-sm">
              {connect.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex items-center gap-2 text-muted transition hover:text-white"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
