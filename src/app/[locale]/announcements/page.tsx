import PageWrapper from "@/components/PageWrapper";
import Card from "@/components/Card";
import PaginationOperations from "@/components/PaginationOperations";
import { SearchParamsPageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";

import announcements from "@/sample_data_tr/announcements";

const ITEMS_PER_PAGE = 9;

export default async function AnnouncementsPage({
  searchParams,
}: SearchParamsPageProps) {
  const [totalPages, pageNumber, startIndex, endIndex] =
    await resolvePagination(
      "announcements",
      searchParams,
      ITEMS_PER_PAGE,
      announcements.length,
    );

  const currentAnnouncements = announcements.slice(startIndex, endIndex);

  return (
    <PageWrapper pageText="AnnouncementsPage">
      {/* Announcements Cards List */}
      <div className="col3-cards-grid">
        {currentAnnouncements.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>

      {/* Pagination  */}
      <PaginationOperations
        currentPage={pageNumber}
        totalPages={totalPages}
        pageLink="announcements"
      />
    </PageWrapper>
  );
}
