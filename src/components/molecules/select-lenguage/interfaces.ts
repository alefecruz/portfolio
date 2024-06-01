import { IIdioma } from '@/data/interfaces';

export interface ISelectLenguageProps {
    initialIdioma: IIdioma;
    onSelectIdioma: (arg0: IIdioma) => void;
}
