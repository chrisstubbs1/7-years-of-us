"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { chapters } from "@/data/chapters";

export function HeartbeatTimeline() {
  return (
    <section className="relative mx-auto w-full max-w-md px-1 py-4">
      <div className="absolute left-[1.35rem] top-6 bottom-6 w-px overflow-hidden">
        <div className="heartbeat-line h-full w-full bg-gradient-to-b from-lilac-300 via-lilac-500 to-lilac-700" />
      </div>

      <ol className="relative space-y-5">
        {chapters.map((chapter, i) => (
          <motion.li
            key={chapter.slug}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <Link
              href={`/chapters/${chapter.slug}`}
              className="group flex items-start gap-4 rounded-2xl py-2 pl-1 pr-2 transition active:scale-[0.99]"
            >
              <span
                className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-lilac-400 bg-lilac-50 shadow-[0_0_0_4px_rgba(183,148,192,0.15)] transition group-hover:border-lilac-600"
                style={{ backgroundColor: `${chapter.accent}33` }}
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-lilac-600" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted">
                  {chapter.yearLabel}
                </span>
                <span className="mt-0.5 block font-serif text-xl font-medium text-lilac-900 transition group-hover:text-lilac-700">
                  {chapter.title}
                </span>
                <span className="mt-1 block font-hand text-lg leading-snug text-ink-muted">
                  {chapter.poeticLine}
                </span>
              </span>
            </Link>
          </motion.li>
        ))}

        <motion.li
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <Link
            href="/promise"
            className="group flex items-start gap-4 rounded-2xl py-2 pl-1 pr-2"
          >
            <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-rose-soft bg-white">
              <span className="h-2 w-2 rounded-full bg-rose-soft" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted">
                Closing
              </span>
              <span className="mt-0.5 block font-serif text-xl font-medium text-lilac-900">
                A Promise Kept in Memory
              </span>
              <span className="mt-1 block font-hand text-lg text-ink-muted">
                A handwritten closing — for whenever you need it.
              </span>
            </span>
          </Link>
        </motion.li>
      </ol>
    </section>
  );
}
