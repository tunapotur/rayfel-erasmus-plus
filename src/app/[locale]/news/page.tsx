import PageBadgeHeader from "@/components/PageBadgeHeader";

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      <PageBadgeHeader
        topHeader="Platform Haberleri"
        header="Haberler"
        content="Projelerimizden en son gelişmeleri ve başarı hikayelerimizi buradan takip edebilirsiniz."
        news
      />
    </div>
  );
}
