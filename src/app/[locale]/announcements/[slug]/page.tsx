import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/content_detail/ContentDetail";
import contents_announcements from "@/sample_data/contents_announcements";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for SSG (expand with real data source as needed)
export async function generateStaticParams() {
  return [{ slug: contents_announcements[0].slug }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== contents_announcements[0].slug) return {};
  return {
    title: `${contents_announcements[0].title} – Haberler`,
    description: contents_announcements[0].description,
  };
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // In a real app, fetch article by slug from a CMS / DB
  if (slug !== contents_announcements[0].slug) notFound();

  return (
    <ContentDetail
      content={contents_announcements[0]}
      other_contents={contents_announcements.slice(0, 6)}
    />
  );
}
