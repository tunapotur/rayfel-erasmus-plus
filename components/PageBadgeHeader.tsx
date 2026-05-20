interface PageBadgeHeaderProps {
  topHeader: string;
  header: string;
  content: string;
  news?: boolean;
}

export default function PageBadgeHeader({
  topHeader,
  header,
  content,
  news,
}: PageBadgeHeaderProps) {
  return (
    <div className="px-4 py-6 w-full">
      <div
        className={`shadow-sm px-6 py-12 rounded-xl ${news ? "bg-blue-600 dark:bg-blue-700" : "bg-amber-500 dark:bg-amber-600"}`}
      >
        <h2 className="text-bright-header dark:text-gray-200 text-xs sm:text-base font-bold uppercase tracking-widest mb-2">
          {topHeader}
        </h2>
        <h1 className="text-bright-header mb-2 text-3xl md:text-5xl font-bold leading-tight drop-shadow-sm">
          {header}
        </h1>
        <p className="text-bright-header leading-tight text-xs md:text-base md:w-[70%] lg:w-[50%]">
          {content}
        </p>
      </div>
    </div>
  );
}
