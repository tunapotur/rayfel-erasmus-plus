"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTranslations } from "next-intl";

interface PaginationOperationsProps {
  currentPage: number;
  totalPages: number;
  pageLink: string;
}

export default function PaginationOperations({
  currentPage,
  totalPages,
  pageLink,
}: PaginationOperationsProps) {
  const t = useTranslations("pagination");

  const buildHref = (pageNumber: number) => `/${pageLink}?page=${pageNumber}`;

  /**
   * shadcn pagination şekillendirmesi için kullanılacak
   * diziyi hazırlayan getPageNumbers fonksiyonu.
   * Bu fonksiyon sadece number tipinde ve "ellipsis"
   * değere sahip elemanlardan oluşan bir dizi döndürür
   ** [1, 2, 3, "ellipsis", 10] => 1 2 3 ... 10
   * Buradaki "ellipsis" üç nokta yerine kullanılan
   * özel bir işaretleyicidir.
   */
  const getPageNumbers = (): (number | "ellipsis")[] => {
    if (totalPages <= 5) {
      /** [1, 2, 3, 4, 5] dizisini döndürür
       * Eğer totalPage 5 ve 5'den azsa
       * < previous 1 [2] 3 4 5 Next >
       * şeklinde bir çıktı oluşur
       */
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    /** sadece number tipinde ve "ellipsis"
     * değere sahip elemanlardan oluşan ve
     * içinde 1 değeri olan tek elemanlı
     * bir dizi oluşturur.
     * Bu şekilde oluşturulan dizi için
     * alttaki dizi örnek olabilir
     * [1, 2, 3, "ellipsis", 10]
     * */
    const pages: (number | "ellipsis")[] = [1];

    /**
     * currentPage 3'den büyükse pages
     * dizinin 2. elamanına "ellipsis" ekler
     * < previous 1 ... 3 [4] 5 6 Next >
     * şeklinde bir çıktı oluşur
     */
    if (currentPage > 3) pages.push("ellipsis");

    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("ellipsis");

    pages.push(totalPages);

    return pages;
  };

  return (
    <Pagination className="mt-24">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? buildHref(currentPage - 1) : undefined}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
            text={t("previous")}
          />
        </PaginationItem>

        {getPageNumbers().map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href={buildHref(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href={
              currentPage < totalPages ? buildHref(currentPage + 1) : undefined
            }
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
            text={t("next")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
