import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import Wrapper from '@/components/content/detail/Wrapper';

import {
    getAllAnnouncements,
    getContentBySlug,
} from '@/data/contentsDataOperations';

interface PageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
    return getAllAnnouncements().map((item) => ({ slug: item.slug }));
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
        title: `${content.title} ${' - '} ${t('announcement')}`,
        description: content.description,
    };
}

export default async function AnnouncementDetailPage({ params }: PageProps) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const content = getContentBySlug(slug);

    if (!content) notFound();

    const other_contents = getAllAnnouncements()
        .filter((item) => item.slug !== slug)
        .slice(0, 6);

    return <Wrapper content={content} other_contents={other_contents} />;
}
