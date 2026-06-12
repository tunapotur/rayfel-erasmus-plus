import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import Wrapper from '@/components/content/detail/Wrapper';

import { getAllNews, getContentBySlug } from '@/data/contentsDataOperations';

interface PageProps {
    params: Promise<{ slug: string; locale: string }>;
}

// Generate static params for SSG (expand with real data source as needed)
export async function generateStaticParams() {
    return getAllNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const content = getContentBySlug(slug);
    const t = await getTranslations({
        locale,
        namespace: 'pages',
    });

    if (!content) return {};

    return {
        title: `${content.title} ${' - '} ${t('news')}`,
        description: content.description,
    };
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const content = getContentBySlug(slug);

    // In a real app, fetch article by slug from a CMS / DB
    if (!content) notFound();

    const other_contents = getAllNews()
        .filter((item) => item.slug !== slug)
        .slice(0, 6);

    return <Wrapper content={content} other_contents={other_contents} />;
}
