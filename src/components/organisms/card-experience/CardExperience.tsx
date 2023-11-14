'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { ICardExperienceProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Icon } from '@/components/atoms/icon';
import { Tag } from '@/components/molecules/tag';

const CardExperience = ({
    period,
    iconName,
    title,
    subtitle,
    description,
    tagList = [],
}: ICardExperienceProps): ReactElement => (
    <S.Container>
        <S.ContentLeft>
            <Text format="BODY" color="ACCENTED" letterCase="UPPER_CASE">
                {period}
            </Text>
            <S.ContentIcon>
                <Icon name={iconName} size="HUGE" color="PRIMARY" />
            </S.ContentIcon>
        </S.ContentLeft>
        <S.ContentRight>
            <Text format="TITLE_3" color="DARK">
                {title}
            </Text>
            <S.ContentSubtitle>
                <Text format="BODY" color="DARK">
                    {subtitle}
                </Text>
            </S.ContentSubtitle>
            <S.ContentDescription>
                <Text format="DESCRIPTION" color="DARK">
                    {description}
                </Text>
            </S.ContentDescription>
            {tagList.map((label, index) => (
                <Tag key={index} label={label} />
            ))}
        </S.ContentRight>
    </S.Container>
);

export default CardExperience;
