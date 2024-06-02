'use client';

import { type ReactElement, useState } from 'react';

import * as S from './styles';

import { ISelectLenguageProps } from './interfaces';
import { Text } from '@/components/atoms/text';
import { Icon } from '@/components/atoms/icon';
import { IIdioma } from '@/data/interfaces';

const SelectLenguage = ({
    onSelectIdioma,
    initialIdioma,
}: ISelectLenguageProps): ReactElement => {
    const [toggle, setToggle] = useState(true);
    const [selected, setSelected] = useState<IIdioma>(initialIdioma);

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
            <Icon name="GLOBAL" color="ACCENTED" />
            <Text color="ACCENTED" format="BUTTON">
                {translaterMaper[selected]}
            </Text>
            <Icon
                name={idiomaMapper[selected]}
                color="ACCENTED"
                size="MEDIUM"
            />
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
                        >
                            <Text color="ACCENTED" format="BUTTON">
                                {translaterMaper[idioma as IIdioma]}
                            </Text>
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
