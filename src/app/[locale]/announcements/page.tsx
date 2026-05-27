import PageWrapper from "@/components/PageWrapper";
import PaginationOperations from "@/components/PaginationOperations";
import type { SearchParamsPageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";
import Card from "@/components/Card";
import contents_announcements from "@/sample_data/contents_announcements";

const ITEMS_PER_PAGE = 9;

export default async function AnnouncementsPage({
  searchParams,
}: SearchParamsPageProps) {
  const [totalPages, pageNumber, startIndex, endIndex] =
    await resolvePagination(
      "announcements",
      searchParams,
      ITEMS_PER_PAGE,
      contents_announcements.length,
    );

  const currentAnnouncements = contents_announcements.slice(
    startIndex,
    endIndex,
  );

  return (
    <PageWrapper pageText="AnnouncementsPage">
      {/* Announcements Cards List */}
      <div className="col3-cards-grid">
        {currentAnnouncements.map((item, index) => (
          <Card key={item.id} card={item} priority={index === 0} />
        ))}
      </div>

      {/* Pagination  */}
      {contents_announcements.length > ITEMS_PER_PAGE && (
        <PaginationOperations
          currentPage={pageNumber}
          totalPages={totalPages}
          pageLink="announcements"
        />
      )}
    </PageWrapper>
  );
}
