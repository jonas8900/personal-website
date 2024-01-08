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
      --description-card-color: #7393B2;
      --font-size-headline: 22px; 
      --font-size-subheadline: 18px;
      --font-size-greater-text: 17px;
      --font-size-text: 16px;
      --skillset-icon-width: 3rem;
      --skillset-icon-height: 3rem;
      --skillset-icon-mobile-width: 2rem;
      --skillset-icon-mobile-height: 2rem;
      --large-mobile-breakpoint: 915px;
      --small-mobile-breakpoint: 768px;
      --large-desktop-breakpoint: 1921px;

    }
`;
