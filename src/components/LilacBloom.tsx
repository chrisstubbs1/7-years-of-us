"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LilacBloomProps = {
  onComplete?: () => void;
  durationMs?: number;
};

const petals = [
  { x: 0, y: -38, rotate: 0, delay: 0 },
  { x: 32, y: -18, rotate: 51, delay: 0.05 },
  { x: 28, y: 18, rotate: 102, delay: 0.1 },
  { x: 0, y: 36, rotate: 154, delay: 0.15 },
  { x: -28, y: 18, rotate: 205, delay: 0.2 },
  { x: -32, y: -18, rotate: 257, delay: 0.25 },
];

export function LilacBloom({ onComplete, durationMs = 1600 }: LilacBloomProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = window.setTimeout(() => setVisible(false), durationMs);
    const done = window.setTimeout(() => onComplete?.(), durationMs + 200);
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(done);
    };
  }, [durationMs, onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-lilac-50/70 backdrop-blur-[2px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: durationMs / 1000 - 0.4 }}
      aria-hidden
    >
      <div className="relative h-40 w-40">
        {petals.map((petal, i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-14 w-9 -translate-x-1/2 -translate-y-1/2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-lilac-200 via-lilac-400 to-lilac-600 opacity-90 shadow-[0_0_20px_rgba(183,148,192,0.45)]"
            style={{ rotate: petal.rotate }}
            initial={{ scale: 0.2, x: 0, y: 0, opacity: 0 }}
            animate={{
              scale: [0.2, 1.05, 1],
              x: petal.x,
              y: petal.y,
              opacity: [0, 1, 0.85],
            }}
            transition={{
              duration: 1.1,
              delay: petal.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
        <motion.span
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-soft"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
