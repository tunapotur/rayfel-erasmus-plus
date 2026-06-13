import Image from 'next/image';

import { isNEWS } from '@/lib/types/check_functions';
import type { ANNOUNCEMENT, NEWS } from '@/lib/types/DataTypes';
import { NewsBadge } from '@/components/NewsBadge';

import { ArrowLinkBack } from './ArrowLinkBack';
import QuillContent from './QuillContent';

export function Article({ article }: { article: ANNOUNCEMENT | NEWS }) {
    const news = isNEWS(article) ? article : null;

    return (
        <article>
            {/* Date + NewsBadge */}
            <div className="mb-5 flex items-center gap-3">
                <span className="bg-primary block h-0.5 w-6 rounded-full" />
                <span className="text-muted-foreground text-xs font-semibold tracking-[0.12em] uppercase">
                    {article.date}
                </span>
                {news && <NewsBadge BADGE_NEWS_TYPE={news.newsType} />}
            </div>

            {/* Title */}
            <h1 className="font-heading text-foreground mb-6 text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl">
                {article.title}
            </h1>

            {/* Lead / highlighted quote */}
            <div className="border-primary bg-background-gray text-foreground mb-8 rounded-r-xl border-l-4 px-5 py-4 text-base leading-[1.75] font-medium">
                {article.description}
            </div>

            {/* Hero image */}
            {article.headline_image && (
                <div className="article-img">
                    <Image
                        src={article.headline_image}
                        alt={article.title || 'content image'}
                        className="rounded-xl object-contain"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        fill
                        priority
                    />
                </div>
            )}

            {/* Body */}
            <div className="text-foreground/80 text-base leading-[1.85]">
                <QuillContent htmlContent={article.mainText} />
            </div>

            {/* Divider + Back link */}
            <hr className="border-border my-10" />
            <ArrowLinkBack />
        </article>
    );
}
