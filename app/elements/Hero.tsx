import Image from "next/image";
import HeroImage from '@/app/images/house/heroImage.png'


const Hero = () => {

    return (
        <div className={`w-full h-screen relative`}>
            <Image src={HeroImage} alt="hero" fill objectFit="cover" />
        </div>
    );
}

export default Hero;