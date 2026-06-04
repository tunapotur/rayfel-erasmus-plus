import { setRequestLocale } from 'next-intl/server';
import type { LocalePageProps } from '@/lib/types/DataTypes';
import { About } from '@/components/home_section';

export default async function AboutPage({ params }: LocalePageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="mt-12 mb-auto min-h-screen">
            <About hideSectionLink={true} />
        </div>
    );
}
