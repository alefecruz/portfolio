import { IProjectsData } from './interfaces';

export const projects: IProjectsData = {
    PT_BR: {
        projectTitle: 'Projetos',
        projectList: [
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
                    'Página criada em React.js, para conectar profissionais de saúde, um desafio proposto pela empresa Salvus.',
                tagList: ['nodejs', 'reactjs', 'ts'],
            },
        ],
    },
    EN_US: {
        projectTitle: 'Projects',
        projectList: [
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
