import * as themeMapper from './mappers';
export interface IColorTheme {
    ACCENTED: string;
    PRIMARY: string;
    SECONDARY: string;
    DISABLED: string;
    DANGER: string;

    LIGHT: string;
    DARK: string;
}

export interface IFontTheme {
    THIN: string;
    LIGHT: string;
    REGULAR: string;
    MEDIUM: string;
    SEMI_BOLD: string;
    BOLD: string;
}

export interface IMediaTheme {
    LTE_SMALL: string;
    LTE_MEDIUM: string;
    LTE_LARGE: string;
}

export interface ISizeTheme {
    XSMALL: string;
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
    XLARGE: string;
    XXLARGE: string;
    HUGE: string;
    XHUGE: string;
}

export interface ISpacingTheme {
    XXSMALL: string;
    XSMALL: string;
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
    XLARGE: string;
    XXLARGE: string;
    HUGE: string;
    XHUGE: string;
}

export interface ISelectTheme {
    color: keyof typeof themeMapper.colorMap;
    font: keyof typeof themeMapper.fontMap;
    size: keyof typeof themeMapper.sizeMap;
    media: keyof typeof themeMapper.mediaMap;
    spacing: keyof typeof themeMapper.spacingMap;
}
