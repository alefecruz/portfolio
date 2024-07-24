import { IImageProps } from '@/components/atoms/image';
import { IButtonProps } from '@/components/molecules/button';

import { ISelectLenguageProps } from '@/components/molecules/select-lenguage';

export interface ILinkTreeProps {
    myPicture: Pick<IImageProps, 'source' | 'alt' | 'sizeWidth'>;
    settings: {
        idioma: ISelectLenguageProps;
    };
    socialButtonList: {
        link: string;
        iconName: IButtonProps['iconLeftName'];
    }[];
    linkOne?: {
        label: string;
        link: string;
    };
    linkTwo?: {
        label: string;
        link: string;
    };
    linkThree?: {
        label: string;
        link: string;
    };
    linkFour?: {
        label: string;
        link: string;
    };
    footerMessage: string;
}
