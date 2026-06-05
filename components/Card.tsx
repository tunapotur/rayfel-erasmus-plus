import Image from 'next/image';
import { useTranslations } from 'next-intl';

import getHref from '@/lib/getHref';
import { isANNOUNCEMENT, isNEWS } from '@/lib/types/check_functions';
import type { ANNOUNCEMENT, INFO, NEWS } from '@/lib/types/DataTypes';

import ArrowLink from './ArrowLink';
import { NewsBadge } from './NewsBadge';

export default function Card({
    card,
    priority,
}: {
    card: INFO | ANNOUNCEMENT | NEWS;
    priority?: boolean;
}) {
    const t = useTranslations('CardLinkText');

    const announcement = isANNOUNCEMENT(card) || isNEWS(card) ? card : null;
    const news = isNEWS(card) ? card : null;

    return (
        <div className="bg-background flex flex-col gap-3 rounded-xl border border-gray-100 p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            {/* Image */}
            {announcement?.headline_image && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                        src={announcement.headline_image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={priority}
                    />

                    {news?.type && (
                        <NewsBadge
                            BADGE_NEWS_TYPE={news.type}
                            className={'absolute top-3 left-3'}
                        />
                    )}
                </div>
            )}

            {/* Date */}
            {announcement?.date && (
                <p className="text-muted-foreground text-[0.7rem] font-medium tracking-wide uppercase">
                    {announcement.date}
                </p>
            )}

            {/* Content */}
            <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-foreground text-[0.95rem] leading-snug font-semibold">
                    {card.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {card.description}
                </p>
            </div>

            <ArrowLink text={t('readMore')} href={getHref(card)} />
        </div>
    );
}
