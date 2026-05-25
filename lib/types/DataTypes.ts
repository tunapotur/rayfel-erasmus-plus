export interface SearchParamsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export type LANGUAGE_TYPE = "en" | "de" | "tr";
export type NEWS_TYPE = "news" | "mobility" | "dissemination";

export interface INFO {
  id: number;
  title: string;
  description: string;
  href: string;
  language: LANGUAGE_TYPE;
}

export interface ANNOUNCEMENT extends INFO {
  slug: string;
  date: string;
  mainText: string;
  headline_image?: string;
  images?: Array<string>;
  videos?: Array<string>;
  files?: Array<string>;
}

export interface NEWS extends ANNOUNCEMENT {
  type: NEWS_TYPE;
}

// card içinde type değeri varsa NEWS tipinde
export function isNEWS(card: INFO | ANNOUNCEMENT | NEWS): card is NEWS {
  return "type" in card;
}

// card içinde slug değeri var ve type değeri yoksa ANNOUNCEMENT
export function isANNOUNCEMENT(
  card: INFO | ANNOUNCEMENT | NEWS,
): card is ANNOUNCEMENT {
  return "slug" in card && !("type" in card);
}
