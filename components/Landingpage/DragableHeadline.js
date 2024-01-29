import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function WebsiteHeadline() {
  const texts = ["Frontend Developer", "Web Developer", "React Developer"];
  const [currentText, setCurrentText] = useState(0);
  const [windowWidthCheck, setWindowWidthCheck] = useState(false);
  const [fontColor, setFontColor] = useState("black");

  function isWindowWidthGreaterThan600() {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1200) {
        setWindowWidthCheck(true);
      } else {
        setWindowWidthCheck(false);
      }
    }
  }

  useEffect(() => {
    isWindowWidthGreaterThan600();
    window.addEventListener("resize", isWindowWidthGreaterThan600);
    return () => {
      window.removeEventListener("resize", isWindowWidthGreaterThan600);
    };
  }, []);

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

  const controls = useAnimation();

// function to change the backgroundcolor of the headline while dragging to the left and right
  function handleChangeBackgroundOnDrag(event, info) {
    const desktopWidth = window.innerWidth;
    const red = (info.point.x / desktopWidth) * 171;
    const green = (info.point.x / desktopWidth) * 105;
    const blue = (info.point.x / desktopWidth) * 17;

    //yellow (:root color) RGBA rgba(84, 101, 141, 1)
    //blue (:root color) RGBA rgba(255, 206, 124, 1)

    const backgroundColor = `rgba(${84 + red}, ${101 + green}, ${
      141 - blue
    }, 1)`;
    controls.start({ backgroundColor });
  }

  function handleDragEnd(event, info) {
    const checkOnWhichSideOfScreen = window.innerWidth / 2;
    if (info.point.x < checkOnWhichSideOfScreen) {
      controls.start({ backgroundColor: `rgba(84, 101, 141, 1)` });
      setFontColor("white");
    } else {
      controls.start({ backgroundColor: `rgba(255, 206, 124, 1)` });
      setFontColor("black");
    }
  }
  return (
    <StyledHeadlineWrapper
      drag={
        windowWidthCheck
          ? "x"
          : false /*only allow drag on x axis if window width is greater than 1200px*/
      }
      dragConstraints={
        windowWidthCheck ? { left: -400, right: 400 } : { left: -10, right: 10 }
      }
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 10,
      }}
      onDrag={handleChangeBackgroundOnDrag}
      onDragEnd={handleDragEnd}
      onDragStart={() =>
        controls.start({ backgroundColor: `rgba(255, 206, 124, 1)` })
      }
      animate={controls}>
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
            style={{ color: fontColor }}
            key={char + "-" + index}
            variants={characterAnimation}>
            <code>{char}</code>
          </StyledHeadlineText>
        ))}
      </StyledHeadline>
    </StyledHeadlineWrapper>
  );
}

const StyledHeadlineWrapper = styled(motion.div)`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  cursor: grab;
  margin: 4rem auto 10rem auto;
  background-color: var(--secondary-yellow);
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  width: 17rem;
  height: 6rem;
`;

const StyledHeadline = styled(motion.h1)`
  color: black;
  padding: 1rem 2rem 1rem 2rem;
`;

const StyledHeadlineText = styled(motion.span)`
  text-align: center;
`;
