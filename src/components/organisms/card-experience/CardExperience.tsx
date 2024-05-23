'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { ICardExperienceProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Tag } from '@/components/molecules/tag';

const CardExperience = ({
    period,
    title,
    subtitle,
    description,
    tagList = [],
}: ICardExperienceProps): ReactElement => (
    <S.Container>
        <S.ContentLeft>
            <Text format="TITLE_3" color="PRIMARY">
                {title}
            </Text>
            <Text format="BODY" color="PRIMARY" letterCase="UPPER_CASE">
                {period}
            </Text>
            <S.ContentSubtitle>
                <Text format="DESCRIPTION" color="PRIMARY">
                    {subtitle}
                </Text>
            </S.ContentSubtitle>
            <S.ContentDescription>
                <Text format="DESCRIPTION" color="PRIMARY">
                    {description}
                </Text>
            </S.ContentDescription>
        </S.ContentLeft>
        <S.ContentRight>
            {tagList.map((label, index) => (
                <Tag key={index} label={label} color="SECONDARY" />
            ))}
        </S.ContentRight>
    </S.Container>
);

export default CardExperience;
