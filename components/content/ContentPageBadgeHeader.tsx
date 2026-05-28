interface PageBadgeHeaderProps {
  topHeader: string;
  header: string;
  content: string;
  news?: boolean;
}

export default function ContentPageBadgeHeader({
  topHeader,
  header,
  content,
  news,
}: PageBadgeHeaderProps) {
  return (
    <div className="w-full px-4 py-6">
      <div
        className={`rounded-xl px-6 py-12 shadow-sm ${news ? "bg-blue-600 dark:bg-blue-700" : "bg-amber-500 dark:bg-amber-600"}`}
      >
        <h2 className="text-bright-header mb-2 text-xs font-bold tracking-widest uppercase sm:text-base dark:text-gray-200">
          {topHeader}
        </h2>
        <h1 className="text-bright-header mb-2 text-3xl leading-tight font-bold drop-shadow-sm md:text-5xl">
          {header}
        </h1>
        <p className="text-bright-header text-xs leading-tight md:w-[70%] md:text-base lg:w-[50%]">
          {content}
        </p>
      </div>
    </div>
  );
}
