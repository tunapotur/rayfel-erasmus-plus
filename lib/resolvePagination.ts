// resolvePagination.ts — static uyumlu hali
export default async function resolvePagination(
  pageParam: string | undefined,
  itemsPerPage: number,
  dataLength: number,
): Promise<number[]> {
  const totalPages = Math.ceil(dataLength / itemsPerPage);
  const pageNumber = Math.max(
    1,
    Math.min(Number(pageParam ?? 1) || 1, totalPages),
  );

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return [totalPages, pageNumber, startIndex, endIndex];
}
