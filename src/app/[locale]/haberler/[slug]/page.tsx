import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Article } from "@/components/news/Article";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import { articleData, sidebarNews } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for SSG (expand with real data source as needed)
export async function generateStaticParams() {
  return [{ slug: articleData.slug }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== articleData.slug) return {};
  return {
    title: `${articleData.title} – Haberler`,
    description: articleData.leadText,
  };
}

function BreadcrumbNav({
  content_source,
  article_title,
}: {
  content_source: { href: string; text: string };
  article_title: string;
}) {
  return (
    <nav className="border-border bg-card border-b">
      <div className="mx-auto flex h-14 items-center gap-2 px-4 sm:px-6">
        <Link
          href={content_source.href}
          className="text-muted-foreground hover:text-primary text-[0.7rem] font-bold tracking-widest uppercase transition-colors"
        >
          {content_source.text}
        </Link>
        <span className="text-muted-foreground/40 text-xs">/</span>
        <span className="text-primary truncate text-[0.7rem] font-bold tracking-widest uppercase">
          {article_title}
        </span>
      </div>
    </nav>
  );
}

export default async function HaberDetayPage({ params }: PageProps) {
  const { slug } = await params;

  // In a real app, fetch article by slug from a CMS / DB
  if (slug !== articleData.slug) notFound();

  return (
    <div className="bg-background mb-auto min-h-screen">
      <BreadcrumbNav
        content_source={{
          href: "/news",
          text: "Haberler",
        }}
        article_title={articleData.title}
      />

      {/* Page body */}
      <div className="grid grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-start lg:px-8">
        <Article article={articleData} />
        <NewsSidebar items={sidebarNews} />
      </div>
    </div>
  );
}
