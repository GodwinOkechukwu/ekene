"use client";

import { motion } from "framer-motion";
import { EASE } from "../../lib/animation";

export default function SkillBar({
  level,
  className,
}: {
  level: number;
  className: string;
}) {
  return (
    <motion.div
      className={`h-full rounded-full ${className}`}
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease: EASE }}
    />
  );
}
