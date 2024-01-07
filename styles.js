import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

    body {
      margin: 0;
    padding: 0;
    font-family: 'lato', sans-serif;
    font-weight: 400;
    }

    :root {
      --primary-blue: #54658D;
      --secondary-yellow: #FFCE7C;
      --tertiary: #9FD0EC;
      --description-card-color: #7393B2
    }
`;