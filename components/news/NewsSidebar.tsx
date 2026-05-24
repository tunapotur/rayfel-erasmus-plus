import { NewsCard } from "./NewsCard";
import type { NewsItem } from "@/types/news";

interface NewsSidebarProps {
  items: NewsItem[];
}

export function NewsSidebar({ items }: NewsSidebarProps) {
  return (
    <aside className="w-full">
      {/* Sidebar title with decorative line */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="font-serif text-xl font-bold text-foreground whitespace-nowrap">
          Diğer Haberler
        </h2>
        <div className="h-0.5 w-full rounded-full bg-foreground" />
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
}
