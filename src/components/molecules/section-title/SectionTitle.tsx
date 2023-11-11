'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { ISectionTitleProps } from './interfaces';
import { Line } from '@/components/atoms/line';
import { Text } from '@/components/atoms/text';

const SectionTitle = ({ title }: ISectionTitleProps): ReactElement => (
    <S.Container>
        <Line strokeColor="PRIMARY" strokeSize="LARGE" width={8.8} />
        <Text format="TITLE_2" color="LIGHT">
            {title}
        </Text>
    </S.Container>
);

export default SectionTitle;
