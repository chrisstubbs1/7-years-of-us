"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Chapter } from "@/lib/types";
import { LilacBloom } from "@/components/LilacBloom";
import { FloatingSymbols } from "@/components/FloatingSymbols";
import { HeroBloomField } from "@/components/HeroBloomField";
import { HomeLink } from "@/components/HomeLink";
import { MemorySwipe } from "@/components/MemorySwipe";
import { PressHoldTruth } from "@/components/PressHoldTruth";

type ChapterExperienceProps = {
  chapter: Chapter;
  prevSlug: string | null;
  nextSlug: string | null;
};

export function ChapterExperience({
  chapter,
  prevSlug,
  nextSlug,
}: ChapterExperienceProps) {
  const [bloomDone, setBloomDone] = useState(false);

  return (
    <main className="relative min-h-dvh watercolor-wash">
      {!bloomDone && <LilacBloom onComplete={() => setBloomDone(true)} />}
      <HomeLink tone="light" />
      <FloatingSymbols symbol={chapter.symbol} />

      {/* Full-bleed photo reveal */}
      <section className="relative h-[72dvh] min-h-[28rem] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: bloomDone ? 1 : 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={chapter.image}
            alt={`${chapter.yearLabel}: ${chapter.title}`}
            fill
            priority
            unoptimized={chapter.image.endsWith(".svg")}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        <HeroBloomField
          active={bloomDone}
          vivid={chapter.image.endsWith(".svg")}
        />

        {/* Dark scrim under title — blooms fade out above this via mask */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-lilac-900/25 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[36%] bg-gradient-to-t from-[#2a1b36] via-[#3d2a4a]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-[4] safe-px pb-14 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: bloomDone ? 1 : 0, y: bloomDone ? 0 : 20 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="relative"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-lilac-100">
              {chapter.yearLabel}
            </p>
            <h1 className="mt-2 max-w-md font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {chapter.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 safe-px safe-pb mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: bloomDone ? 1 : 0, y: bloomDone ? 0 : 24 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="rounded-t-[2rem] bg-lilac-50 px-5 pb-10 pt-8 shadow-[0_-12px_40px_rgba(90,69,112,0.12)]"
        >
          <p className="font-hand text-2xl leading-snug text-lilac-800 sm:text-3xl">
            {chapter.poeticLine}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-ink/90">{chapter.narrative}</p>

          <div className="mt-8 border-l-2 border-lilac-400 pl-4">
            <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
              What I didn&apos;t appreciate enough
            </p>
            <p className="mt-2 font-hand text-xl leading-snug text-lilac-900">
              {chapter.regret}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-lilac-200/80 text-lilac-800"
              aria-hidden
            >
              ✿
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                A symbol of you
              </p>
              <p className="font-hand text-xl text-lilac-800">{chapter.symbolLabel}</p>
            </div>
          </div>

          <MemorySwipe cards={chapter.memoryCards} />
          <PressHoldTruth note={chapter.truthNote} />

          <nav className="mt-10 flex flex-col gap-3 border-t border-lilac-200 pt-6">
            <div className="flex items-center justify-between gap-3">
              {prevSlug ? (
                <Link
                  href={`/chapters/${prevSlug}`}
                  className="min-h-12 flex-1 rounded-full border border-lilac-300 bg-white/60 px-4 py-3 text-center text-sm text-lilac-800 transition active:bg-lilac-100"
                >
                  ← Previous year
                </Link>
              ) : (
                <span className="flex-1" />
              )}
              {nextSlug ? (
                <Link
                  href={`/chapters/${nextSlug}`}
                  className="min-h-12 flex-1 rounded-full bg-lilac-600 px-4 py-3 text-center text-sm text-white transition active:bg-lilac-700"
                >
                  Next year →
                </Link>
              ) : (
                <Link
                  href="/promise"
                  className="min-h-12 flex-1 rounded-full bg-lilac-600 px-4 py-3 text-center text-sm text-white"
                >
                  The promise →
                </Link>
              )}
            </div>
            <Link
              href="/"
              className="min-h-11 rounded-full px-4 py-2 text-center text-sm text-lilac-700 underline-offset-4 transition hover:underline"
            >
              Back to home
            </Link>
          </nav>
        </motion.div>
      </section>
    </main>
  );
}
