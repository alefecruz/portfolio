import { type ReactElement } from 'react';

import * as S from './styles';

import { IImageProps } from './interfaces';

const Image = ({
    source = '/assets/images/default.png',
    sizeHeight,
    sizeWidth,
    alt,
}: IImageProps): ReactElement => {
    return (
        <S.ImageComponent
            src={source}
            sizeHeight={sizeHeight}
            sizeWidth={sizeWidth}
            alt={alt}
        />
    );
};

export default Image;
