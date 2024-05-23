'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { Icon } from '@/components/atoms/icon';

import { ILogoProps } from './interfaces';

const Logo = ({ iconName, title }: ILogoProps): ReactElement => (
    <S.Container>
        <Icon name={iconName} color="ACCENTED" size="XLARGE" />
        <S.ContentLogoInfo>
            <S.Title>{title}</S.Title>
        </S.ContentLogoInfo>
    </S.Container>
);

export default Logo;
