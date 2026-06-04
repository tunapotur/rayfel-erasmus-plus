import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import resolvePagination from '@/lib/resolvePagination';
import type { LocalePageProps } from '@/lib/types/DataTypes';
import Card from '@/components/Card';
import { PaginationOperations, Wrapper } from '@/components/content/page';
import contents_news from '@/sample_data/contents_news';

const ITEMS_PER_PAGE = 6;

interface PageProps {
    params: Promise<{ locale: string; page?: string[] }>;
}

export async function generateStaticParams() {
    const totalPages = Math.ceil(contents_news.length / ITEMS_PER_PAGE);
    return [
        { page: [] }, // /news → sayfa 1
        ...Array.from({ length: totalPages }, (_, i) => ({
            page: [String(i + 1)], // /news/1, /news/2 ...
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
        title: `${t('news')} ${' - '} Rayfel Erasmus+`,
        description: `${t('news')} ${' - '} Rayfel Erasmus+`,
    };
}

export default async function NewsPage({ params }: PageProps) {
    const { locale, page } = await params;
    setRequestLocale(locale);

    const [totalPages, pageNumber, startIndex, endIndex] =
        await resolvePagination(
            page?.[0], // page segment'i
            ITEMS_PER_PAGE,
            contents_news.length,
        );

    const currentNews = contents_news.slice(startIndex, endIndex);

    return (
        <Wrapper pageText="NewsPage">
            {/* News Cards List */}
            <div className="col3-cards-grid">
                {currentNews.map((item, index) => (
                    <Card key={item.id} card={item} priority={index < 2} />
                ))}
            </div>

            {/* Pagination  */}
            {contents_news.length > ITEMS_PER_PAGE && (
                <PaginationOperations
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    pageLink="news"
                />
            )}
        </Wrapper>
    );
}
