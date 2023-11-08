import { ITextProps } from '@/components/atoms/text';

export interface ILinkProps extends ITextProps {
    navigate: string;
    onClick?: () => void;
}
