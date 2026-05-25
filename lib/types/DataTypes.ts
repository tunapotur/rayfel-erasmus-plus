export interface SearchParamsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export const CONTENTS = [
  "info",
  "announcement",
  "news",
  "mobility",
  "dissemination",
] as const;
export type CONTENT_TYPE = (typeof CONTENTS)[number];

export const LANGUAGES = ["en", "de", "tr"] as const;
export type LANGUAGE_TYPE = (typeof LANGUAGES)[number];

export interface Content {
  id: number;
  type: CONTENT_TYPE;
  title: string;
  description: string;
  href: string;
  language: LANGUAGE_TYPE;
  date?: string;
  headline_image?: string;
  mainText?: string;
  images?: Array<string>;
  videos?: Array<string>;
  files?: Array<string>;
}
