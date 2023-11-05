import { DefaultTheme } from 'styled-components';
import { ISelectTheme } from './interfaces';
import * as themeMapper from './mappers';

export const selectTheme = ({
    color = 'default',
    font = 'montserrat',
    size = 'default',
    media = 'default',
    spacing = 'default',
}: ISelectTheme): DefaultTheme => {
    return {
        ...themeMapper.colorMap[color],
        ...themeMapper.fontMap[font],
        ...themeMapper.sizeMap[size],
        ...themeMapper.mediaMap[media],
        ...themeMapper.spacingMap[spacing],
    };
};
