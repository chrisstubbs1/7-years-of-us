"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingSymbols } from "@/components/FloatingSymbols";
import { HeartbeatTimeline } from "@/components/HeartbeatTimeline";
import { siteMeta } from "@/data/chapters";

const petals = [
  { left: "12%", top: "18%", rotate: -18, delay: 0, size: "h-14 w-9" },
  { left: "58%", top: "8%", rotate: 22, delay: 0.15, size: "h-16 w-10" },
  { left: "34%", top: "28%", rotate: 8, delay: 0.08, size: "h-12 w-8" },
  { left: "72%", top: "32%", rotate: -10, delay: 0.25, size: "h-11 w-7" },
  { left: "22%", top: "48%", rotate: 14, delay: 0.35, size: "h-12 w-8" },
];

export function HomeExperience() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <FloatingSymbols density="low" symbol="lilac" />

      {/* Hero — petals + brand as one tight composition */}
      <section className="relative flex min-h-dvh flex-col justify-center safe-px safe-pb safe-pt">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 30%, rgba(201,160,220,0.55), transparent 60%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(232,196,196,0.35), transparent 55%)",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Petal cluster sits directly above the title */}
          <div className="relative mx-auto mb-5 h-36 w-full max-w-xs" aria-hidden>
            <motion.div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-lilac-200/80 via-lilac-400/50 to-lilac-600/40 blur-2xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {petals.map((p, i) => (
              <motion.span
                key={i}
                className={`absolute rounded-[50%] bg-gradient-to-b from-lilac-200 to-lilac-500 opacity-80 ${p.size}`}
                style={{ left: p.left, top: p.top, rotate: p.rotate }}
                initial={{ opacity: 0, y: 12 }}
                animate={{
                  opacity: 0.8,
                  y: [0, -6, 0],
                  rotate: [p.rotate, p.rotate + 6, p.rotate],
                }}
                transition={{
                  opacity: { delay: 0.15 + p.delay, duration: 0.8 },
                  y: {
                    delay: p.delay,
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    delay: p.delay,
                    duration: 7 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </div>

          <p className="font-hand text-2xl text-lilac-700">a lilac memory book</p>
          <h1 className="mt-2 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-lilac-900 sm:text-6xl">
            {siteMeta.title}
          </h1>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-ink-muted">
            {siteMeta.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/chapters/year-1"
              className="flex min-h-12 items-center justify-center rounded-full bg-lilac-600 px-6 py-3 text-center text-base text-white shadow-[0_12px_30px_rgba(122,95,150,0.35)] transition active:scale-[0.98] active:bg-lilac-700"
            >
              Open Year One
            </Link>
            <a
              href="#timeline"
              className="flex min-h-12 items-center justify-center rounded-full border border-lilac-400/70 bg-white/50 px-6 py-3 text-center text-base text-lilac-800 backdrop-blur-sm transition active:bg-lilac-100"
            >
              Browse the years
            </a>
          </div>
        </motion.div>
      </section>

      <section id="timeline" className="relative safe-px safe-pb mx-auto max-w-md pb-20 pt-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
            Heartbeat timeline
          </p>
          <h2 className="mt-2 font-serif text-3xl text-lilac-900">Seven chapters</h2>
          <p className="mt-2 font-hand text-xl text-ink-muted">
            {siteMeta.dedication}
          </p>
        </motion.div>

        <div className="mt-8">
          <HeartbeatTimeline />
        </div>
      </section>
    </main>
  );
}
