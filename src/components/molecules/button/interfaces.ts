import { IIconProps } from '@/components/atoms/icon';
import { IColorTheme } from '@/global/theme/interfaces';
import { formarMapper } from './mappers';
import { RuleSet } from 'styled-components';

export interface IButtonProps {
    label?: string;
    iconLeftName?: IIconProps['name'];
    format?: keyof typeof formarMapper;
    size?: IIconProps['size'];
    isStretch?: boolean;
    onPress?: () => void;
}

export type IButtonContent = Omit<IButtonProps, 'label'>;

export interface IFormatMapper {
    box: RuleSet<object>;
    contentColor: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY' | 'BASE'
    >;
}
