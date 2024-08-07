import {
    IAbout,
    IExperience,
    IMyInfo,
    IProject,
} from '@/components/templates/default/interfaces';

import { ILinkTreeProps } from '@/components/templates/link-tree/interfaces';

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

export type ILinkTree = {
    [key in IIdioma]: Omit<ILinkTreeProps, 'settings'>;
};
