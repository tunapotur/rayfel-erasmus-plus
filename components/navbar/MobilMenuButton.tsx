'use client';

import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useNavbarAction } from './NavbarContext';

export function MobilMenuButton() {
    const { isMobilMenuOpen, setMobilMenuOpen } = useNavbarAction();

    return (
        <Button
            variant={'outline'}
            size="icon"
            className="ml-4"
            onClick={() => setMobilMenuOpen(!isMobilMenuOpen)}
        >
            {isMobilMenuOpen ? <X /> : <Menu />}
        </Button>
    );
}
