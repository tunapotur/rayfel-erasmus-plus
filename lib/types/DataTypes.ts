export interface SearchParamsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export const CONTENT_TYPES = [
  "info",
  "announcement",
  "news",
  "mobility",
  "dissemination",
] as const;
export type CONTENT_TYPE = (typeof CONTENT_TYPES)[number];

export const LANGUAGE_TYPES = ["en", "de", "tr"] as const;
export type LANGUAGE_TYPE = (typeof LANGUAGE_TYPES)[number];

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
