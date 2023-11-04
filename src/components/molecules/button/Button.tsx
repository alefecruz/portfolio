import { type ReactElement } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';

import * as S from './styles';

import { IButtonProps } from './interfaces';

import { formarMapper } from './mappers';

const Button = ({
    iconLeftName,
    label,
    format = 'FILLED_ACCENTED',
    size,
    isStretch,
    onPress,
}: IButtonProps): ReactElement => {
    return (
        <S.ButtonComponent
            format={format}
            size={size}
            isStretch={isStretch}
            onClick={onPress}
        >
            {iconLeftName !== undefined && (
                <S.IconContent>
                    <Icon color={formarMapper[format].contentColor} />
                </S.IconContent>
            )}
            <S.LabelContent>
                <Text format="BUTTON" color={formarMapper[format].contentColor}>
                    {label}
                </Text>
            </S.LabelContent>
        </S.ButtonComponent>
    );
};

export default Button;
