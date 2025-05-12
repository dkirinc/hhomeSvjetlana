'use client'

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Review from './Review'
import ReviewsData from "@/app/assets/ReviewsData";

const SectionReviews = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 310; // Prilagodite prema potrebi
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="max-w-[1400px] h-full flex flex-col gap-14 content-center justify-center items-center">
            <h3 className="text-3xl font-light">Što kažu naši gosti</h3>
            <div className="w-full h-full flex flex-col lg:flex-row gap-20 lg:gap-10 p-8 content-center justify-center items-center ">
                <Image src="/images/bookingRating.png" width={250} height={250} alt="reviews" className="object-contain" />
                <div className="flex gap-5 justify-between flex-stretch">
                    <div className="max-md:hidden  flex content-center justify-center items-center ">
                        <div>
                            <ChevronLeft onClick={() => scroll('left')} />
                        </div>
                    </div>
                    <div ref={scrollContainerRef} className="w-[300px] lg:w-[605px] flex overflow-x-auto scrollbar-hide">
                        <div className="flex gap-5">
                            {ReviewsData.map((review) => (
                                <Review key={review.id} name={review.name} country={review.country} text={review.text.hr} date={review.date} />
                            ))}
                        </div>

                    </div>
                    <div className="max-md:hidden flex  content-center justify-center items-center ">
                        <ChevronRight onClick={() => scroll('right')} />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default SectionReviews;