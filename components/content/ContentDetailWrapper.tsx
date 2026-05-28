"use client";

import { useTranslations } from "next-intl";
import { ANNOUNCEMENT, NEWS, isANNOUNCEMENT } from "@/lib/types/DataTypes";
import ContentDetailBreadCrumbNav from "@/components/content/ContentDetailBreadCrumbNav";
import { ContentDetailArticle } from "./ContentDetailArticle";
import { ContentDetailSidebar } from "./ContentDetailSidebar";

interface ContentWrapperProps {
  content: ANNOUNCEMENT | NEWS;
  other_contents: Array<ANNOUNCEMENT | NEWS>;
}

export default function ContentDetailWrapper({
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
      <ContentDetailBreadCrumbNav
        content_source_link={breadCrumbInfo}
        article_title={content.title}
      />

      {/* Page body */}
      <div className="grid grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-start lg:px-8">
        <ContentDetailArticle article={content} />
        <ContentDetailSidebar items={other_contents} />
      </div>
    </div>
  );
}
