"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowLink from "./ArrowLink";
import { Content, CONTENT_TYPE } from "@/lib/types/DataTypes";
import { NewsBadge } from "./NewsBadge";

const CONTENT_NEWS_TYPES: CONTENT_TYPE[] = [
  "news",
  "mobility",
  "dissemination",
];

export default function Card_v2({ card }: { card: Content }) {
  const t = useTranslations("CardLinkText");

  return (
    <div className="bg-background flex flex-col gap-2 rounded-xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-900 dark:bg-gray-900">
      {/* Image */}
      {card.headline_image && (
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={card.headline_image}
            alt={card.title}
            fill
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {CONTENT_NEWS_TYPES.includes(card.type) && (
            // <CardBadge card_NewsType={card.type} />
            <NewsBadge
              BADGE_TYPE={card.type}
              className={"absolute top-3 left-3"}
            />
          )}
        </div>
      )}
      {/* Date */}
      {card.date && (
        <div className="text-muted-foreground text-[0.65rem] leading-none font-light tracking-tight">
          {card.date}
        </div>
      )}

      {/* Content - hepsinde var */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
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
