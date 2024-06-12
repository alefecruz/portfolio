import { ReactElement } from 'react';
import { IColorTheme } from '@/global/theme';
import { formatMepper, letterCaseMapper, alignMapper } from './mappers';

export interface ITextProps {
    format?: keyof typeof formatMepper;
    letterCase?: keyof typeof letterCaseMapper;
    align?: keyof typeof alignMapper;
    color?: keyof IColorTheme;
    children?: string | ReactElement;
}
