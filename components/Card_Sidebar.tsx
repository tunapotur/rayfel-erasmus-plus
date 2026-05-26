import Link from "next/link";
import { NewsBadge } from "./NewsBadge";
import type { INFO, ANNOUNCEMENT, NEWS } from "@/lib/types/DataTypes";
import { isANNOUNCEMENT, isNEWS } from "@/lib/types/DataTypes";
import Image from "next/image";
import getHref from "@/lib/getHref";

export function Card_Sidebar({ card }: { card: INFO | ANNOUNCEMENT | NEWS }) {
  const announcement = isANNOUNCEMENT(card) || isNEWS(card) ? card : null;
  const news = isNEWS(card) ? card : null;

  return (
    <Link
      href={getHref(card)}
      className="bg-card text-card-foreground border-border flex overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Image */}
      {announcement?.headline_image && (
        <div
          className="w-24 shrink-0 bg-linear-to-br from-gray-900 to-slate-700"
          aria-label={card.title}
        >
          <Image
            src={announcement.headline_image}
            alt={card.title}
            width={360}
            height={120}
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col gap-1 p-3">
        {/* Date & Badge */}
        {announcement?.date && (
          <div className="flex items-center gap-2">
            {/* Date */}
            <span className="text-muted-foreground text-[10px] font-semibold tracking-wide uppercase">
              {announcement.date}
            </span>

            {/* Badge */}
            {news?.type && <NewsBadge BADGE_NEWS_TYPE={news.type} />}
          </div>
        )}

        <h3 className="text-foreground group-hover:text-primary text-[0.8rem] leading-snug font-semibold transition-colors">
          {card.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 text-[0.75rem] leading-relaxed">
          {card.description}
        </p>
      </div>
    </Link>
  );
}
