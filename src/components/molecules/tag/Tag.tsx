import { type ReactElement } from 'react';

import { Text } from '@/components/atoms/text';

import * as S from './styles';

import { ITagProps } from './interfaces';

const Button = ({ label, color = 'ACCENTED' }: ITagProps): ReactElement => {
    return (
        <S.TagComponent color={color}>
            <Text format="TAG" color="LIGHT">
                {label}
            </Text>
        </S.TagComponent>
    );
};

export default Button;
