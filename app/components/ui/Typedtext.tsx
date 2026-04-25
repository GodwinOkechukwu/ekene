"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "ekene --role='Senior Frontend Engineer'",
  "specialization: 'React · Next.js · TypeScript'",
  "philosophy: 'Performance is a feature.'",
  "status: open_to_work --remote=true",
  "passion: 'Pixel-perfect UI · Clean arch.'",
];

export default function TypedText() {
  const [display, setDisplay] = useState("");
  const lineIndex = useRef(0);
  const charIndex = useRef(0);
  const isErasing = useRef(false);

  useEffect(() => {
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
      } else {
        if (charIndex.current > 0) {
          setDisplay(current.slice(0, --charIndex.current));
          timeout = setTimeout(tick, 14);
        } else {
          isErasing.current = false;
          lineIndex.current = (lineIndex.current + 1) % lines.length;
          timeout = setTimeout(tick, 400);
        }
      }
    }

    timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="font-mono text-sm text-white/55">
      {display}
      <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-[blink_1s_step-end_infinite] bg-indigo-500 align-middle" />
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </div>
  );
}