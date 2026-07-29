"use client";

import { motion } from "framer-motion";
import type { ChapterSymbol } from "@/lib/types";

const SYMBOL_GLYPH: Record<ChapterSymbol, string> = {
  flowers: "❀",
  lilac: "✿",
  "diet-coke": "◉",
  chester: "ฅ",
  franny: "ᓚ",
  cats: "ฅ^•ﻌ•^ฅ",
  stars: "✦",
};

type FloatingSymbolsProps = {
  symbol?: ChapterSymbol;
  density?: "low" | "medium";
};

const positions = [
  { top: "8%", left: "8%", delay: 0 },
  { top: "18%", left: "82%", delay: 0.6 },
  { top: "42%", left: "4%", delay: 1.2 },
  { top: "58%", left: "88%", delay: 0.3 },
  { top: "78%", left: "12%", delay: 1.5 },
  { top: "86%", left: "78%", delay: 0.9 },
];

export function FloatingSymbols({
  symbol = "lilac",
  density = "medium",
}: FloatingSymbolsProps) {
  const items = density === "low" ? positions.slice(0, 3) : positions;
  const glyph = SYMBOL_GLYPH[symbol];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((pos, i) => (
        <motion.span
          key={i}
          className="absolute text-lilac-400/35 float-soft"
          style={{
            top: pos.top,
            left: pos.left,
            fontSize: i % 2 === 0 ? "1.1rem" : "0.85rem",
            animationDelay: `${pos.delay}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 1 }}
        >
          {glyph}
        </motion.span>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <span
          key={`spark-${i}`}
          className="sparkle absolute h-1 w-1 rounded-full bg-lilac-300"
          style={{
            top: `${20 + i * 18}%`,
            left: `${15 + i * 20}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}
