"use client";

import { Card_Sidebar } from "../Card_Sidebar";
import { useTranslations } from "next-intl";
import {
  ANNOUNCEMENT,
  NEWS,
  isANNOUNCEMENT,
  isNEWS,
} from "@/lib/types/DataTypes";

export function ContentDetailSidebar({
  items,
}: {
  items: Array<ANNOUNCEMENT | NEWS>;
}) {
  const t = useTranslations("ContentSidebarHeader");

  return (
    <aside className="w-full">
      {/* Sidebar title with decorative line */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-foreground font-serif text-xl font-bold whitespace-nowrap">
          {isANNOUNCEMENT(items[0]) && t("announcement")}
          {isNEWS(items[0]) && t("news")}
        </h2>
        <div className="bg-foreground h-0.5 w-full rounded-full" />
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <Card_Sidebar key={item.id} card={item} />
        ))}
      </div>
    </aside>
  );
}
