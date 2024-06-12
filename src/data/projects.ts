import { IProjectsData } from './interfaces';

export const projects: IProjectsData = {
    PT_BR: {
        projectTitle: 'Projetos',
        projectList: [
            {
                projectImage: {
                    source: '/assets/images/projectHAI.png',
                    alt: 'Salvus HAI',
                },
                accessLink: {
                    label: 'Ver mais',
                    navigate:
                        'https://www.salvus.me/pt-br/hai-sistema-gestao-homecare',
                },
                title: 'HAI',
                description:
                    'É uma solução inteligente para gestão da operação e da assistência do home care, através de uma plataforma em nuvem e aplicativos mobile.',
                tagList: [
                    'nodejs',
                    'reactjs',
                    'js',
                    'ts',
                    'SQL',
                    'React Native',
                ],
            },
            {
                projectImage: {
                    source: '/assets/images/projectSalvus.png',
                    alt: 'Salvus',
                },
                title: 'SALVUS-CHALLENGE',
                accessLink: {
                    label: 'Ver mais',
                    navigate: 'https://github.com/alefecruz/salvus-challenge',
                },
                description:
                    'Criada em React.js, para conectar profissionais de saúde, um desafio proposto pela empresa Salvus.',
                tagList: ['nodejs', 'reactjs', 'ts'],
            },
        ],
    },
    EN_US: {
        projectTitle: 'Projects',
        projectList: [
            {
                projectImage: {
                    source: '/assets/images/projectHAI.png',
                    alt: 'Salvus HAI',
                },
                title: 'HAI',
                accessLink: {
                    label: 'See more',
                    navigate: 'https://github.com/alefecruz/salvus-challenge',
                },
                description:
                    'It is an intelligent solution for managing home care operations and assistance, through a cloud platform and mobile applications.',
                tagList: [
                    'nodejs',
                    'reactjs',
                    'js',
                    'ts',
                    'SQL',
                    'React Native',
                ],
            },
            {
                projectImage: {
                    source: '/assets/images/projectSalvus.png',
                    alt: 'Salvus',
                },
                title: 'SALVUS-CHALLENGE',
                accessLink: {
                    label: 'See more',
                    navigate: 'https://github.com/alefecruz/salvus-challenge',
                },
                description:
                    'Landing Page created in React.js, to connect healthcare professionals, a challenge proposed by the company Salvus.',
                tagList: ['nodejs', 'reactjs', 'ts'],
            },
        ],
    },
};
