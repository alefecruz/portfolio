import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


&::-webkit-scrollbar {
    width:  0.5rem;
    
}

&::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.ACCENTED};
}

&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
}

&::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.BASE};
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
  color: hsl(0, 1%, 16%);
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.COLORS.ACCENTED};
}
`;
