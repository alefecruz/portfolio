import { IIconProps } from '@/components/atoms/icon';
import { ISpacingTheme, IColorTheme } from '@/global/theme/interfaces';
import { formarMapper } from './mappers';
import { RuleSet } from 'styled-components';

export interface IButtonProps {
    label?: string;
    iconLeftName?: IIconProps['name'];
    format?: keyof typeof formarMapper;
    size?: keyof Pick<ISpacingTheme, 'XSMALL' | 'SMALL' | 'XXSMALL'>;
    isStretch?: boolean;
    onPress?: () => void;
}

export interface IFormatMapper {
    box: RuleSet<object>;
    contentColor: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY' | 'LIGHT'
    >;
}
