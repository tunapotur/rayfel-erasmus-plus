import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/src/i18n/navigation';
import type { ANNOUNCEMENT, AppHref, NEWS } from '@/lib/types/DataTypes';
import { isANNOUNCEMENT, isNEWS } from '@/lib/types/check';
import ArrowLinkBack from '@/components/ArrowLinkBack';
import { Card_Sidebar } from '@/components/Card_Sidebar';
import { NewsBadge } from '@/components/NewsBadge';

function Article({ article }: { article: ANNOUNCEMENT | NEWS }) {
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

            {/* Hero image placeholder */}
            {article.headline_image && (
                <div className="relative mb-7 flex h-96 w-full rounded-xl shadow-lg md:h-128 lg:h-96">
                    <Image
                        src={article.headline_image}
                        alt={article.title}
                        className="rounded-xl object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        fill
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

function BreadCrumbNav({
    content_source_link,
    article_title,
}: {
    content_source_link: { href: AppHref; text: string };
    article_title: string;
}) {
    return (
        <nav className="border-border bg-card border-b">
            <div className="mx-auto flex h-14 items-center gap-2 px-4 sm:px-6">
                <Link
                    href={content_source_link.href}
                    className="text-muted-foreground hover:text-primary text-[0.7rem] font-bold tracking-widest uppercase transition-colors"
                >
                    {content_source_link.text}
                </Link>
                <span className="text-muted-foreground/40 text-xs">/</span>
                <span className="text-primary truncate text-[0.7rem] font-bold tracking-widest uppercase">
                    {article_title}
                </span>
            </div>
        </nav>
    );
}

function Sidebar({ items }: { items: Array<ANNOUNCEMENT | NEWS> }) {
    const t = useTranslations('ContentSidebarHeader');

    return (
        <aside className="w-full">
            {/* Sidebar title with decorative line */}
            <div className="mb-5 flex items-center gap-3">
                <h2 className="text-foreground font-serif text-xl font-bold whitespace-nowrap">
                    {isANNOUNCEMENT(items[0]) && t('announcement')}
                    {isNEWS(items[0]) && t('news')}
                </h2>
                <div className="bg-foreground h-0.5 w-full rounded-full" />
            </div>

            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <Card_Sidebar key={item.id} card={item} />
                ))}
            </div>
        </aside>
    );
}

export default function DetailWrapper({
    content,
    other_contents,
}: {
    content: ANNOUNCEMENT | NEWS;
    other_contents: Array<ANNOUNCEMENT | NEWS>;
}) {
    const t_announcement = useTranslations('AnnouncementsPage');
    const t_news = useTranslations('NewsPage');

    const breadCrumbInfo: { href: AppHref; text: string } = isANNOUNCEMENT(
        content,
    )
        ? { href: '/announcements', text: t_announcement('header') }
        : { href: '/news', text: t_news('header') };

    return (
        <div className="bg-background mb-auto min-h-screen">
            <BreadCrumbNav
                content_source_link={{
                    href: breadCrumbInfo.href,
                    text: breadCrumbInfo.text,
                }}
                article_title={content.title}
            />

            {/* Page body */}
            <div className="grid grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-start lg:px-8">
                <Article article={content} />
                <Sidebar items={other_contents} />
            </div>
        </div>
    );
}
