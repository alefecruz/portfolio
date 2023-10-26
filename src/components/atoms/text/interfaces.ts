import { IColorTheme } from '@/global/theme';
import { formatMepper, letterCaseMapper } from './mappers';

export interface ITextProps {
    format?: keyof typeof formatMepper;
    letterCase?: keyof typeof letterCaseMapper;
    color?: keyof IColorTheme;
    children?: string;
}
