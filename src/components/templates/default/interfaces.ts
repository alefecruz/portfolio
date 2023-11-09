import { IButtonProps } from '@/components/molecules/button';
import { ILogoProps } from '@/components/molecules/logo';
import { INavbarProps } from '@/components/organisms/navbar';

export interface IDefaultProps {
    myInfo: IMyInfo;
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
