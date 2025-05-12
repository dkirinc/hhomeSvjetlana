'use client';

import React, { createContext, useRef, useState } from 'react';

export const MainContext = createContext({
    characteristicsIn: false,
    setCharacteristicsIn: () => { },
    refBtnIn: null,
    refBtnOut: null,
    openLightBox: false,
    setOpenLightBox: () => { },
    currentSlideIndex: 0,
    setCurrentSlideIndex: () => { },
    modalStatus: false,
    setModalStatus: () => { }
});

export const MainProvider = ({ children }) => {
    const [characteristicsIn, setCharacteristicsIn] = useState(true);
    const [openLightBox, setOpenLightBox] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const refBtnIn = useRef(null);
    const refBtnOut = useRef(null);
    const [modalStatus, setModalStatus] = useState(false);

    return (
        <MainContext.Provider value={{
            characteristicsIn, setCharacteristicsIn, openLightBox, setOpenLightBox, currentSlideIndex,
            setCurrentSlideIndex, refBtnIn, refBtnOut, modalStatus, setModalStatus
        }}>
            {children}
        </MainContext.Provider>
    );
};