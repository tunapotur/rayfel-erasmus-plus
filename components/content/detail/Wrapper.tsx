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
            {/* layout => max-w-5xl = 1024px = 64rem 
                64rem - (gap-12(3rem) + lg:pl-4(1rem) 22rem)
                64rem - 26rem = 38rem
            */}
            <div className="grid grid-cols-1 gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[38rem_22rem] lg:items-start lg:pr-0 lg:pl-4">
                <Article article={content} />
                <Sidebar items={other_contents} />
            </div>
        </div>
    );
}
