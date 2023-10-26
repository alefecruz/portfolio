import { type ReactElement } from 'react';

import * as S from './styles';

import { IAtomExampleProps } from './interfaces';

const AtomExample = (props: IAtomExampleProps): ReactElement => {
    return <S.AtomExampleComponent {...props} />;
};

export default AtomExample;
