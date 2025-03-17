/* const GalleryData = [
    {
        id: 1,
        about: [
            {
                hr: 'Kuhinja',
                en: '',
                deu: '',
            }
        ],
        value: [
            {
                id: 1,
                src: "@/app/images/house/kitchen1.png"
            },
            {
                id: 2,
                src: "@/app/images/house/kitchen1.png"
            },

        ]
    },
    {
        id: 2,
        about: [
            {
                hr: 'Sobe',
                en: '',
                deu: '',
            }
        ],
        value: [
            {
                id: 1,
                src: "@/app/images/house/room1.png"
            },


        ]
    },
    {
        id: 3,
        about: [
            {
                hr: 'Kupaonica',
                en: '',
                deu: '',
            }
        ],
        value: [
            {
                id: 1,
                src: "@/app/images/house/bathroom1.png"
            },
            {
                id: 2,
                src: "@/app/images/house/bathroom1.png"
            },

        ]
    },
    {
        id: 4,
        about: [
            {
                hr: 'Terasa',
                en: '',
                deu: '',
            }
        ],
        value: [
            {
                id: 1,
                src: "@/app/images/house/terace1.png"
            },

        ]
    },
    {
        id: 5,
        about: [
            {
                hr: 'Dnevni boravak',
                en: '',
                deu: '',
            }
        ],
        value: [
            {
                id: 1,
                src: "@/app/images/house/livingroom1.png"
            },
            {
                id: 2,
                src: "@/app/images/house/livingroom1.png"
            },

        ]
    },

]
export default GalleryData */




// src/assets/GalleryData.ts
import { GalleryType } from '@/app/types/GalleryType';

const GalleryData: GalleryType[] = [
    {
        id: 1,
        about: [
            {
                hr: 'Kuhinja',
                en: '',
                deu: '',
            },
        ],
        value: [
            {
                id: 1,
                src: '/images/house/kitchen1.png',

            },
            {
                id: 2,
                src: '/images/house/kitchen2.png',
            },
        ],
    },
    {
        id: 2,
        about: [
            {
                hr: 'Sobe',
                en: '',
                deu: '',
            },
        ],
        value: [
            {
                id: 1,
                src: '/images/house/room1.png',
            },
        ],
    },
    {
        id: 3,
        about: [
            {
                hr: 'Kupaonica',
                en: '',
                deu: '',
            },
        ],
        value: [
            {
                id: 1,
                src: "/images/house/bathroom1.png"
            },
            {
                id: 2,
                src: "/images/house/bathroom1.png"
            },

        ]
    },
    {
        id: 4,
        about: [
            {
                hr: 'Sobe',
                en: '',
                deu: '',
            },
        ],
        value: [
            {
                id: 1,
                src: "/images/house/terace1.png"
            },

        ]
    },
    {
        id: 5,
        about: [
            {
                hr: 'Dnevni boravak',
                en: '',
                deu: '',
            },
        ],
        value: [
            {
                id: 1,
                src: "/images/house/livingroom1.png"
            },
            {
                id: 2,
                src: "/images/house/livingroom1.png"
            },

        ]
    },
    // Add more objects...
];

export default GalleryData;
