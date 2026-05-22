import PageWrapper from "@/components/PageWrapper";
import Card from "@/components/Card";
import AnnouncementsPagination from "@/components/AnnouncementsPagination";
import announcements from "@/sample_data_tr/announcements";
import { redirect } from "next/navigation";
import { PageProps } from "@/lib/types/DataTypes";

const ITEMS_PER_PAGE = 9;

export default async function AnnouncementsPage({ searchParams }: PageProps) {
  const { page } = await searchParams;

  const totalPages = Math.ceil(announcements.length / ITEMS_PER_PAGE);
  const pageNumber = parseInt(page ?? "");

  // Geçersiz veya eksik page parametresi → ?page=1'e yönlendir
  if (!page || isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    redirect(`/announcements?page=1`);
  }

  const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
  const currentAnnouncements = announcements.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <PageWrapper pageText="AnnouncementsPage">
      {/* Announcements Cards List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 px-4 py-6">
        {currentAnnouncements.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>

      <AnnouncementsPagination
        currentPage={pageNumber}
        totalPages={totalPages}
      />
    </PageWrapper>
  );
}
