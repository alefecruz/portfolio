const myPicture = '/assets/images/myPicture.png';
import { ILinkTree, ISocialList } from './interfaces';

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

export const linkTree: ILinkTree = {
    PT_BR: {
        myPicture: {
            source: myPicture,
            alt: 'minha imagem',
            sizeWidth: 20,
        },
        socialButtonList,
        linkOne: {
            label: 'Veja meu Portifólio',
            link: 'https://www.alefecruz.com.br',
        },
        footerMessage: 'Feito com ❤️ por Álefe Cruz',
    },
    EN_US: {
        myPicture: {
            source: myPicture,
            alt: 'My image',
            sizeWidth: 20,
        },
        socialButtonList,
        linkOne: {
            label: 'See my portfolio',
            link: 'https://www.alefecruz.com.br',
        },
        footerMessage: 'Made with ❤️ by Álefe Cruz',
    },
};
