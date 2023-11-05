import styled from 'styled-components';
import { ILineProps } from './interfaces';
import { strokeSizeMapper } from './mappers';

export const LineComponent = styled.hr.attrs<ILineProps>(
    ({ theme, strokeColor = 'PRIMARY', strokeSize = 'MEDIUM' }) => ({
        color: theme.COLORS[strokeColor]?.toString(),
        size: strokeSizeMapper[strokeSize],
    }),
)`
    width: ${({ width }) => (width === undefined ? 10 : width)}rem;
`;
