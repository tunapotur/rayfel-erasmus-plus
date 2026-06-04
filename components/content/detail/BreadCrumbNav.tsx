import { Link } from '@/src/i18n/navigation';
import type { AppHref } from '@/lib/types/DataTypes';

export default function BreadCrumbNav({
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
