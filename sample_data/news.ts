export type TagType = "haber" | "hareketlilik" | "yayginlastirma";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: TagType;
  imageAlt: string;
  imagePlaceholder: string; // tailwind gradient classes
}

export interface NewsArticle extends NewsItem {
  leadText: string;
  content: string[]; // paragraphs
  sectionTitle: string;
  headline_image: string;
}
