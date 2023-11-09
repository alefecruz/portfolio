import { IColorTheme } from '@/global/theme';
import { ILinkProps } from '@/components/molecules/link';

export interface INavbarProps {
    optionList?: IOptionNavbar[];
    optionSelectedColor?: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY'
    >;
    optionDontSelectedColor?: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY' | 'LIGHT'
    >;
}

interface IOptionNavbar extends Pick<ILinkProps, 'navigate'> {
    label: string;
}
