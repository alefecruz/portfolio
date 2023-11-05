import { IColorTheme } from '@/global/theme';
import { strokeSizeMapper } from './mappers';

export interface ILineProps {
    width?: number;
    strokeColor?: keyof IColorTheme;
    strokeSize?: keyof typeof strokeSizeMapper;
}
