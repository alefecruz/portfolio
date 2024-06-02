import { type ReactElement } from 'react';

import * as S from './styles';
import { nameMapper } from './mappers';

import { IIconProps } from './interfaces';
const Icon = ({ name, color, size }: IIconProps): ReactElement => {
    const src: string | undefined = name ? nameMapper[name] : nameMapper.DEVOT;
    /* @ts-ignore */
    return <S.IconComponent src={src} color={color} size={size} />;
};

export default Icon;
