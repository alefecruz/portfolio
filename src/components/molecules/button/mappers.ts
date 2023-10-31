import { css } from 'styled-components';
import { IFormatMapper } from './interfaces';

export const formarMapper: {
    [key: string]: IFormatMapper;
} = {
    OUTLINE_ACCENTED: {
        box: css`
            border: 5px solid ${({ theme }) => theme.COLORS.ACCENTED};
            background-color: transparent;
        `,
        contentColor: 'ACCENTED',
    },
    OUTLINE_PRIMARY: {
        box: css`
            border: 5px solid ${({ theme }) => theme.COLORS.PRIMARY};
            background-color: transparent;
        `,
        contentColor: 'PRIMARY',
    },
    OUTLINE_SECONDARY: {
        box: css`
            border: 5px solid ${({ theme }) => theme.COLORS.SECONDARY};
            background-color: transparent;
        `,
        contentColor: 'SECONDARY',
    },
    FILLED_PRIMARY: {
        box: css`
            background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        `,
        contentColor: 'LIGHT',
    },
    FILLED_SECONDARY: {
        box: css`
            background-color: ${({ theme }) => theme.COLORS.SECONDARY};
        `,
        contentColor: 'LIGHT',
    },
    FILLED_ACCENTED: {
        box: css`
            background-color: ${({ theme }) => theme.COLORS.ACCENTED};
        `,
        contentColor: 'LIGHT',
    },
    NONE_ACCENTED: {
        box: css`
            background-color: transparent;
        `,
        contentColor: 'ACCENTED',
    },
    NONE_SECONDARY: {
        box: css`
            background-color: transparent;
        `,
        contentColor: 'SECONDARY',
    },
    NONE_PRIMARY: {
        box: css`
            background-color: transparent;
        `,
        contentColor: 'PRIMARY',
    },
};
