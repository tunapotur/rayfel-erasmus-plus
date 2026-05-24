"use client";

import SectionTemplate from "./SectionTemplate";
import Card from "../Card";
import news from "@/sample_data/news";
import { useTranslations } from "next-intl";

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
        {news.slice(0, 6).map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
