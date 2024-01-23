import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotARobotToastMessage() {
  const [toastMessage, setToastMessage] = useState("Bitte bestätigen Sie, dass Sie kein Roboter sind!");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      color: "white",
      backgroundColor: "#DE9A9A",
      border: "none",
      transition: {
        ease: "easeInOut",
        type: "spring",
        stiffness: 600,
        damping: 30,
        duration: 0.5,
      },
    });

    setTimeout(() => {
      setTimeout(() => {
        setToastMessage("Bitte bestätigen Sie, dass Sie kein Roboter sind!");
      }, 8000);
      controls.start({
        x: 300,
        opacity: 0,
      });
    }, 6000);
    setTimeout(() => {
      setToastMessage("Vielen Dank");
      controls.start({
        color: "var(--primary-blue)",
        backgroundColor: "var(--tertiary)",
      });
    }, 3000);
  }, [controls]);

  return (
    <StyledToastMessageContainer>
      <StyledToastMessage
        animate={controls}
        initial={{ x: -100, opacity: 0 }}
        exit={{ x: -300, opacity: 0 }}>
        {toastMessage}
      </StyledToastMessage>
    </StyledToastMessageContainer>
  );
}

const StyledToastMessageContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const StyledToastMessage = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 99;
  top: 2%;
  right: 2%;
  align-items: center;
  text-align: center;
  margin: auto;
  background-color: var(--description-card-color);
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);

  color: white;
  font-size: 1.2rem;
  width: 20rem;
  height: 5rem;
  border-radius: 1rem;
`;
