"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "../../lib/animation";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "scaleIn";
  hover?: boolean;
};

/** Fades its children in once when they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  className,
  variant = "fadeUp",
  hover = false,
}: RevealProps) {
  return (
    <motion.div
      variants={variant === "scaleIn" ? scaleIn(delay) : fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
