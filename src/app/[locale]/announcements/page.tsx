import Card from "@/components/Card";
import PageBadgeHeader from "@/components/PageBadgeHeader";

const announcements = [
  {
    date: "12 Ocak 2024",
    title: "Bilim Şenliği Proje Başvuruları Başladı",
    description:
      "Yılın en büyük bilim şenliğinde yerinizi almak için projelerinizi sisteme yükleyebilirsiniz.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "16 Ocak 2024",
    title: "Yeni Mentorluk Programı Başvuruları Açıldı",
    description:
      "Proje ekiplerimizin profesyonel isimlerden alacağı mentörlük eğitimleri haftaya başlıyor.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "18 Ocak 2024",
    title: "Bölgesel Robotik Turnuvası Kayıtları Açıldı",
    description:
      "Bu yılki robotik turnuvasında okulumuzun temsil etmek isteyen takımlar için başvurular açıldı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "20 Ocak 2024",
    title: "Kütüphane Çalışma Saatleri Güncellendi",
    description:
      "Sınav dönemi boyunca kütüphanemiz haftalık olarak gece 22:00'ye kadar hizmet verecektir.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "25 Ocak 2024",
    title: "Erasmus+ Bilgilendirme Toplantısı Düzenlendi",
    description:
      "Avrupa'daki ortak okullarımızla gerçekleştirilen çevrimiçi toplantıda proje takvimi belirlendi.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "28 Ocak 2024",
    title: "Yeşil Okul Sertifikası Başvurusu Yapıldı",
    description:
      "Okulumuz, çevre dostu uygulamalarıyla Yeşil Okul sertifikası almaya hak kazandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "02 Şubat 2024",
    title: "Dijital Beceriler Atölyesi Başlıyor",
    description:
      "Öğrencilerimiz için düzenlenen dijital beceriler atölyesine kayıtlar bu hafta başlıyor.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "05 Şubat 2024",
    title: "Polonya Okul Ziyareti Programı Açıklandı",
    description:
      "Erasmus+ kapsamında Polonya'daki ortak okulumuza yapılacak ziyaretin tarihleri belli oldu.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "09 Şubat 2024",
    title: "Sürdürülebilirlik Paneli Öğrencilerle Buluştu",
    description:
      "Sürdürülebilir yaşam üzerine düzenlenen panelde öğrenciler uzmanlarla bir araya geldi.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "14 Şubat 2024",
    title: "eTwinning Projesi İkinci Aşamaya Geçti",
    description:
      "Avrupa okullarıyla yürütülen eTwinning projemiz başarıyla ikinci aşamasına taşındı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "18 Şubat 2024",
    title: "Kodlama Kulübü Yeni Üye Alımı Başladı",
    description:
      "Okulumuz kodlama kulübü bu dönem yeni üye almaya başladı, başvurular sınırlıdır.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "22 Şubat 2024",
    title: "Çevre Haftası Etkinlikleri Duyuruldu",
    description:
      "Mart ayında düzenlenecek Çevre Haftası etkinlikleri için hazırlıklar tamamlandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "26 Şubat 2024",
    title: "Akıllı Tarım Projesi Sunumu Yapıldı",
    description:
      "Öğrencilerimizin geliştirdiği akıllı tarım projesi il genelinde büyük ilgi gördü.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "01 Mart 2024",
    title: "Portekiz Ortaklık Anlaşması İmzalandı",
    description:
      "Erasmus+ çerçevesinde Portekiz'deki bir lise ile ortaklık protokolü imzalandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "05 Mart 2024",
    title: "Geri Dönüşüm Kampanyası Başlatıldı",
    description:
      "Okul genelinde başlatılan geri dönüşüm kampanyasında ilk haftada 200 kg atık toplandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "10 Mart 2024",
    title: "Yapay Zeka ve Eğitim Semineri Gerçekleşti",
    description:
      "Yapay zekanın eğitimdeki rolünü ele alan seminere 150'den fazla öğrenci katıldı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "14 Mart 2024",
    title: "Matematik Olimpiyatı Sonuçları Açıklandı",
    description:
      "Bölge matematik olimpiyatında okulumuz üç dalda birincilik ödülü kazandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "18 Mart 2024",
    title: "İtalya Hareketlilik Programı Tamamlandı",
    description:
      "İtalya'da gerçekleştirilen Erasmus+ hareketlilik programına 12 öğrenci ve 3 öğretmen katıldı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "22 Mart 2024",
    title: "Su Tasarrufu Projesi Ödül Aldı",
    description:
      "Öğrencilerimizin geliştirdiği su tasarrufu sistemi ulusal çevre yarışmasında birincilik ödülü kazandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
  {
    date: "28 Mart 2024",
    title: "Yıl Sonu Proje Sergisi Tarihi Belli Oldu",
    description:
      "Tüm Erasmus+ ve eTwinning projelerinin sergileneceği yıl sonu etkinliğinin tarihi açıklandı.",
    link: { text: "Devamını Oku", href: "#" },
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col items-center mb-auto">
      <PageBadgeHeader
        topHeader="Platform Duyuruları"
        header="Duyurular"
        content="Proje başvuruları ve platformumuzdaki en yeni gelişmeleri buradan takip edebilirsiniz."
      />

      {/* Cards List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 px-4 py-6">
        {announcements.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </div>
  );
}
