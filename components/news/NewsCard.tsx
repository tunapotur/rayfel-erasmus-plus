import Link from "next/link";
import { cn } from "@/lib/utils";
import { TagBadge } from "./TagBadge";
import type { NewsItem } from "@/types/news";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={`/haberler/${item.slug}`}
      className={cn(
        "group flex overflow-hidden rounded-xl bg-card text-card-foreground",
        "shadow-sm border border-border",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "w-[90px] shrink-0 bg-gradient-to-br",
          item.imagePlaceholder
        )}
        aria-label={item.imageAlt}
      />

      {/* Body */}
      <div className="flex flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {item.date}
          </span>
          <TagBadge tag={item.tag} />
        </div>

        <h3 className="text-[13px] font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>
      </div>
    </Link>
  );
}
