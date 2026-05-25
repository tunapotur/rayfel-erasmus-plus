"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import type { NEWS_TYPE } from "@/lib/types/DataTypes";

interface BadgeProps {
  BADGE_NEWS_TYPE: NEWS_TYPE;
  className?: string;
}

export function NewsBadge({ BADGE_NEWS_TYPE, className }: BadgeProps) {
  const t = useTranslations("NewsType");

  const badge_className: Record<NEWS_TYPE, string> = {
    news: "bg-blue-600 dark:bg-blue-700",
    mobility: "bg-amber-600 dark:bg-amber-700",
    dissemination: "bg-green-600 dark:bg-green-700",
  };

  return (
    <span
      className={cn(
        "text-bright-header inline-block rounded-sm px-2.5 py-0.5 text-[0.625rem] font-bold tracking-widest uppercase",
        badge_className[BADGE_NEWS_TYPE],
        className,
      )}
    >
      {t(BADGE_NEWS_TYPE)}
    </span>
  );
}
