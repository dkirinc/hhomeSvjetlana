import React from "react";
import Image from 'next/image'

interface ReviewProps {
    name: string,
    country: string,
    text: string,
    date: string
}

const Review: React.FC<ReviewProps> = ({ name, country, text, date }) => {
    return (
        <div className="w-[300px]  flex gap-5">
            <div className="w-full flex flex-col gap-5">
                <div className="w-full  flex gap-5">
                    <Image src={"/images/guestLogoUnknown.png"} width={60} height={60} alt="reviews" className="h-16 w-16" />
                    <div className="flex flex-col gap-5">
                        <p className="">{name}</p>
                        <div className="flex gap-5 justify-center items-center">
                            <Image src={country} width={10} height={10} alt="reviews" className="w-5 h-5" />
                            <p className="font-light">Datum: {date}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <p className="font-light">{text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Review;