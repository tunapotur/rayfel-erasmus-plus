import type { NewsArticle, NewsItem } from "./types/news";

export const sidebarNews: NewsItem[] = [
  {
    id: "1",
    slug: "yazilim-atolyesi-kayitlari-acildi",
    title: "Yazılım Atölyesi Kayıtları Açıldı",
    excerpt:
      "Sanat ve tasarım odaklı projelerimizin sergileneceği etkinlik için geri sayım başladı.",
    date: "28 Aralık 2023",
    tag: "haber",
    imageAlt: "Yazılım Atölyesi",
    imagePlaceholder: "from-blue-700 to-blue-400",
  },
  {
    id: "2",
    slug: "fen-projeleri-yarismasinda-birincilik",
    title: "Fen Projeleri Yarışmasında Birincilik",
    excerpt:
      "Öğrencilerimiz sürdürülebilir enerji projeleriyle il genelinde düzenlenen yarışmada birinci oldu.",
    date: "20 Aralık 2023",
    tag: "haber",
    imageAlt: "Fen Projeleri",
    imagePlaceholder: "from-slate-700 to-slate-500",
  },
  {
    id: "3",
    slug: "milli-robotik-ligi-hazirliklar",
    title: "Milli Robotik Ligi Hazırlıkları",
    excerpt:
      "Robotik takımımız, önümüzdeki ay düzenlenecek olan milli lig müsabakaları için yoğun bir tempoyla çalışıyor.",
    date: "15 Aralık 2023",
    tag: "hareketlilik",
    imageAlt: "Robotik Ligi",
    imagePlaceholder: "from-gray-900 to-gray-700",
  },
  {
    id: "4",
    slug: "geri-donusum-kampanyasi-basladi",
    title: "Geri Dönüşüm Kampanyası Başladı",
    excerpt:
      "Okul genelinde başlatılan yeni geri dönüşüm projesiyle sıfır atık hedeflerimize bir adım daha yaklaşıyoruz.",
    date: "10 Aralık 2023",
    tag: "yayginlastirma",
    imageAlt: "Geri Dönüşüm",
    imagePlaceholder: "from-green-700 to-green-500",
  },
  {
    id: "5",
    slug: "mezunlarla-kariyer-soylesileri",
    title: "Mezunlarla Kariyer Söyleşileri",
    excerpt:
      "Okulumuzdan mezun olup başarılı kariyerlere sahip isimler, tecrübelerini paylaşmak için öğrencilerle buluşuyor.",
    date: "5 Aralık 2023",
    tag: "hareketlilik",
    imageAlt: "Kariyer Söyleşileri",
    imagePlaceholder: "from-gray-900 to-slate-700",
  },
  {
    id: "6",
    slug: "romanyada-kulturlerarasi-etkilesim",
    title: "Romanya'da Kültürlerarası Etkileşim",
    excerpt:
      "Öğrenci değişim programımız kapsamında Romanya ziyaretimiz sanat odaklı atölyelerle devam ediyor.",
    date: "22 Mayıs 2024",
    tag: "yayginlastirma",
    imageAlt: "Kültürlerarası Etkileşim",
    imagePlaceholder: "from-violet-800 to-purple-600",
  },
];

export const articleData: NewsArticle = {
  id: "main",
  slug: "surdurulebilir-egitim-modelleri",
  title: "Sürdürülebilir Eğitim Modelleri",
  date: "12 Ocak 2024",
  tag: "haber",
  imageAlt: "Sürdürülebilir Eğitim Modelleri",
  imagePlaceholder: "from-gray-900 to-slate-800",
  leadText:
    "Rayfel Projeler kapsamında gelenekselleşen Bilim Şenliği için bu yılki başvuru süreci resmen açılmıştır. Tüm öğrencilerimizi yenilikçi fikirleriyle geleceği şekillendirmeye davet ediyoruz.",
  excerpt:
    "Rayfel Projeler kapsamında gelenekselleşen Bilim Şenliği için bu yılki başvuru süreci resmen açılmıştır.",
  sectionTitle: "Sürdürülebilir Eğitim Modelleri Nerelerde Kullanılabilir",
  content: [
    'Akademik mükemmeliyet ve inovasyon odaklı eğitim vizyonumuzun bir parçası olan Bilim Şenliği, öğrencilerimizin teorik bilgilerini pratiğe dökme, problem çözme yeteneklerini geliştirme ve bilimsel metodolojiyi içselleştirme fırsatı sunmaktadır. Bu yılki temamız "Sürdürülebilir Teknoloji ve Toplumsal Fayda" olarak belirlenmiştir.',
    "Projeler bireysel veya en fazla 3 kişiden oluşan gruplar halinde sunulabilir. Değerlendirme komitemiz projeleri; özgünlük, uygulanabilirlik, metodolojik doğruluk ve sunum kalitesi olmak üzere dört ana başlıkta inceleyecektir. Başvuruların eksiksiz bir proje taslağı ve ön rapor ile birlikte yapılması gerekmektedir.",
    "Öğrencilerimiz danışman öğretmenlerinden rehberlik alabilir ve okul laboratuvarlarımızı proje hazırlık süreci boyunca aktif olarak kullanabilirler. Detaylı teknik şartnameye okul yönetim sistemimiz üzerinden ulaşabilirsiniz. Başarılar dileriz!",
  ],
  headline_image: "/sample_images/headline_images/card_01.jpg",
};
