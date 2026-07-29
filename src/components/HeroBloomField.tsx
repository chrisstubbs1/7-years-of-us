"use client";

import { motion, useReducedMotion } from "framer-motion";

type PetalCluster = {
  top: string;
  left: string;
  size: number;
  rotate: number;
  duration: number;
  delay: number;
  opacity: number;
};

type DriftPetal = {
  top: string;
  left: string;
  w: number;
  h: number;
  rotate: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
};

const clusters: PetalCluster[] = [
  // Upper canopy
  { top: "12%", left: "50%", size: 148, rotate: -6, duration: 9, delay: 0, opacity: 0.95 },
  { top: "8%", left: "16%", size: 90, rotate: 16, duration: 11, delay: 0.6, opacity: 0.82 },
  { top: "10%", left: "84%", size: 80, rotate: -20, duration: 10, delay: 1.0, opacity: 0.78 },
  { top: "6%", left: "60%", size: 56, rotate: 8, duration: 10.5, delay: 1.1, opacity: 0.7 },
  // Mid canopy — fills the empty band above the title
  { top: "30%", left: "26%", size: 120, rotate: -14, duration: 8.5, delay: 0.4, opacity: 0.92 },
  { top: "28%", left: "74%", size: 114, rotate: 12, duration: 12, delay: 0.8, opacity: 0.9 },
  { top: "38%", left: "50%", size: 104, rotate: 22, duration: 9.5, delay: 0.2, opacity: 0.88 },
  { top: "46%", left: "20%", size: 82, rotate: -8, duration: 11, delay: 1.4, opacity: 0.75 },
  { top: "48%", left: "78%", size: 78, rotate: 18, duration: 10, delay: 1.6, opacity: 0.72 },
  { top: "52%", left: "48%", size: 68, rotate: -22, duration: 13, delay: 0.9, opacity: 0.65 },
];

const driftPetals: DriftPetal[] = [
  { top: "5%", left: "30%", w: 22, h: 34, rotate: -30, duration: 14, delay: 0, driftX: 22, driftY: -18, opacity: 0.75 },
  { top: "8%", left: "66%", w: 18, h: 28, rotate: 24, duration: 16, delay: 1.1, driftX: -18, driftY: -22, opacity: 0.65 },
  { top: "20%", left: "8%", w: 20, h: 32, rotate: 40, duration: 13, delay: 0.5, driftX: 26, driftY: 14, opacity: 0.6 },
  { top: "22%", left: "90%", w: 24, h: 36, rotate: -18, duration: 15, delay: 1.8, driftX: -24, driftY: 12, opacity: 0.7 },
  { top: "36%", left: "42%", w: 18, h: 28, rotate: 10, duration: 12, delay: 0.9, driftX: 14, driftY: -26, opacity: 0.6 },
  { top: "3%", left: "46%", w: 14, h: 22, rotate: -50, duration: 17, delay: 2.2, driftX: -14, driftY: 20, opacity: 0.6 },
  { top: "26%", left: "54%", w: 18, h: 28, rotate: 55, duration: 14.5, delay: 0.3, driftX: 18, driftY: 16, opacity: 0.58 },
  { top: "40%", left: "86%", w: 17, h: 27, rotate: -35, duration: 13.5, delay: 1.4, driftX: -20, driftY: -14, opacity: 0.62 },
  { top: "18%", left: "38%", w: 15, h: 24, rotate: 8, duration: 18, delay: 2.6, driftX: 10, driftY: -16, opacity: 0.52 },
  { top: "42%", left: "12%", w: 19, h: 30, rotate: 22, duration: 15.5, delay: 0.7, driftX: 16, driftY: -10, opacity: 0.58 },
  { top: "6%", left: "78%", w: 13, h: 20, rotate: -12, duration: 12.5, delay: 1.9, driftX: -12, driftY: 14, opacity: 0.5 },
  { top: "50%", left: "60%", w: 16, h: 25, rotate: -28, duration: 14, delay: 1.2, driftX: -10, driftY: -18, opacity: 0.5 },
];

const petalAngles = [0, 60, 120, 180, 240, 300];

