import { type ITheme } from './styled';
import * as themeMapper from './mappers';
import { ISelectTheme } from './interfaces';

export const selectTheme = ({
    color = 'default',
    font = 'montserrat',
    size = 'default',
    media = 'default',
    spacing = 'default',
}: ISelectTheme): ITheme => {
    return {
        ...themeMapper.colorMap[color],
        ...themeMapper.fontMap[font],
        ...themeMapper.sizeMap[size],
        ...themeMapper.mediaMap[media],
        ...themeMapper.spacingMap[spacing],
    };
};
