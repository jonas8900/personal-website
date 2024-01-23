import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

export default function TopScrollButton() {
  const [activateScrollButton, setActivateScrollButton] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        if (window.scrollY > 1000) {
          setActivateScrollButton(true);
        } else {
          setActivateScrollButton(false);
        }
      };
    }
  }, []);

  return (
    <>
      {activateScrollButton && (
        <section>
          <Link to="top">
            <StyledFontAwesomeIcon
              icon={faCircleChevronUp}
              $activatescrollbutton={activateScrollButton}
            />
          </Link>
        </section>
      )}
    </>
  );
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const FadeOut = keyframes`
0% {opacity: 1;}
100% {opacity: 0;}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  cursor: pointer;
  z-index: 99;
  animation: ${({ $activatescrollbutton }) =>
    $activatescrollbutton ? FadeIn : FadeOut};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
`;
