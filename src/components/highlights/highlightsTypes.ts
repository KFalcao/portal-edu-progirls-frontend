export type HighlightVariant = "lime" | "purple";

export type Highlight = {
  id: number;
  title: string;
  description: string;
  category: string;
  area: string;
  date: string;
  variant: HighlightVariant;
};