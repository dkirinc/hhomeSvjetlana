'use client'

import React from 'react';
import { GalleryType } from '@/app/types/GalleryType';
import Image from 'next/image';
import { useContext } from 'react';
import { MainContext } from '@/app/assets/Context/MainContext';
import GalleryData from '@/app/assets/GalleryData';

interface GalleryProps {
    data: GalleryType;
}

function GalleryItem({ data }: GalleryProps) {
    const { setOpenLightBox, setCurrentSlideIndex } = useContext(MainContext);

    if (!data.value || data.value.length === 0) {
        return null;
    }

    const handleClick = () => {
        // Pronalazak početnog indeksa za trenutnu galeriju
        let startIndex = 0;
        for (const gallery of GalleryData) {
            if (gallery.id === data.id) break;
            startIndex += gallery.value.length;
        }

        setCurrentSlideIndex(startIndex); // Postavi indeks na prvu sliku galerije
        setOpenLightBox(true);
    };

    const firstItem = data.value[0];

    return (
        <div
            key={firstItem.id}
            className={`w-full h-full relative ${data.id === 5 ? 'col-span-2' : ''} transition duration-300 hover:scale-105`}
            onClick={handleClick}
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
