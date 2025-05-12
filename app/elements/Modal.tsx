'use client'

import Button from "./Button";
import { useEffect, useState } from "react"
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext } from "react";
import { TfiClose } from "react-icons/tfi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Modal = () => {

    const { modalStatus, setModalStatus } = useContext(MainContext);

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

    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        dateOfArrival: Date | undefined;
        dateOfleave: Date | undefined;
        adultNumber: string;
        chidrenNumber: string;
        msgTxt: string;
    }>({
        name: "",
        email: "",
        dateOfArrival: undefined, // ✅ umjesto null
        dateOfleave: undefined,
        adultNumber: "",
        chidrenNumber: "",
        msgTxt: "",
    });

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormFieldUpdate = (name, value) => {
        setFormData((prev) => {
            let updatedData = { ...prev, [name]: value };

            if (name === "dateOfArrival") {
                const arrival = value;
                const leave = prev.dateOfleave;

                if (leave && arrival > leave) {
                    updatedData.dateOfleave = null;
                }
            }

            return updatedData;
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setModalStatus(false)
        console.log("Submitted data:", formData);
    };

    {
        if (!modalStatus) {
            return null;
        } else {
            return (
                <div className="fixed w-full h-screen  flex items-center justify-center z-20">
                    <div className="absolute w-full h-full backdrop-blur-xs"></div>
                    <div className="w-full h-[550px]  flex flex-col items-end justify-center z-30 ">
                        <div className="w-full h-full  flex flex-col items-center justify-center bg-[#E1BE6A]/75 ">
                            <form onSubmit={handleSubmit}>
                                <div className="w-[735px] h-[550px]  flex flex-col items-center justify-center gap-3 bg-[#F5F1F1] p-20 relative">
                                    <div className="w-full h-13 bg-white ">
                                        <input type="text" id="name"
                                            name="name" className="w-full h-full bg-white px-2" placeholder="Ime i prezime" onChange={handleFormInputChange}
                                            value={formData.name} required />
                                    </div>
                                    <div className="w-full h-13 flex content-center items-center gap-4">

                                        <DatePicker
                                            selected={formData.dateOfArrival}
                                            onChange={(date) => handleFormFieldUpdate("dateOfArrival", date)}
                                            placeholderText="Datum dolaska"
                                            wrapperClassName="w-full h-13"
                                            className="w-full h-13 bg-white px-2"
                                            dateFormat="dd.MM.yyyy"
                                            required
                                        />


                                        <DatePicker
                                            selected={formData.dateOfleave}
                                            onChange={(date: Date) => handleFormFieldUpdate("dateOfleave", date)}
                                            minDate={formData.dateOfArrival ?? undefined}

                                            placeholderText="Datum odlaska"
                                            className="w-full h-13 bg-white px-2"
                                            wrapperClassName="w-full h-13"
                                            dateFormat="dd.MM.yyyy"
                                            required
                                        />

                                    </div>
                                    <div className="w-full h-13 flex content-center items-center gap-4">
                                        <div className="w-full h-full bg-white ">
                                            <input type="text" id="adultNumber"
                                                name="adultNumber" className="w-full h-full bg-white px-2" placeholder="Broj odraslih" onChange={handleFormInputChange}
                                                value={formData.adultNumber} required />
                                        </div>
                                        <div className="w-full h-full bg-white ">
                                            <input type="text" className="w-full h-full bg-white px-2" placeholder="Broj djece" onChange={handleFormInputChange}
                                                value={formData.chidrenNumber} />
                                        </div>
                                    </div>
                                    <div className="w-full h-13 bg-white ">
                                        <input type="email" id="email"
                                            name="email" className="w-full h-full bg-white px-2" placeholder="Email" onChange={handleFormInputChange}
                                            value={formData.email} required />
                                    </div>
                                    <div className="w-full h-32 bg-white ">
                                        <textarea className="w-full h-full p-2" name="msgTxt" id="msgTxt" placeholder="Tekst poruke" onChange={handleFormInputChange}
                                            value={formData.msgTxt}></textarea>
                                    </div>
                                    <div className="w-full h-13 flex justify-end">
                                        <Button text={"Pošalji upit"} padding={10} txSize={!screenIsSmall ? 20 : 10} type={1} />
                                    </div>
                                    <button type="button" className="absolute top-10 right-10" onClick={() => setModalStatus(false)}>
                                        <TfiClose size={15} />
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div >
            );
        }
    }


}

export default Modal;
