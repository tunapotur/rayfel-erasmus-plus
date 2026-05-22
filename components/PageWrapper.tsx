"use client";

import { ReactNode } from "react";
import PageBadgeHeader from "@/components/PageBadgeHeader";
import { useTranslations } from "next-intl";

export default function PageWrapper({
  children,
  pageText,
  news,
}: {
  children: ReactNode;
  pageText: string;
  news?: boolean;
}) {
  const t = useTranslations(pageText);

  return (
    <div className="flex flex-col items-center mb-auto">
      <PageBadgeHeader
        topHeader={t("topHeader")}
        header={t("header")}
        content={t("content")}
        news={news}
      />
      {children}
    </div>
  );
}
