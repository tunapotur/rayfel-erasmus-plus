import Link from "next/link";
import { cn } from "@/lib/utils";
import { NewsBadge } from "./NewsBadge";
import type { INFO, ANNOUNCEMENT, NEWS } from "@/lib/types/DataTypes";
import { isANNOUNCEMENT, isNEWS } from "@/lib/types/DataTypes";

export function Card_Sidebar({ card }: { card: INFO | ANNOUNCEMENT | NEWS }) {
  const announcement = isANNOUNCEMENT(card) || isNEWS(card) ? card : null;
  const news = isNEWS(card) ? card : null;

  const imagePlaceholders: Array<string> = [
    "from-blue-700 to-blue-400",
    "from-slate-700 to-slate-500",
    "from-gray-900 to-gray-700",
    "from-green-700 to-green-500",
    "from-gray-900 to-slate-700",
    "from-violet-800 to-purple-600",
  ];

  return (
    <Link
      href={card.href}
      className={cn(
        "group bg-card text-card-foreground flex overflow-hidden rounded-xl",
        "border-border border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
      )}
    >
      {/* Image */}
      {announcement?.headline_image && (
        <div
          className={cn(
            "w-[90px] shrink-0 bg-gradient-to-br",
            imagePlaceholders[2],
          )}
          aria-label={card.title}
        />
      )}

      {/* Body */}
      <div className="flex flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          {/* Date */}
          {announcement?.date && (
            <span className="text-muted-foreground text-[10px] font-semibold tracking-wide uppercase">
              {announcement.date}
            </span>
          )}

          {/* Badge */}
          {news?.type && <NewsBadge BADGE_NEWS_TYPE={news.type} />}
        </div>

        <h3 className="text-foreground group-hover:text-primary text-[13px] leading-snug font-semibold transition-colors">
          {card.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 text-[12px] leading-relaxed">
          {card.description}
        </p>
      </div>
    </Link>
  );
}
