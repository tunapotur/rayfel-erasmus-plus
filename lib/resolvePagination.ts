import { redirect } from "next/navigation";

export default async function resolvePagination(
  pageLink: string,
  searchParams: Promise<{ page?: string }>,
  itemsPerPage: number,
  dataLength: number,
): Promise<number[]> {
  const { page } = await searchParams;

  const totalPages = Math.ceil(dataLength / itemsPerPage);
  const pageNumber = parseInt(page ?? "");

  if (!page || isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages)
    redirect(`/${pageLink}?page=1`);

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return [totalPages, pageNumber, startIndex, endIndex];
}
