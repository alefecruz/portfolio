import styled from 'styled-components';
import { ILineProps } from './interfaces';
import { strokeSizeMapper } from './mappers';

export const LineComponent = styled.hr<ILineProps>`
    border-color: ${({ theme, color }) =>
        color === undefined ? theme.COLORS.ACCENTED : theme.COLORS[color]};
    border-style: solid;
    border-top: 1px;
    border-width: ${({ strokeSize }) =>
        strokeSize === undefined
            ? strokeSizeMapper.MEDIUM
            : strokeSizeMapper[strokeSize]}rem;
    width: ${({ width }) => (width === undefined ? 10 : width)}rem;
`;
