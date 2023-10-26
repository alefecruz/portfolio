import { type ReactElement } from 'react';

import * as S from './styles';

import { ITextProps } from './interfaces';

const Text = ({ children, ...rest }: ITextProps): ReactElement => {
    console.log('PROPS:', rest.color);
    return <S.TextComponent {...rest}>{children}</S.TextComponent>;
};

export default Text;
