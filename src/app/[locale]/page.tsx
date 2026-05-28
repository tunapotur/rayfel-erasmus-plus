import { setRequestLocale } from "next-intl/server";
import HomeSectionHero from "@/components/home/section/HomeSectionHero";
import HomeSectionInfoCards from "@/components/home/section/HomeSectionInfoCards";
import HomeSectionAbout from "@/components/home/section/HomeSectionAbout";
import HomeSectionAnnouncements from "@/components/home/section/HomeSectionAnnouncements";
import HomeSectionNews from "@/components/home/section/HomeSectionNews";
import { LocalePageProps } from "@/lib/types/DataTypes";

// Statik Render edilecek Async HomePage Bileşeni
export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  // ÇOK ÖNEMLİ: Üst layout'ta tanımladığın generateStaticParams ile bu sayfanın
  // eşleşmesi ve build anında statikleştirilmesi (Static Rendering) için bu metot şarttır.
  setRequestLocale(locale);

  return (
    <div className="flex flex-col">
      <HomeSectionHero />
      <div className="mt-8 flex flex-col gap-8">
        <HomeSectionInfoCards />
        <HomeSectionAbout />
        <HomeSectionAnnouncements />
        <HomeSectionNews />
      </div>
    </div>
  );
}
