export interface NewsType {
  id: number;
  newsType: string;
  date: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const news: Array<NewsType> = [
  {
    id: 0,
    newsType: "news",
    date: "12 Temmuz 2024",
    title: "Sürdürülebilir Eğitim Modelleri",
    description:
      "Erasmus+ kapsamında yürütülen yeni projemizle yeşil becerilerin eğitime entegrasyonu.",
    href: "#",
    image: "/cards_samples/card_01.jpg",
  },
  {
    id: 1,
    newsType: "news",
    date: "28 Aralık 2023",
    title: "Yazılım Atölyesi Kayıtları Açıldı",
    description:
      "Sanat ve tasarım odaklı projelerimizin sergileneceği etkinlik için geri sayım başladı.",
    href: "#",
    image: "/cards_samples/card_02.jpg",
  },
  {
    id: 2,
    newsType: "mobility",
    date: "20 Aralık 2023",
    title: "Fen Projeleri Yarışmasında Birincilik",
    description:
      "Öğrencilerimiz sürdürülebilir enerji projeleriyle il genelinde düzenlenen yarışmada birinci oldu.",
    href: "#",
    image: "/cards_samples/card_03.jpg",
  },
  {
    id: 3,
    newsType: "dissemination",
    date: "15 Aralık 2023",
    title: "Milli Robotik Ligi Hazırlıkları",
    description:
      "Robotik takımımız, önümüzdeki ay düzenlenecek olan milli lig müsabakaları için yoğun bir tempoyla çalışıyor.",
    href: "#",
    image: "/cards_samples/card_04.jpg",
  },
  {
    id: 4,
    newsType: "mobility",
    date: "10 Aralık 2023",
    title: "Geri Dönüşüm Kampanyası Başladı",
    description:
      "Okul genelinde başlatılan yeni geri dönüşüm projesiyle sıfır atık hedeflerimize bir adım daha yaklaşıyoruz.",
    href: "#",
    image: "/cards_samples/card_05.jpg",
  },
  {
    id: 5,
    newsType: "dissemination",
    date: "05 Aralık 2023",
    title: "Mezunlarla Kariyer Söyleşileri",
    description:
      "Okulumuzdan mezun olup başarılı kariyerlere sahip isimler, tecrübelerini paylaşmak için öğrencilerle buluşuyor.",
    href: "#",
    image: "/cards_samples/card_06.jpg",
  },
  {
    id: 6,
    newsType: "news",
    date: "01 Aralık 2023",
    title: "Yapay Zeka Harvard Semineri",
    description:
      "Eğitimde yapay zeka araçlarının kullanımı ve etik standartlar üzerine kapsamlı bir seminer düzenlendi.",
    href: "#",
    image: "/cards_samples/card_07.jpg",
  },
  {
    id: 7,
    newsType: "mobility",
    date: "25 Kasım 2023",
    title: "Avrupa Staj Konsorsiyumu Toplantısı",
    description:
      "Yurt dışı staj hareketliliklerini artırmak amacıyla paydaş kurumlarla bütçe ve kota planlaması yapıldı.",
    href: "#",
    image: "/cards_samples/card_08.jpg",
  },
  {
    id: 8,
    newsType: "dissemination",
    date: "18 Kasım 2023",
    title: "Dijital Girişimcilik Paneli Sonuçları",
    description:
      "Genç girişimcilerin teknoloji odaklı iş fikirlerini yatırımcılara sunduğu panelin sonuç raporu yayınlandı.",
    href: "#",
    image: "/cards_samples/card_09.jpg",
  },
  {
    id: 9,
    newsType: "news",
    date: "12 Kasım 2023",
    title: "Yenilenebilir Enerji Laboratuvarı Kuruldu",
    description:
      "Güneş ve rüzgar enerjisi sistemlerinin incelenebileceği yeni laboratuvarımız öğrencilerin hizmetine sunuldu.",
    href: "#",
    image: "/cards_samples/card_10.jpg",
  },
  {
    id: 10,
    newsType: "mobility",
    date: "04 Kasım 2023",
    title: "İtalya Kültürel Değişim Programı",
    description:
      "Öğrenci grubumuz, kültürel miras ve gastronomi odaklı değişim programı kapsamında Roma'ya hareket etti.",
    href: "#",
    image: "/cards_samples/card_11.jpg",
  },
  {
    id: 11,
    newsType: "dissemination",
    date: "29 Ekim 2023",
    title: "Cumhuriyetin 100. Yılı Sergisi",
    description:
      "Tarih ve sanat kulüplerinin ortaklaşa hazırladığı 'Yüzyıllık Miras' temalı fotoğraf sergisi açıldı.",
    href: "#",
    image: "/cards_samples/card_12.jpg",
  },
  {
    id: 12,
    newsType: "news",
    date: "22 Ekim 2023",
    title: "Siber Güvenlik Farkındalık Eğitimi",
    description:
      "Öğrencilerin dijital ortamlarda güvenle var olabilmeleri için siber zorbalık ve veri güvenliği eğitimi verildi.",
    href: "#",
    image: "/cards_samples/card_13.jpg",
  },
  {
    id: 13,
    newsType: "mobility",
    date: "15 Ekim 2023",
    title: "Almanya Teknik İnceleme Gezisi",
    description:
      "Mühendislik bölümü öğretmenlerimiz, endüstri 4.0 uygulamalarını yerinde incelemek üzere Münih'i ziyaret etti.",
    href: "#",
    image: "/cards_samples/card_14.jpg",
  },
  {
    id: 14,
    newsType: "dissemination",
    date: "08 Ekim 2023",
    title: "TÜBİTAK Proje Kitapçığı Basıldı",
    description:
      "Geçtiğimiz dönem kabul edilen tüm TÜBİTAK araştırma projelerinin yer aldığı özet kitapçık dijitalde yayında.",
    href: "#",
    image: "/cards_samples/card_15.jpg",
  },
  {
    id: 15,
    newsType: "news",
    date: "01 Ekim 2023",
    title: "Yeni Akademik Yıl Açılış Töreni",
    description:
      "Geniş bir katılım ve coşkulu bir atmosferle yeni eğitim-öğretim yılının ilk ders zili çaldı.",
    href: "#",
    image: "/cards_samples/card_16.jpg",
  },
  {
    id: 16,
    newsType: "mobility",
    date: "25 Eylül 2023",
    title: "İspanya'da Dil ve Metodoloji Eğitimi",
    description:
      "Eğitmenlerimiz, modern dil öğretim teknikleri üzerine düzenlenen 2 haftalık kurs için Madrid'e gitti.",
    href: "#",
    image: "/cards_samples/card_01.jpg",
  },
  {
    id: 17,
    newsType: "dissemination",
    date: "19 Eylül 2023",
    title: "Sosyal Sorumluluk Ödülleri Dağıtıldı",
    description:
      "Yıl boyunca çevre ve insan odaklı projelerde aktif rol oynayan gönüllü ekiplerimize plaketleri sunuldu.",
    href: "#",
    image: "/cards_samples/card_02.jpg",
  },
  {
    id: 18,
    newsType: "news",
    date: "10 Eylül 2023",
    title: "Kütüphane Veritabanı Güncellendi",
    description:
      "Dünya çapındaki binlerce akademik yayına ve e-kitaba ücretsiz erişim sağlayan yeni sistem entegre edildi.",
    href: "#",
    image: "/cards_samples/card_03.jpg",
  },
  {
    id: 19,
    newsType: "mobility",
    date: "03 Eylül 2023",
    title: "Fransa Personel Hareketliliği",
    description:
      "İdari kadromuz, kurumsal yönetim ve dijital arşivleme süreçlerini incelemek üzere Paris Üniversitesinde.",
    href: "#",
    image: "/cards_samples/card_04.jpg",
  },
  {
    id: 20,
    newsType: "dissemination",
    date: "28 Ağustos 2023",
    title: "Akıllı Şehirler Çalıştayı Raporu",
    description:
      "Belediyeler ortaklığıyla yürütülen akıllı ulaşım ve lojistik projesinin kapanış çıktısı kamuoyuyla paylaşıldı.",
    href: "#",
    image: "/cards_samples/card_05.jpg",
  },
  {
    id: 21,
    newsType: "news",
    date: "15 Ağustos 2023",
    title: "Yaz Kampı Teknoloji Odaklı Geçti",
    description:
      "Yaz tatili boyunca devam eden kodlama ve 3D tasarım kamplarına katılan öğrenciler sertifikalarını aldı.",
    href: "#",
    image: "/cards_samples/card_06.jpg",
  },
  {
    id: 22,
    newsType: "mobility",
    date: "05 Ağustos 2023",
    title: "Polonya Gençlik Değişimi Programı",
    description:
      "Gençlik kulübümüz, 'Kültürlerarası Diyalog' temalı gençlik değişimi projesi için Krakow'da çalışmalara başladı.",
    href: "#",
    image: "/cards_samples/card_07.jpg",
  },
  {
    id: 23,
    newsType: "dissemination",
    date: "25 Temmuz 2023",
    title: "E-Öğrenme Platformu Tanıtıldı",
    description:
      "Tüm eğitim materyallerine uzaktan erişim imkanı sunan yerli web tabanlı LMS yazılımı kullanıma sunuldu.",
    href: "#",
    image: "/cards_samples/card_08.jpg",
  },
  {
    id: 24,
    newsType: "news",
    date: "18 Temmuz 2023",
    title: "Biyoteknoloji Alanında Büyük Yatırım",
    description:
      "Genetik Araştırmalar Merkezi bünyesinde kurulacak yeni DNA dizileme birimi için fon onaylandı.",
    href: "#",
    image: "/cards_samples/card_09.jpg",
  },
  {
    id: 25,
    newsType: "mobility",
    date: "10 Temmuz 2023",
    title: "Hollanda Sürdürülebilir Tarım Gezisi",
    description:
      "Ziraat odaklı çalışma grubumuz, dikey tarım ve topraksız üretim teknolojilerini incelemek üzere Amsterdam'da.",
    href: "#",
    image: "/cards_samples/card_10.jpg",
  },
  {
    id: 26,
    newsType: "dissemination",
    date: "02 Temmuz 2023",
    title: "Kariyer Günleri Etkinlik Rehberi",
    description:
      "Gelecek ay düzenlenecek olan iş ve staj fuarına katılacak firmaların listesi ve etkinlik takvimi açıklandı.",
    href: "#",
    image: "/cards_samples/card_11.jpg",
  },
  {
    id: 27,
    newsType: "news",
    date: "24 Haziran 2023",
    title: "Yıl Sonu Sanat Konseri",
    description:
      "Müzik topluluğumuzun klasik batı müziği ve çok sesli koro eserlerinden oluşan konseri büyük beğeni topladı.",
    href: "#",
    image: "/cards_samples/card_12.jpg",
  },
  {
    id: 28,
    newsType: "mobility",
    date: "15 Haziran 2023",
    title: "Portekiz Okyanus Araştırmaları Projesi",
    description:
      "Deniz biyolojisi ekibimiz, Atlantik kıyılarında mikroplastik kirliliğini ölçmek üzere Lizbon'a uçtu.",
    href: "#",
    image: "/cards_samples/card_13.jpg",
  },
  {
    id: 29,
    newsType: "dissemination",
    date: "09 Haziran 2023",
    title: "Sağlıklı Yaşam ve Beslenme Yayını",
    description:
      "Sağlık personeli rehberliğinde hazırlanan 'Gençlerde Doğru Beslenme Alışkanlıkları' broşürü dağıtıldı.",
    href: "#",
    image: "/cards_samples/card_14.jpg",
  },
  {
    id: 30,
    newsType: "news",
    date: "01 Haziran 2023",
    title: "Mezuniyet Töreni Gururu",
    description:
      "Dönem birincilerimizin konuşmaları ve kep atma seremonisi eşliğinde bir mezuniyet dönemini daha geride bıraktık.",
    href: "#",
    image: "/cards_samples/card_15.jpg",
  },
  {
    id: 31,
    newsType: "mobility",
    date: "22 Mayıs 2023",
    title: "Yunanistan Arkeoloji Kampı",
    description:
      "Tarih bölümü öğrencilerimiz Akropolis ve çevresindeki kazı alanlarında yürütülen yaz okuluna katılıyor.",
    href: "#",
    image: "/cards_samples/card_16.jpg",
  },
  {
    id: 32,
    newsType: "dissemination",
    date: "14 Mayıs 2023",
    title: "Engelsiz Yaşam Teknolojileri Sergisi",
    description:
      "Görme ve işitme engelli bireylerin günlük hayatını kolaylaştıran öğrenci tasarımı prototipler sergilendi.",
    href: "#",
    image: "/cards_samples/card_01.jpg",
  },
  {
    id: 33,
    newsType: "news",
    date: "07 Mayıs 2023",
    title: "Veri Bilimi Maratonu Başlıyor",
    description:
      "Büyük veri analizi ve tahmine dayalı modelleme üzerine 48 saat sürecek olan ödüllü hackathon maratonu başladı.",
    href: "#",
    image: "/cards_samples/card_02.jpg",
  },
  {
    id: 34,
    newsType: "mobility",
    date: "30 Nisan 2023",
    title: "Çek Cumhuriyeti Dijital Dönüşüm Semineri",
    description:
      "Kurum yöneticilerimiz bulut bilişim ve veri güvenliği entegrasyonu paneli için Prag'da temaslarda bulundu.",
    href: "#",
    image: "/cards_samples/card_03.jpg",
  },
  {
    id: 35,
    newsType: "dissemination",
    date: "21 Nisan 2023",
    title: "Çevre ve Orman Koruma Bülteni",
    description:
      "Ağaçlandırma çalışmalarımızın 5 yıllık gelişim grafiğini ve karbon ayak izi azalım raporunu yayınladık.",
    href: "#",
    image: "/cards_samples/card_04.jpg",
  },
  {
    id: 36,
    newsType: "news",
    date: "12 Nisan 2023",
    title: "Tiyatro Kulübünün Prömiyeri Yapıldı",
    description:
      "Gönüllü tiyatro ekibimizin sahneye koyduğu dönem oyunu salonu tamamen dolduran seyircilerden tam not aldı.",
    href: "#",
    image: "/cards_samples/card_05.jpg",
  },
  {
    id: 37,
    newsType: "mobility",
    date: "04 Nisan 2023",
    title: "Belçika AB Kurumları Ziyareti",
    description:
      "Uluslararası İlişkiler kulübümüz, Avrupa Parlamentosu simülasyon eğitimine katılmak üzere Brüksel'e ulaştı.",
    href: "#",
    image: "/cards_samples/card_06.jpg",
  },
  {
    id: 38,
    newsType: "dissemination",
    date: "28 Mart 2023",
    title: "Girişimcilik ve İnovasyon Zirvesi",
    description:
      "Kuluçka merkezimizden çıkan başarılı start-up hikayelerinin yer aldığı ilham verici video serisi yayında.",
    href: "#",
    image: "/cards_samples/card_07.jpg",
  },
  {
    id: 39,
    newsType: "news",
    date: "19 Mart 2023",
    title: "3D Yazıcı Laboratuvarı Genişletildi",
    description:
      "Endüstriyel parça üretimi ve hızlı prototipleme yapabilen yüksek hassasiyetli 3 yeni yazıcı envantere eklendi.",
    href: "#",
    image: "/cards_samples/card_08.jpg",
  },
  {
    id: 40,
    newsType: "mobility",
    date: "11 Mart 2023",
    title: "Avusturya Kış Sporları Eğitimi",
    description:
      "Spor akademisi ekibimiz, dağ arama kurtarma ve kış sports güvenliği eğitimi için Innsbruck'ta.",
    href: "#",
    image: "/cards_samples/card_09.jpg",
  },
  {
    id: 41,
    newsType: "dissemination",
    date: "03 Mart 2023",
    title: "Zorbalıkla Mücadele Veli Kılavuzu",
    description:
      "Rehberlik servisimiz tarafından ebeveynler için hazırlanan akran zorbalığı algılama ve önleme el kitabı basıldı.",
    href: "#",
    image: "/cards_samples/card_10.jpg",
  },
  {
    id: 42,
    newsType: "news",
    date: "22 Şubat 2023",
    title: "Satranç Turnuvası Şampiyonu Belli Oldu",
    description:
      "Geleneksel hale gelen kurumlar arası satranç turnuvasında zorlu maçların ardından birincilik kupası sahibini buldu.",
    href: "#",
    image: "/cards_samples/card_11.jpg",
  },
  {
    id: 43,
    newsType: "mobility",
    date: "14 Şubat 2023",
    title: "Macaristan STEM Eğitimi Metotları",
    description:
      "Matematik ve fen bilimleri zümresi öğretmenlerimiz Budapeşte'de düzenlenen STEM workshop çalıştayına katıldı.",
    href: "#",
    image: "/cards_samples/card_12.jpg",
  },
  {
    id: 44,
    newsType: "dissemination",
    date: "06 Şubat 2023",
    title: "Yenilenebilir Enerji Farkındalık Günü",
    description:
      "Güneş paneli tasarımı yapan öğrencilerin hazırladığı bilgilendirici infografik afişler panolardaki yerini aldı.",
    href: "#",
    image: "/cards_samples/card_13.jpg",
  },
  {
    id: 45,
    newsType: "news",
    date: "28 Ocak 2023",
    title: "Fotoğrafçılık Kulübü Şehir Gezileri",
    description:
      "Kursiyerlerimizin sokak fotoğrafçılığı temasıyla tarihi semtlerde çektiği en iyi kareler oylamaya açıldı.",
    href: "#",
    image: "/cards_samples/card_14.jpg",
  },
  {
    id: 46,
    newsType: "mobility",
    date: "18 Ocak 2023",
    title: "Romanya Sosyal Uyum Projesi",
    description:
      "Gönüllü ekibimiz, dezavantajlı çocuklara yönelik sanatsal etkinlikler düzenlemek üzere Bükreş'e gitti.",
    href: "#",
    image: "/cards_samples/card_15.jpg",
  },
  {
    id: 47,
    newsType: "dissemination",
    date: "10 Ocak 2023",
    title: "Yapay Zeka Destekli Tercüme Yazılımı",
    description:
      "Dil laboratuvarı tarafından geliştirilen gerçek zamanlı çeviri eklentisinin test aşaması raporları sunuldu.",
    href: "#",
    image: "/cards_samples/card_16.jpg",
  },
];

export default news;
