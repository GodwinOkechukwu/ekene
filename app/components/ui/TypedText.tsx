"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const lines = [
  "ekene --role='Frontend Engineer'",
  "specialization: 'React · Next.js · TypeScript'",
  "philosophy: 'Performance is a feature.'",
  "status: open_to_work --remote=true",
  "passion: 'Pixel-perfect UI · Clean arch.'",
];

export default function TypedText() {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState("");
  const lineIndex = useRef(0);
  const charIndex = useRef(0);
  const isErasing = useRef(false);

  useEffect(() => {
    if (reduceMotion) return;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = lines[lineIndex.current];

      if (!isErasing.current) {
        if (charIndex.current < current.length) {
          setDisplay(current.slice(0, ++charIndex.current));
          timeout = setTimeout(tick, 28 + Math.random() * 20);
        } else {
          isErasing.current = true;
          timeout = setTimeout(tick, 2200);
        }
      } else if (charIndex.current > 0) {
        setDisplay(current.slice(0, --charIndex.current));
        timeout = setTimeout(tick, 14);
      } else {
        isErasing.current = false;
        lineIndex.current = (lineIndex.current + 1) % lines.length;
        timeout = setTimeout(tick, 400);
      }
    }

    timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <div className="min-h-5 font-mono text-sm text-white/70">
      <span className="sr-only">{lines[0]}</span>
      <span aria-hidden="true">
        {reduceMotion ? lines[0] : display}
        {!reduceMotion && (
          <span className="cursor-blink ml-0.5 inline-block h-3.5 w-0.5 bg-indigo-500 align-middle" />
        )}
      </span>
    </div>
  );
}
