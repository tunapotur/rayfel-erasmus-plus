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
        <h2 className="text-primary text-base font-bold tracking-widest uppercase">
            {text}
        </h2>
    );
}

function SectionHeader({ text }: { text: string }) {
    return (
        <h3 className="text-3xl leading-tight font-bold text-gray-800 dark:text-gray-200">
            {text}
        </h3>
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
            className={`flex flex-col gap-6 px-4 py-6 lg:rounded-md ${hasBackground ? 'bg-background-gray' : ''}`}
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
