import { cubicBezier, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function WebsiteHeadline() {
  const texts = ["Frontend Developer", "Web Developer", "React Developer"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((currentText + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentText, texts.length]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },

    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <StyledHeadlineWrapper>
      <StyledHeadline
        key={texts[currentText]}
        variants={wordAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          delayChildren: 0.25,
          staggerChildren: 0.05,
        }}>
        {" "}
        {texts[currentText].split("").map((char, index) => (
          <StyledHeadlineText
            key={char + "-" + index}
            variants={characterAnimation}>
            {char}
          </StyledHeadlineText>
        ))}
      </StyledHeadline>
    </StyledHeadlineWrapper>
  );
}

const StyledHeadlineWrapper = styled.div`
  align-self: center;
  justify-self: center;

  
  width: 50%;
`;

const StyledHeadline = styled(motion.h1)`
  margin-top: 15rem;
  margin-bottom: 5rem;
  border-radius: 20px;

  color: black;
  text-shadow: 0.5px 0.5px 1px var(--primary-blue);
  padding: 1rem 2rem 1rem 2rem;
`;

const StyledHeadlineText = styled(motion.span)`
  text-align: center;
  color: var(--primary-blue);
`;
