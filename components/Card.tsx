import ArrowLink from "./ArrowLink";

import { ArrowLinkType } from "./ArrowLink";

/**
 * ✅ Önerilen
 * date?: string;
 *
 * Aynı şey, daha uzun
 * date: string | undefined;
 */

interface CardProps {
  card: {
    title: string;
    description: string;
    link: ArrowLinkType;
    date?: string;
  };
}

export default function Card({ card }: CardProps) {
  return (
    <div className="bg-background dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-900 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition-shadow">
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
