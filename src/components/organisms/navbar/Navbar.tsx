import { type ReactElement, useState } from 'react';

import * as S from './styles';

import { INavbarProps } from './interfaces';
import { Line } from '@/components/atoms/line';
import { Button } from '@/components/molecules/button';

import { buttonFormatMapper } from './mappers';

const Navbar = ({
    optionList = [],
    optionDontSelectedColor = 'ACCENTED',
    optionSelectedColor = 'SECONDARY',
}: INavbarProps): ReactElement => {
    const [optionState, setOptionState] = useState(optionList);

    const handleClick = (label: string) => {
        setOptionState(
            optionState.map((option) => {
                if (option.label === label)
                    return {
                        ...option,
                        isSelected: true,
                    };
                else
                    return {
                        ...option,
                        isSelected: false,
                    };
            }),
        );
    };

    return (
        <S.NavbarContainer>
            {optionState.map(({ label, isSelected, onPress }, index) => (
                <S.OptionContent key={index}>
                    <Line
                        width={isSelected ? 8 : 6}
                        strokeSize={isSelected ? 'LARGE' : 'MEDIUM'}
                        color={
                            isSelected
                                ? optionSelectedColor
                                : optionDontSelectedColor
                        }
                    />
                    <Button
                        format={
                            isSelected
                                ? buttonFormatMapper[optionSelectedColor]
                                : buttonFormatMapper[optionDontSelectedColor]
                        }
                        label={label}
                        onPress={() => handleClick(label)}
                    />
                </S.OptionContent>
            ))}
        </S.NavbarContainer>
    );
};

export default Navbar;
