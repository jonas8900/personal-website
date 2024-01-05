import {  useEffect, useState } from 'react';
import GlobalStyle from '../styles';


export default function App({ Component, pageProps }) {
  const [isMobile, setMobile] = useState(false);

// useEffect with innerWidth to detect mobile device for responsive design
  useEffect(() => {
  const updateMedia = () => {
      setMobile(window.innerWidth < 915);
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }
  );


    return ( 
    <>
    <GlobalStyle />
    <Component {...pageProps} isMobile={isMobile}/>
    </>
    
    )
  }

