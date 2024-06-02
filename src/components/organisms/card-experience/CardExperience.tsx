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
            <Text format="TITLE_3" color="BASE">
                {title}
            </Text>
            <Text format="BODY" color="BASE" letterCase="UPPER_CASE">
                {period}
            </Text>
            <S.ContentSubtitle>
                <Text format="DESCRIPTION" color="BASE">
                    {subtitle}
                </Text>
            </S.ContentSubtitle>
            <S.ContentDescription>
                <Text format="DESCRIPTION" color="BASE">
                    {description}
                </Text>
            </S.ContentDescription>
        </S.ContentLeft>
        <S.ContentRight>
            {tagList.map((label, index) => (
                <Tag key={index} label={label} color="PRIMARY" />
            ))}
        </S.ContentRight>
    </S.Container>
);

export default CardExperience;
