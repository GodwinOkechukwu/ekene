export type SkillCategory = "core" | "styling" | "state" | "tooling";

export type Skill = {
  name: string;
  level: number; // 0–100
  category: SkillCategory;
  icon: string;
};

export const skills: Skill[] = [
  { name: "React", level: 95, category: "core", icon: "⚛" },
  { name: "Next.js", level: 92, category: "core", icon: "▲" },
  { name: "TypeScript", level: 90, category: "core", icon: "TS" },
  { name: "JavaScript", level: 96, category: "core", icon: "JS" },
  { name: "Tailwind CSS", level: 93, category: "styling", icon: "✦" },
  { name: "Framer Motion", level: 85, category: "styling", icon: "◎" },
  { name: "Chakra UI", level: 90, category: "styling", icon: "◈" },
  { name: "Redux", level: 82, category: "state", icon: "⬡" },
  { name: "Zustand", level: 88, category: "state", icon: "◉" },
  { name: "React Query", level: 86, category: "state", icon: "⟳" },
  { name: "Git", level: 91, category: "tooling", icon: "⌥" },
  { name: "Vitest", level: 78, category: "tooling", icon: "⬨" },
];

export const skillCategories: readonly SkillCategory[] = [
  "core",
  "styling",
  "state",
  "tooling",
];
