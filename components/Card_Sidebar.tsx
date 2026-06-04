import Image from 'next/image';
import { Link } from '@/src/i18n/navigation';
import getHref from '@/lib/getHref';
import type { ANNOUNCEMENT, INFO, NEWS } from '@/lib/types/DataTypes';
import { isANNOUNCEMENT, isNEWS } from '@/lib/types/check';
import { NewsBadge } from './NewsBadge';

export function Card_Sidebar({ card }: { card: INFO | ANNOUNCEMENT | NEWS }) {
    const announcement = isANNOUNCEMENT(card) || isNEWS(card) ? card : null;
    const news = isNEWS(card) ? card : null;

    return (
        <Link
            href={getHref(card)}
            className="bg-card text-card-foreground border-border flex max-h-30 overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
            {/* Image */}
            {announcement?.headline_image && (
                <div className="relative h-30 w-28 shrink-0 bg-linear-to-br from-gray-500 to-gray-400">
                    <Image
                        src={announcement.headline_image}
                        alt={card.title}
                        fill
                        loading="eager"
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                </div>
            )}

            {/* Body */}
            <div className="flex flex-col justify-center gap-1 p-3">
                {/* Date & Badge */}
                {announcement?.date && (
                    <div className="flex items-center gap-2">
                        {/* Date */}
                        <span className="text-muted-foreground text-[10px] font-semibold tracking-wide uppercase">
                            {announcement.date}
                        </span>

                        {/* Badge */}
                        {news?.type && (
                            <NewsBadge BADGE_NEWS_TYPE={news.type} />
                        )}
                    </div>
                )}

                <h3 className="text-foreground group-hover:text-primary line-clamp-1 text-[0.8rem] leading-snug font-semibold transition-colors">
                    {card.title}
                </h3>

                <p className="text-muted-foreground line-clamp-2 text-[0.75rem] leading-relaxed">
                    {card.description}
                </p>
            </div>
        </Link>
    );
}
