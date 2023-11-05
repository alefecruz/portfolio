import 'styled-components';
import {
    IColorTheme,
    IFontTheme,
    IMediaTheme,
    ISizeTheme,
    ISpacingTheme,
} from './interfaces';

export interface ITheme {
    COLORS: IColorTheme;
    FONTS: IFontTheme;
    SIZES: ISizeTheme;
    MEDIAS: IMediaTheme;
    SPACINGS: ISpacingTheme;
}

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
