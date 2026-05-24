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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== articleData.slug) return {};
  return {
    title: `${articleData.title} – Haberler`,
    description: articleData.leadText,
  };
}

export default async function HaberDetayPage({ params }: PageProps) {
  const { slug } = await params;

  // In a real app, fetch article by slug from a CMS / DB
  if (slug !== articleData.slug) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb nav */}
      <nav className="border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:px-6">
          <Link
            href="/haberler"
            className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            Haberler
          </Link>
          <span className="text-muted-foreground/40 text-xs">/</span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary truncate">
            {articleData.title}
          </span>
        </div>
      </nav>

      {/* Page body */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
          <Article article={articleData} />
          <NewsSidebar items={sidebarNews} />
        </div>
      </div>
    </div>
  );
}
