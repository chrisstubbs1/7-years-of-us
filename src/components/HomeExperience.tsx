"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingSymbols } from "@/components/FloatingSymbols";
import { HeartbeatTimeline } from "@/components/HeartbeatTimeline";
import { siteMeta } from "@/data/chapters";

export function HomeExperience() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <FloatingSymbols density="low" symbol="lilac" />

      {/* Hero — one composition: brand, headline, sentence, CTA */}
      <section className="relative flex min-h-dvh flex-col justify-end safe-px safe-pb">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 20%, rgba(201,160,220,0.55), transparent 60%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(232,196,196,0.35), transparent 55%)",
          }}
        />

        {/* Soft petal field as visual anchor */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[58dvh]" aria-hidden>
          <motion.div
            className="absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br from-lilac-200/80 via-lilac-400/50 to-lilac-600/40 blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {[
            { left: "18%", top: "28%", rotate: -18, delay: 0 },
            { left: "62%", top: "22%", rotate: 22, delay: 0.3 },
            { left: "40%", top: "38%", rotate: 8, delay: 0.15 },
            { left: "28%", top: "48%", rotate: -8, delay: 0.45 },
            { left: "58%", top: "44%", rotate: 14, delay: 0.6 },
          ].map((p, i) => (
            <motion.span
              key={i}
              className="absolute h-16 w-10 rounded-[50%] bg-gradient-to-b from-lilac-200 to-lilac-500 opacity-70"
              style={{ left: p.left, top: p.top, rotate: p.rotate }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ delay: 0.2 + p.delay, duration: 1 }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-md pb-6 pt-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
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
