import styled from 'styled-components';

import { IImageProps } from './interfaces';

export const ImageComponent = styled.img<
    Pick<IImageProps, 'sizeHeight' | 'sizeWidth'>
>`
    width: ${({ sizeWidth }) => (sizeWidth ? sizeWidth : 20)}rem;
    height: ${({ sizeHeight }) => sizeHeight !== undefined && sizeHeight}rem;
    border: 3px solid ${({ theme }) => theme.COLORS.SECONDARY};
    padding: 5px;
    object-fit: cover;
`;
