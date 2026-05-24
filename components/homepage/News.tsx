"use client";

import SectionTemplate from "./SectionTemplate";
import { useTranslations } from "next-intl";
import Card_v2 from "@/components/Card";
import contents_news from "@/sample_data/contents_news";

export default function News() {
  const t = useTranslations("NewsSection");

  return (
    <SectionTemplate
      name={t("name")}
      header={t("header")}
      hasBackground
      linkText={t("linkText")}
      href="/news"
    >
      <div className="w-full grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-6">
        {contents_news.slice(0, 6).map((item) => (
          <Card_v2 key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
