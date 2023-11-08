'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { Icon } from '@/components/atoms/icon';

import { ILogoProps } from './interfaces';

const Logo = ({ description, iconName, title }: ILogoProps): ReactElement => (
    <S.Container>
        <Icon name={iconName} color="ACCENTED" size="HUGE" />
        <S.ContentLogoInfo>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.ContentLogoInfo>
    </S.Container>
);

export default Logo;
