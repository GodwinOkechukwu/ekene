import type { Accent } from "../lib/accents";

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  accent: Accent;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "transalliance",
    role: "Frontend Engineer",
    company: "Transalliance Holdings",
    location: "Victoria Island, Lagos",
    period: "Jan 2026 — Present",
    current: true,
    accent: "indigo",
    highlights: [
      "Develop and maintain responsive, high-performance web interfaces for a leading logistics and supply chain organisation with pan-African operations.",
      "Collaborate with product designers and backend engineers to implement modern UI components and ensure seamless API integration.",
      "Champion frontend best practices including component reusability, performance optimisation and accessibility compliance.",
      "Implement scalable design systems and contribute to technical architecture decisions.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chakra UI", "Framer Motion"],
  },
  {
    id: "nextgen",
    role: "Frontend Developer",
    company: "Next Gen Digital Technology",
    location: "Lagos, Nigeria",
    period: "Jan 2020 — Dec 2025",
    current: false,
    accent: "violet",
    highlights: [
      "Architected Lynspeed, a comprehensive e-learning platform serving 1,000+ students with JAMB prep, career guidance and skill development tools.",
      "Built Naijaville, a full-cycle smart rental marketplace with real-time WebSocket communication.",
      "Contributed to Payina, a secure fintech application scoring 98 on Lighthouse, with robust Redux state management.",
      "Delivered Miala (logistics & real-time tracking), Dryklin & NXG Job Hub (dual role-based dashboards) and Lynotech (corporate website).",
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux", "WebSockets", "Vite"],
  },
];
