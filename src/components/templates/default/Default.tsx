'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { IDefaultProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Logo } from '@/components/molecules/logo';
import { Button } from '@/components/molecules/button';
import { Navbar } from '@/components/organisms/navbar';
import { Image } from '@/components/atoms/image';
import { SectionTitle } from '@/components/molecules/section-title';
import { CardExperience } from '@/components/organisms/card-experience';
import { CardProject } from '@/components/organisms/card-project';

const Default = ({
    myInfo,
    aboutSection,
    experienceSection,
    projectSection,
}: IDefaultProps): ReactElement => {
    const {
        logo,
        description,
        getInTouchButton,
        navbarOptionList = [],
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

    const { myPicture, aboutTitle, aboutRef, text } = aboutSection || {};
    const {
        experienceRef,
        experienceTitle,
        experienceList = [],
    } = experienceSection || {};
    const { projectRef, projectTitle, projectList = [] } = projectSection || {};

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
                <S.WrapperMyInfo>
                    <Text format="TITLE_2" color="ACCENTED">
                        {title}
                    </Text>
                    <Text format="BODY" color="LIGHT">
                        {subtitle}
                    </Text>
                    <Text format="DESCRIPTION" color="LIGHT">
                        {description}
                    </Text>
                    <S.ContentSocialMedias>
                        {socialButtonList.map(
                            ({ onPress, iconLeftName }, index) => (
                                <Button
                                    key={index}
                                    iconLeftName={iconLeftName}
                                    format="NONE_ACCENTED"
                                    onPress={onPress}
                                />
                            ),
                        )}
                    </S.ContentSocialMedias>
                </S.WrapperMyInfo>
                <Navbar
                    optionList={navbarOptionList}
                    optionSelectedColor="ACCENTED"
                    optionDontSelectedColor="LIGHT"
                />
                <Button
                    label={label}
                    onPress={onPress}
                    format="FILLED_ACCENTED"
                    iconLeftName="SETA"
                />
            </S.ContentMyInfo>
            <S.ContentAbout id="about" ref={aboutRef}>
                <SectionTitle title={aboutTitle} />
                <S.WrapperAbout>
                    <Image
                        source={myPicture.source}
                        alt={myPicture.alt}
                        sizeHeight={47}
                        sizeWidth={47}
                    />
                    <Text format="DESCRIPTION" color="LIGHT">
                        {text}
                    </Text>
                </S.WrapperAbout>
            </S.ContentAbout>
            <S.ContentExperience id="experience" ref={experienceRef}>
                <SectionTitle title={experienceTitle} />
                <S.WrapperExperience>
                    {experienceList.map((experienceProps, index) => (
                        <CardExperience key={index} {...experienceProps} />
                    ))}
                </S.WrapperExperience>
            </S.ContentExperience>
            <S.ContentProject id="project" ref={projectRef}>
                <SectionTitle title={projectTitle} />
                <S.WrapperProject>
                    {projectList.map((projectCardProps, index) => (
                        <CardProject key={index} {...projectCardProps} />
                    ))}
                </S.WrapperProject>
            </S.ContentProject>
        </S.Container>
    );
};

export default Default;
