import { notFound } from "next/navigation";
import { ChapterExperience } from "@/components/ChapterExperience";
import { chapters, getAdjacentChapters, getChapterBySlug } from "@/data/chapters";

type PageProps = {
  params: Promise<{ year: string }>;
};

export function generateStaticParams() {
  return chapters.map((chapter) => ({ year: chapter.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { year } = await params;
  const chapter = getChapterBySlug(year);
  if (!chapter) return { title: "Chapter not found" };
  return {
    title: `${chapter.yearLabel} — ${chapter.title} | The Story of Us`,
    description: chapter.poeticLine,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { year } = await params;
  const chapter = getChapterBySlug(year);
  if (!chapter) notFound();

  const { prev, next } = getAdjacentChapters(chapter.id);

  return (
    <ChapterExperience
      chapter={chapter}
      prevSlug={prev?.slug ?? null}
      nextSlug={next?.slug ?? null}
    />
  );
}
