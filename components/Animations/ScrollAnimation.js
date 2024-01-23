import { motion, spring, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function ScrollAnimation({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <StyledDiv ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
`;
