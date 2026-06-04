'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/src/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function GoBackButton() {
    const t = useTranslations('NotFoundPage');
    const router = useRouter();

    return (
        <Button variant="outline" onClick={() => router.back()}>
            {t('btnGoBack')}
        </Button>
    );
}
