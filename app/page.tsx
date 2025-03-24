import Header from '@/app/elements/Header'
import Hero from '@/app/elements/Hero'
import SectionAbout from './elements/SectionAbout';
import SectionCharacteristics from './elements/SectionCharacteristics/SectionCharacteristics';
import SectionAmenities from './elements/SectionAmenities/SectionAmenities';
import SectionGallery from './elements/SectionGallery/SectionGallery';
import SectionReviews from './elements/SectionReviews/SectionReviews';
import LightBox from './elements/LightBox';
import Footer from './elements/Footer';

import { MainProvider } from '@/app/assets/Context/MainContext';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col content-center wrap items-center gap-30 relative">
      <MainProvider>
        <Header />
        <Hero />
        <SectionAbout />
        <SectionCharacteristics />
        <SectionAmenities />
        <SectionGallery />
        <SectionReviews />
        <LightBox />
        <Footer />
      </MainProvider>
    </div>
  );
}
