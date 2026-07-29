import type { Metadata } from "next";
import { PromiseExperience } from "@/components/PromiseExperience";

export const metadata: Metadata = {
  title: "A Promise Kept in Memory | The Story of Us",
  description: "A handwritten closing — for whenever you need to feel seen.",
};

export default function PromisePage() {
  return <PromiseExperience />;
}
