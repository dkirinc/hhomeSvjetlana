// src/types/houseCharacteristics.ts

export interface LanguageValue {
    hr: string;
    en: string;
    deu: string;
}

export interface ValueItem extends LanguageValue {
    id: number;
    distance: string;
}

export interface AmenityType {
    id: number;
    about: LanguageValue[];
    value: ValueItem[];
}
