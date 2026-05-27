import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/content/ContentWrapper";
import contents_news from "@/sample_data/contents_news";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

// Generate static params for SSG (expand with real data source as needed)
// TODO: tüm sayfaların bu şekilde olması için çalışma yap
export async function generateStaticParams() {
  return contents_news.map((item) => ({ slug: item.slug }));
}

// TODO: bu alanı tüm sayfalar için ayarla
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const content = contents_news.find((item) => item.slug === slug);
  const t = await getTranslations({
    locale,
    namespace: "pages",
  });

  if (!content) return {};

  return {
    title: `${content.title} ${" - "} ${t("news")}`,
    description: content.description,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const content = contents_news.find((item) => item.slug === slug);

  // In a real app, fetch article by slug from a CMS / DB
  if (!content) notFound();

  const other_contents = contents_news
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  return <ContentWrapper content={content} other_contents={other_contents} />;
}
