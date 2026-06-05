import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ArrowRight } from 'lucide-react';

import { Link } from '@/src/i18n/navigation';

import { Button } from '../ui/button';

import HeroPic from '@/public/hero_pic.jpg';

export default function Hero() {
    const t = useTranslations('HeroSection');
    const sectionSize = 'h-72 w-full sm:h-96 md:h-120 lg:h-144';

    return (
        <section
            className={`relative z-15 flex flex-col items-center ${sectionSize}`}
        >
            {/* Hero Image */}
            <div className="relative z-5 size-full overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0">
                    <div className={`relative ${sectionSize}`}>
                        <Image
                            src={HeroPic}
                            alt={t('imageAltText')}
                            fill
                            className="rounded-b-xl object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            loading="eager"
                            preload
                        />
                    </div>

                    {/* Gradient overlay*/}
                    <div className="absolute inset-0 z-3 bg-linear-to-r from-black/80 via-black/55 to-black/20" />
                </div>

                {/* Content */}
                <div className="absolute z-10 flex h-full w-full flex-col gap-4 p-8 max-[400px]:p-4 sm:w-[90%] sm:max-w-160 sm:gap-6 sm:pt-16 sm:pl-9 md:pt-18 md:pl-12">
                    <h1 className="text-bright-header font-heading text-2xl leading-[1.2] font-bold drop-shadow-sm sm:text-3xl md:text-4xl lg:text-5xl">
                        {t('header')}
                    </h1>

                    <p className="text-bright-header/90 w-full text-sm leading-relaxed sm:w-[75%] md:text-base">
                        {t('content')}
                    </p>

                    <Button
                        asChild
                        className="w-fit gap-2 px-5 py-2.5 text-sm font-semibold md:px-6 md:py-3 md:text-base"
                    >
                        <Link href="/about">
                            <span>{t('linkText')}</span>
                            <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>

                {/* Bottom fade */}
                <div className="absolute right-0 bottom-0 left-0 z-4 h-20 bg-linear-to-t from-white/90 to-transparent dark:from-black/60" />
            </div>
        </section>
    );
}
