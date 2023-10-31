import { IColorTheme, ISizeTheme } from '@/global/theme';
import { nameMapper } from './mappers';

export interface IIconProps {
    name?: keyof typeof nameMapper;
    size?: keyof ISizeTheme;
    color?: keyof IColorTheme;
}
