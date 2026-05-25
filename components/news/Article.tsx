import Link from "next/link";
import { TagBadge } from "./TagBadge";
import { CodeScreenPlaceholder } from "./CodeScreenPlaceholder";
import type { NewsArticle } from "@/lib/types/news";

interface ArticleProps {
  article: NewsArticle;
}

export function Article({ article }: ArticleProps) {
  return (
    <article className="min-w-0">
      {/* Date + Tag */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <span className="block h-0.5 w-7 rounded-full bg-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {article.date}
          </span>
        </div>
        <TagBadge tag={article.tag} />
      </div>

      {/* Title */}
      <h1 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
        {article.title}
      </h1>

      {/* Lead / highlighted quote */}
      <div className="mb-7 rounded-r-xl border-l-4 border-primary bg-primary/8 px-5 py-4 text-[15px] leading-relaxed text-foreground">
        {article.leadText}
      </div>

      {/* Hero image placeholder */}
      <CodeScreenPlaceholder />

      {/* Section title */}
      <h2 className="mb-4 font-serif text-[1.35rem] font-bold text-foreground">
        {article.sectionTitle}
      </h2>

      {/* Body */}
      <div className="space-y-4">
        {article.content.map((paragraph, i) => (
          <p key={i} className="text-[15.5px] leading-[1.8] text-foreground/85">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Divider + Back link */}
      <hr className="my-8 border-border" />
      <Link
        href="/haberler"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 hover:gap-3"
      >
        ← Geri Dön
      </Link>
    </article>
  );
}
