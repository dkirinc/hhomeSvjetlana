import React from 'react'
import { AmenityType } from '@/app/types/AmenityType'

interface AmenitieProps {
    data: AmenityType
}

function Amenitie({ data }: AmenitieProps) {

    return (
        <div className='w-full h-full flex flex-col gap-4 content-center justify-center items-center'>
            <h3>{data.about[0].hr}</h3>
            {data.value.map((item) => (
                <div className='w-full h-full flex flex-col p-[0px]' key={item.id}>
                    <div className='w-full h-full flex justify-between pr-10 font-light'>
                        <p>{item.hr}</p>
                        <p>{item.distance}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Amenitie