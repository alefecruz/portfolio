import styled from 'styled-components';
import { formarMapper } from './mappers';
import { IButtonContent } from './interfaces';
import { css } from 'styled-components';

export const ButtonComponent = styled.button<IButtonContent>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    ${({ format }) =>
        format === undefined
            ? formarMapper.FILLED_ACCENTED.box
            : formarMapper[format].box};
    ${({ isStretch }) =>
        isStretch === true &&
        css`
            width: 100%;
        `};

    transition: 0.3s ease transform;

    &:hover {
        transform: scale(1.1);
    }
`;

export const IconContent = styled.div``;

export const LabelContent = styled.div``;
