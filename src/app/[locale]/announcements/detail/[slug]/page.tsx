import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import DetailWrapper from '@/components/content/DetailWrapper';
import contents_announcements from '@/sample_data/contents_announcements';

interface PageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
    return contents_announcements.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const content = contents_announcements.find((item) => item.slug === slug);
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

    const content = contents_announcements.find((item) => item.slug === slug);

    if (!content) notFound();

    const other_contents = contents_announcements
        .filter((item) => item.slug !== slug)
        .slice(0, 6);

    return <DetailWrapper content={content} other_contents={other_contents} />;
}
