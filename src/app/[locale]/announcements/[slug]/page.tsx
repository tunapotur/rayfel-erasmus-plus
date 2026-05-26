import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/content_detail/ContentDetail";
import contents_announcements from "@/sample_data/contents_announcements";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return contents_announcements.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = contents_announcements.find((item) => item.slug === slug);

  if (!content) return {};

  return {
    title: `${content.title} – Duyurular`,
    description: content.description,
  };
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const content = contents_announcements.find((item) => item.slug === slug);

  if (!content) notFound();

  const other_contents = contents_announcements
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  return <ContentDetail content={content} other_contents={other_contents} />;
}
