'use client';

import { type ReactElement } from 'react';
import { Icon } from '@/components/atoms/icon';

import * as S from './styles';

const Loading = (): ReactElement => (
    <S.Container>
        <Icon name="LOGO" color="BASE" size="HUGE" />
    </S.Container>
);

export default Loading;
