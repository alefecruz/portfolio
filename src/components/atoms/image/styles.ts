import styled, { css } from 'styled-components';

import { IImageProps } from './interfaces';

export const ImageComponent = styled.img<
    Pick<IImageProps, 'sizeHeight' | 'sizeWidth' | 'hasBorder' | 'isCircle'>
>`
    ${({ sizeWidth }) =>
        sizeWidth
            ? css`
                  width: ${sizeWidth}rem;
              `
            : css`
                  width: 100%;
              `}
    ${({ isCircle }) =>
        isCircle === true
            ? css`
                  border-radius: 100%;
              `
            : css`
                  border-radius: 0;
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
