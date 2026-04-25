import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github,   href: "https://github.com/GodwinOkechukwu", label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/okechukwu-godwin-103818239/", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:kenesongodwin@gmail.com", label: "Email"    },
];

export default function SocialButtons() {
  return (
    <div className="flex gap-2.5">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/3 text-white/30 transition hover:border-indigo-500/50 hover:bg-indigo-500/8 hover:text-indigo-300"
        >
          <Icon size={15} />
        </a>
      ))}
    </div>
  );
}