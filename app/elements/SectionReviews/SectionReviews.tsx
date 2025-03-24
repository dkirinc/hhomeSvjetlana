import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SectionReviews = () => {
    return (
        <div className="max-w-[1400px] h-full flex flex-col gap-14 content-center justify-center items-center">
            <h3 className="text-3xl font-light">Što kažu naši gosti</h3>
            <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-10 p-8 content-center justify-center items-center lg:items-start">
                <Image src="/images/bookingRating.png" width={250} height={250} alt="reviews" className="object-contain" />
                <div className="flex gap-5 justify-between ">
                    <div className="flex content-center justify-center items-center ">
                        <div>
                            <ChevronLeft />
                        </div>
                    </div>
                    <div className="max-w-[300px] flex gap-5">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <Image src={"/images/guestLogoUnknown.png"} width={60} height={60} alt="reviews" className="h-16 w-16" />
                                <div className="flex flex-col gap-5">
                                    <p className="">Dagmar</p>
                                    <div className="flex gap-5 justify-center items-center">
                                        <Image src={"/images/germanySmall.png"} width={10} height={10} alt="reviews" className="w-5 h-5" />
                                        <p className="font-light">Datum: 31. srpnja 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-light">Das Haus ist super gemütlich. Es hat insgesamt 3 Schlafzimmer,somit hat man als Familie mit 2 Kindern mehr als genug Platz! Man hat die Möglichkeit hinter dem Haus wo sich auch die Grillmöglichkeit befindet unter dem schönen Olivenbaum zu sitzen,vor dem Haus auf der Terrasse oder im oberen Bereich auf dem Balkon! Die Küche ist sehr gut ausgestattet. Die Lage ist perfekt wenn man es lieber...
                                </p>
                                <p className="font-semibold">+ pokaži više</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[300px] flex gap-5">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <Image src={"/images/guestLogoUnknown.png"} width={60} height={60} alt="reviews" className="h-16 w-16" />
                                <div className="flex flex-col gap-5">
                                    <p>Tunde</p>
                                    <div className="flex gap-5 justify-center items-center">
                                        <Image src={"/images/hungarySmall.png"} width={10} height={10} alt="reviews" className="w-5 h-5" />
                                        <p className="font-light">Datum: 31. srpnja 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-light">A ház nagyon szép, kényelmes és felszerelt. A wifi jól működött. Svjetlana nagyon kedves és rugalmas. A hűtőben gyümölcs és egy üveg helyi bor várt ránk :-)

                                </p>
                                <p className="hidden font-semibold">+ pokaži više</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex content-center justify-center items-center ">
                        <ChevronRight />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default SectionReviews;