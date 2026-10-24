import type { Accent } from "../lib/accents";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  accent: Accent;
  liveUrl?: string;
  /** Homepage screenshot in /public/projects, shown as the card preview. */
  image?: string;
  featured: boolean;
  metric?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    id: "poshneka",
    title: "Poschneka",
    tagline: "Building materials storefront",
    description:
      "A mobile-friendly storefront for a Kabba building materials supplier, showcasing tile, door and PVC ranges with one-tap WhatsApp ordering for trade and home buyers.",
    tags: ["Next.js", "Cloudinary", "WhatsApp Ordering"],
    gradient: "from-amber-600 via-orange-600 to-rose-600",
    accent: "amber",
    liveUrl: "https://poshneka.org/",
    image: "/projects/poshneka.png",
    featured: true,
  },
  {
    id: "lynspeed",
    title: "Lynspeed",
    tagline: "All-in-one JAMB prep platform",
    description:
      "Empowers Nigerian youth to succeed beyond exams by combining JAMB preparation, career guidance and practical skill development in one platform.",
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    accent: "indigo",
    liveUrl: "https://www.lynspeed.com.ng/",
    image: "/projects/lynspeed.png",
    featured: true,
    metric: { value: "60+", label: "Components" },
  },
  {
    id: "naijaville",
    title: "Naijaville",
    tagline: "Smart rental marketplace",
    description:
      "Find, tour, sign agreements, pay and move into a rental, all in one platform, with real-time communication over WebSockets.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Redux Toolkit"],
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    accent: "blue",
    liveUrl: "https://naijaville.com/",
    image: "/projects/naijaville.png",
    featured: true,
    metric: { value: "40%", label: "Faster load" },
  },
  {
    id: "payina",
    title: "Payina",
    tagline: "Fintech app concept",
    description:
      "Manage money anytime, anywhere with a secure, user-friendly platform offering seamless transactions and personalised financial solutions.",
    tags: ["React", "Vite", "Tailwind", "Redux"],
    gradient: "from-violet-600 via-pink-600 to-rose-600",
    accent: "violet",
    liveUrl: "https://payina.com.ng/",
    image: "/projects/payina.png",
    featured: true,
    metric: { value: "98", label: "Lighthouse" },
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "This very site",
    description:
      "Built with Next.js 16, React 19, Tailwind CSS v4 and Framer Motion on a dark, token-driven design system.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accent: "teal",
    featured: false,
  },
];
