import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const [isMobile, setMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect with innerWidth to detect mobile device for responsive design
  useEffect(() => {
    const updateMedia = () => {
      setMobile(window.innerWidth < 915);
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Head>
        <meta name="description" content="Jonas Dally - Frontend Developer" />
        <title>Jonas Dally - Frontend Developer</title>
        <link rel="canonical" href="localhost:3000" />
      </Head>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} isMobile={isMobile} scrollY={scrollY} />
      </SWRConfig>
    </>
  );
}
