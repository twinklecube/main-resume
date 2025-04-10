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
                ],
                [
                    'Ready to move within Germany'
                ]
            ]
        },
        {
            page: 1,
            order: 2,
            title: 'Education',
            list: [
                [
                    'Master of Business Administration - 2013',
                    'Middlesex University, UK',
                    'Endorsed by Kultusministerkonferenz',
                ],
                [
                    'CIMA Adv Dip MA - 2014',
                    'Chartered Institute of Management Accountants (CIMA), UK (Advanced Diploma in Management Accounting)',
                ],
                [
                    'Level 7 BTEC Advanced Professional Diploma in Management Studies - 2012',
                    'EDEXCEL, UK',
                ]
            ]
        },
        {
            page: 2,
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
        {
            page: 2,
            order: 1,
            title: 'Milestones',
            list: [
                ['Selected to represent the Check24 Conference - 2025'],
                ['Had the privilege of getting selected to the \'Excellent Program\' of Check24 - 2023'],
                ['Awarded the National Price(Sri Lanka) of CMGA/CIMA - 2014']
            ]
        }
    ],
    rightColumn: [
        {
            page: 1,
            order: 1,
            category: 'experience',
            titleText: 'Software Developer - CHECK24 Vergleichsportal Geldanlage GmbH',
            textParagraphs: [
                'From September 2021 till Present.',
                'I\'m actively in coding. Clean, Modular, and Testable code, following best practices and code review standards.',
                'Collaborating closely with cross-functional teams including product managers, UI/UX designers, and QA engineers.',
                'Contributing to the full software development lifecycle, including design, development, testing, and deployment.',
                'Working with modern tools and frameworks (React, Node.js, TypeScript, etc.) to build user-friendly interfaces and robust backend services.'
            ],
            keywordParagraphs: [
                'Javascript, Typescript, Webpack, Rollup, Babel, Vite',
                'React and related libraries - Jest, React Testing Library, React Query, Redux, RTK Query, Context API, etc.',
                'Docker, Kubernetes, Jira, Jenkins, BitBucket, Confluence, Sentry, Graylog etc.'
            ],
        },
        {
            page: 1,
            order: 1,
            category: 'project',
            titleAnchor: 'https://www.twinklecube.com/',
            textParagraphs: [
                'Twinklecube is a platform to play SUDOKU puzzle game online on browser without having to be registered.',
                'This project is consisted of five services and three frontend apps and a custom made React Typescript UI Library.',
                'Entry point is a NGINX Server/API Gateway, hosted in a EC2 instance in AWS. Rest of the services are hosted in Contabo.',
                'Frontend apps are served through Netlify. The UI Library is a GitHub repo installed in projects.'
            ],
            keywordParagraphs: [
                'JavaScript, Typescript, Node, React, Express, MongoDB, Webpack, Babel, Styled Components'
            ],
            iconContents: [
                {
                    text: 'Architecture diagram of this project: ',
                    link: 'https://drive.google.com/file/d/1lN8FVH_2swZN6HMPsV19c2mIpQFsRCAX/view?usp=sharing',
                    type: 'architecture-diagram'
                },
                {
                    text: 'UI-library: ',
                    link: 'https://github.com/twinklecube/ui-library',
                    type: 'github-repo'
                }
            ]
        },
        {
            page: 2,
            order: 1,
            category: 'project',
            titleText: 'create-ui-library, npm package',
            textParagraphs: [
                'twinklecubeUI is a simple but feature rich, developer friendly and complete React and TypeScript UI Library with adequate documentation.',
                'This library is configured to work with almost all mainstream styling including css, sass, less, styled components and emotion',
                'Development server: Webpack, Production build: Rollup',
                'Try it out: \'npx @twinklecube/create-ui-library\''
            ],
            keywordParagraphs: [
                'Javascript, Typescript, React, Webpack, Rollup, Babel'
            ],
            iconContents: [
                {
                    type: 'npm-repo',
                    link: 'https://www.npmjs.com/package/@twinklecube/create-ui-library'
                },
                {
                    type: 'github-repo',
                    link: 'https://github.com/twinklecube/create-ui-library'
                }
            ]
        },
        {
            page: 2,
            order: 2,
            category: 'project',
            titleText: 'create-react-app, npm package',
            textParagraphs: [
                'This is a React/Typescript bootstrap project',
                'Non-opinionated, only the bare minimum setup',
                'Try it out: \'npx @twinklecube/create-react-app my-react-app\''
            ],
            keywordParagraphs: [
                'React, Javascript, Typescript , Webpack, Babel'
            ],
            iconContents: [
                {
                    type: 'npm-repo',
                    link: 'https://www.npmjs.com/package/@twinklecube/create-react-app'
                },
                {
                    type: 'github-repo',
                    link: 'https://github.com/twinklecube/create-react-app'
                }
            ]
        }

    ]

}
