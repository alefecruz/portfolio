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

html {
  font-size: 62.5%;
}

body {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  overflow-x: hidden;
}
`;
