import { useTranslations } from 'next-intl';

import { isANNOUNCEMENT, isNEWS } from '@/lib/types/check_functions';
import type { ANNOUNCEMENT, NEWS } from '@/lib/types/DataTypes';
import { Card_Sidebar } from '@/components/Card_Sidebar';

export function Sidebar({ items }: { items: Array<ANNOUNCEMENT | NEWS> }) {
    const t = useTranslations('ContentSidebarHeader');

    return (
        <aside className="w-full">
            {/* Sidebar title with decorative line */}
            <div className="mb-5 flex items-center gap-3">
                <h2 className="font-heading text-foreground text-lg font-bold whitespace-nowrap">
                    {isANNOUNCEMENT(items[0]) && t('announcement')}
                    {isNEWS(items[0]) && t('news')}
                </h2>
                <div className="bg-border h-px w-full rounded-full" />
            </div>

            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <Card_Sidebar key={item.id} card={item} />
                ))}
            </div>
        </aside>
    );
}
