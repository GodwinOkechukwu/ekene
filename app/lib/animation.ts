import type { Variants } from "framer-motion";

export const EASE = [0.22, 0.61, 0.36, 1] as const;

export const fadeUp = (delay = 0, distance = 20): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  },
});

export const fadeRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: EASE },
  },
});
