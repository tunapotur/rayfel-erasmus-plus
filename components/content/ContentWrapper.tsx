"use client";

import { useTranslations } from "next-intl";
import { ANNOUNCEMENT, NEWS, isANNOUNCEMENT } from "@/lib/types/DataTypes";
import ContentBreadCrumbNav from "@/components/content/ContentBreadCrumbNav";
import { ContentArticle } from "./ContentArticle";
import { ContentSidebar } from "./ContentSidebar";

interface ContentWrapperProps {
  content: ANNOUNCEMENT | NEWS;
  other_contents: Array<ANNOUNCEMENT | NEWS>;
}

export default function ContentWrapper({
  content,
  other_contents,
}: ContentWrapperProps) {
  const t_announcement = useTranslations("AnnouncementsPage");
  const t_news = useTranslations("NewsPage");

  const breadCrumbInfo: { href: string; text: string } = isANNOUNCEMENT(content)
    ? { href: t_announcement("href"), text: t_announcement("header") }
    : { href: t_news("href"), text: t_news("header") };

  return (
    <div className="bg-background mb-auto min-h-screen">
      <ContentBreadCrumbNav
        content_source_link={breadCrumbInfo}
        article_title={content.title}
      />

      {/* Page body */}
      <div className="grid grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-start lg:px-8">
        <ContentArticle article={content} />
        <ContentSidebar items={other_contents} />
      </div>
    </div>
  );
}
