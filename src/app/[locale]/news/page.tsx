import Card from "@/components/Card";

import PageWrapper from "@/components/PageWrapper";
import news from "@/sample_data_tr/news";

export default function NewsPage() {
  return (
    <PageWrapper pageText="NewsPage">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 px-4 py-6">
        {news.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </PageWrapper>
  );
}
