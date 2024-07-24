import { ISelectTheme, selectTheme } from '@/global/theme';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

type ThemeContextProps = {
    children: React.ReactNode;
};

export const ThemeContext = React.createContext<{
    definingTheme: DefaultTheme;
    handleChangeColorTheme: (color: ISelectTheme['color']) => void;
}>({
    definingTheme: selectTheme({
        color: 'outuneLight',
        font: 'montserrat',
        size: 'default',
        media: 'default',
        spacing: 'default',
    }),
    handleChangeColorTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [definingTheme, setDefiningTheme] = useState(
        selectTheme({
            color: 'outuneLight',
            font: 'montserrat',
            size: 'default',
            media: 'default',
            spacing: 'default',
        }),
    );

    const handleChangeColorTheme = (color: ISelectTheme['color']) => {
        setDefiningTheme(
            selectTheme({
                color,
                font: 'montserrat',
                size: 'default',
                media: 'default',
                spacing: 'default',
            }),
        );
    };

    return (
        <ThemeContext.Provider
            value={{ definingTheme, handleChangeColorTheme }}
        >
            <ThemeProvider theme={definingTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
