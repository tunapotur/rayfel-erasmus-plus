'use client';

import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/src/i18n/navigation';

import { useNavbarAction } from './NavbarContext';

export function Navigation() {
    const t = useTranslations('NavLinks');
    const pathname = usePathname();
    const { setMobilMenuOpen } = useNavbarAction();

    const navLinks = [
        { label: t('home'), href: '/' },
        { label: t('about'), href: '/about' },
        // { label: t('announcements'), href: '/announcements' },
        { label: t('news'), href: '/news' },
        // { label: t("eTwinning"), href: "/etwinning" },
    ] as const;

    return (
        <nav className="flex flex-col gap-1 px-2 py-4 sm:grid sm:grid-cols-3 sm:items-center md:grid-cols-4 lg:flex lg:flex-row lg:gap-0.5">
            {navLinks.map((link) => {
                const isActive =
                    link.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`rounded-md px-3 py-1.5 text-sm transition-colors sm:max-w-28 sm:truncate sm:text-center ${
                            isActive
                                ? 'text-primary bg-primary/10 font-semibold'
                                : 'text-muted-foreground hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700/40 dark:hover:text-gray-100'
                        }`}
                        onClick={() => setMobilMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
