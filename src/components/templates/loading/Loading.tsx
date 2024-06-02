'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

const Loading = (): ReactElement => (
    <S.Container>
        <S.LoadingIcon name="LOGO" color="BASE" size="HUGE" />
    </S.Container>
);

export default Loading;
