"use client";

import SectionTemplate from "./SectionTemplate";
import { useTranslations } from "next-intl";
import Card from "@/components/Card";
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
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
        {contents_news.slice(0, 6).map((item, index) => (
          <Card key={item.title} card={item} priority={index === 0} />
        ))}
      </div>
    </SectionTemplate>
  );
}
