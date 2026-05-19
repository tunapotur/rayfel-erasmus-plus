import SectionTemplate from "./SectionTemplate";
import Card, { BadgeType } from "../Card";

/**
 * HABER        → news
 * HAREKETLİLİK → mobility
 * YAYGINLAŞTIRMA → dissemination
 */

const cards = [
  {
    tag: "News",
    date: "12 Temmuz 2024",
    title: "Sürdürülebilir Eğitim Modelleri",
    description:
      "Erasmus+ kapsamında yürütülen yeni projemizle yeşil becerilerin eğitime entegrasyonu.",
    link: { text: "Devamını Oku", href: "#" },
    image: "/cards_samples/card_01.jpg",
    badge: BadgeType.NEWS,
  },
  {
    tag: "News",
    date: "28 Aralık 2023",
    title: "Yazılım Atölyesi Kayıtları Açıldı",
    description:
      "Sanat ve tasarım odaklı projelerimizin sergileneceği etkinlik için geri sayım başladı.",
    link: { text: "Devamını Oku", href: "#" },
    image: "/cards_samples/card_02.jpg",
    badge: BadgeType.NEWS,
  },
  {
    tag: "Mobility",
    date: "20 Aralık 2023",
    title: "Fen Projeleri Yarışmasında Birincilik",
    description:
      "Öğrencilerimiz sürdürülebilir enerji projeleriyle il genelinde düzenlenen yarışmada birinci oldu.",
    link: { text: "Devamını Oku", href: "#" },
    image: "/cards_samples/card_03.jpg",
    badge: BadgeType.MOBILITY,
  },
  {
    tag: "Dissemination",
    date: "15 Aralık 2023",
    title: "Milli Robotik Ligi Hazırlıkları",
    description:
      "Robotik takımımız, önümüzdeki ay düzenlenecek olan milli lig müsabakaları için yoğun bir tempoyla çalışıyor.",
    link: { text: "Devamını Oku", href: "#" },
    image: "/cards_samples/card_04.jpg",
    badge: BadgeType.DISSEMINATION,
  },
  {
    tag: "Mobility",
    date: "10 Aralık 2023",
    title: "Geri Dönüşüm Kampanyası Başladı",
    description:
      "Okul genelinde başlatılan yeni geri dönüşüm projesiyle sıfır atık hedeflerimize bir adım daha yaklaşıyoruz.",
    link: { text: "Devamını Oku", href: "#" },
    image: "/cards_samples/card_05.jpg",
    badge: BadgeType.MOBILITY,
  },
  {
    tag: "Dissemination",
    date: "05 Aralık 2023",
    title: "Mezunlarla Kariyer Söyleşileri",
    description:
      "Okulumuzdan mezun olup başarılı kariyerlere sahip isimler, tecrübelerini paylaşmak için öğrencilerle buluşuyor.",
    link: { text: "Devamını Oku", href: "#" },
    image: "/cards_samples/card_06.jpg",
    badge: BadgeType.DISSEMINATION,
  },
];

export default function News() {
  return (
    <SectionTemplate
      name="Haber Akışı"
      header="Haberler"
      bg="bg-gray-100/50 dark:bg-gray-800/50"
      link={{ text: "Tüm Haberlerini Gör", href: "/news" }}
    >
      <div className="w-full grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-3">
        {cards.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
