
// app/haberler/surdurulebilir-egitim-modelleri/page.tsx
// Next.js App Router page component

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Types
interface NewsItem {
  id: string;
  date: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  image: string;
}

// Sample data matching the image
const otherNews: NewsItem[] = [
  {
    id: "1",
    date: "28 ARALIK 2023",
    category: "HABER",
    categoryColor: "bg-blue-600",
    title: "Yazılım Atölyesi Kayıtları Açıldı",
    description: "Sanat ve tasarım odaklı projelerimizin sergileneceği etkinlik için geri sayım başladı.",
    image: "/images/news-1.jpg",
  },
  {
    id: "2",
    date: "20 ARALIK 2023",
    category: "HABER",
    categoryColor: "bg-blue-600",
    title: "Fen Projeleri Yarışmasında Birincilik",
    description: "Öğrencilerimiz sürdürülebilir enerji projeleriyle il genelinde düzenlenen yarışmada birinci oldu.",
    image: "/images/news-2.jpg",
  },
  {
    id: "3",
    date: "15 ARALIK 2023",
    category: "HAREKETLİLİK",
    categoryColor: "bg-amber-500",
    title: "Milli Robotik Ligi Hazırlıkları",
    description: "Robotik takımımız, önümüzdeki ay düzenlenecek olan milli lig müsabakaları için yoğun bir tempoyla çalışıyor.",
    image: "/images/news-3.jpg",
  },
  {
    id: "4",
    date: "10 ARALIK 2023",
    category: "YAYGINLAŞTIRMA",
    categoryColor: "bg-emerald-500",
    title: "Geri Dönüşüm Kampanyası Başladı",
    description: "Okul genelinde başlatılan yeni geri dönüşüm projesiyle sıfır atık hedeflerimize bir adım daha yaklaşıyoruz.",
    image: "/images/news-4.jpg",
  },
  {
    id: "5",
    date: "05 ARALIK 2023",
    category: "HAREKETLİLİK",
    categoryColor: "bg-amber-500",
    title: "Mezunlarla Kariyer Söyleşileri",
    description: "Okulumuzdan mezun olup başarılı kariyerlere sahip isimler, tecrübelerini paylaşmak için öğrencilerle buluşuyor.",
    image: "/images/news-5.jpg",
  },
  {
    id: "6",
    date: "22 MAYIS 2024",
    category: "YAYGINLAŞTIRMA",
    categoryColor: "bg-emerald-500",
    title: "Romanya'da Kültürlerarası Etkileşim",
    description: "Öğrenci değişim programımız kapsamında Romanya ziyaretimiz sanat odaklı atölyelerle devam ediyor.",
    image: "/images/news-6.jpg",
  },
];

// Reusable components
function CategoryBadge({ category, color }: { category: string; color: string }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md ${color}`}
    >
      {category}
    </span>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex gap-4 group cursor-pointer">
      <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            {item.date}
          </span>
          <CategoryBadge category={item.category} color={item.categoryColor} />
        </div>
        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function ContentPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wider font-medium">
            <li>
              <Link href="/haberler" className="hover:text-blue-700 transition-colors">
                Haberler
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-semibold">
              Sürdürülebilir Eğitim Modelleri
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Date & Category */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-blue-700"></div>
                <time className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
                  12 OCAK 2024
                </time>
              </div>
            </div>

            <CategoryBadge category="HABER" color="bg-blue-600" />

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Sürdürülebilir Eğitim Modelleri
            </h1>

            {/* Highlight Box */}
            <div className="border-l-4 border-blue-700 bg-gray-50/50 p-5 mb-8 rounded-r-lg">
              <p className="text-base text-gray-800 leading-relaxed">
                Rayfel Projeler kapsamında gelenekselleşen Bilim Şenliği için bu yılki başvuru süreci resmen açılmıştır. Tüm öğrencilerimizi yenilikçi fikirleriyle geleceği şekillendirmeye davet ediyoruz.
              </p>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden rounded-xl">
              <Image
                src="/images/main-news.jpg"
                alt="Sürdürülebilir Eğitim Modelleri"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sürdürülebilir Eğitim Modelleri Nerelerde Kullanılabilir
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Akademik mükemmelliyet ve inovasyon odaklı eğitim vizyonumuzun bir parçası olan Bilim Şenliği, öğrencilerimizin teorik bilgilerini pratiğe dökme, problem çözme yeteneklerini geliştirme ve bilimsel metodolojiyi içselleştirme fırsatı sunmaktadır. Bu yılki temamız "Sürdürülebilir Teknoloji ve Toplumsal Fayda" olarak belirlenmiştir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Projeler bireysel veya en fazla 3 kişiden oluşan gruplar halinde sunulabilir. Değerlendirme komitemiz projeleri; özgünlük, uygulanabilirlik, metodolojik doğruluk ve sunum kalitesi olmak üzere dört ana başlıkta inceleyecektir. Başvuruların eksiksiz bir proje taslağı ve ön rapor ile birlikte yapılması gerekmektedir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Öğrencilerimiz danışman öğretmenlerinden rehberlik alabilir ve okul laboratuvarlarımızı proje hazırlık süreci boyunca aktif olarak kullanabilirler. Detaylı teknik şartnameye okul yönetim sistemimiz üzerinden ulaşabilirsiniz. Başarılar dileriz!
              </p>
            </article>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Back Button */}
            <Link
              href="/haberler"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Geri Dön
            </Link>
          </div>

          {/* Sidebar - Other News */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-gray-900">Diğer Haberler</h2>
                <div className="flex-1 h-0.5 bg-gray-200"></div>
              </div>

              {/* News List */}
              <div className="space-y-6">
                {otherNews.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
