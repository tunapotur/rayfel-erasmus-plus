import { Link } from '@/src/i18n/navigation'; // next/link → next-intl Link
import type { ComponentProps } from 'react';
import { ArrowRight } from 'lucide-react';

type AppHref = ComponentProps<typeof Link>['href'];

export default function ArrowLink({
    text,
    href,
}: {
    text: string;
    href: AppHref;
}) {
    return (
        <Link
            href={href}
            className="text-primary hover:text-primary/75 mt-auto flex items-center gap-1.5 text-sm font-medium transition-colors"
        >
            <span>{text}</span>
            <ArrowRight size={14} />
        </Link>
    );
}
