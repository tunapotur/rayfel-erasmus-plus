"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type BADGE_TYPE = "news" | "mobility" | "dissemination";

const badge_className: Record<BADGE_TYPE, string> = {
  news: "bg-blue-600 dark:bg-blue-700",
  mobility: "bg-amber-600 dark:bg-amber-700",
  dissemination: "bg-green-600 dark:bg-green-700",
};

interface BadgeProps {
  BADGE_TYPE: BADGE_TYPE;
  className?: string;
}

export function NewsBadge({ BADGE_TYPE, className }: BadgeProps) {
  const t = useTranslations("NewsType");

  return (
    <span
      className={cn(
        "text-bright-header inline-block rounded-sm px-2.5 py-0.5 text-[0.625rem] font-bold tracking-widest uppercase",
        badge_className[BADGE_TYPE],
        className,
      )}
    >
      {t(BADGE_TYPE)}
    </span>
  );
}
