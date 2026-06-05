import Image from 'next/image';

import { Link } from '@/src/i18n/navigation';

import logo from '@/public/logo_rayfel.png';

export function Logo() {
    return (
        <Link href="/" className="flex shrink-0 items-center gap-2">
            {/* image */}
            <div className="relative flex size-3.5 items-center justify-center sm:size-7">
                <Image
                    src={logo}
                    alt="Rayfel Logo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                />
            </div>

            {/* text */}
            <div className="font-heading flex items-baseline gap-1 text-sm font-bold leading-none sm:flex-col sm:gap-0 sm:text-base">
                <span className="text-foreground">Rayfel</span>
                <span className="text-primary">Erasmus+</span>
            </div>
        </Link>
    );
}
