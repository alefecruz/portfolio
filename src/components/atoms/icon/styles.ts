import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { IIconProps } from './interfaces';

export const IconComponent = styled(ReactSVG)<IIconProps>`
    color: ${({ theme, color }) =>
        color === undefined ? theme.COLORS.PRIMARY : theme.COLORS[color]};
    width: ${({ theme, size }) =>
        size === undefined ? theme.SIZES.MEDIUM : theme.SIZES[size]};
    height: ${({ theme, size }) =>
        size === undefined ? theme.SIZES.MEDIUM : theme.SIZES[size]};
`;
