export interface SearchParamsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export type contentType =
  | "info"
  | "announcement"
  | "news"
  | "mobility"
  | "dissemination";

export type languageType = "en" | "de" | "tr";

export interface Content {
  id: number;
  type: contentType;
  title: string;
  description: string;
  href: string;
  language: languageType;
  date?: string;
  headline_image?: string;
  mainText?: string;
  images?: Array<string>;
  videos?: Array<string>;
  files?: Array<string>;
}
