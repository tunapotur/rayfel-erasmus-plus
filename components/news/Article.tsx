import Link from "next/link";
import { CodeScreenPlaceholder } from "./CodeScreenPlaceholder";
import type { NewsArticle } from "@/lib/types/news";
import { NewsBadge } from "../NewsBadge";

export function Article({ article }: { article: NewsArticle }) {
  return (
    <article>
      {/* Date + NewsBadge */}
      <div className="mb-4 flex items-center gap-3">
        <span className="bg-primary block h-0.5 w-7 rounded-full" />
        <span className="text-primary text-xs font-bold tracking-widest uppercase">
          {article.date}
        </span>
        <NewsBadge BADGE_NEWS_TYPE={"news"} />
      </div>

      {/* Title */}
      <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
        {article.title}
      </h1>

      {/* Lead / highlighted quote */}
      <div className="border-primary bg-primary/8 text-foreground mb-7 rounded-r-xl border-l-4 px-5 py-4 text-base leading-relaxed">
        {article.leadText}
      </div>

      {/* Hero image placeholder */}
      <CodeScreenPlaceholder />

      {/* Section title */}
      <h2 className="text-foreground mb-4 font-serif text-[1.35rem] font-bold">
        {article.sectionTitle}
      </h2>

      {/* Body */}
      <div className="space-y-4">
        {article.content.map((paragraph, i) => (
          <p key={i} className="text-foreground/85 text-base leading-[1.8]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Divider + Back link */}
      <hr className="border-border my-8" />
      <Link
        href="/haberler"
        className="text-primary inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
      >
        ← Geri Dön
      </Link>
    </article>
  );
}
