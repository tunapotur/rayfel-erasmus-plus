import { ReactNode } from 'react';

import type { AppHref } from '@/lib/types/DataTypes';

import ArrowLink from '../ArrowLink';

interface SectionProps {
    children: ReactNode;
    name: string;
    header: string;
    linkText: string;
    href: AppHref;
    hasBackground?: boolean;
    hidePageLink?: boolean;
}

function SectionName({ text }: { text: string }) {
    return (
        <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
            {text}
        </p>
    );
}

function SectionHeader({ text }: { text: string }) {
    return (
        <h2 className="font-heading text-foreground text-2xl leading-snug font-bold sm:text-3xl">
            {text}
        </h2>
    );
}

export default function Wrapper({
    children,
    name,
    header,
    href,
    linkText,
    hasBackground,
    hidePageLink,
}: SectionProps) {
    return (
        <section
            className={`flex flex-col gap-5 px-4 py-8 lg:rounded-md ${hasBackground ? 'bg-background-gray' : ''}`}
        >
            <div className="flex flex-row items-center justify-between">
                <SectionName text={name} />
                {!hidePageLink && <ArrowLink text={linkText} href={href} />}
            </div>

            <SectionHeader text={header} />
            {children}
        </section>
    );
}
