export type Accent = "indigo" | "violet" | "blue" | "teal" | "amber";

type AccentStyle = {
  chip: string;
  dot: string;
  bar: string;
  text: string;
  border: string;
  glow: string;
  line: string;
};

// Full literal class names so Tailwind's static scanner can see them.
export const accents: Record<Accent, AccentStyle> = {
  indigo: {
    chip: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    dot: "bg-indigo-500",
    bar: "bg-indigo-500",
    text: "text-indigo-400",
    border: "group-hover:border-indigo-500/30",
    glow: "group-hover:bg-indigo-500/10",
    line: "bg-indigo-500/40",
  },
  violet: {
    chip: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    dot: "bg-violet-500",
    bar: "bg-violet-500",
    text: "text-violet-400",
    border: "group-hover:border-violet-500/30",
    glow: "group-hover:bg-violet-500/10",
    line: "bg-violet-500/40",
  },
  blue: {
    chip: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    dot: "bg-blue-500",
    bar: "bg-blue-500",
    text: "text-blue-400",
    border: "group-hover:border-blue-500/30",
    glow: "group-hover:bg-blue-500/10",
    line: "bg-blue-500/40",
  },
  teal: {
    chip: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    dot: "bg-teal-500",
    bar: "bg-teal-500",
    text: "text-teal-400",
    border: "group-hover:border-teal-500/30",
    glow: "group-hover:bg-teal-500/10",
    line: "bg-teal-500/40",
  },
  amber: {
    chip: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
    text: "text-amber-400",
    border: "group-hover:border-amber-500/30",
    glow: "group-hover:bg-amber-500/10",
    line: "bg-amber-500/40",
  },
};
