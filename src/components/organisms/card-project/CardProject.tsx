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
    <S.Container>
        <S.ContentLeft>
            <Image
                source={projectImage?.source}
                alt={projectImage?.alt}
                sizeHeight={30}
                sizeWidth={33.5}
            />
        </S.ContentLeft>
        <S.ContentRight>
            <S.ContentTitle>
                <Text format="TITLE_3" color="PRIMARY">
                    {title}
                </Text>
                <Link format="DESCRIPTION" navigate={accessLink?.navigate}>
                    {accessLink?.label} +
                </Link>
            </S.ContentTitle>
            <Text format="DESCRIPTION" color="PRIMARY">
                {description}
            </Text>
            <S.ContentTag>
                {tagList.map((tagName, index) => (
                    <Tag key={index} label={tagName} />
                ))}
            </S.ContentTag>
        </S.ContentRight>
    </S.Container>
);

export default CardProject;
