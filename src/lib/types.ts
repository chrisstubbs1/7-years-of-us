export type ChapterSymbol =
  | "flowers"
  | "lilac"
  | "diet-coke"
  | "chester"
  | "franny"
  | "cats"
  | "stars";

export type Chapter = {
  id: number;
  slug: string;
  yearLabel: string;
  title: string;
  poeticLine: string;
  narrative: string;
  regret: string;
  symbol: ChapterSymbol;
  symbolLabel: string;
  truthNote: string;
  memoryCards: string[];
  image: string;
  accent: string;
};

export type PromiseContent = {
  title: string;
  greeting: string;
  body: string[];
  closing: string;
  signature: string;
};
