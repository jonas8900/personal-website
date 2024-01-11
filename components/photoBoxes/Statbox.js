import { motion } from "framer-motion";
import styled from "styled-components";

export default function StatBox({
  name,
  age,
  hobbys,
  features,
  className,
  shouldAnimate,
  shouldBeVisible,
}) {
  //Statbox and Statbox animations for the photobox
  const container = {
    hidden: { scale: 0 },
    visible: {
      y: 0,
      opacity: shouldBeVisible ? 1 : 0,
      scale: 1,
      transition: {
        delayChildren: shouldBeVisible ? 0.6 : 0,
        staggerChildren: shouldBeVisible ? 0.4 : 0,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: shouldBeVisible ? 1 : 0,
      y: 0,
    },
  };

  return (
    <StyledUl
      className={className}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}>
      <StyledLi variants={item}>
        <strong>Name:</strong> {name}
      </StyledLi>
      <StyledLi variants={item}>
        <strong>Alter:</strong> {age}
      </StyledLi>
      <StyledLi variants={item}>
        <strong>Hobbys:</strong> {hobbys}
      </StyledLi>
      <StyledLi variants={item}>
        <strong>Merkmale:</strong> {features}
      </StyledLi>
    </StyledUl>
  );
}

const StyledUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  padding: 0;

  width: 20rem;
  height: 15rem;
  border-radius: 9px;
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledLi = styled(motion.li)`
  list-style-type: none;
  padding: 0.7rem;
  color: var(--primary-blue);
`;
