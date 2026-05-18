import Card from "../Card";
import SectionTemplate from "./SectionTemplate";

const announcements = [
  {
    date: "12 Ocak 2024",
    title: "Bilim Şenliği Proje Başvuruları Başladı",
    description:
      "Yılın en büyük bilim şenliğinde yerinizi almak için projelerinizi sisteme yükleyebilirsiniz.",
    link: { text: "İncele", href: "#" },
  },
  {
    date: "16 Ocak 2024",
    title: "Yeni Mentorluk Programı Başvuruları Açıldı",
    description:
      "Proje ekiplerimizin profesyonel isimlerden alacağım mentörlük eğitimleri haftaya başlıyor.",
    link: { text: "İncele", href: "#" },
  },
  {
    date: "18 Ocak 2024",
    title: "Bölgesel Robotik Turnuvası Kaytıları Açıldı",
    description:
      "Bu yılki robotik turnuvasında okulumuzun temsil etmek isteyen takımlar için başvurular...",
    link: { text: "İncele", href: "#" },
  },
  {
    date: "20 Ocak 2024",
    title: "Kütüphane Çalışma Saatleri Güncellendi",
    description:
      "Sınav dönemi boyunca kütüphanemiz haftalık olarak gece 22:00'ye kadar hizmet verecektir.",
    link: { text: "İncele", href: "#" },
  },
];

export default function Announcements() {
  return (
    <SectionTemplate
      name="Güncel Duyurular"
      header="Duyurular"
      link={{ text: "Tümünü Gör", href: "/announcements" }}
    >
      <div className="w-full flex flex-col gap-4 md:flex-row">
        {announcements.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
