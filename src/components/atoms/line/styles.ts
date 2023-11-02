import styled from 'styled-components';
import { ILineProps } from './interfaces';
import { strokeSizeMapper } from './mappers';

export const LineComponent = styled.hr.attrs(
    ({ theme, strokeSize, color }: any & ILineProps) => ({
        color:
            color === undefined ? theme.COLORS.ACCENTED : theme.COLORS[color],
        size:
            strokeSize === undefined
                ? strokeSizeMapper.MEDIUM
                : strokeSizeMapper[strokeSize],
    }),
)<ILineProps>`
    width: ${({ width }) => (width === undefined ? 10 : width)}rem;
`;
