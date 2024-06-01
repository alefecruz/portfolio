import { IMyInfoData, ISocialList } from './interfaces';

const socialButtonList: ISocialList = [
    {
        link: 'https://www.linkedin.com/in/alefecruz/',
        iconName: 'LINKED_IN',
    },
    {
        link: 'https://github.com/alefecruz',
        iconName: 'GIT_HUB',
    },
    {
        link: 'https://discord.gg/43rztgGAsX',
        iconName: 'DISCORD',
    },
    {
        link: 'https://www.instagram.com/alefecrz/',
        iconName: 'INSTAGRAM',
    },
];

export const myInfo: IMyInfoData = {
    PT_BR: {
        logo: {
            title: 'Olá! Sou Álefe Cruz',
            iconName: 'LOGO',
        },
        title: 'Engenheiro da Compatação | Desenvolvedor | Lider Técnico',
        description:
            'Sempre em busca de novos desafios e oportunidades de aprendizado para aprimorar minhas habilidades técnicas e de liderança.',
        socialButtonList,
        getInTouchButton: {
            label: 'Entre em contato',
            email: 'alefe@devot.com.br',
        },
        resumeButton: {
            label: 'Curriculo',
            link: '/assets/images/default.png',
        },
    },
    EN_US: {
        logo: {
            title: "Hi! I'm Álefe Cruz",
            iconName: 'LOGO',
        },
        title: 'Computer Engineer | Dev | Tech Lead',
        description:
            'Always seeking new challenges and learning opportunities to enhance my technical and leadership skills.',
        socialButtonList,
        getInTouchButton: {
            label: 'Getting in touch',
            email: 'alefe@devot.com.br',
        },
        resumeButton: {
            label: 'Resume',
            link: '/assets/images/default.png',
        },
    },
};
