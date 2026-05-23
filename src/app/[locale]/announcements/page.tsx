import PageWrapper from "@/components/PageWrapper";
import Card from "@/components/Card";
import PaginationOperations from "@/components/PaginationOperations";
import announcements from "@/sample_data_tr/announcements";
import { SearchParamsPageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";

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
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 px-4 py-6">
        {currentAnnouncements.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>

      <PaginationOperations
        currentPage={pageNumber}
        totalPages={totalPages}
        pageLink="announcements"
      />
    </PageWrapper>
  );
}
