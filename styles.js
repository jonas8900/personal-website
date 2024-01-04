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
    }
`;