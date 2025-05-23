'use client'

import Button from "./Button";
import { useState, useEffect } from "react";
import { MainContext } from "../assets/Context/MainContext";
import { useContext } from "react";

const Footer = () => {

    const [screenIsSmall, setScreenIsSmall] = useState(false);
    const { setModalStatus, lang } = useContext(MainContext);



    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setScreenIsSmall(true);
            } else {
                setScreenIsSmall(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const footerText = {
        hr: 'Rezerviraj svoj termin',
        en: 'Book your stay',
        deu: 'Buchen Sie Ihren Aufenthalt'
    }

    const footerBtnTxt = {
        hr: 'Pošalji Upit',
        en: 'Send Inquiry',
        deu: 'Anfrage senden'
    }

    return (
        <div className="w-full flex  content-center justify-center items-center   bg-[#F5F1F1]">
            <div className="max-w-[1400px] w-full flex content-center justify-between items-center p-10">
                <h2 className={`${screenIsSmall ? "text-xl" : "text-3xl"} text-3xl font-light`}>{footerText[lang]}</h2>
                <Button text={footerBtnTxt[lang]} txSize={!screenIsSmall ? 20 : 10} padding={10} type={1} onClick={() => setModalStatus(true)} reservation={true} />
            </div>
        </div>
    );
}

export default Footer;