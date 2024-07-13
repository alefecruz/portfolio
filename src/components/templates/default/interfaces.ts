import { IImageProps } from '@/components/atoms/image';
import { IButtonProps } from '@/components/molecules/button';
import { IDownProps } from '@/components/molecules/down';

import { ILogoProps } from '@/components/molecules/logo';
import { ISelectLenguageProps } from '@/components/molecules/select-lenguage';
import { ICardExperienceProps } from '@/components/organisms/card-experience';
import { ICardProjectProps } from '@/components/organisms/card-project';
import { INavbarProps } from '@/components/organisms/navbar';

export interface IDefaultProps {
    myInfo: IMyInfo;
    settings: {
        idioma: ISelectLenguageProps;
    };
    aboutSection: IAbout;
    experienceSection: IExperience;
    projectSection: IProject;
}

export interface IMyInfo {
    logo?: ILogoProps;
    title: string;
    description: string;
    socialButtonList: {
        link: string;
        iconName: IButtonProps['iconLeftName'];
    }[];
    navbarOptionList: INavbarProps['optionList'];
    getInTouchButton: {
        label: string;
        email: string;
    };
    resumeButton: {
        label: string;
        link: string;
    };
}

export interface IAbout {
    aboutTitle: string;
    aboutRef: any;
    myPicture: Pick<IImageProps, 'source' | 'alt' | 'sizeWidth'>;
    paragraphs: string[];
}

export interface IExperience {
    experienceTitle: string;
    experienceRef: any;
    experienceList: ICardExperienceProps[];
}
export interface IProject {
    projectTitle: string;
    projectRef: any;
    projectList: ICardProjectProps[];
}
