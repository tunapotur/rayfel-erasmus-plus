import SectionTemplate from "./SectionTemplate";
import Card from "../Card";
import news from "@/sample_data/news";

export default function News() {
  return (
    <SectionTemplate
      name="Haber Akışı"
      header="Haberler"
      hasBackground
      linkText="Tümünü Gör"
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
