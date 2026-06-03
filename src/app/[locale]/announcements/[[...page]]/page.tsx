import type { LocalePageProps } from "@/lib/types/DataTypes";
import resolvePagination from "@/lib/resolvePagination";
import Card from "@/components/Card";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Wrapper, PaginationOperations } from "@/components/content/page";

import contents_announcements from "@/sample_data/contents_announcements";

const ITEMS_PER_PAGE = 9;

interface PageProps {
  params: Promise<{ locale: string; page?: string[] }>;
}

export async function generateStaticParams() {
  const totalPages = Math.ceil(contents_announcements.length / ITEMS_PER_PAGE);
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
    namespace: "pages",
  });

  return {
    title: `${t("announcement")} ${" - "} Rayfel Erasmus+`,
    description: `${t("announcement")} ${" - "} Rayfel Erasmus+`,
  };
}

export default async function AnnouncementPage({ params }: PageProps) {
  const { locale, page } = await params;
  setRequestLocale(locale);

  const [totalPages, pageNumber, startIndex, endIndex] =
    await resolvePagination(
      page?.[0], // page segment'i
      ITEMS_PER_PAGE,
      contents_announcements.length,
    );

  const currentAnnouncements = contents_announcements.slice(
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

      {contents_announcements.length > ITEMS_PER_PAGE && (
        <PaginationOperations
          currentPage={pageNumber}
          totalPages={totalPages}
          pageLink="announcements"
        />
      )}
    </Wrapper>
  );
}
