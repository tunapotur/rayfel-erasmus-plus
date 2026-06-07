import { useTranslations } from 'next-intl';

import { Link } from '@/src/i18n/navigation';

import GoBackButton from '@/components/GoBackButton';
import { Button } from '@/components/ui/button';

export default function UnderConstruction() {
    const t = useTranslations('UnderConstructionPage');

    return (
        <main className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
            {/* Decorative background grid — not-found.tsx ile aynı stil */}
            <div
                aria-hidden="true"
                className="not-found-grid pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
                    backgroundSize: '72px 72px',
                    maskImage:
                        'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
                }}
            />

            {/* Amber/turuncu glow — yapım temasına uygun */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 size-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/15"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Büyük arka plan metni */}
                <p
                    className="font-heading text-foreground/6 leading-none font-black tracking-tighter select-none"
                    style={{ fontSize: 'clamp(5rem, 18vw, 12rem)' }}
                    aria-hidden="true"
                >
                    {t('bgText')}
                </p>

                {/* ikon + başlık */}
                <div className="-mt-[clamp(3.5rem,10vw,7rem)] flex flex-col items-center gap-4">
                    {/* Çekiç + inşaat ikonu */}
                    <span
                        className="border-border bg-muted flex h-14 w-14 items-center justify-center rounded-2xl border text-amber-500 shadow-sm dark:text-amber-400"
                        aria-hidden="true"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                            <path d="M17.64 15 22 10.64" />
                            <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 5.6a5.009 5.009 0 0 0-6.22.44L12 8h3l2.02 2.02c.57.57.87 1.36.85 2.17l-.02.82" />
                        </svg>
                    </span>

                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-heading text-foreground text-2xl font-bold tracking-tight">
                            {t('header')}
                        </h1>
                        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                            {t('text')}
                        </p>
                    </div>
                </div>

                {/* Aksiyonlar */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <Button asChild>
                        <Link href="/">{t('btnGoHome')}</Link>
                    </Button>
                    <GoBackButton />
                </div>
            </div>
        </main>
    );
}
