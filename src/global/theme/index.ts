import * as COLORS from './colors';
import * as FONTS from './fonts';

import * as SIZES from './sizes';
import * as MEDIAS from './medias';
import * as SPACINGS from './spacings';

import { type ThemeType } from './styled';

const colorMap = {
    default: COLORS.DEFAULT,
    dark: COLORS.DARK,
    light: COLORS.LIGHT,
};

const fontMap = {
    montserrat: FONTS.MONTSERRAT,
};

const sizeMap = {
    default: SIZES.DEFAULT,
};

const mediaMap = {
    default: MEDIAS.DEFAULT,
};

const spacingMap = {
    default: SPACINGS.DEFAULT,
};

interface selectThemeInterface {
    color: keyof typeof colorMap;
    font: keyof typeof fontMap;
    size: keyof typeof sizeMap;
    media: keyof typeof mediaMap;
    spacing: keyof typeof spacingMap;
}
export const selectTheme = ({
    color = 'default',
    font = 'montserrat',
    size = 'default',
    media = 'default',
    spacing = 'default',
}: selectThemeInterface): ThemeType => {
    return {
        ...colorMap[color],
        ...fontMap[font],
        ...sizeMap[size],
        ...mediaMap[media],
        ...spacingMap[spacing],
    };
};
