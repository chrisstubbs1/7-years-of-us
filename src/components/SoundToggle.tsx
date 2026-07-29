"use client";

import { motion } from "framer-motion";
import { useAmbient } from "@/components/AmbientProvider";

export function SoundToggle() {
  const { enabled, available, toggle } = useAmbient();

  if (!available) return null;

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Mute ambient piano" : "Play ambient piano"}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-lilac-300/60 bg-white/70 text-lilac-700 shadow-[0_8px_24px_rgba(90,69,112,0.12)] backdrop-blur-md safe-pb"
      whileTap={{ scale: 0.92 }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {enabled ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M11 5L6 9H3v6h3l5 4V5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M16 9c1.2.9 2 2.2 2 3.5S17.2 15.1 16 16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M18.5 7c1.8 1.4 3 3.4 3 5.5s-1.2 4.1-3 5.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M11 5L6 9H3v6h3l5 4V5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M16 10l5 5M21 10l-5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )}
    </motion.button>
  );
}
