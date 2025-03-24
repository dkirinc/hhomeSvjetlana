'use client'

import Button from "./Button";
import { useState, useEffect } from "react";

const Footer = () => {

    const [screenIsSmall, setScreenIsSmall] = useState(false);

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

    return (
        <div className="w-full flex  content-center justify-center items-center   bg-[#F5F1F1]">
            <div className="max-w-[1400px] w-full flex content-center justify-between items-center p-10">
                <h2 className={`${screenIsSmall ? "text-xl" : "text-3xl"} text-3xl font-light`}>Rezerviraj svoj termin</h2>
                <Button text="Pošalji Upit" txSize={!screenIsSmall ? 20 : 10} padding={10} type={1} />
            </div>
        </div>
    );
}

export default Footer;