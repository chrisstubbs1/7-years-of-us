"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AmbientContextValue = {
  enabled: boolean;
  available: boolean;
  toggle: () => void;
};

const AmbientContext = createContext<AmbientContextValue | null>(null);

export function AmbientProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let audio: HTMLAudioElement | null = null;

    const setup = async () => {
      try {
        const res = await fetch("/audio/ambient.mp3", { method: "HEAD" });
        if (!res.ok || cancelled) return;

        audio = new Audio("/audio/ambient.mp3");
        audio.loop = true;
        audio.volume = 0.35;
        audio.preload = "auto";
        audioRef.current = audio;
        if (!cancelled) setAvailable(true);
      } catch {
        // Optional file — silence is fine until you add ambient.mp3
      }
    };

    void setup();

    return () => {
      cancelled = true;
      audio?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !available) return;

    if (enabled) {
      void audio.play().catch(() => setEnabled(false));
    } else {
      audio.pause();
    }
  }, [enabled, available]);

  const toggle = useCallback(() => {
    if (!available) return;
    setEnabled((v) => !v);
  }, [available]);

  return (
    <AmbientContext.Provider value={{ enabled, available, toggle }}>
      {children}
    </AmbientContext.Provider>
  );
}

export function useAmbient() {
  const ctx = useContext(AmbientContext);
  if (!ctx) {
    throw new Error("useAmbient must be used within AmbientProvider");
  }
  return ctx;
}
