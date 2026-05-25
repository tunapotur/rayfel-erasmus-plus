import { cn } from "@/lib/utils";
import type { TagType } from "@/lib/types/news";

const tagConfig: Record<TagType, { label: string; className: string }> = {
  haber: {
    label: "Haber",
    className: "bg-primary text-primary-foreground",
  },
  hareketlilik: {
    label: "Hareketlilik",
    className: "bg-orange-500 text-white",
  },
  yayginlastirma: {
    label: "Yaygınlaştırma",
    className: "bg-emerald-600 text-white",
  },
};

interface TagBadgeProps {
  tag: TagType;
  className?: string;
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  const config = tagConfig[tag];
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
