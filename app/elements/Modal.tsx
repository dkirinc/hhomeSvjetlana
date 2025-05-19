'use client'

import Button from "./Button";
import React, { useEffect, useState } from "react"
import { MainContext } from "@/app/assets/Context/MainContext";
import { useContext } from "react";
import { TfiClose } from "react-icons/tfi";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";


const Modal = () => {

    const { modalStatus, setModalStatus, lang } = useContext(MainContext);

    const [screenIsSmall, setScreenIsSmall] = useState(false);
    const [result, setResult] = useState("");

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
        dateOfArrival: Date | null | undefined;  // Promijenjeno tip
        dateOfleave: Date | null | undefined;
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

    const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormFieldUpdate = (name: string, value: string | Date | null) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        /* setFormData((prev) => {
            let updatedData = { ...prev, [name]: value };

            if (name === "dateOfArrival") {
                const arrival = value;
                const leave = prev.dateOfleave;

                if (leave && arrival > leave) {
                    updatedData.dateOfleave = null;
                }
            }

            return updatedData;
        }); */
    };

    const modalText = {
        name: {
            hr: 'Ime i prezime',
            en: 'Name and surname',
            deu: 'Name und Vorname',
        },
        email: {
            hr: 'Email',
            en: 'Email',
            deu: 'Email',
        },
        dateOfArrival: {
            hr: 'Datum dolaska',
            en: 'Date of arrival',
            deu: 'Anreisedatum',
        },
        dateOfleave: {
            hr: 'Datum odlaska',
            en: 'Date of leave',
            deu: 'Abreisedatum',
        },
        adultNumber: {
            hr: 'Broj odraslih',
            en: 'Number of adults',
            deu: 'Anzahl Erwachsene',
        },
        chidrenNumber: {
            hr: 'Broj djece',
            en: 'Number of children',
            deu: 'Anzahl der Kinder',
        },
        msgTxt: {
            hr: 'Tekst poruke',
            en: 'Message text',
            deu: 'Nachrichtentext',
        }
    }

    const btnText = {
        hr: 'Pošalji upit',
        en: 'Send inquiry',
        deu: 'Anfrage senden'
    }



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setModalStatus(false);
        setResult("Sending....");

        const formDataToSend = new FormData(event.target as HTMLFormElement);

        // Dodajemo datume ručno, pošto DatePicker nije nativni <input>
        if (formData.dateOfArrival) {
            formDataToSend.append("dateOfArrival", format(formData.dateOfArrival, "dd.MM.yyyy"));
        }
        if (formData.dateOfleave) {
            formDataToSend.append("dateOfleave", format(formData.dateOfleave, "dd.MM.yyyy"));
        }

        formDataToSend.append("access_key", "d0e41d71-a778-417f-b393-49ca0cef947c");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();
            if (data.success) {
                setResult("Message sent successfully!");
            } else {
                setResult("Failed to send message.");
            }
        } catch (error) {
            console.error(result, error);
            setResult("An error occurred while sending the message.");
        }
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
                                <div className="w-full lg:w-[735px] h-[550px]  flex flex-col items-center justify-center gap-3 bg-[#F5F1F1] p-20 relative text-[10px] md:text-[14px]">
                                    <div className="w-full h-13 bg-white ">
                                        <input type="text" id="name"
                                            name="name" className="w-full h-full bg-white px-2" placeholder={modalText.name[lang]} onChange={handleFormInputChange}
                                            value={formData.name} required />
                                    </div>
                                    <div className="w-full h-13 flex content-center items-center gap-4">
                                        <DatePicker
                                            selected={formData.dateOfArrival}
                                            onChange={(date) => handleFormFieldUpdate("dateOfArrival", date)}
                                            placeholderText={screenIsSmall ? `${modalText.dateOfArrival[lang]}` : `${modalText.dateOfArrival[lang]}`}
                                            wrapperClassName="w-full h-13"
                                            className="w-full h-13 bg-white px-2"
                                            dateFormat="dd.MM.yyyy"
                                            required
                                        />


                                        <DatePicker
                                            selected={formData.dateOfleave}
                                            onChange={(date: Date | null) => handleFormFieldUpdate("dateOfleave", date)}
                                            minDate={formData.dateOfArrival ?? undefined}
                                            placeholderText={screenIsSmall ? `${modalText.dateOfleave[lang]}` : `${modalText.dateOfleave[lang]}`}
                                            className="w-full h-13 bg-white px-2"
                                            wrapperClassName="w-full h-13"
                                            dateFormat="dd.MM.yyyy"
                                            required
                                        />

                                    </div>
                                    <div className="w-full h-13 flex content-center items-center gap-4">
                                        <div className="w-full h-full bg-white ">
                                            <input type="text" id="adultNumber"
                                                name="adultNumber" className="w-full h-full bg-white px-2" placeholder={modalText.adultNumber[lang]} onChange={handleFormInputChange}
                                                value={formData.adultNumber} required />
                                        </div>
                                        <div className="w-full h-full bg-white ">
                                            <input type="text" className="w-full h-full bg-white px-2" placeholder={modalText.chidrenNumber[lang]} onChange={handleFormInputChange}
                                                value={formData.chidrenNumber} />
                                        </div>
                                    </div>
                                    <div className="w-full h-13 bg-white ">
                                        <input type="email" id="email"
                                            name="email" className="w-full h-full bg-white px-2" placeholder="Email" onChange={handleFormInputChange}
                                            value={formData.email} required />
                                    </div>
                                    <div className="w-full h-32 bg-white ">
                                        <textarea className="w-full h-full p-2" name="msgTxt" id="msgTxt" placeholder={modalText.msgTxt[lang]} onChange={handleFormInputChange}
                                            value={formData.msgTxt}></textarea>
                                    </div>
                                    <div className="w-full h-13 flex justify-end">
                                        <Button text={btnText[lang]} padding={10} txSize={20} type={1} />
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
