export interface SearchParamsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export type LANGUAGE_TYPE = "en" | "de" | "tr";
export type NEWS_TYPE = "news" | "mobility" | "dissemination";

export interface BASE {
  id: number;
  title: string;
  description: string;
  language: LANGUAGE_TYPE;
}

export interface INFO extends BASE {
  href: string;
}

export interface ANNOUNCEMENT extends BASE {
  slug: string;
  date: string;
  mainText: Array<string>;
  headline_image?: string;
  images?: Array<string>;
  videos?: Array<string>;
  files?: Array<string>;
}

export interface NEWS extends ANNOUNCEMENT {
  type: NEWS_TYPE;
}

export function isInfo(item: INFO | ANNOUNCEMENT | NEWS): item is INFO {
  return "href" in item;
}

// card içinde type değeri varsa NEWS tipinde
export function isNEWS(item: INFO | ANNOUNCEMENT | NEWS): item is NEWS {
  return "type" in item;
}

// card içinde slug değeri var ve type değeri yoksa ANNOUNCEMENT
export function isANNOUNCEMENT(
  item: INFO | ANNOUNCEMENT | NEWS,
): item is ANNOUNCEMENT {
  return "slug" in item && !("type" in item);
}
