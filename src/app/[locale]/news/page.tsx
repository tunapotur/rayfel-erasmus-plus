import PageWrapper from "@/components/PageWrapper";
import Card from "@/components/Card";
import PaginationOperations from "@/components/PaginationOperations";
import { SearchParamsPageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";

import news from "@/sample_data_tr/news";

const ITEMS_PER_PAGE = 6;

export default async function NewsPage({
  searchParams,
}: SearchParamsPageProps) {
  const [totalPages, pageNumber, startIndex, endIndex] =
    await resolvePagination("news", searchParams, ITEMS_PER_PAGE, news.length);

  const currentNews = news.slice(startIndex, endIndex);

  return (
    <PageWrapper pageText="NewsPage">
      {/* News Cards List */}
      <div className="col3-cards-grid">
        {currentNews.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>

      {/* Pagination  */}
      <PaginationOperations
        currentPage={pageNumber}
        totalPages={totalPages}
        pageLink="news"
      />
    </PageWrapper>
  );
}
