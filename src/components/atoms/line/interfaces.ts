import { IColorTheme } from '@/global/theme';
import { strokeSizeMapper } from './mappers';

export interface ILineProps {
    width?: number;
    color?: keyof IColorTheme;
    strokeSize?: keyof typeof strokeSizeMapper;
}
