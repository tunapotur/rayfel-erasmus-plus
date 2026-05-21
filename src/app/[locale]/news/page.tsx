import Card from "@/components/Card";
import PageBadgeHeader from "@/components/PageBadgeHeader";
import news from "@/sample_data/news";

export default function NewsPage() {
  return (
    <div className="flex flex-col items-center mb-auto">
      <PageBadgeHeader
        topHeader="Platform Haberleri"
        header="Haberler"
        content="Projelerimizden en son gelişmeleri ve başarı hikayelerimizi buradan takip edebilirsiniz."
        news
      />

      {/* Announcements Cards List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 px-4 py-6">
        {news.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </div>
  );
}
