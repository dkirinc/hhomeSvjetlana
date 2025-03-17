// src/types/houseCharacteristics.ts

export interface AboutValue {
    hr: string;
    en: string;
    deu: string;
}

export interface ValueItem {
    id: number;
    src: string;
}

export interface GalleryType {
    id: number;
    about: AboutValue[];
    value: ValueItem[];
}
