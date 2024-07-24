'use client';
import React from 'react';
import { StyledComponentsRegistry } from '../lib/style';
import { ThemeContextProvider } from '@/context/ThemeContext';

import { GlobalStyles } from '@/global/styles';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StyledComponentsRegistry>
            <ThemeContextProvider>
                <html lang="en">
                    <body>{children}</body>
                </html>
                <GlobalStyles />
            </ThemeContextProvider>
        </StyledComponentsRegistry>
    );
}
