'use client';

import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import BadgeHeader from './BadgeHeader';

export default function Wrapper({
    children,
    pageText,
}: {
    children: ReactNode;
    pageText: string;
}) {
    const t = useTranslations(pageText);

    return (
        <div className="mb-auto flex min-h-screen flex-col items-center">
            <BadgeHeader
                topHeader={t('topHeader')}
                header={t('header')}
                content={t('content')}
                news={pageText === 'NewsPage' ? true : false}
            />
            {children}
        </div>
    );
}
