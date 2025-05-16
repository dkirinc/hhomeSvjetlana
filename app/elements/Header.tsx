'use client'

import Image from "next/image";
import Logo from "../images/hhs_Logo.svg";
import Button from "./Button";
import { useEffect, useState } from "react";
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext } from "react";
import OptionChooser from "./OptionChooser";

const Header = () => {

    const { setModalStatus, lang } = useContext(MainContext)

    const [screenIsSmall, setScreenIsSmall] = useState(false);

    const options = [
        {
            id: "language",
            items: [
                { label: "Hr", value: "hr" },
                { label: "Deu", value: "deu" },
                { label: "En", value: "en" },
            ],
        },

    ];


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

    const btnText = {
        hr: "REZERVACIJA",
        en: "RESERVATION",
        deu: "RESERVIERUNG"
    }

    return (
        <div className="w-full absolute left-0 top-0 z-10 bg-white flex  content-center justify-center items-center ">
            <div className="max-w-[1400px] w-full  flex content-center justify-between items-center p-4 lg:p-10">
                <Image width={!screenIsSmall ? 314 : 157} height={!screenIsSmall ? 110 : 55} src={Logo} alt="logo" className="" />
                <div className="flex gap-5">
                    <OptionChooser option={"language"} options={options} />
                    <Button text={btnText[lang]} padding={10} txSize={!screenIsSmall ? 20 : 10} type={1} reservation={true} onClick={() => setModalStatus(true)} />
                </div>

            </div>
        </div>

    );
}

export default Header;