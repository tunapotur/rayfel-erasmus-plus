import type { INFO, ANNOUNCEMENT, NEWS } from "@/lib/types/DataTypes";
import { isInfo, isNEWS } from "@/lib/types/DataTypes";

export default function getHref(card: INFO | ANNOUNCEMENT | NEWS): string {
  if (isInfo(card)) return card.href;
  if (isNEWS(card)) return `/news/detail/${card.slug}`;
  return `/announcements/detail/${card.slug}`;
}
