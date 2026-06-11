import type { ComponentProps } from 'react';

import { Link } from '@/src/i18n/navigation';

export interface SearchParamsPageProps {
    searchParams: Promise<{ page?: string }>;
}

export interface LocalePageProps {
    params: Promise<{ locale: string }>;
}

export type LANGUAGE_TYPE = 'en' | 'de' | 'tr';

export type NEWS_TYPE = 'news' | 'mobility' | 'dissemination';

export type newsType = 'news' | 'mobility' | 'dissemination';

export interface BASE {
    id: string;
    title: string;
    description: string;
    language: LANGUAGE_TYPE;
}

export interface INFO extends BASE {
    href: string;
}

export interface ANNOUNCEMENT extends BASE {
    slug: string;
    date: string;
    mainText: string;
    headline_image?: string;
    images?: Array<string>;
    videos?: Array<string>;
    files?: Array<file>;
}

export interface NEWS extends ANNOUNCEMENT {
    type: NEWS_TYPE;
    newsType: newsType;
}

export interface file {
    id: string;
    name: string;
    alt: string;
    path: string;
}

export type AppHref = ComponentProps<typeof Link>['href'];
