import { ITextProps } from '@/components/atoms/text';
import { targetMapper } from './mappers';
export interface ILinkProps extends ITextProps {
    navigate: string;
    onClick?: () => void;
    target?: keyof typeof targetMapper;
}
