import { IIconProps } from '@/components/atoms/icon';

export interface IToggleButtonProps {
    value?: boolean;
    iconLeftName?: IIconProps['name'];
    iconRightName?: IIconProps['name'];
    onToggle?: (arg: boolean) => void;
}
