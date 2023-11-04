import { type ReactElement } from 'react';

import * as S from './styles';

import { ILinkProps } from './interfaces';

import { Text } from '@/components/atoms/text';

const AtomExample = ({
    navigate,
    onClick,
    ...rest
}: ILinkProps): ReactElement => {
    return (
        <S.LinkComponent href={navigate} onClick={onClick}>
            <Text {...rest} />
        </S.LinkComponent>
    );
};

export default AtomExample;
