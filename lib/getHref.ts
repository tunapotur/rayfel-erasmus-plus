import { isInfo, isNEWS } from '@/lib/types/check_functions';
import type { ANNOUNCEMENT, AppHref, INFO, NEWS } from '@/lib/types/DataTypes';

export default function getHref(card: INFO | ANNOUNCEMENT | NEWS): AppHref {
    if (isInfo(card)) return card.href as AppHref;
    if (isNEWS(card)) return `/news/detail/${card.slug}` as AppHref;
    return `/announcements/detail/${card.slug}` as AppHref;
}
