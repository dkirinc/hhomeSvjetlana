'use client'

import React from 'react'
import { AmenityType } from '@/app/types/AmenityType'
import { MainContext } from '@/app/assets/Context/MainContext'
import { useContext } from 'react'

interface AmenitieProps {
    data: AmenityType
}

function Amenitie({ data }: AmenitieProps) {

    const { lang } = useContext(MainContext)

    return (
        <div className='w-full h-full flex flex-col gap-4 content-center justify-center items-center'>
            <h3>{data.about[0][lang]}</h3>
            {data.value.map((item) => (
                <div className='w-full h-full flex flex-col p-[0px]' key={item.id}>
                    <div className='w-full h-full flex justify-between  font-light'>
                        <p>{item[lang]}</p>
                        <p>{item.distance}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Amenitie