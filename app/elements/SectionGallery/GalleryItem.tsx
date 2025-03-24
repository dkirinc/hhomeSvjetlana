import React from 'react';
import { GalleryType } from '@/app/types/GalleryType';
import Image from 'next/image';

interface GalleryProps {
    data: GalleryType;
}

function GalleryItem({ data }: GalleryProps) {


    if (!data.value || data.value.length === 0) {
        return null;
    }

    const firstItem = data.value[0];

    return (
        <div
            key={firstItem.id}
            className={`w-full h-full relative ${data.id === 5 ? 'col-span-2' : ''}`}
        >
            <Image
                src={firstItem.src}
                alt={data.about[0]?.hr || 'Image'}
                className="object-cover w-full h-full"
                width={600}
                height={600}
            />
            <div className="absolute top-0 left-0 w-full h-full text-white flex justify-between items-end p-4">
                <h3 className="text-3xl font-semibold">{data.about[0]?.hr || 'Unknown'}</h3>
                <h3 className="text-3xl font-semibold">{data.value.length}</h3>
            </div>
        </div>

    );
}

export default GalleryItem;
