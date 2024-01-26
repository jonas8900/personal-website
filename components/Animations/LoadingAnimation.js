import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
export default function LoadingAnimation() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Loading the Homepage...", "Waiting for a safe connection..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledLoadingSection>
      <HeadlineContainer>
        <HeadlineText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          {texts[currentTextIndex]}
        </HeadlineText>
      </HeadlineContainer>
      <LoaderContainer>
        <LoaderSpinner />
      </LoaderContainer>
    </StyledLoadingSection>
  );
}

const LoaderSpinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 4px solid grey;
  border-top: 4px solid var(--secondary-yellow);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadlineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadlineText = styled(motion.h1)`
  font-size: 2rem;
  color: var(--secondary-yellow);
  text-transform: uppercase;
  text-align: center;
`;

const StyledLoadingSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
