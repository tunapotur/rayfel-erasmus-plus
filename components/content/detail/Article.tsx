import Image from 'next/image';

import { isNEWS } from '@/lib/types/check_functions';
import type { ANNOUNCEMENT, NEWS } from '@/lib/types/DataTypes';
import { NewsBadge } from '@/components/NewsBadge';

import { ArrowLinkBack } from './ArrowLinkBack';

export function Article({ article }: { article: ANNOUNCEMENT | NEWS }) {
    const news = isNEWS(article) ? article : null;

    return (
        <article>
            {/* Date + NewsBadge */}
            <div className="mb-4 flex items-center gap-3">
                <span className="bg-primary block h-0.5 w-7 rounded-full" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                    {article.date}
                </span>
                {news?.type && <NewsBadge BADGE_NEWS_TYPE={news.type} />}
            </div>

            {/* Title */}
            <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                {article.title}
            </h1>

            {/* Lead / highlighted quote */}
            <div className="border-primary bg-background-gray text-foreground mb-7 rounded-r-xl border-l-4 px-5 py-4 text-base leading-relaxed">
                {article.description}
            </div>

            {/* Hero image */}
            {article.headline_image && (
                <div className="relative mb-7 flex h-96 w-full rounded-xl shadow-lg md:h-128 lg:h-96">
                    <Image
                        src={article.headline_image}
                        alt={article.title}
                        className="rounded-xl object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        fill
                        priority
                    />
                </div>
            )}

            {/* Body */}
            <div className="space-y-4">
                {article.mainText.map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-foreground/85 text-base leading-[1.8]"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Divider + Back link */}
            <hr className="border-border my-8" />
            <ArrowLinkBack />
        </article>
    );
}
