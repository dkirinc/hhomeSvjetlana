'use client'

import Amenities from '@/app/assets/Amenities'
import Amenitie from './Amenitie'
import { MainContext } from '@/app/assets/Context/MainContext'
import { useContext } from 'react'

const SectionAmenities = () => {

    const { lang } = useContext(MainContext)

    const amenityText = {
        hr: 'Sadržaj u blizini',
        en: 'Content nearby',
        deu: 'Inhalte in der Nähe'
    }

    return (
        <div className='w-full p-10 lg:w-250  h-full flex flex-col gap-10 content-center justify-center items-center'>
            <h2 className='text-3xl font-light'>{amenityText[lang]}</h2>
            <div className='w-full h-full flex flex-col lg:flex-row  content-between gap-10 '>
                <Amenitie data={Amenities[0]} />
                <div className='w-full h-0.5 lg:w-1 mt-11 lg:h-auto bg-amber-400'></div>
                <Amenitie data={Amenities[1]} />
                <div className='w-full h-0.5 lg:w-1 mt-11 lg:h-auto bg-amber-400'></div>
                <Amenitie data={Amenities[2]} />
            </div>
        </div>
    );
}

export default SectionAmenities;