"use client";

import HomeSectionTemplate from "../HomeSectionTemplate";
import { useTranslations } from "next-intl";
import Card from "../../Card";
import contents_announcements from "@/sample_data/contents_announcements";

export default function HomeSectionAnnouncements() {
  const t = useTranslations("AnnouncementsSection");

  return (
    <HomeSectionTemplate
      name={t("name")}
      header={t("header")}
      linkText={t("linkText")}
      href="/announcements"
    >
      <div className="flex w-full flex-col gap-4 md:flex-row">
        {contents_announcements.slice(0, 4).map((item, index) => (
          <Card key={item.title} card={item} priority={index === 0} />
        ))}
      </div>
    </HomeSectionTemplate>
  );
}
