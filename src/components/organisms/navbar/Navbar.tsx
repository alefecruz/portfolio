import { type ReactElement, useState } from 'react';

import * as S from './styles';

import { INavbarProps } from './interfaces';
import { Line } from '@/components/atoms/line';
import { Link } from '@/components/molecules/link';

const FIRST_OPTION_INDEX = 0;
const WIDTH_UNSELECTED_OPTION = 6;
const WIDTH_SELECTED_OPTION = 8;

const Navbar = ({
    optionList = [],
    optionDontSelectedColor = 'ACCENTED',
    optionSelectedColor = 'SECONDARY',
}: INavbarProps): ReactElement => {
    const [selectedIndex, setSelectedIndex] = useState(FIRST_OPTION_INDEX);

    return (
        <S.NavbarContainer>
            {optionList.map(({ label, navigate }, index) => (
                <S.OptionContent key={index}>
                    <Line
                        width={
                            selectedIndex === index
                                ? WIDTH_SELECTED_OPTION
                                : WIDTH_UNSELECTED_OPTION
                        }
                        strokeSize={
                            selectedIndex === index ? 'LARGE' : 'MEDIUM'
                        }
                        color={
                            selectedIndex === index
                                ? optionSelectedColor
                                : optionDontSelectedColor
                        }
                    />
                    <Link
                        onClick={() => setSelectedIndex(index)}
                        navigate={navigate}
                        format="BUTTON"
                        color={
                            selectedIndex === index
                                ? optionSelectedColor
                                : optionDontSelectedColor
                        }
                    >
                        {label}
                    </Link>
                </S.OptionContent>
            ))}
        </S.NavbarContainer>
    );
};

export default Navbar;
