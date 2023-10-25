'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/global/styles';
import { selectTheme } from '@/global/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = selectTheme({
    color: 'default',
    font: 'montserrat',
    size: 'default',
    media: 'default',
    spacing: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>{children}</body>
      </html>
      <GlobalStyles />
    </ThemeProvider>
  );
}
