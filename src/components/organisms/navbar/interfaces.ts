import { IColorTheme } from '@/global/theme';

export interface INavbarProps {
    optionList?: IOptionNavbar[];
    optionSelectedColor?: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY'
    >;
    optionDontSelectedColor?: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY'
    >;
}

interface IOptionNavbar {
    label: string;
    onPress: () => void;
    isSelected: boolean;
}
