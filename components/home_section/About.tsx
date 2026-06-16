import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CheckCircle2 } from 'lucide-react';

import Wrapper from './Wrapper';

import about_section from '@/data/about_section';
import { getAllAnnouncements } from '@/data/contentsDataOperations';

import about from '@/public/about.png';

export default function About({
    hideSectionLink = false,
}: {
    hideSectionLink?: boolean;
}) {
    const t = useTranslations('AboutSection');

    const announcements = getAllAnnouncements().length === 0 ? true : false;

    return (
        <Wrapper
            name={t('name')}
            header={t('header')}
            linkText={t('linkText')}
            href="/about"
            hidePageLink={hideSectionLink}
            hasBackground={announcements}
        >
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                {/* Content */}
                <div className="order-last flex flex-col gap-5 md:order-first md:w-2/3">
                    {/* Explanation paragraph */}
                    <p className="text-muted-foreground text-base leading-[1.75]">
                        {about_section.description}
                    </p>

                    {/* List */}
                    <ul className="flex flex-col gap-3">
                        {about_section.highlights.map((item, index) => (
                            <li
                                key={index}
                                className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed"
                            >
                                <CheckCircle2
                                    className="text-primary mt-0.5 shrink-0"
                                    size={16}
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image */}
                <Image
                    src={about}
                    alt={t('imageAltText')}
                    width={320}
                    height={240}
                    className="order-first rounded-2xl shadow-lg md:order-last"
                    style={{
                        width: '24rem',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                    sizes="(max-width: 768px) 100vw, 384px"
                />
            </div>
        </Wrapper>
    );
}
