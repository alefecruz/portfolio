import styled from 'styled-components';

import { IImageProps } from './interfaces';

export const ImageComponent = styled.img<
    Pick<IImageProps, 'sizeHeight' | 'sizeWidth'>
>`
    width: ${({ sizeWidth }) => sizeWidth !== undefined && sizeWidth}rem;
    height: ${({ sizeHeight }) => sizeHeight !== undefined && sizeHeight}rem;
    object-fit: cover;
`;
