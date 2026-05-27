import PageWrapper from "@/components/PageWrapper";
import PaginationOperations from "@/components/PaginationOperations";
import type { SearchParamsPageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";
import Card from "@/components/Card";
import contents_news from "@/sample_data/contents_news";

const ITEMS_PER_PAGE = 6;

export default async function NewsPage({
  searchParams,
}: SearchParamsPageProps) {
  const [totalPages, pageNumber, startIndex, endIndex] =
    await resolvePagination(
      "news",
      searchParams,
      ITEMS_PER_PAGE,
      contents_news.length,
    );

  const currentNews = contents_news.slice(startIndex, endIndex);

  return (
    <PageWrapper pageText="NewsPage">
      {/* News Cards List */}
      <div className="col3-cards-grid">
        {currentNews.map((item, index) => (
          <Card key={item.id} card={item} priority={index === 0} />
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
    </PageWrapper>
  );
}
