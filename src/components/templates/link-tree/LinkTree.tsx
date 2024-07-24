'use client';

import { type ReactElement, useContext } from 'react';

import * as S from './styles';

import { Logo } from '@/components/molecules/logo';
import { SelectLenguage } from '@/components/molecules/select-lenguage';
import { Button } from '@/components/molecules/button';
import { ILinkTreeProps } from './interfaces';
import { Image } from '@/components/atoms/image';

import { ToggleButton } from '@/components/molecules/toggle-button';
import { ThemeContext } from '@/context/ThemeContext';
import { Text } from '@/components/atoms/text';

const LinkTree = ({
    footerMessage,
    linkOne,
    linkTwo,
    linkThree,
    linkFour,
    socialButtonList,
    myPicture,
    settings,
}: ILinkTreeProps): ReactElement => {
    const { handleChangeColorTheme } = useContext(ThemeContext);
    return (
        <S.Container>
            <S.Content>
                <S.SelectIdiomaContent>
                    <SelectLenguage {...settings.idioma} isHideLanguageText />
                </S.SelectIdiomaContent>
                <S.ContentLogo>
                    <Logo iconName="LOGO" />
                </S.ContentLogo>
                {myPicture && (
                    <S.ContentImage>
                        <Image
                            hasBorder
                            source={myPicture.source}
                            alt={myPicture.alt}
                            sizeWidth={12}
                            isCircle
                        />
                    </S.ContentImage>
                )}
                <S.ToogleContent>
                    <ToggleButton
                        onToggle={(value) =>
                            value
                                ? handleChangeColorTheme('outuneDark')
                                : handleChangeColorTheme('outuneLight')
                        }
                    />
                </S.ToogleContent>
                <S.ContentNav>
                    {linkOne && (
                        <Button
                            size="SMALL"
                            label={linkOne.label}
                            onPress={() => window.open(linkOne.link, '_Blanck')}
                            format="OUTLINE_ACCENTED"
                        />
                    )}
                    {linkTwo && (
                        <Button
                            size="SMALL"
                            label={linkTwo.label}
                            onPress={() => window.open(linkTwo.link)}
                            format="OUTLINE_ACCENTED"
                        />
                    )}
                    {linkThree && (
                        <Button
                            size="SMALL"
                            label={linkThree.label}
                            onPress={() => window.open(linkThree.link)}
                            format="OUTLINE_ACCENTED"
                        />
                    )}
                    {linkFour && (
                        <Button
                            size="SMALL"
                            label={linkFour.label}
                            onPress={() => window.open(linkFour.link)}
                            format="OUTLINE_ACCENTED"
                        />
                    )}
                </S.ContentNav>
                {socialButtonList && (
                    <S.WrapperMyInfo>
                        <S.ContentSocialMedias>
                            {socialButtonList.map(
                                ({ iconName, link }, index) => (
                                    <Button
                                        key={index}
                                        size="LARGE"
                                        iconLeftName={iconName}
                                        format="NONE_BASE"
                                        onPress={() =>
                                            window.open(link, '_Blanck')
                                        }
                                    />
                                ),
                            )}
                        </S.ContentSocialMedias>
                    </S.WrapperMyInfo>
                )}
                <S.FooterContent>
                    <Text format="BODY" color="BASE">
                        {footerMessage}
                    </Text>
                </S.FooterContent>
            </S.Content>
        </S.Container>
    );
};

export default LinkTree;
