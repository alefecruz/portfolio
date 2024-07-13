'use client';

import { type ReactElement } from 'react';
import { Icon } from '@/components/atoms/icon';

import * as S from './styles';

const Loading = (): ReactElement => (
    <S.Container>
        <S.AnimationIcon>
            <Icon name="LOGO" color="BASE" size="HUGE" />
        </S.AnimationIcon>
    </S.Container>
);

export default Loading;
