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

export enum NewsType {
  NEWS = "news",
  MOBILITY = "mobility",
  DISSEMINATION = "dissemination",
}

interface CardProps {
  card: {
    title: string;
    description: string;
    link: ArrowLinkType;
    date?: string;
    image?: string;
    newsType?: string;
  };
}

function CardBadge({ card_NewsType }: { card_NewsType: string }) {
  // 1. Gelen string değerin, NewsType enum'ının değerlerinden biri olup olmadığını kontrol ediyoruz
  const isValidNewsType = Object.values(NewsType).includes(
    card_NewsType as NewsType,
  );

  // 2. Eğer geçerli bir değerse enum türüne cast ediyoruz (dönüştürüyoruz), değilse bir fallback (varsayılan) belirliyoruz
  const cardBadge: NewsType = isValidNewsType
    ? (card_NewsType as NewsType)
    : NewsType.NEWS; // Gelen string hatalıysa varsayılan olarak NEWS atadık

  const badgeColors: Record<NewsType, string> = {
    [NewsType.NEWS]: "bg-blue-600 dark:bg-blue-700",
    [NewsType.MOBILITY]: "bg-amber-600 dark:bg-amber-700",
    [NewsType.DISSEMINATION]: "bg-green-600 dark:bg-green-700",
  };

  const badgeName: Record<NewsType, string> = {
    [NewsType.NEWS]: "HABER",
    [NewsType.MOBILITY]: "HAREKETLİLİK",
    [NewsType.DISSEMINATION]: "YAYGINLAŞTIRMA",
  };

  return (
    <div
      className={`absolute rounded-xl px-3 py-3 text-[0.625rem] leading-0 top-3 left-3 text-bright-header shadow-xl font-light ${badgeColors[cardBadge]}`}
    >
      {badgeName[cardBadge]}
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

          {card.newsType && <CardBadge card_NewsType={card.newsType} />}
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
