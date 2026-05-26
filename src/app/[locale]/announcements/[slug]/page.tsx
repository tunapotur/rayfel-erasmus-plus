import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Article } from "@/components/content/Article";
import { ContentSidebar } from "@/components/content/ContentSidebar";
import contents_news from "@/sample_data/contents_news";
import contents_announcements from "@/sample_data/contents_announcements";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for SSG (expand with real data source as needed)
export async function generateStaticParams() {
  return [{ slug: contents_news[0].slug }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== contents_news[0].slug) return {};
  return {
    title: `${contents_news[0].title} – Haberler`,
    description: contents_news[0].description,
  };
}

function BreadCrumbNav({
  content_source_link,
  article_title,
}: {
  content_source_link: { href: string; text: string };
  article_title: string;
}) {
  return (
    <nav className="border-border bg-card border-b">
      <div className="mx-auto flex h-14 items-center gap-2 px-4 sm:px-6">
        <Link
          href={content_source_link.href}
          className="text-muted-foreground hover:text-primary text-[0.7rem] font-bold tracking-widest uppercase transition-colors"
        >
          {content_source_link.text}
        </Link>
        <span className="text-muted-foreground/40 text-xs">/</span>
        <span className="text-primary truncate text-[0.7rem] font-bold tracking-widest uppercase">
          {article_title}
        </span>
      </div>
    </nav>
  );
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // In a real app, fetch article by slug from a CMS / DB
  if (slug !== contents_announcements[0].slug) notFound();

  return (
    <div className="bg-background mb-auto min-h-screen">
      <BreadCrumbNav
        content_source_link={{
          href: "/announcements",
          text: "Haberler",
        }}
        article_title={contents_announcements[0].title}
      />

      {/* Page body */}
      <div className="grid grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-start lg:px-8">
        <Article article={contents_announcements[0]} />
        <ContentSidebar items={contents_announcements.slice(0, 6)} />
      </div>
    </div>
  );
}
