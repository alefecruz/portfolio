'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { ICardProjectProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Image } from '@/components/atoms/image';

import { Tag } from '@/components/molecules/tag';
import { Link } from '@/components/molecules/link';

const CardProject = ({
    projectImage,
    title,
    description,
    tagList = [],
    accessLink,
}: ICardProjectProps): ReactElement => (
    <S.CardComponent>
        {projectImage && (
            <S.ContentLeft>
                <Image source={projectImage?.source} alt={projectImage?.alt} />
            </S.ContentLeft>
        )}
        <S.ContentRight>
            <S.ContentTitle>
                <Text format="TITLE_3" color="PRIMARY">
                    {title}
                </Text>
            </S.ContentTitle>
            <Text format="DESCRIPTION" color="PRIMARY">
                {description}
            </Text>
            <S.ContentTag>
                {tagList.map((tagName, index) => (
                    <Tag key={index} label={tagName} color="SECONDARY" />
                ))}
            </S.ContentTag>
            <S.ContentLink>
                <Link format="DESCRIPTION" navigate={accessLink?.navigate}>
                    {accessLink?.label} +
                </Link>
            </S.ContentLink>
        </S.ContentRight>
    </S.CardComponent>
);

export default CardProject;
