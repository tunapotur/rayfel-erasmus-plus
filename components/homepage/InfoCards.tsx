import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Rayfel",
    description:
      "Okulumuz Lüleburgaz Ramazan Yaman Fen Lisesi web sitesini inceleyebilirsiniz.",
    href: "/",
  },
  {
    title: "Erasmus+",
    description:
      "Erasmus+ hakkında detaylı bilgi için Erasmus+ web sitesini inceleyebilirsiniz.",
    href: "https://erasmus-plus.ec.europa.eu",
  },
  {
    title: "eTwinning",
    description:
      "eTwinning projeleri hakkında detaylı bilgi için eTwinning web sitesini inceleyebilirsiniz.",
    href: "https://www.etwinning.net",
  },
];

export default function InfoCards() {
  return (
    <section className="w-full flex flex-col gap-6 md:flex-row">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-background dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-900 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
        >
          {/* Content */}
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-base">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Link */}
          <Link
            href={card.href}
            className="flex items-center gap-1.5 text-primary hover:text-primary/75 text-sm font-medium transition-colors mt-auto"
          >
            <span>İncele</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      ))}
    </section>
  );
}
