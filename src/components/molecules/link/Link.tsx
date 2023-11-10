import { type ReactElement } from 'react';

import * as S from './styles';

import { ILinkProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { targetMapper } from './mappers';

const AtomExample = ({
    navigate,
    onClick,
    target = 'BLANCK',
    ...rest
}: ILinkProps): ReactElement => {
    return (
        <S.LinkComponent
            href={navigate}
            onClick={onClick}
            target={targetMapper[target]}
        >
            <Text {...rest} />
        </S.LinkComponent>
    );
};

export default AtomExample;
