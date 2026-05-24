export interface InfoCard {
  id: number;
  title: string;
  description: string;
  href: string;
}

export interface AnnouncementsCard extends InfoCard {
  date: string;
}

export type NewsType = "news" | "mobility" | "dissemination";

export interface NewsCard extends AnnouncementsCard {
  newsType: NewsType;
  image: string;
}

export interface SearchParamsPageProps {
  searchParams: Promise<{ page?: string }>;
}
