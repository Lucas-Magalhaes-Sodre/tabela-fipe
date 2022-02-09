import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
    --background: #f8f2f5;
    --purple: #835afd;
    --LightCyan: #E0FFFF;
    --green: #33CC95;
    --gray: #808080;
    --gray-light: #DCDCDC;
    --shape: #ffffff;
    --black: #000;
    --grey21: #363636;
}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background:var(--background);
    text-align: center;
  }

  html{
       @media (max-width: 1000px) {
        font-size: 93.75%;
       }
       @media (max-width: 720px) {
        font-size: 87.5%;
       }
`;
