import SectionTemplate from "./SectionTemplate";
import Card from "../Card";

const cards = [
  {
    newsType: "news",
    date: "12 Temmuz 2024",
    title: "Sürdürülebilir Eğitim Modelleri",
    description:
      "Erasmus+ kapsamında yürütülen yeni projemizle yeşil becerilerin eğitime entegrasyonu.",
    href: "#",
    image: "/cards_samples/card_01.jpg",
  },
  {
    newsType: "news",
    date: "28 Aralık 2023",
    title: "Yazılım Atölyesi Kayıtları Açıldı",
    description:
      "Sanat ve tasarım odaklı projelerimizin sergileneceği etkinlik için geri sayım başladı.",
    href: "#",
    image: "/cards_samples/card_02.jpg",
  },
  {
    newsType: "mobility",
    date: "20 Aralık 2023",
    title: "Fen Projeleri Yarışmasında Birincilik",
    description:
      "Öğrencilerimiz sürdürülebilir enerji projeleriyle il genelinde düzenlenen yarışmada birinci oldu.",
    href: "#",
    image: "/cards_samples/card_03.jpg",
  },
  {
    newsType: "dissemination",
    date: "15 Aralık 2023",
    title: "Milli Robotik Ligi Hazırlıkları",
    description:
      "Robotik takımımız, önümüzdeki ay düzenlenecek olan milli lig müsabakaları için yoğun bir tempoyla çalışıyor.",
    href: "#",
    image: "/cards_samples/card_04.jpg",
  },
  {
    newsType: "mobility",
    date: "10 Aralık 2023",
    title: "Geri Dönüşüm Kampanyası Başladı",
    description:
      "Okul genelinde başlatılan yeni geri dönüşüm projesiyle sıfır atık hedeflerimize bir adım daha yaklaşıyoruz.",
    href: "#",
    image: "/cards_samples/card_05.jpg",
  },
  {
    newsType: "dissemination",
    date: "05 Aralık 2023",
    title: "Mezunlarla Kariyer Söyleşileri",
    description:
      "Okulumuzdan mezun olup başarılı kariyerlere sahip isimler, tecrübelerini paylaşmak için öğrencilerle buluşuyor.",
    href: "#",
    image: "/cards_samples/card_06.jpg",
  },
];

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
        {cards.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
