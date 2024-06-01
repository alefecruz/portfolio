import {
    IAbout,
    IExperience,
    IMyInfo,
    IProject,
} from '@/components/templates/default/interfaces';

export type IIdioma = 'PT_BR' | 'EN_US';

export type IAboutData = {
    [key in IIdioma]: Omit<IAbout, 'aboutRef'>;
};

export type IMyInfoData = {
    [key in IIdioma]: Omit<IMyInfo, 'navbarOptionList'>;
};

export type ISocialList = IMyInfo['socialButtonList'];

export type IProjectsData = {
    [key in IIdioma]: Omit<IProject, 'projectRef'>;
};

export type IWorksData = {
    [key in IIdioma]: Omit<IExperience, 'experienceRef'>;
};
