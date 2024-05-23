'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { IDefaultProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Logo } from '@/components/molecules/logo';
import { Down } from '@/components/molecules/down';
import { SelectLenguage } from '@/components/molecules/select-lenguage';

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
        resumeButton,
        navbarOptionList = [],
        socialButtonList,
        title,
    } = myInfo || {};

    const { title: logoTitle, iconName: iconLogoName } = logo || {};

    const { label: lebalGetInTouch, onPress: onPressGetInTouch } =
        getInTouchButton || {};
    const { label: lebalResume, onPress: onPressResume } = resumeButton || {};

    const { myPicture, aboutTitle, aboutRef, paragraphs, scrollDown } =
        aboutSection || {};
    const {
        experienceRef,
        experienceTitle,
        experienceList = [],
    } = experienceSection || {};
    const { projectRef, projectTitle, projectList = [] } = projectSection || {};

    return (
        <S.Container>
            <S.ContentMyInfo>
                {logoTitle && iconLogoName && (
                    <Logo iconName={iconLogoName} title={logoTitle} />
                )}
                <SelectLenguage onSelect={(value) => console.log(value)} />
                <S.WrapperMyInfo>
                    <Text format="TITLE_2" color="ACCENTED">
                        {title}
                    </Text>
                    <Text format="BODY" color="TERNARY">
                        {description}
                    </Text>
                    <S.ContentSocialMedias>
                        {socialButtonList.map(
                            ({ onPress, iconLeftName }, index) => (
                                <Button
                                    key={index}
                                    size="LARGE"
                                    iconLeftName={iconLeftName}
                                    format="NONE_ACCENTED"
                                    onPress={onPress}
                                />
                            ),
                        )}
                    </S.ContentSocialMedias>
                </S.WrapperMyInfo>
                <Button
                    size="SMALL"
                    label={lebalResume}
                    onPress={onPressResume}
                    format="OUTLINE_ACCENTED"
                />
                <Navbar
                    optionList={navbarOptionList}
                    optionSelectedColor="SECONDARY"
                    optionDontSelectedColor="ACCENTED"
                />
                <Button
                    size="SMALL"
                    label={lebalGetInTouch}
                    onPress={onPressGetInTouch}
                    format="FILLED_ACCENTED"
                />
            </S.ContentMyInfo>
            <S.ContentAbout id="about" ref={aboutRef}>
                <SectionTitle title={aboutTitle} />
                <S.WrapperAbout>
                    <Image source={myPicture.source} alt={myPicture.alt} />
                    {paragraphs.map((paragraph, index) => (
                        <Text key={index} format="DESCRIPTION" color="LIGHT">
                            {paragraph}
                        </Text>
                    ))}
                </S.WrapperAbout>
                {scrollDown && (
                    <S.ContentScrollDown>
                        <Down message={scrollDown} />
                    </S.ContentScrollDown>
                )}
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
                    {projectList &&
                        projectList.map((projectCardProps, index) => (
                            <CardProject key={index} {...projectCardProps} />
                        ))}
                </S.WrapperProject>
            </S.ContentProject>
        </S.Container>
    );
};

export default Default;
