import { css } from 'styled-components';

export const formatMepper = {
    TITLE_1: css`
        ${({ theme }) => theme.FONTS.BOLD};
        font-size: ${({ theme }) => theme.SIZES.LARGE};
    `,
    TITLE_2: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.MEDIUM};
    `,
    TITLE_3: css`
        ${({ theme }) => theme.FONTS.BOLD};
        font-size: ${({ theme }) => theme.SIZES.SMALL};
        text-transform: uppercase;
    `,
    SUBTITLE: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.MEDIUM};
    `,
    BODY: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.XSMALL};
    `,
    DESCRIPTION: css`
        ${({ theme }) => theme.FONTS.REGULAR};
        font-size: ${({ theme }) => theme.SIZES.SMALL};
    `,
    BUTTON: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.XSMALL};
        text-transform: uppercase;
    `,
    TAG: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.XSMALL};
    `,
    LINK: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.SMALL};
        text-decoration: underline;
    `,
};

export const letterCaseMapper = {
    CAPITALIZE: css`
        text-transform: capitalize;
    `,
    UPPER_CASE: css`
        text-transform: uppercase;
    `,
    LOWER_CASE: css`
        text-transform: lowercase;
    `,
    NONE: css`
        text-transform: none;
    `,
};

export const alignMapper = {
    CENTER: css`
        text-align: center;
    `,
    LEFT: css`
        text-align: left;
    `,
    RIGHT: css`
        text-align: right;
    `,
    NONE: css`
        text-align: none;
    `,
};
