import Image from 'next/image';
// Sayfa dışına link verildiği için next-intl Link kullanımına gerek yok
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// 1. Lucide ikonlarının tamamını Icons takma adıyla import ediyoruz
import { icons } from 'lucide-react';

import footer_data from '@/sample_data/footer';

import logo from '@/public/logo_rayfel.png';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-background-gray mt-18 rounded-t-md">
            {/* Main Footer */}
            <div className="mx-auto max-w-5xl px-8 py-12">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Col 1 — Logo & Description */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="Rayfel Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <span className="text-foreground text-base font-bold">
                                {t('rayfelProjectsHeader')}
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {t('rayfelProjectsContent')}
                        </p>
                    </div>

                    {/* Col 2 — Hızlı Erişim */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground text-sm font-bold">
                            {t('quickLinks')}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {footer_data.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary text-muted-foreground text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Kurumlar */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground text-sm font-bold">
                            {t('institutions')}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {footer_data.institutions.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Bizi Takip Edin */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground text-sm font-bold">
                            {t('followUs')}
                        </h4>
                        <div className="flex items-center gap-2">
                            {footer_data.socialLinks.map(
                                ({ iconName, href, label }) => {
                                    // Tipi en başta kısıtladığımız için TypeScript burada hata vermez, tamamen güvenli kabul eder.
                                    const IconComponent = icons[iconName];

                                    return (
                                        <Link
                                            key={label}
                                            href={href}
                                            aria-label={label}
                                            className="text-muted-foreground hover:text-primary flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            {IconComponent ? (
                                                <IconComponent size={16} />
                                            ) : null}
                                        </Link>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-800" />

            {/* Bottom Bar */}
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row">
                <p className="text-muted-foreground text-sm">
                    {t('copyRight')}
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    {t('rayfelHighSchool')}
                </p>
            </div>
        </footer>
    );
}
