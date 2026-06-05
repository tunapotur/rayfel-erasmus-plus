'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/src/i18n/navigation';

import { Button } from '@/components/ui/button';

import { useNavbarAction } from './NavbarContext';

export function AuthButtons() {
    const t = useTranslations('AuthButtons');
    const { setMobilMenuOpen } = useNavbarAction();

    return (
        <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:gap-2 lg:flex-row">
            <Button
                variant="outline"
                asChild
                className="grow"
                onClick={() => setMobilMenuOpen(false)}
            >
                <Link href="/login">{t('login')}</Link>
            </Button>

            <Button
                asChild
                className="grow"
                onClick={() => setMobilMenuOpen(false)}
            >
                <Link href="/signup">{t('signup')}</Link>
            </Button>
        </div>
    );
}
