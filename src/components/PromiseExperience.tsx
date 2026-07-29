"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingSymbols } from "@/components/FloatingSymbols";
import { HomeLink } from "@/components/HomeLink";
import { LilacBloom } from "@/components/LilacBloom";
import { promiseContent } from "@/data/chapters";
import { useState } from "react";

export function PromiseExperience() {
  const [bloomDone, setBloomDone] = useState(false);

  return (
    <main className="relative min-h-dvh watercolor-wash">
      {!bloomDone && <LilacBloom onComplete={() => setBloomDone(true)} />}
      <HomeLink tone="dark" />
      <FloatingSymbols symbol="flowers" density="low" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col justify-center safe-px safe-pb safe-pt py-16">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: bloomDone ? 1 : 0, y: bloomDone ? 0 : 24 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-lilac-200/80 bg-white/55 px-6 py-10 shadow-[0_20px_60px_rgba(90,69,112,0.1)] backdrop-blur-md sm:px-8"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">Closing</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-lilac-900">
            {promiseContent.title}
          </h1>
          <p className="mt-6 font-hand text-2xl leading-snug text-lilac-800">
            {promiseContent.greeting}
          </p>

          <div className="mt-8 space-y-5">
            {promiseContent.body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-hand text-3xl text-lilac-900"
                    : "text-lg leading-relaxed text-ink/90"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 font-hand text-2xl leading-snug text-lilac-800">
            {promiseContent.closing}
          </p>

          <p className="mt-10 whitespace-pre-line font-hand text-2xl text-lilac-700">
            {promiseContent.signature}
          </p>
        </motion.article>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-lilac-300 bg-white/60 px-5 py-3 text-lilac-800"
          >
            Return home
          </Link>
          <Link
            href="/chapters/year-1"
            className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-lilac-600 px-5 py-3 text-white"
          >
            Begin again
          </Link>
        </div>
      </div>
    </main>
  );
}
