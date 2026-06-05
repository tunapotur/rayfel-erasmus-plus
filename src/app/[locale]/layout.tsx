import { Inter, Lora } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { routing } from '@/src/i18n/routing';

import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/providers/theme-provider';

// Sans-serif: body, UI, navigation için
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

// Serif: makale başlıkları, hero, section header'ları için
const lora = Lora({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
    props: Omit<LayoutProps<'/[locale]'>, 'children'>,
) {
    const { locale } = await props.params;

    const t = await getTranslations({
        locale: locale as Locale,
        namespace: 'LocaleLayout',
    });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function LocaleLayout({
    children,
    params,
}: LayoutProps<'/[locale]'>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html
            lang={locale}
            suppressHydrationWarning
            className={cn(
                'h-full',
                'antialiased',
                inter.variable,
                lora.variable,
            )}
        >
            <body className="bg-background flex flex-col lg:items-center">
                <NextIntlClientProvider locale={locale}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="flex min-h-screen max-w-5xl flex-col justify-between">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
