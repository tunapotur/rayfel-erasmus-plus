'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

type ImageFile = {
    id: string;
    name: string;
    alt: string;
    path: string;
};

type ImageCarouselModalProps = {
    images: ImageFile[];
    startIndex: number;
    open: boolean;
    onClose: () => void;
};

export function ImageCarouselModal({
    images,
    startIndex,
    open,
    onClose,
}: ImageCarouselModalProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(startIndex);

    // Carousel API hazır olduğunda startIndex'e git
    useEffect(() => {
        if (!api) return;
        api.scrollTo(startIndex, true);
    }, [api, startIndex]);

    // Slide değişimini takip et
    useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        api.on('select', onSelect);
        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    // ESC tuşu ile kapat
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose],
    );

    useEffect(() => {
        if (!open) return;
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [open, handleKeyDown]);

    if (!open) return null;

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Modal içeriği – tıklama propagasyonunu durdur */}
            <div
                className="relative flex h-full w-full flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Üst bar */}
                <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between px-4 py-3">
                    <span className="text-sm font-medium text-white/80">
                        {current + 1} / {images.length}
                    </span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="size-9 text-white hover:bg-white/10 hover:text-white"
                    >
                        <X className="size-5" />
                        <span className="sr-only">Kapat</span>
                    </Button>
                </div>

                {/* Carousel */}
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'center',
                        loop: images.length > 1,
                        startIndex,
                    }}
                    className="w-full max-w-5xl px-12"
                >
                    <CarouselContent>
                        {images.map((image) => (
                            <CarouselItem key={image.id}>
                                <div className="flex flex-col items-center gap-3 px-2">
                                    {/* Resim */}
                                    <div className="relative h-[calc(100vh-10rem)] w-full max-w-4xl">
                                        <Image
                                            src={image.path}
                                            alt={image.alt || image.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                            priority
                                        />
                                    </div>

                                    {/* Alt metin */}
                                    {image.alt && (
                                        <p className="max-w-lg text-center text-sm text-white/60">
                                            {image.alt}
                                        </p>
                                    )}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {images.length > 1 && (
                        <>
                            <CarouselPrevious className="left-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
                            <CarouselNext className="right-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
                        </>
                    )}
                </Carousel>

                {/* Thumbnail dot göstergesi */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => api?.scrollTo(i)}
                                className={`h-1.5 rounded-full transition-all duration-200 ${
                                    i === current
                                        ? 'w-5 bg-white'
                                        : 'w-1.5 bg-white/40 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
