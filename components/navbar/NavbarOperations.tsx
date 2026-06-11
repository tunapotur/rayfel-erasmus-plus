'use client';

import { useOutsideClick } from '@/lib/useOutsideClick';

// import { AuthButtons } from './AuthButtons';
import { LocalModeButtons } from './LocalModeButtons';
import { Logo } from './Logo';
import { MobilMenuButton } from './MobilMenuButton';
import { useNavbarAction } from './NavbarContext';
import { NavbarOverlay } from './NavbarOverlay';
import { Navigation } from './Navigation';

export function NavbarOperations() {
    const { isMobilMenuOpen, setMobilMenuOpen } = useNavbarAction();
    const ref = useOutsideClick(() => setMobilMenuOpen(false));

    return (
        <>
            <header
                ref={ref}
                className="bg-background sticky top-0 z-50 w-full shadow-sm sm:px-4 lg:min-w-5xl"
            >
                {/* Web page menu */}
                <div className="hidden min-h-18 items-center justify-between gap-1 sm:flex sm:py-3 lg:py-0">
                    <Logo />
                    <Navigation />

                    <div className="flex items-center gap-2">
                        <LocalModeButtons />
                        {/* <AuthButtons /> */}
                    </div>
                </div>

                {/* Mobil Menu */}
                <div className="mx-auto px-4 sm:hidden">
                    <div className="flex min-h-18 flex-row justify-between">
                        <Logo />

                        <div className="flex items-center">
                            <LocalModeButtons />
                            <MobilMenuButton />
                        </div>
                    </div>

                    {isMobilMenuOpen && (
                        <div className="bg-background absolute right-0 left-0 flex flex-col px-4 pb-4">
                            <div className="flex flex-col border-t border-gray-200 dark:border-gray-800">
                                <Navigation />
                                {/* <AuthButtons /> */}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {isMobilMenuOpen && <NavbarOverlay />}
        </>
    );
}
