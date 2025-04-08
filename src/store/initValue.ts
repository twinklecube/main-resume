import {InitValue} from "./store.types.ts";

export const initValue: InitValue = {
    leftColumn: [
        {
            page: 1,
            order: 1,
            title: 'A bit about me',
            list: [
                [
                    'A Permanent Resident of Germany',
                    'Living in Germany since 09.05.2019',
                    'at Wallbergstrasse 10, 81539, Munich'
                ],
                [
                    'English: Professional',
                    'German: B1'
                ],
                [
                    'malinsamare@gmail.com',
                    '+49 151 175 773 04, +49 89 5505 6427'
                ],
                [
                    'Born in Galle, Sri Lanka on 29.11.1980'
                ]
            ]
        },
        {
            page: 1,
            order: 2,
            title: 'Previous Professional Experiences',
            startParagraph: ['Before moving to Germany, I was working as a Business Manager in my home country'],
            list: [
                [
                    'Product Manager - GE Radiology Medical Devices',
                    'November 2016 to April 2019',
                    'Access International (Pvt) Ltd'
                ],
                [
                    'Assistant Product Manager - Critical Care Medical Devices',
                    'March 2013 to November 2016',
                    'Technomedics International (Pvt) Ltd'
                ]
            ]
        },
        // {
        //     page: 1,
        //     order: 1,
        //     title: 'Education'
        // },
        {
            page: 1,
            order: 3,
            title: 'Milestones',
            list: [
                ['Selected to represent the Check24 Conference - 2025'],
                ['Had the privilege of getting selected to the \'Excellent Program\' of Check24 - 2023'],
                ['Awarded the National Price(Sri Lanka) of CMGA/CIMA - 2014']
            ]
        }
    ]
}
