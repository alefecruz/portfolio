import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/assets/fonts/Montserrat.ttf') format('truetype');
}

@font-face {
    font-family: 'Mina-Bold';
    src: url('/assets/fonts/mina/Mina-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Mina-Regular';
    src: url('/assets/fonts/mina/Mina-Regular.ttf') format('truetype');
}

html {
  font-size: 62.5%;
}

body {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  overflow-x: hidden;
}
`;
