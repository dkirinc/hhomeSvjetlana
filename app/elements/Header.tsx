'use client'

import Image from "next/image";
import Logo from "../images/hhs_Logo.svg";
import Button from "./Button";
import { useEffect, useState } from "react";
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext } from "react";

const Header = () => {

    const { setModalStatus } = useContext(MainContext)

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
        <div className="w-full absolute left-0 top-0 z-10 bg-white flex  content-center justify-center items-center ">
            <div className="max-w-[1400px] w-full  flex content-center justify-between items-center p-4 lg:p-10">
                <Image width={!screenIsSmall ? 314 : 157} height={!screenIsSmall ? 110 : 55} src={Logo} alt="logo" className="" />
                <Button text={"REZERVACIJA"} padding={10} txSize={!screenIsSmall ? 20 : 10} type={1} onClick={() => setModalStatus(true)} />

            </div>
        </div>

    );
}

export default Header;