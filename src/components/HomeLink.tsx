"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HomeLinkProps = {
  tone?: "light" | "dark";
};

export function HomeLink({ tone = "light" }: HomeLinkProps) {
  const styles =
    tone === "light"
      ? "border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
      : "border-lilac-300/70 bg-white/70 text-lilac-800 backdrop-blur-md hover:bg-white";

  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 top-0 z-40 safe-px safe-pt"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Link
        href="/"
        className={`pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm transition active:scale-[0.98] ${styles}`}
        aria-label="Back to home"
      >
        <span aria-hidden>←</span>
        Home
      </Link>
    </motion.div>
  );
}
