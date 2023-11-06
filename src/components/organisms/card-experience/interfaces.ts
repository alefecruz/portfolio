import { IIconProps } from '@/components/atoms/icon';

export interface ICardExperienceProps {
    iconName: IIconProps['name'];
    period: string;
    title: string;
    subtitle?: string;
    description: string;
    tagList?: string[];
}
