'use client';

import { useTranslations } from 'next-intl';

import { ArrowLeft } from 'lucide-react';

import { useRouter } from '@/src/i18n/navigation';

export function ArrowLinkBack() {
    const router = useRouter();
    const t = useTranslations('ArrowLinkBack');
    return (
        <div
            onClick={() => router.back()}
            className="text-primary hover:text-primary/75 mt-auto flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
        >
            <ArrowLeft size={14} />
            <span>{t('btnText')}</span>
        </div>
    );
}
