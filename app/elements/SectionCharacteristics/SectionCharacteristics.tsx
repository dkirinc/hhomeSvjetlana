'use client'

import Image from "next/image";
import characteristicsInPic from '@/app/images/house/characteristiscsIn.svg'
import HouseCharacteristics from '@/app/assets/HouseCharacteristicsData'
import Characteristics from "./Characteristics";
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext, useMemo } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from "react";

const SectionCharacteristics = () => {

    const { characteristicsIn, setCharacteristicsIn } = useContext(MainContext);

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Detekcija veličine ekrana
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };

        handleResize(); // Provjera prilikom prvog učitavanja
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const colorVariants = {
        active: {
            backgroundColor: "#E1BE6A",
            color: "#FFFF"
        },
        inactive: {
            backgroundColor: "#FFFF",
            color: "#000000"
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.3
            }
        }),
        exit: { opacity: 0, y: -20 }
    };


    return (
        <div className="w-full h-screen lg:h-full lg:w-[1440px] relative">
            {isLargeScreen ? (
                <Image
                    src={characteristicsInPic}
                    alt="signature"
                    width={1440}
                    height={900} // Postavite odgovarajuće dimenzije za velike ekrane
                    className="object-cover"
                />
            ) : (
                <Image
                    src={characteristicsInPic}
                    alt="signature"
                    fill
                    className="object-cover"
                />
            )}
            <div className="absolute top-0 left-0 w-full h-full flex ">
                <div className="w-full h-full  flex flex-col items-end justify-center lg:pl-8">
                    <div className="w-full bg-[rgba(245,241,241,0.9)] flex flex-col content-center items-start p-10 gap-8">
                        <h2 className="text-3xl font-light">Karakteristike kuće</h2>
                        <div className="w-full h-full flex flex-col gap-4">
                            <div className="w-full flex">
                                <motion.button
                                    className={`w-full h-full p-2 font-light cursor-pointer`}
                                    variants={colorVariants}
                                    initial="inactive" // 2. Postavite početno stanje
                                    animate={characteristicsIn ? "active" : "inactive"} // 3. Koristite imena varijanti
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setCharacteristicsIn(true)}
                                >
                                    Unutarnji prostor
                                </motion.button>
                                <motion.button
                                    className={`w-full h-full p-2 font-light cursor-pointer`}
                                    variants={colorVariants}
                                    initial="inactive" // 2. Postavite početno stanje
                                    animate={characteristicsIn ? "inactive" : "active"} // 3. Koristite imena varijanti
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setCharacteristicsIn(false)}
                                >
                                    Vanjski prostor
                                </motion.button>
                            </div>
                            <div className="w-full flex">
                                <div className="w-full pl-2 flex flex-col gap-0">

                                    {firstObjectHrValues.map((hrValue, index) => (
                                        <motion.div
                                            key={hrValue} // Koristite unique key za svaki element
                                            variants={itemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            custom={index}
                                        >
                                            <Characteristics text={hrValue} />
                                        </motion.div>
                                    ))}

                                </div>

                                <div className="w-full pl-2">

                                    {secondObjectHrValues.map((hrValue, index) => (
                                        <motion.div
                                            key={hrValue} // Koristite unique key za svaki element
                                            variants={itemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            custom={index}
                                        >
                                            <Characteristics text={hrValue} />
                                        </motion.div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {isLargeScreen ? (<div className="w-full h-full"></div>) : (null)}

            </div>
        </div>
    );
}

export default SectionCharacteristics;