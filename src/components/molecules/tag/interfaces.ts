import { IColorTheme } from '@/global/theme';

export interface ITagProps {
    label: string;
    color?: keyof Pick<IColorTheme, 'ACCENTED' | 'PRIMARY' | 'SECONDARY'>;
}
