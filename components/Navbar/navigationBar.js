import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

export default function NavigationBar({ isMobile }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleMenuAutomaticClose() {
      // close the menu automatically when the screen size is bigger than 915px
      if (!isMobile) {
        setMenuOpen(false);
      }
    }
    handleMenuAutomaticClose();
  }, [isMobile]);

  return (
    <StyledNavigationWrapper>
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
          <StyledMobileUl ismenuopen={isMenuOpen ? isMenuOpen : undefined}>
            <StyledLiNames>Projekte</StyledLiNames>
            <StyledLiNames>Über mich</StyledLiNames>
            <StyledLiNames>Kontakt</StyledLiNames>
            <StyledLiIcons>
              <StyledIcon icon={faSquarePhone} />
            </StyledLiIcons>
            <StyledLiIcons>
              <StyledIcon icon={faEnvelope} />
            </StyledLiIcons>
          </StyledMobileUl>
        </>
      ) : (
        <StyledDesktopUl>
          <StyledLiNames>Projekte</StyledLiNames>
          <StyledLiNames>Über mich</StyledLiNames>
          <StyledLiNames>Kontakt</StyledLiNames>
          <StyledLiIcons>
            <StyledIcon icon={faSquarePhone} />
          </StyledLiIcons>
          <StyledLiIcons>
            <StyledIcon icon={faEnvelope} />
          </StyledLiIcons>
        </StyledDesktopUl>
      )}
    </StyledNavigationWrapper>
  );
}

//navigationwrapper

const StyledNavigationWrapper = styled.nav`
  padding: 2rem;
  grid-area: 1 / 2 / 2 / 3;
  z-index: 3;
  @media (max-width: 915px) {
    //for mobile devices
    padding: 0;
    margin: 0;
    justify-self: flex-end;
    grid-area: 1 / 2 / 3 / 3;
  }
`;

//lists and list-items

const StyledDesktopUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0.5rem;
  margin: auto 0 auto auto;
  width: 40rem;
  justify-content: flex-end;
  align-items: center;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledMobileUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: auto;
  width: 100%;
  border-radius: 9px;
  padding: 0;
  left: 0;
  color: white;
  background-color: var(--description-card-color);
  opacity: ${({ ismenuopen }) => (ismenuopen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const StyledLiNames = styled.li`
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

const StyledIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 2rem;
  color: var(--secondary-yellow);
  transition: all 0.3s ease-in-out;
  &:active {
    color: var(--primary-blue);
  }
  @media (min-width: 915px) {
    //for desktop devices
    &:hover {
      color: var(--primary-blue);
    }
  }
`;

const StyledMobileMenuIconWrapper = styled.div`
  margin: 2rem 2rem 1rem auto;
  z-index: 1;
  @media (min-width: 915px) {
    //for desktop devices
    display: none;
  }
`;
