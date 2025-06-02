'use client';

import React, { createContext, useRef, useState, ReactNode, MutableRefObject, useEffect } from 'react';

// Definiši dozvoljene jezike
export type Lang = 'hr' | 'en' | 'deu';

// Definiši tip contexta
interface MainContextType {
    characteristicsIn: boolean;
    setCharacteristicsIn: (value: boolean) => void;
    refBtnIn: MutableRefObject<null | HTMLButtonElement>;
    refBtnOut: MutableRefObject<null | HTMLButtonElement>;
    openLightBox: boolean;
    setOpenLightBox: (value: boolean) => void;
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void;
    modalStatus: boolean;
    setModalStatus: (status: boolean) => void;
    lang: Lang;
    setLang: (lang: Lang) => void;
}

// Kreiraj context sa početnim (fallback) vrednostima
export const MainContext = createContext<MainContextType>({
    characteristicsIn: false,
    setCharacteristicsIn: () => { },
    refBtnIn: { current: null },
    refBtnOut: { current: null },
    openLightBox: false,
    setOpenLightBox: () => { },
    currentSlideIndex: 0,
    setCurrentSlideIndex: () => { },
    modalStatus: false,
    setModalStatus: () => { },
    lang: 'en',
    setLang: () => { }
});

// Tipizuj children
interface MainProviderProps {
    children: ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
    const [characteristicsIn, setCharacteristicsIn] = useState(true);
    const [openLightBox, setOpenLightBox] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const refBtnIn = useRef<HTMLButtonElement | null>(null);
    const refBtnOut = useRef<HTMLButtonElement | null>(null);
    const [modalStatus, setModalStatus] = useState(false);
    const [lang, setLang] = useState<Lang>('en');

    useEffect(() => {
        const browserLang = navigator.language?.substring(0, 2).toLowerCase();
        let detectedLang: Lang = 'en';

        if (browserLang === 'hr') {
            detectedLang = 'hr';
        } else if (browserLang === 'de') {
            detectedLang = 'deu'; // koristi tvoj interni format
        } else if (browserLang === 'en') {
            detectedLang = 'en';
        }

        setLang(detectedLang);
    }, []);

    return (
        <MainContext.Provider
            value={{
                characteristicsIn,
                setCharacteristicsIn,
                refBtnIn,
                refBtnOut,
                openLightBox,
                setOpenLightBox,
                currentSlideIndex,
                setCurrentSlideIndex,
                modalStatus,
                setModalStatus,
                lang,
                setLang,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};
