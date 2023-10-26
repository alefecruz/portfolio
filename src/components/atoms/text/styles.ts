import styled from 'styled-components';
import { ITextProps } from './interfaces';
import { formatMepper, letterCaseMapper } from './mappers';

export const TextComponent = styled.p<ITextProps>`
    color: ${({ theme, color }) =>
        color === undefined ? theme.COLORS.PRIMARY : theme.COLORS[color]};
    ${({ letterCase }) =>
        letterCase === undefined
            ? letterCaseMapper.NONE
            : letterCaseMapper[letterCase]}
    ${({ format }) =>
        format === undefined ? formatMepper.BODY : formatMepper[format]}
`;
