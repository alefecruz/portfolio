import { CSSProp } from 'styled-components';
import * as themeMapper from './mappers';
export interface IColorTheme {
    ACCENTED: CSSProp;
    PRIMARY: CSSProp;
    SECONDARY: CSSProp;
    DISABLED: CSSProp;
    DANGER: CSSProp;
    LIGHT: CSSProp;
    DARK: CSSProp;
}

export interface IFontTheme {
    THIN: CSSProp;
    LIGHT: CSSProp;
    REGULAR: CSSProp;
    MEDIUM: CSSProp;
    SEMI_BOLD: CSSProp;
    BOLD: CSSProp;
}

export interface IMediaTheme {
    LTE_SMALL: CSSProp;
    LTE_MEDIUM: CSSProp;
    LTE_LARGE: CSSProp;
}

export interface ISizeTheme {
    XSMALL: CSSProp;
    SMALL: CSSProp;
    MEDIUM: CSSProp;
    LARGE: CSSProp;
    XLARGE: CSSProp;
    XXLARGE: CSSProp;
    HUGE: CSSProp;
    XHUGE: CSSProp;
}

export interface ISpacingTheme {
    XSMALL: CSSProp;
    SMALL: CSSProp;
    MEDIUM: CSSProp;
    LARGE: CSSProp;
    XLARGE: CSSProp;
    XXLARGE: CSSProp;
    HUGE: CSSProp;
    XHUGE: CSSProp;
}

export interface ISelectTheme {
    color: keyof typeof themeMapper.colorMap;
    font: keyof typeof themeMapper.fontMap;
    size: keyof typeof themeMapper.sizeMap;
    media: keyof typeof themeMapper.mediaMap;
    spacing: keyof typeof themeMapper.spacingMap;
}
