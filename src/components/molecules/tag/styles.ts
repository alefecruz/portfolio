import styled from 'styled-components';
import { ITagProps } from './interfaces';

export const TagComponent = styled.div<Omit<ITagProps, 'label'>>`
    display: inline-block;
    padding: ${({ theme }) => theme.SPACINGS.XXSMALL}
        ${({ theme }) => theme.SPACINGS.XSMALL};
    margin: ${({ theme }) => theme.SPACINGS.XXSMALL};
    background-color: ${({ theme, color }) =>
        color === undefined ? theme.COLORS.ACCENTED : theme.COLORS[color]};
`;
