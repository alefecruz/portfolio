import styled from 'styled-components';
import { ITagProps } from './interfaces';
import { alignMapper } from '@/components/atoms/text/mappers';

export const TagComponent = styled.div<Omit<ITagProps, 'label'>>`
    display: inline-block;
    padding: ${({ theme }) => theme.SPACINGS.XXSMALL}
        ${({ theme }) => theme.SPACINGS.XSMALL};
    margin: ${({ theme }) => theme.SPACINGS.XXSMALL}
        ${({ theme }) => theme.SPACINGS.XXSMALL} 0 0;
    background-color: ${({ theme, color }) =>
        !color ? theme.COLORS.ACCENTED : theme.COLORS[color]};

    display: flex;
    align-items: center;
`;
