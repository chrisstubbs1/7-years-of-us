"use client";

import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { useState } from "react";

type MemorySwipeProps = {
  cards: string[];
};

export function MemorySwipe({ cards }: MemorySwipeProps) {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return cards.length - 1;
      if (next >= cards.length) return 0;
      return next;
    });
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
  };

  return (
    <div className="mt-8">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-muted">
        Swipe through micro-memories
      </p>
      <div className="relative min-h-[8.5rem] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-grab active:cursor-grabbing rounded-2xl bg-gradient-to-br from-white/70 to-lilac-100/60 px-5 py-6 shadow-[0_10px_40px_rgba(90,69,112,0.08)] backdrop-blur-sm"
          >
            <p className="font-hand text-2xl leading-snug text-lilac-900">
              {cards[index]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          className="min-h-11 min-w-11 rounded-full text-lilac-700"
          aria-label="Previous memory"
        >
          ←
        </button>
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Memory ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-lilac-600 scale-125" : "bg-lilac-300"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="min-h-11 min-w-11 rounded-full text-lilac-700"
          aria-label="Next memory"
        >
          →
        </button>
      </div>
    </div>
  );
}
