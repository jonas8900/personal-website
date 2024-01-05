import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"], weight: "400" });


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
    font-family: "Lato";
    font-weight: 600;
    }

    :root {
      --primary-blue: #54658D;
      --secondary-yellow: #FFCE7C;
      --tertiary: #9FD0EC;
      --description-card-color: #7393B2
    }
`;