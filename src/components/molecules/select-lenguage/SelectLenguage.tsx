'use client';

import { type ReactElement, useState } from 'react';
import useDeviceSize from '@/hook/use-device-size';
import * as S from './styles';

import { ISelectLenguageProps } from './interfaces';
import { Text } from '@/components/atoms/text';
import { Icon } from '@/components/atoms/icon';
import { IIdioma } from '@/data/interfaces';
import { IButtonProps } from '../button';

const SelectLenguage = ({
    onSelectIdioma,
    initialIdioma,
    isHideGlobalIcon = false,
    isHideLanguageText = false,
}: ISelectLenguageProps): ReactElement => {
    const [toggle, setToggle] = useState(true);
    const [selected, setSelected] = useState<IIdioma>(initialIdioma);
    const [width, height] = useDeviceSize();

    const idiomaMapper: { [key in IIdioma]: IButtonProps['iconLeftName'] } = {
        PT_BR: 'FLAG_BR',
        EN_US: 'FLAG_US',
    };

    const translaterMaper = {
        PT_BR: 'Português',
        EN_US: 'English',
    };

    return (
        <S.Container onClick={() => setToggle((curr) => !curr)}>
            {!isHideGlobalIcon && <Icon name="GLOBAL" color="ACCENTED" />}
            {!isHideLanguageText && width >= 400 && (
                <Text color="ACCENTED" format="BUTTON">
                    {translaterMaper[selected]}
                </Text>
            )}
            <S.Flag>
                <Icon
                    name={idiomaMapper[selected]}
                    color="ACCENTED"
                    size="MEDIUM"
                />
            </S.Flag>
            {!toggle && (
                <S.ContentOptions>
                    {Object.keys(idiomaMapper).map((idioma) => (
                        <S.SelectFlag
                            key={idioma}
                            onClick={() => {
                                setSelected(idioma as IIdioma);
                                setToggle((curr) => (curr = false));
                                onSelectIdioma &&
                                    onSelectIdioma(idioma as IIdioma);
                            }}
                            isHideLanguageText={isHideLanguageText}
                        >
                            {!isHideLanguageText && width >= 400 && (
                                <Text color="ACCENTED" format="BUTTON">
                                    {translaterMaper[idioma as IIdioma]}
                                </Text>
                            )}
                            <Icon
                                name={idiomaMapper[idioma as IIdioma]}
                                color="ACCENTED"
                            />
                        </S.SelectFlag>
                    ))}
                </S.ContentOptions>
            )}
        </S.Container>
    );
};

export default SelectLenguage;
