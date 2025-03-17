import Amenities from '@/app/assets/Amenities'
import Amenitie from './Amenitie'

const SectionAmenities = () => {

    return (
        <div className='w-250  h-full flex flex-col gap-4 content-center justify-center items-center'>
            <h2 className='text-3xl font-light'>Sadržaj u blizini</h2>
            <div className='w-full h-full flex content-between gap-4 p-10'>
                <Amenitie data={Amenities[0]} />
                <div className='w-1 mt-11 bg-amber-400'></div>
                <Amenitie data={Amenities[1]} />
                <div className='w-1  mt-11  bg-amber-400'></div>
                <Amenitie data={Amenities[2]} />
            </div>
        </div>
    );
}

export default SectionAmenities;