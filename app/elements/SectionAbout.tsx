import Image from "next/image";
import Signature from "@/app/images/signature.svg"
import Profile from "@/app/images/profile.svg"

const SectionAbout = () => {
    return (
        <div className="w-full flex flex-col p-8 gap-12 content-center items-center">
            <div className="max-w-190 jost  text-center">
                <p>Kuća za odmor Svjetlana kompletno je renovirana kuća smještena na mirnoj poziciji u mjestu Risika, poznatom po predivnoj pješčanoj plaži Sv. Marek. Kuća se proteže na dvije etaže, prizemlje i prvi kat. U prizemlju je kuhinja s blagovaonicom, zasebni dnevni boravak, spavaća soba i kupaonica dok su na katu dvije spavaće sobe, kupaonica i balkon. Oko kuće se protežu čak tri terase ukupne površine od 54 m2; na jednoj se nalazi i vanjska hidromasažna kada. Kuća je u potpunosti opremljena - internet, satelitska televizija, klima, perilica za <br /> suđe, perilica za rublje te, naravno, kompletno namještena kuhinja. <br />
                    Ova šarmantna rustikalna kuća osvojiti će Vas odmah!</p>
            </div>
            <div className="w-105 flex flex-col gap-6 content-center items-end relative">
                <p className="text-right font-light">“Želja nam je da se svi gosti u našem domu osjećaju bolje nego doma - bez briga, bez rasporeda i planova. Vjerujemo da će toplina našeg doma svih oduševiti i da će nam se <br /> često vraćati.” </p>
                <Image width={125} height={110} src={Signature} alt="signature" />
                <Image width={160} height={160} src={Profile} alt="signature" className="absolute top-[-6] right-[-190px]" />

            </div>
        </div>
    );
}

export default SectionAbout;