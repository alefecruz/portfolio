'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { IDefaultProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Logo } from '@/components/molecules/logo';
import { Button } from '@/components/molecules/button';
import { Navbar } from '@/components/organisms/navbar';

const Default = ({ myInfo }: IDefaultProps): ReactElement => {
    const {
        logo,
        description,
        getInTouchButton,
        navbarOptionList,
        socialButtonList,
        subtitle,
        title,
    } = myInfo || {};

    const {
        title: logoTitle,
        iconName: iconLogoName,
        description: logoDescription,
    } = logo || {};

    const { label, onPress } = getInTouchButton || {};

    return (
        <S.Container>
            <S.ContentMyInfo>
                {logoTitle && iconLogoName && logoDescription && (
                    <Logo
                        iconName={iconLogoName}
                        title={logoTitle}
                        description={logoDescription}
                    />
                )}
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
                <Text>{description}</Text>
                {socialButtonList.map(({ onPress, iconLeftName }, index) => (
                    <Button
                        key={index}
                        iconLeftName={iconLeftName}
                        onPress={onPress}
                    />
                ))}
                <Navbar
                    optionList={navbarOptionList}
                    optionSelectedColor="ACCENTED"
                    optionDontSelectedColor="LIGHT"
                />
                <Button label={label} onPress={onPress} />
            </S.ContentMyInfo>
            <S.ContentAbout id="#about">ContentAbout</S.ContentAbout>
            <S.ContentExperience id="experience">
                ContentExperience
            </S.ContentExperience>
            <S.ContentProject id="project">ContentProject</S.ContentProject>
        </S.Container>
    );
};

export default Default;
