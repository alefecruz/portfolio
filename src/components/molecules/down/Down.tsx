'use client';

import { type ReactElement } from 'react';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';

import * as S from './styles';

import { IDownProps } from './interfaces';

const Down = ({ message }: IDownProps): ReactElement => (
    <S.Container>
        <Icon name="MOUSE" color="SECONDARY" />
        <Text format="TAG" color="SECONDARY">
            {message}
        </Text>
    </S.Container>
);

export default Down;
