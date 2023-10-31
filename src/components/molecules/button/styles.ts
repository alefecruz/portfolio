import styled from 'styled-components';
import { formarMapper } from './mappers';
import { IButtonProps } from './interfaces';
import { css } from 'styled-components';

export const ButtonComponent = styled.button<Omit<IButtonProps, 'label'>>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: ${({ size, theme }) =>
        size === undefined ? theme.SPACINGS.XSMALL : theme.SPACINGS[size]};
    ${({ format }) =>
        format === undefined
            ? formarMapper.FILLED_ACCENTED.box
            : formarMapper[format].box};
    ${({ isStretch }) =>
        isStretch === true &&
        css`
            width: 100%;
        `};
    &:hover {
        opacity: 0.8;
    }
`;

export const IconContent = styled.div``;

export const LabelContent = styled.div``;
