import GalleryData from '@/app/assets/GalleryData'
import GalleryItem from "./GalleryItem";

const SectionGallery = () => {

    console.log(GalleryData)

    return (
        <div className="max-w-[1400px] flex flex-col gap-14 content-center justify-center items-center">
            <h3 className="text-3xl font-light">Galerija</h3>
            <div className="w-full h-128 grid grid-cols-3 grid-rows-2 gap-10">
                {GalleryData.map((gallery) => (
                    <GalleryItem key={gallery.id} data={gallery} />
                ))}
            </div>
        </div>
    );
};

export default SectionGallery;
