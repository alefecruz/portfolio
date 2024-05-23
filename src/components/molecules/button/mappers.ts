import { css } from 'styled-components';
import { IFormatMapper } from './interfaces';

export const formarMapper: {
    [key: string]: IFormatMapper;
} = {
    OUTLINE_ACCENTED: {
        box: css`
            border: 5px solid ${({ theme }) => theme.COLORS.ACCENTED};
            background-color: transparent;
            padding: 1.2rem;
        `,
        contentColor: 'ACCENTED',
    },
    OUTLINE_PRIMARY: {
        box: css`
            border: 5px solid ${({ theme }) => theme.COLORS.PRIMARY};
            background-color: transparent;
            padding: 1.2rem;
        `,
        contentColor: 'PRIMARY',
    },
    OUTLINE_SECONDARY: {
        box: css`
            border: 5px solid ${({ theme }) => theme.COLORS.SECONDARY};
            background-color: transparent;
            padding: 1.2rem;
        `,
        contentColor: 'SECONDARY',
    },
    FILLED_PRIMARY: {
        box: css`
            background-color: ${({ theme }) => theme.COLORS.PRIMARY};
            padding: 1.2rem;
        `,
        contentColor: 'LIGHT',
    },
    FILLED_SECONDARY: {
        box: css`
            background-color: ${({ theme }) => theme.COLORS.SECONDARY};
            padding: 1.2rem;
        `,
        contentColor: 'LIGHT',
    },
    FILLED_ACCENTED: {
        box: css`
            background-color: ${({ theme }) => theme.COLORS.ACCENTED};
            padding: 1.2rem;
        `,
        contentColor: 'SECONDARY',
    },
    NONE_PRIMARY: {
        box: css`
            background-color: transparent;
        `,
        contentColor: 'PRIMARY',
    },
    NONE_SECONDARY: {
        box: css`
            background-color: transparent;
        `,
        contentColor: 'SECONDARY',
    },
    NONE_ACCENTED: {
        box: css`
            background-color: transparent;
        `,
        contentColor: 'ACCENTED',
    },
};
