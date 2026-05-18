import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  card: { title: string; description: string; href: string };
}

export default function Card({ card }: CardProps) {
  return (
    <div className="bg-background dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-900 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
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
  );
}
