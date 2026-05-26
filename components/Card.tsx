"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowLink from "./ArrowLink";
import type { INFO, ANNOUNCEMENT, NEWS } from "@/lib/types/DataTypes";
import { isANNOUNCEMENT, isNEWS } from "@/lib/types/DataTypes";
import { NewsBadge } from "./NewsBadge";

export default function Card({ card }: { card: INFO | ANNOUNCEMENT | NEWS }) {
  const t = useTranslations("CardLinkText");

  const announcement = isANNOUNCEMENT(card) || isNEWS(card) ? card : null;
  const news = isNEWS(card) ? card : null;

  return (
    <div className="bg-background flex flex-col gap-2 rounded-xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-900 dark:bg-gray-900">
      {/* Image */}
      {announcement?.headline_image && (
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={announcement.headline_image}
            alt={card.title}
            fill
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {news?.type && (
            <NewsBadge
              BADGE_NEWS_TYPE={news.type}
              className={"absolute top-3 left-3"}
            />
          )}
        </div>
      )}
      {/* Date */}
      {announcement?.date && (
        <div className="text-muted-foreground text-[0.65rem] leading-none font-light tracking-tight">
          {announcement.date}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
          {card.title}
        </h3>
        <p className="text-muted-foreground line-clamp-4 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>

      <ArrowLink text={t("readMore")} href={card.href} />
    </div>
  );
}
