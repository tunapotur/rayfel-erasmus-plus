import Image from 'next/image';

import { Link } from '@/src/i18n/navigation';

import logo from '@/public/logo_rayfel.png';

export function Logo() {
    return (
        <Link href="/" className="flex shrink-0 items-center gap-1">
            {/* image */}
            <div className="relative flex size-3.5 items-center justify-center sm:size-7.5">
                <Image
                    src={logo}
                    alt="Rayfel Logo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                />
            </div>

            {/* text */}
            <div className="flex items-start gap-1 leading-tight font-semibold sm:flex-col sm:gap-0">
                <div>Rayfel</div>
                <div className="text-primary font-bold dark:text-blue-700">
                    Erasmus+
                </div>
            </div>
        </Link>
    );
}
