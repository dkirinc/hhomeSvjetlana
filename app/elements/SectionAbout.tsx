'use client'

import Image from "next/image";
import Signature from "@/app/images/signature.svg"
import Profile from "@/app/images/profile.svg"
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext, useEffect, useState } from "react";

const SectionAbout = () => {

    const { lang } = useContext(MainContext)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768); // Mobile breakpoint

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Listen for resize

        return () => window.removeEventListener('resize', checkMobile); // Cleanup
    }, []);

    const aboutText = {
        hr: [
            "Kuća za odmor Svjetlana kompletno je renovirana kuća smještena na mirnoj poziciji u mjestu Risika, poznatom po predivnoj pješčanoj plaži Sv. Marek. Kuća se proteže na dvije etaže, prizemlje i prvi kat. U prizemlju je kuhinja s blagovaonicom, zasebni dnevni boravak, spavaća soba i kupaonica dok su na katu dvije spavaće sobe, kupaonica i balkon. Oko kuće se protežu čak tri terase ukupne površine od 54 m2; na jednoj se nalazi i vanjska hidromasažna kada. Kuća je u potpunosti opremljena - internet, satelitska televizija, klima, perilica za",
            "suđe, perilica za rublje te, naravno, kompletno namještena kuhinja.",
            "Ova šarmantna rustikalna kuća osvojiti će Vas odmah!"
        ],
        en: [
            "Holiday home Svjetlana is a completely renovated house located in a quiet location in the village of Risika, known for its beautiful sandy beach of St. Marek. The house extends over two floors, ground floor and first floor. On the ground floor there is a kitchen with a dining room, a separate living room, a bedroom and a bathroom, while on the first floor there are two bedrooms, a bathroom and a balcony. Around the house there are three terraces with a total area of ​​54 m2; one of them has an outdoor hot tub. The house is fully equipped - internet, satellite TV, air conditioning, washing machine",
            "dishwasher, washing machine and, of course, a fully furnished kitchen.",
            "This charming rustic house will win you over immediately!"
        ],
        deu: [
            "Das Ferienhaus Svjetlana ist ein komplett renoviertes Haus in ruhiger Lage im Dorf Risika, das für seinen wunderschönen Sandstrand St. Marek bekannt ist. Das Haus erstreckt sich über zwei Etagen: Erdgeschoss und erster Stock. Im Erdgeschoss befinden sich eine Küche mit Esszimmer, ein separates Wohnzimmer, ein Schlafzimmer und ein Badezimmer, während sich im ersten Stock zwei Schlafzimmer, ein Badezimmer und ein Balkon befinden. Rund um das Haus gibt es drei Terrassen mit einer Gesamtfläche von 54 m2; eine davon verfügt über einen Whirlpool im Freien. Das Haus ist komplett ausgestattet – Internet, Sat-TV, Klimaanlage, Waschmaschine",
            "geschirrspüler, Waschmaschine und natürlich eine komplett eingerichtete Küche.",
            "Dieses charmante Landhaus wird Sie sofort überzeugen!"
        ]
    }

    const ownerText = {
        hr: [
            "Želja nam je da se svi gosti u našem domu osjećaju bolje nego doma - bez briga, bez rasporeda i planova. Vjerujemo da će toplina našeg doma svih oduševiti i da će nam se",
            "često vraćati."
        ],
        en: [
            "Our wish is that all guests in our home feel better than at home - without worries, without schedules and plans. We believe that the warmth of our home will delight everyone and that we will like it",
            "return often."
        ],
        deu: [
            "Unser Wunsch ist es, dass sich alle Gäste in unserem Haus wohler fühlen als zu Hause – ohne Sorgen, ohne Termine und Pläne. Wir glauben, dass die Wärme unseres Hauses jeden begeistern wird und dass es uns gefallen wird",
            "kommen oft zurück."
        ],
    }

    return (
        <div className="w-full flex flex-col p-8 gap-12 content-center items-center mb-20 md:mb-0">
            <div className="max-w-190 jost  text-center">
                <p>{aboutText[lang][0]} <br /> {aboutText[lang][1]} <br /> {aboutText[lang][2]}</p>
            </div>
            <div className="w-70 lg:w-105 flex flex-col xl:gap-20 gap-6 content-center items-center lg:items-end relative">
                <p className="text-right font-light">{ownerText[lang][0]}<br />{ownerText[lang][1]} </p>
                <div className="flex gap-5 content-center items-center self-end  relative md:static ">
                    <Image width={isMobile ? 90 : 125} height={isMobile ? 70 : 110} src={Signature} alt="signature" />
                    <Image width={isMobile ? 60 : 160} height={isMobile ? 60 : 160} src={Profile} alt="signature" className=" absolute  md:top-[-6] md:right-[-190px] top-[58] right-0" />
                </div>

            </div>
        </div>
    );
}

export default SectionAbout;