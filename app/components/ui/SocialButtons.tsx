import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function SocialButtons() {
  return (
    <ul className="flex gap-2.5">
      {socials.map(({ icon: Icon, href, label }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-muted transition hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-indigo-400"
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
