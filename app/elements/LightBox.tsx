'use client'

import React, { useContext, useMemo } from 'react'
import { MainContext } from '../assets/Context/MainContext'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import GalleryData from '../assets/GalleryData';

export default function LightBox() {
    const { openLightBox, setOpenLightBox, currentSlideIndex,
        setCurrentSlideIndex } = useContext(MainContext);

    const slides = useMemo(() => {
        return GalleryData.flatMap(gallery =>
            gallery.value.map(item => ({
                src: item.src,
                description: gallery.about[0].hr
            }))
        );
    }, []);

    return (
        <>
            <Lightbox
                open={openLightBox}
                close={() => {
                    setOpenLightBox(false)
                    setCurrentSlideIndex(0)
                }}
                slides={slides}
                plugins={[Captions]}
                captions={{ descriptionTextAlign: "center" }}
                index={currentSlideIndex}
            />
        </>
    )
}
