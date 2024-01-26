import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes, styled, css } from "styled-components";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import JdLogo from "@/components/Icons/JDLogo";
import PhoneIconForNavbar from "./PhoneIconForNavbar";
import MailIconForNavbar from "./MailIconForNavbar";
import { Link } from "react-scroll";

export default function NavigationBar({ isMobile, className }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [displayStyle, setDisplayStyle] = useState(
    isMenuOpen ? "flex" : "none"
  ); //used to remove the menu from the DOM when it is closed to prevent the menu from being clickable when it is closed

  useEffect(() => {
    if (isMenuOpen) {
      setDisplayStyle("flex");
    }
    const timeoutId = setTimeout(() => {
      if (!isMenuOpen) {
        setDisplayStyle("none");
      }
    }, 500); //set the display to none after the animation is finished
    return () => clearTimeout(timeoutId);
  }, [isMenuOpen]);

  useEffect(() => {
    function handleMenuAutomaticClose() {
      // close the menu automatically when the screen size is bigger than 915px
      if (!isMobile) {
        setMenuOpen(false);
      }
    }
    handleMenuAutomaticClose();
  }, [isMobile]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isMenuOpen) {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <StyledNavigationWrapper className={className} id="top">
      {isMobile ? (
        <>
          <StyledMobileMenuIconWrapper>
            <Hamburger
              color="var(--primary-blue)"
              direction="left"
              toggled={isMenuOpen}
              toggle={setMenuOpen}
            />
          </StyledMobileMenuIconWrapper>
          <StyledMobileUl $ismenuopen={isMenuOpen} $displaystyle={displayStyle}>
            <StyledLink
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setMenuOpen(false)}>
              <li>Über mich</li>
            </StyledLink>
            <StyledLink
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              onClick={() => setMenuOpen(false)}
              duration={500}>
              <li>Projekte</li>
            </StyledLink>
            <StyledLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              onClick={() => setMenuOpen(false)}
              duration={500}>
              <li>Kontakt</li>
            </StyledLink>
            <StyledLiIcons>
              <PhoneIconForNavbar />
            </StyledLiIcons>
            <StyledLiIcons>
              <MailIconForNavbar />
            </StyledLiIcons>
          </StyledMobileUl>
        </>
      ) : (
        <>
          <StyledJdLogo />
          <StyledDesktopUl>
            <StyledLink
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
              <li>Über mich</li>
            </StyledLink>
            <StyledLink
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              <li>Projekte</li>
            </StyledLink>
            <StyledLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
              <li>Kontakt</li>
            </StyledLink>
            <StyledLiIcons>
              <PhoneIconForNavbar />
            </StyledLiIcons>
            <StyledLiIcons>
              <MailIconForNavbar />
            </StyledLiIcons>
          </StyledDesktopUl>
        </>
      )}
    </StyledNavigationWrapper>
  );
}

const FadeInAnimation = keyframes`
  0% {
    transform: translate3d(-100px, 0, 0);
    opacity: 0;
  
  }
  1% {

  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;


  }
`;

const FadeOutAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  
  }
  99% {

  }
  100% {
    transform: translate3d(-100px, 0, 0);
    opacity: 0;

  }
`;

//navigationwrapper

const StyledNavigationWrapper = styled.nav`
  align-self: center;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: var(--box-shadow-main);
  box-shadow: var(--box-shadow-main);
  @media (max-width: 915px) {
    //for mobile devices
    display: flex;
    padding: 0;
    margin: 0;
    justify-self: flex-end;
  }
`;

//lists and list-items

const StyledDesktopUl = styled.ul`
  list-style: none;
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: auto;
  width: 45%;
  min-width: 25rem;
  max-width: 40rem;
  border-radius: 9px;
`;

const StyledMobileUl = styled.ul`
  list-style: none;
  flex-direction: column;
  position: absolute;
  padding: 12rem 4rem 12rem 4rem;
  margin: 0;
  width: 100%;
  height: 100%;
  top: 0%;
  bottom: 0%;
  color: white;
  background-color: rgba(22, 26, 26, 1);
  z-index: 4;
  ${({ $ismenuopen }) =>
    $ismenuopen
      ? css`
          animation: ${FadeInAnimation} 0.5s ease-in-out;
        `
      : css`
          animation: ${FadeOutAnimation} 0.5s ease-in-out;
        `}

  opacity: ${({ $ismenuopen }) => ($ismenuopen ? "1" : "0")};
  display: ${({ $displaystyle }) => $displaystyle};
  transition: opacity 0.5s ease-in-out;
`;

// used as a wrapper for the list items, Link is used to scroll to the specific section
const StyledLink = styled(Link)`
  padding: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  width: 35%;
  min-width: 8rem; //set min-width for mobile devices
  text-align: center;
  margin: auto;
  cursor: pointer;
  border-bottom: 1px solid #4d4f4e;
  transition: all 0.3s ease-in-out;

  &:active {
    background-color: var(--secondary-yellow);
  }
  @media (min-width: 915px) {
    //for desktop devices
    border-bottom: none;
    border-radius: 45px;
    width: 20%;
    min-width: 2rem;
    &:hover {
      background-color: var(--secondary-yellow);
    }
  }
`;

//icons and iconWrapper

const StyledLiIcons = styled.li`
  padding: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin: auto;
  cursor: pointer;
  border-bottom: 1px solid #4d4f4e;
  width: 35%;
  min-width: 8rem; //set min-width for mobile devices
  text-align: center;
  @media (min-width: 915px) {
    //for desktop devices
    border-bottom: none;
    border-radius: 45px;
    min-width: 2rem;
    width: 10%;
  }
`;

//logo
const StyledJdLogo = styled(JdLogo)`
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;
  margin-left: 12%;
`;

const StyledMobileMenuIconWrapper = styled.div`
  margin: 2rem 2rem 1rem auto;
  z-index: 5;
  @media (min-width: 915px) {
    //for desktop devices
    display: none;
  }
`;
