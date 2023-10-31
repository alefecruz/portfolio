import { type ReactElement } from 'react';

import * as S from './styles';
import { nameMapper } from './mappers';

import { IIconProps } from './interfaces';

const Icon = ({ name, ...rest }: IIconProps): ReactElement => {
    return (
        <S.IconComponent
            src={name === undefined ? nameMapper.DEVOT : nameMapper[name]}
            {...rest}
        />
    );
};

export default Icon;
