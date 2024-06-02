'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { IDefaultProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Logo } from '@/components/molecules/logo';
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
    settings,
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

    const { label: lebalGetInTouch, email } = getInTouchButton || {};
    const { label: lebalResume, link: linkResume } = resumeButton || {};

    const { myPicture, aboutTitle, aboutRef, paragraphs } = aboutSection || {};
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

                <S.WrapperMyInfo>
                    <Text format="TITLE_2" color="BASE">
                        {title}
                    </Text>
                    <Text format="BODY" color="BASE">
                        {description}
                    </Text>
                    <S.ContentSocialMedias>
                        {socialButtonList.map(({ iconName, link }, index) => (
                            <Button
                                key={index}
                                size="LARGE"
                                iconLeftName={iconName}
                                format="NONE_BASE"
                                onPress={() => window.open(link, '_Blanck')}
                            />
                        ))}
                    </S.ContentSocialMedias>
                </S.WrapperMyInfo>
                <S.ContentNav>
                    <Button
                        size="SMALL"
                        label={lebalResume}
                        onPress={() => window.open(linkResume)}
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
                        onPress={() =>
                            (window.location.href = `mailto:${email}`)
                        }
                        format="FILLED_ACCENTED"
                    />
                </S.ContentNav>
            </S.ContentMyInfo>
            <S.ContentAbout id="about" ref={aboutRef}>
                <S.ContentSettings>
                    <SelectLenguage {...settings.idioma} />
                </S.ContentSettings>
                <SectionTitle title={aboutTitle} />
                <S.WrapperAbout>
                    <Image source={myPicture.source} alt={myPicture.alt} />
                    {paragraphs.map((paragraph, index) => (
                        <Text key={index} format="DESCRIPTION" color="BASE">
                            {paragraph}
                        </Text>
                    ))}
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
