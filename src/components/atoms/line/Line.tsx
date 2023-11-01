import { type ReactElement } from 'react';

import * as S from './styles';

import { ILineProps } from './interfaces';

const Line = (props: ILineProps): ReactElement => {
    return <S.LineComponent {...props} />;
};

export default Line;
