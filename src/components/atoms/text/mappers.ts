import { css } from 'styled-components';

export const formatMepper = {
    TITLE_1: css`
        ${({ theme }) => theme.FONTS.BOLD};
        font-size: ${({ theme }) => theme.SIZES.XLARGE};
    `,
    TITLE_2: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.LARGE};
        text-transform: uppercase;
    `,
    SUBTITLE: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.LARGE};
    `,

    BODY: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.MEDIUM};
    `,
    BUTTON: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.SMALL};
        text-transform: uppercase;
    `,
    TAG: css`
        ${({ theme }) => theme.FONTS.MEDIUM};
        font-size: ${({ theme }) => theme.SIZES.SMALL};
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
