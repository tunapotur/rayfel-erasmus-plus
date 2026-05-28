import HomeSectionAbout from "@/components/home/section/HomeSectionAbout";
import { setRequestLocale } from "next-intl/server";
import { LocalePageProps } from "@/lib/types/DataTypes";

export default async function AboutPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mt-12 mb-auto min-h-screen">
      <HomeSectionAbout />
    </div>
  );
}
