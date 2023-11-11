import { IImageProps } from '@/components/atoms/image';
import { IButtonProps } from '@/components/molecules/button';
import { ILogoProps } from '@/components/molecules/logo';
import { ICardExperienceProps } from '@/components/organisms/card-experience';
import { ICardProjectProps } from '@/components/organisms/card-project';
import { INavbarProps } from '@/components/organisms/navbar';

export interface IDefaultProps {
    myInfo: IMyInfo;
    aboutSection: IAbout;
    experienceSection: IExperience;
    projectSection: IProject;
}

interface IMyInfo {
    logo?: ILogoProps;
    title: string;
    subtitle: string;
    description: string;
    socialButtonList: Pick<IButtonProps, 'iconLeftName' | 'onPress'>[];
    navbarOptionList: INavbarProps['optionList'];
    getInTouchButton: Pick<IButtonProps, 'label' | 'onPress'>;
}

interface IAbout {
    aboutTitle: string;
    aboutRef: any;
    myPicture: Pick<IImageProps, 'source' | 'alt'>;
    text: string;
}

interface IExperience {
    experienceTitle: string;
    experienceRef: any;
    experienceList: ICardExperienceProps[];
}
interface IProject {
    projectTitle: string;
    projectRef: any;
    projectList: ICardProjectProps[];
}
