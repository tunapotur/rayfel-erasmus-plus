"use client";

import SectionTemplate from "./SectionTemplate";
import { useTranslations } from "next-intl";
import Card_v2 from "../Card";
import contents_announcements from "@/sample_data/contents_announcements";

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
        {contents_announcements.slice(0, 4).map((item) => (
          <Card_v2 key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
