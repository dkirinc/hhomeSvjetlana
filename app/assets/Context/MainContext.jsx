'use client';

import React, { createContext, useRef, useState } from 'react';

export const MainContext = createContext({
    characteristicsIn: false,
    setCharacteristicsIn: () => { },
    refBtnIn: null,
    refBtnOut: null,
});

export const MainProvider = ({ children }) => {
    const [characteristicsIn, setCharacteristicsIn] = useState(true);
    const refBtnIn = useRef(null);
    const refBtnOut = useRef(null);

    return (
        <MainContext.Provider value={{ characteristicsIn, setCharacteristicsIn, refBtnIn, refBtnOut }}>
            {children}
        </MainContext.Provider>
    );
};