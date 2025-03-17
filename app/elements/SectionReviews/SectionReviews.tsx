import Image from "next/image";

const SectionReviews = () => {
    return (
        <div className="max-w-[1400px] h-full flex flex-col gap-14 content-center justify-center items-center">
            <h3 className="text-3xl font-light">Što kažu naši gosti</h3>
            <div className="flex gap-10">
                <Image src="/images/bookingRating.png" width={250} height={250} alt="reviews" className="object-contain" />
            </div>
            <div>

            </div>
        </div>
    );
}

export default SectionReviews;