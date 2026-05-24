"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowLink from "./ArrowLink";
import {
  InfoCard,
  AnnouncementsCard,
  NewsCard,
  NewsType,
} from "@/lib/types/DataTypes";

/**
 * ✅ Önerilen
 * date?: string;
 *
 * Aynı şey, daha uzun
 * date: string | undefined;
 */

type CardProps = InfoCard | AnnouncementsCard | NewsCard;

/**
 * Type guard fonksiyonları
 * Type predicate - boolean döner
 * VE TypeScript'e tip bilgisi verir
 */
function isNewsCard(card: CardProps): card is NewsCard {
  return "newsType" in card;
}

function isAnnouncementsCard(card: CardProps): card is AnnouncementsCard {
  return "date" in card;
}

function CardBadge({ card_NewsType }: { card_NewsType: NewsType }) {
  const t = useTranslations("NewsType");

  const badgeColors: Record<NewsType, string> = {
    ["news"]: "bg-blue-600 dark:bg-blue-700",
    ["mobility"]: "bg-amber-600 dark:bg-amber-700",
    ["dissemination"]: "bg-green-600 dark:bg-green-700",
  };

  return (
    <div
      className={`absolute rounded-xl px-3 py-3 text-[0.625rem] leading-0 top-3 left-3 text-bright-header shadow-xl font-light ${badgeColors[card_NewsType]}`}
    >
      {t(card_NewsType).toUpperCase()}
    </div>
  );
}

export default function Card({ card }: { card: CardProps }) {
  const t = useTranslations("CardLinkText");

  return (
    <div className="bg-background dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-900 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition-shadow">
      {/* Image - sadece NewsCard'da var */}
      {isNewsCard(card) && card.image && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {card.newsType && <CardBadge card_NewsType={card.newsType} />}
        </div>
      )}
      {/* Date - AnnouncementsCard ve NewsCard'da var */}
      {isAnnouncementsCard(card) && card.date && (
        <div className="text-muted-foreground text-[0.65rem] leading-none tracking-tight font-light">
          {card.date}
        </div>
      )}

      {/* Content - hepsinde var */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-base">
          {card.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {card.description}
        </p>
      </div>

      <ArrowLink text={t("readMore")} href={card.href} />
    </div>
  );
}
