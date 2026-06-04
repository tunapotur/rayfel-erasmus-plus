import { setRequestLocale } from 'next-intl/server';
import type { LocalePageProps } from '@/lib/types/DataTypes';
import {
    About,
    Announcements,
    Hero,
    InfoCards,
    News,
} from '@/components/home_section';

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
                <About hideSectionLink={false} />
                <Announcements />
                <News />
            </div>
        </div>
    );
}
