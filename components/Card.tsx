"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowLink from "./ArrowLink";
import { Content, CONTENT_TYPE } from "@/lib/types/DataTypes";

/**
 * ✅ Önerilen
 * date?: string;
 *
 * Aynı şey, daha uzun
 * date: string | undefined;
 */

const CONTENT_NEWS_TYPES: CONTENT_TYPE[] = [
  "news",
  "mobility",
  "dissemination",
];

function CardBadge({ card_NewsType }: { card_NewsType: CONTENT_TYPE }) {
  const t = useTranslations("NewsType");

  if (!CONTENT_NEWS_TYPES.includes(card_NewsType)) return null;

  const badgeColors: Partial<Record<CONTENT_TYPE, string>> = {
    ["news"]: "bg-blue-600 dark:bg-blue-700",
    ["mobility"]: "bg-amber-600 dark:bg-amber-700",
    ["dissemination"]: "bg-green-600 dark:bg-green-700",
  };

  return (
    <div
      className={`absolute rounded-sm px-2.5 py-0.5 text-[0.625rem] uppercase tracking-widest top-3 left-3 text-bright-header font-bold ${badgeColors[card_NewsType] ?? ""}`}
    >
      {t(card_NewsType).toUpperCase()}
    </div>
  );
}

export default function Card_v2({ card }: { card: Content }) {
  const t = useTranslations("CardLinkText");

  return (
    <div className="bg-background dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-900 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition-shadow">
      {/* Image */}
      {card.headline_image && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={card.headline_image}
            alt={card.title}
            fill
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {CONTENT_NEWS_TYPES.includes(card.type) && (
            <CardBadge card_NewsType={card.type} />
          )}
        </div>
      )}
      {/* Date */}
      {card.date && (
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
