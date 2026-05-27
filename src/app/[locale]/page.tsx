import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/homepage/Hero";
import InfoCards from "@/components/homepage/InfoCards";
import About from "@/components/homepage/About";
import Announcements from "@/components/homepage/Announcements";
import News from "@/components/homepage/News";
import { LocalePageProps } from "@/lib/types/DataTypes";

// Statik Render edilecek Async HomePage Bileşeni
export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  // ÇOK ÖNEMLİ: Üst layout'ta tanımladığın generateStaticParams ile bu sayfanın
  // eşleşmesi ve build anında statikleştirilmesi (Static Rendering) için bu metot şarttır.
  setRequestLocale(locale);

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="mt-8 flex flex-col gap-8">
        <InfoCards />
        <About />
        <Announcements />
        <News />
      </div>
    </div>
  );
}
