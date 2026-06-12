import type { ComponentProps } from 'react';

import { Link } from '@/src/i18n/navigation';

export interface SearchParamsPageProps {
    searchParams: Promise<{ page?: string }>;
}

export interface LocalePageProps {
    params: Promise<{ locale: string }>;
}

export type LANGUAGE_TYPE = 'en' | 'de' | 'tr';

export type dataType = 'info' | 'news' | 'announcement';

export type newsType = 'news' | 'mobility' | 'dissemination';

export interface content_file {
    id: string;
    name: string;
    alt: string;
    path: string;
}

export interface BASE {
    id: string;
    type: dataType;
    title: string;
    description: string;
    language: LANGUAGE_TYPE;
}

// INFO için type değerini kesin olarak 'info' kelimesine zorluyoruz
export interface INFO extends BASE {
    type: 'info';
    href: string;
}

// ANNOUNCEMENT için type değerini kesin olarak 'announcement' kelimesine zorluyoruz
export interface ANNOUNCEMENT extends BASE {
    type: 'announcement';
    slug: string;
    date: string;
    mainText: string;
    headline_image?: string;
    images?: Array<string>;
    videos?: Array<string>;
    files?: Array<content_file>;
}

// NEWS, ANNOUNCEMENT'tan türediği için onun 'announcement' olan type değerini 'news' olarak eziyoruz (override)
export interface NEWS extends Omit<ANNOUNCEMENT, 'type'> {
    type: 'news';
    newsType: newsType;
}
export type AppHref = ComponentProps<typeof Link>['href'];
