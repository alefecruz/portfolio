import { IImageProps } from '@/components/atoms/image';
import { ILinkProps } from '@/components/molecules/link';

export interface ICardProjectProps {
    projectImage: Pick<IImageProps, 'source' | 'alt' | 'sizeWidth'>;
    title: string;
    accessLink?: { label: string } & Pick<ILinkProps, 'navigate'>;
    description: string;
    tagList: string[];
}
