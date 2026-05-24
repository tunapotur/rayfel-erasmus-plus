import PageWrapper from "@/components/PageWrapper";
import PaginationOperations from "@/components/PaginationOperations";
import { SearchParamsPageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";
import Card_v2 from "@/components/Card";
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
        {currentAnnouncements.map((item) => (
          <Card_v2 key={item.title} card={item} />
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
