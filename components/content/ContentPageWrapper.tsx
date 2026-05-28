"use client";

import { ReactNode } from "react";
import ContentPageBadgeHeader from "@/components/content/ContentPageBadgeHeader";
import { useTranslations } from "next-intl";

export default function ContentPageWrapper({
  children,
  pageText,
}: {
  children: ReactNode;
  pageText: string;
}) {
  const t = useTranslations(pageText);

  return (
    <div className="mb-auto flex min-h-screen flex-col items-center">
      <ContentPageBadgeHeader
        topHeader={t("topHeader")}
        header={t("header")}
        content={t("content")}
        news={pageText === "NewsPage" ? true : false}
      />
      {children}
    </div>
  );
}
