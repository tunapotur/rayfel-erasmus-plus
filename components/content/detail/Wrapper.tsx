import { useTranslations } from 'next-intl';

import { isANNOUNCEMENT } from '@/lib/types/check_functions';
import type { ANNOUNCEMENT, AppHref, NEWS } from '@/lib/types/DataTypes';

import { Article } from './Article';
import { BreadCrumbNav } from './BreadCrumbNav';
import { Sidebar } from './Sidebar';

export default function Wrapper({
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
