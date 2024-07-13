import styled, { css } from 'styled-components';

import { IImageProps } from './interfaces';

export const ImageComponent = styled.img<
    Pick<IImageProps, 'sizeHeight' | 'sizeWidth' | 'hasBorder'>
>`
    ${({ sizeWidth }) =>
        sizeWidth
            ? css`
                  width: 20rem;
              `
            : css`
                  width: 100%;
              `}
    height: ${({ sizeHeight }) => sizeHeight !== undefined && sizeHeight}rem;
    ${({ theme, hasBorder }) =>
        hasBorder &&
        css`
            border: 3px solid ${theme.COLORS.SECONDARY};
        `};
    padding: 5px;
    object-fit: cover;
`;
