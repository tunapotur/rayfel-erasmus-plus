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

enum Badge {
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
    badge?: Badge;
  };
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

          {card.badge && <div>badge</div>}
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
