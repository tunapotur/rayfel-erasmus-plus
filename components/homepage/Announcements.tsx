"use client";

import Card from "../Card";
import SectionTemplate from "./SectionTemplate";
import announcements from "@/sample_data_tr/announcements";
import { useTranslations } from "next-intl";

export default function Announcements() {
  const t = useTranslations("AnnouncementsSection");

  return (
    <SectionTemplate
      name={t("name")}
      header={t("header")}
      linkText={t("linkText")}
      href="/announcements"
    >
      <div className="w-full flex flex-col gap-4 md:flex-row">
        {announcements.slice(0, 4).map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
