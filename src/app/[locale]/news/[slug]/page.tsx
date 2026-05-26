import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/content_detail/ContentDetail";
import contents_news from "@/sample_data/contents_news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for SSG (expand with real data source as needed)
export async function generateStaticParams() {
  return contents_news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = contents_news.find((item) => item.slug === slug);

  if (!content) return {};

  return {
    title: `${content.title} – Haberler`,
    description: content.description,
  };
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const content = contents_news.find((item) => item.slug === slug);

  // In a real app, fetch article by slug from a CMS / DB
  if (!content) notFound();

  const other_contents = contents_news
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  return <ContentDetail content={content} other_contents={other_contents} />;
}
