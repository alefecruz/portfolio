import { css } from 'styled-components';

import { type FontFormat } from './interfaces';

export const FONTS: FontFormat = {
    THIN: css`
        font-weight: 100;
        font-family: 'Montserrat';
    `,
    LIGHT: css`
        font-weight: 300;
        font-family: 'Montserrat';
    `,
    REGULAR: css`
        font-weight: 400;
        font-family: 'Montserrat';
    `,
    MEDIUM: css`
        font-weight: 500;
        font-family: 'Montserrat';
    `,
    SEMI_BOLD: css`
        font-weight: 600;
        font-family: 'Montserrat';
    `,
    BOLD: css`
        font-weight: 700;
        font-family: 'Montserrat';
    `,
};
