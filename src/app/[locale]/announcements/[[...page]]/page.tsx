import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import resolvePagination from '@/lib/resolvePagination';
import type { LocalePageProps } from '@/lib/types/DataTypes';
import Card from '@/components/Card';
import { PaginationOperations, Wrapper } from '@/components/content/page';

import { getAllAnnouncements } from '@/data/contentsDataOperations';

const ITEMS_PER_PAGE = 9;

interface PageProps {
    params: Promise<{ locale: string; page?: string[] }>;
}

export async function generateStaticParams() {
    const totalPages = Math.ceil(getAllAnnouncements().length / ITEMS_PER_PAGE);
    return [
        { page: [] }, // /announcements → sayfa 1
        ...Array.from({ length: totalPages }, (_, i) => ({
            page: [String(i + 1)], // /announcements/1, /announcements/2 ...
        })),
    ];
}

export async function generateMetadata({
    params,
}: LocalePageProps): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'pages',
    });

    return {
        title: `${t('announcement')} ${' - '} Rayfel Erasmus+`,
        description: `${t('announcement')} ${' - '} Rayfel Erasmus+`,
    };
}

export default async function AnnouncementPage({ params }: PageProps) {
    const { locale, page } = await params;
    setRequestLocale(locale);

    const [totalPages, pageNumber, startIndex, endIndex] =
        await resolvePagination(
            page?.[0], // page segment'i
            ITEMS_PER_PAGE,
            getAllAnnouncements().length,
        );

    const currentAnnouncements = getAllAnnouncements().slice(
        startIndex,
        endIndex,
    );

    return (
        <Wrapper pageText="AnnouncementsPage">
            {/* Announcements Cards List */}
            <div className="col3-cards-grid">
                {currentAnnouncements.map((item, index) => (
                    <Card key={item.id} card={item} priority={index === 0} />
                ))}
            </div>

            {getAllAnnouncements().length > ITEMS_PER_PAGE && (
                <PaginationOperations
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    pageLink="announcements"
                />
            )}
        </Wrapper>
    );
}
