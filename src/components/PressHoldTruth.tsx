"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type PressHoldTruthProps = {
  note: string;
  holdMs?: number;
};

export function PressHoldTruth({ note, holdMs = 900 }: PressHoldTruthProps) {
  const [revealed, setRevealed] = useState(false);
  const [holding, setHolding] = useState(false);
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  const timerRef = useRef<number | null>(null);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  const clear = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
    animRef.current?.stop();
    if (!revealed) progress.set(0);
    setHolding(false);
  };

  const start = () => {
    if (revealed) return;
    setHolding(true);
    animRef.current = animate(progress, 1, { duration: holdMs / 1000, ease: "linear" });
    timerRef.current = window.setTimeout(() => {
      setRevealed(true);
      setHolding(false);
    }, holdMs);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      animRef.current?.stop();
    };
  }, []);

  return (
    <div className="mt-8">
      {!revealed ? (
        <button
          type="button"
          className={`relative w-full overflow-hidden rounded-2xl border border-lilac-300/70 bg-white/50 px-5 py-4 text-left backdrop-blur-sm transition select-none ${
            holding ? "truth-holding" : ""
          }`}
          onPointerDown={start}
          onPointerUp={clear}
          onPointerLeave={clear}
          onPointerCancel={clear}
          onContextMenu={(e) => e.preventDefault()}
        >
          <p className="font-hand text-xl text-lilac-800">
            Press & hold for a truth I wish I&apos;d said sooner
          </p>
          <p className="mt-1 text-sm text-ink-muted">A soft note, waiting beneath your thumb.</p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-lilac-100">
            <motion.div className="h-full bg-lilac-500" style={{ width }} />
          </div>
        </button>
      ) : (
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-lilac-200 bg-white/60 px-5 py-5 backdrop-blur-sm"
        >
          <p className="font-hand text-2xl leading-snug text-lilac-900">{note}</p>
        </motion.blockquote>
      )}
    </div>
  );
}
