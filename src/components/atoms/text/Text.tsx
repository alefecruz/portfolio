import { type ReactElement } from 'react';

import * as S from './styles';

import { ITextProps } from './interfaces';

const Text = ({ children, ...rest }: ITextProps): ReactElement => {
    return <S.TextComponent {...rest}>{children}</S.TextComponent>;
};

export default Text;
