import { IProjectsData } from './interfaces';

export const projects: IProjectsData = {
    PT_BR: {
        projectTitle: 'Projetos',
        projectList: [
            {
                projectImage: {
                    source: '/assets/images/projectHAI.png',
                    alt: 'SalvusHAI',
                },
                accessLink: {
                    label: 'Ver mais',
                    navigate:
                        'https://www.salvus.me/pt-br/hai-sistema-gestao-homecare',
                },
                title: 'HAI',
                description:
                    'It is an intelligent solution for managing home care operations and assistance, through a cloud platform and mobile applications. In this project my main contributions were: Leading the MOBILE development time and fullStack development',
                tagList: [
                    'nodejs',
                    'reactjs',
                    'js',
                    'ts',
                    'SQL',
                    'React Native',
                    'Expo',
                    'ANDROID',
                    'IOS',
                ],
            },
            {
                projectImage: {
                    source: '/assets/images/tamborete-pay.png',
                    alt: 'TamboretePay',
                },
                accessLink: {
                    label: 'Ver mais',
                    navigate: 'https://tamborete.com.br/',
                },
                title: 'Tamborete Pay',
                description:
                    'Uma solução completa de gestão para microempreendedor. Neste projeto, minha principais contribuições foram: Liderar a equipe de desenvolvimento e desenvolvimento da aplicação mobile para Android e IOS.',
                tagList: [
                    'nodejs',
                    'ts',
                    'react Native',
                    'Expo',
                    'ANDROID',
                    'IOS',
                ],
            },
            {
                projectImage: {
                    source: '/assets/images/leite-tech.png',
                    alt: 'Leite Tech',
                },
                title: 'Leite Tech',
                description:
                    'Controle de produção para pequenos e médios produtores de leite. Neste projeto, minha principais contribuições são: Liderar a equipe de desenvolvimento, desenvolvimento do backend e desenvolvimento do frontend mobile para ANDROID e IOS.',
                tagList: [
                    'nodejs',
                    'Express',
                    'ts',
                    'SQL',
                    'react Native',
                    'Expo',
                    'ANDROID',
                    'IOS',
                ],
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
                    'Expo',
                    'ANDROID',
                    'IOS',
                ],
            },
            {
                projectImage: {
                    source: '/assets/images/tamborete-pay.png',
                    alt: 'TamboretePay',
                },
                accessLink: {
                    label: 'Ver mais',
                    navigate: 'https://tamborete.com.br/',
                },
                title: 'Tamborete Pay',
                description:
                    'A complete management solution for microentrepreneurs. In this project, my main contributions were: Leading the development team and developing the mobile application for Android and IOS.',
                tagList: [
                    'nodejs',
                    'ts',
                    'react Native',
                    'Expo',
                    'ANDROID',
                    'IOS',
                ],
            },
            {
                projectImage: {
                    source: '/assets/images/leite-tech.png',
                    alt: 'Leite Tech',
                },
                title: 'Leite Tech',
                description:
                    'Production control for small and medium-sized milk producers. In this project, my main contributions are: Leading the development team, backend development and mobile frontend development for ANDROID and IOS.',
                tagList: [
                    'nodejs',
                    'Express',
                    'ts',
                    'SQL',
                    'react Native',
                    'Expo',
                    'ANDROID',
                    'IOS',
                ],
            },
        ],
    },
};
