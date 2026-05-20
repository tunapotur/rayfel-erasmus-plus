import ArrowLink from "./ArrowLink";
import { ArrowLinkType } from "./ArrowLink";
import Image from "next/image";

/**
 * ✅ Önerilen
 * date?: string;
 *
 * Aynı şey, daha uzun
 * date: string | undefined;
 */

/**
 * HABER        → news
 * HAREKETLİLİK → mobility
 * YAYGINLAŞTIRMA → dissemination
 */

export enum BadgeType {
  NEWS = "NEWS",
  MOBILITY = "MOBILITY",
  DISSEMINATION = "DISSEMINATION",
}

interface CardProps {
  card: {
    title: string;
    description: string;
    link: ArrowLinkType;
    date?: string;
    image?: string;
    badge?: BadgeType;
  };
}

function Badge({ badge }: { badge: BadgeType }) {
  const badgeColors: Record<BadgeType, string> = {
    [BadgeType.NEWS]: "bg-blue-600 dark:bg-blue-700",
    [BadgeType.MOBILITY]: "bg-amber-600 dark:bg-amber-700",
    [BadgeType.DISSEMINATION]: "bg-green-600 dark:bg-green-700",
  };

  const badgeName: Record<BadgeType, string> = {
    [BadgeType.NEWS]: "HABER",
    [BadgeType.MOBILITY]: "HAREKETLİLİK",
    [BadgeType.DISSEMINATION]: "YAYGINLAŞTIRMA",
  };

  return (
    <div
      className={`absolute rounded-xl px-3 py-3 text-[0.625rem] leading-0 top-3 left-3 text-bright-header shadow-xl font-light ${badgeColors[badge]}`}
    >
      {badgeName[badge]}
    </div>
  );
}

export default function Card({ card }: CardProps) {
  return (
    <div className="bg-background dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-900 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition-shadow">
      {/* Image */}
      {card.image && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {card.badge && <Badge badge={card.badge} />}
        </div>
      )}
      {/* Date */}
      {card.date && (
        <div className="text-muted-foreground text-[0.65rem] leading-none tracking-tight font-light">
          {card.date}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-base">
          {card.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {card.description}
        </p>
      </div>

      <ArrowLink link={card.link} />
    </div>
  );
}