function LilacFlower({
  size,
  reducedMotion,
  duration,
  delay,
}: {
  size: number;
  reducedMotion: boolean;
  duration: number;
  delay: number;
}) {
  const petalW = size * 0.34;
  const petalH = size * 0.48;
  const reach = size * 0.26;

  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      animate={
        reducedMotion
          ? undefined
          : {
              rotate: [0, 5, -4, 0],
              scale: [1, 1.05, 0.97, 1],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {petalAngles.map((angle) => (
        <span
          key={angle}
          className="absolute left-1/2 top-1/2 origin-center rounded-[50%] bg-gradient-to-b from-[#f7eefb] via-[#d4bce6] to-[#9b7bb8] shadow-[0_0_22px_rgba(212,188,230,0.55)]"
          style={{
            width: petalW,
            height: petalH,
            marginLeft: -petalW / 2,
            marginTop: -petalH / 2,
            transform: `rotate(${angle}deg) translateY(-${reach}px)`,
          }}
        />
      ))}
      <span
        className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#f0c9c9] to-[#d89a9a] shadow-[0_0_12px_rgba(232,196,196,0.6)]"
        style={{ width: size * 0.18, height: size * 0.18 }}
      />
    </motion.div>
  );
}

type HeroBloomFieldProps = {
  active?: boolean;
  /** Stronger blooms for placeholder art; softer veil over real photos */
  vivid?: boolean;
};

export function HeroBloomField({ active = true, vivid = false }: HeroBloomFieldProps) {
  const reducedMotion = useReducedMotion();
  const strength = vivid ? 1 : 0.55;

  if (!active) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
      style={{
        opacity: strength,
        maskImage:
          "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.7) 68%, transparent 86%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.7) 68%, transparent 86%)",
      }}
    >
      {/* Keep the bloom composition mobile-width so it never looks sparse on desktop */}
      <div className="relative mx-auto h-full w-full max-w-lg">
      {/* Soft atmospheric orbs */}
      <motion.div
        className="absolute left-[18%] top-[12%] h-40 w-40 rounded-full bg-lilac-300/30 blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[20%] h-32 w-32 rounded-full bg-rose-soft/25 blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.25, 0.55, 0.25], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {clusters.map((cluster, i) => (
        <motion.div
          key={`cluster-${i}`}
          className="absolute"
          style={{
            top: cluster.top,
            left: cluster.left,
            opacity: cluster.opacity,
            rotate: cluster.rotate,
            marginLeft: -cluster.size / 2,
            marginTop: -cluster.size / 2,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: cluster.opacity,
            scale: 1,
            y: reducedMotion ? 0 : [0, -10, 6, 0],
            x: reducedMotion ? 0 : [0, 6, -4, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 + i * 0.12 },
            scale: { duration: 1.2, delay: 0.2 + i * 0.12 },
            y: {
              duration: cluster.duration,
              delay: cluster.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: cluster.duration * 1.15,
              delay: cluster.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <LilacFlower
            size={cluster.size}
            reducedMotion={!!reducedMotion}
            duration={cluster.duration}
            delay={cluster.delay}
          />
        </motion.div>
      ))}

      {driftPetals.map((petal, i) => (
        <motion.span
          key={`petal-${i}`}
          className="absolute rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-lilac-200/90 via-lilac-400/75 to-lilac-600/65"
          style={{
            top: petal.top,
            left: petal.left,
            width: petal.w,
            height: petal.h,
            opacity: petal.opacity,
            rotate: petal.rotate,
          }}
          initial={{ opacity: 0 }}
          animate={
            reducedMotion
              ? { opacity: petal.opacity }
              : {
                  opacity: [petal.opacity * 0.55, petal.opacity, petal.opacity * 0.7, petal.opacity],
                  x: [0, petal.driftX, petal.driftX * -0.4, 0],
                  y: [0, petal.driftY, petal.driftY * 0.5, 0],
                  rotate: [petal.rotate, petal.rotate + 18, petal.rotate - 10, petal.rotate],
                }
          }
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft sparkles */}
      {[
        { top: "12%", left: "36%" },
        { top: "20%", left: "70%" },
        { top: "34%", left: "50%" },
        { top: "40%", left: "12%" },
        { top: "8%", left: "85%" },
      ].map((spark, i) => (
        <motion.span
          key={`spark-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ top: spark.top, left: spark.left }}
          animate={
            reducedMotion
              ? undefined
              : { opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.25, 0.7] }
          }
          transition={{
            duration: 3.2 + i * 0.4,
            delay: i * 0.55,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      </div>
    </div>
  );
}
