import styled from 'styled-components';
import { ITextProps } from './interfaces';
import { formatMepper, letterCaseMapper, alignMapper } from './mappers';

export const TextComponent = styled.div<ITextProps>`
    color: ${({ theme, color }) =>
        color === undefined ? theme.COLORS.PRIMARY : theme.COLORS[color]};
    ${({ letterCase }) =>
        !letterCase ? letterCaseMapper.NONE : letterCaseMapper[letterCase]}
    ${({ format }) => (!format ? formatMepper.BODY : formatMepper[format])}
    ${({ align }) => (!align ? alignMapper.NONE : alignMapper[align])}
`;
