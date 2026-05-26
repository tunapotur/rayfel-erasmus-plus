import { NewsCard } from "./NewsCard";
import type { NEWS } from "@/lib/types/DataTypes";

interface NewsSidebarProps {
  items: Array<NEWS>;
}

export function NewsSidebar({ items }: NewsSidebarProps) {
  return (
    <aside className="w-full">
      {/* Sidebar title with decorative line */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-foreground font-serif text-xl font-bold whitespace-nowrap">
          Diğer Haberler
        </h2>
        <div className="bg-foreground h-0.5 w-full rounded-full" />
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
}
