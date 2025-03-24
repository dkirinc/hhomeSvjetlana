'use client'

import Image from "next/image";
import characteristicsInPic from '@/app/images/house/characteristiscsIn.svg'
import HouseCharacteristics from '@/app/assets/HouseCharacteristicsData'
import Characteristics from "./Characteristics";
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext, useMemo } from "react";

const SectionCharacteristics = () => {

    const { characteristicsIn, setCharacteristicsIn } = useContext(MainContext);

    const { firstObjectHrValues, secondObjectHrValues } = useMemo(() => {
        if (characteristicsIn) {
            return {
                firstObjectHrValues: HouseCharacteristics[0][0].value.map(item => item.hr),
                secondObjectHrValues: HouseCharacteristics[0][1].value.map(item => item.hr)
            };
        } else {
            return {
                firstObjectHrValues: HouseCharacteristics[1][0].value.map(item => item.hr),
                secondObjectHrValues: HouseCharacteristics[1][1].value.map(item => item.hr)
            };
        }
    }, [characteristicsIn]);




    return (
        <div className="w-max-[1440px] relative">
            <Image className="w-full h-full" src={characteristicsInPic} alt="signature" />
            <div className="absolute top-0 left-0 w-full h-full flex">
                <div className="w-full h-full  flex flex-col items-end justify-center pl-8">
                    <div className="w-full bg-[rgba(245,241,241,0.9)] flex flex-col content-center items-start p-10 gap-8">
                        <h2 className="text-3xl font-light">Karakteristike kuće</h2>
                        <div className="w-full h-full flex flex-col gap-4">
                            <div className="w-full flex">
                                <button
                                    className={`w-full h-full bg-[#E1BE6A] text-white p-2 font-light cursor-pointer`}
                                    style={{
                                        background: `${characteristicsIn ? "#E1BE6A" : "white"}`,
                                        color: `${characteristicsIn ? "white" : "black"}`
                                    }}
                                    onClick={() => setCharacteristicsIn(true)}
                                >Unutarnji prostor</button>
                                <button
                                    className={`w-full h-full bg-white text-black p-2 font-light cursor-pointer`}
                                    style={{
                                        background: `${characteristicsIn ? "white" : "#E1BE6A"}`,
                                        color: `${characteristicsIn ? "black" : "white"}`
                                    }}
                                    onClick={() => setCharacteristicsIn(false)}
                                >Vanjski prostor</button>



                            </div>
                            <div className="w-full flex">
                                <div className="w-full pl-2 flex flex-col gap-0">
                                    {firstObjectHrValues.map((hrValue, index) => (
                                        <Characteristics key={index} text={hrValue} />
                                    ))}
                                </div>
                                <div className="w-full pl-2">
                                    {secondObjectHrValues.map((hrValue, index) => (
                                        <Characteristics key={index} text={hrValue} />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full"></div>
            </div>
        </div>
    );
}

export default SectionCharacteristics;