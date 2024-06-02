'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledComponentsRegistry } from '../lib/style';

import { GlobalStyles } from '@/global/styles';
import { ISelectTheme, selectTheme } from '@/global/theme';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = selectTheme({
        color: 'outuneDark',
        font: 'montserrat',
        size: 'default',
        media: 'default',
        spacing: 'default',
    });

    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <html lang="en">
                    <body>{children}</body>
                </html>
                <GlobalStyles />
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
}
