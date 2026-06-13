'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Maximize2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import { ImageCarouselModal } from './ImageCarouselModal';

type ImageFile = {
    id: string;
    name: string;
    alt: string;
    path: string;
};

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function isImageFile(file: ImageFile): boolean {
    const lower = file.name.toLowerCase();
    return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export function ImageCarousel({ files }: { files: ImageFile[] }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const images = files.filter(isImageFile);

    if (images.length === 0) return null;

    const handleOpenModal = (index: number) => {
        setStartIndex(index);
        setModalOpen(true);
    };

    return (
        <>
            <div className="mb-8">
                {/* Header */}
                <div className="mb-3 flex items-center justify-between">
                    <span className="text-muted-foreground text-xs font-semibold tracking-[0.1em] uppercase">
                        Fotoğraflar ({images.length})
                    </span>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground h-7 gap-1.5 px-2 text-xs"
                        onClick={() => handleOpenModal(0)}
                    >
                        <Maximize2 className="size-3.5" />
                        Tam Ekran Göster
                    </Button>
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{ align: 'start', loop: images.length > 1 }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-3">
                        {images.map((image, index) => (
                            <CarouselItem
                                key={image.id}
                                className={
                                    images.length === 1
                                        ? 'pl-3'
                                        : 'pl-3 sm:basis-1/2 lg:basis-1/2'
                                }
                            >
                                <button
                                    type="button"
                                    onClick={() => handleOpenModal(index)}
                                    className="group focus-visible:ring-ring relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2"
                                >
                                    {/* Aspect ratio wrapper */}
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src={image.path}
                                            alt={image.alt || image.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/20">
                                            <Maximize2 className="size-6 text-white opacity-0 drop-shadow transition-opacity duration-200 group-hover:opacity-100" />
                                        </div>
                                    </div>

                                    {/* Alt text */}
                                    {image.alt && (
                                        <p className="text-muted-foreground mt-1.5 truncate px-0.5 text-left text-xs">
                                            {image.alt}
                                        </p>
                                    )}
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {images.length > 1 && (
                        <>
                            <CarouselPrevious className="-left-4 sm:-left-5" />
                            <CarouselNext className="-right-4 sm:-right-5" />
                        </>
                    )}
                </Carousel>
            </div>

            {/* Modal */}
            <ImageCarouselModal
                images={images}
                startIndex={startIndex}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}
