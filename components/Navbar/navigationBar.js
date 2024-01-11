import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

export default function NavigationBar({ isMobile }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleMenuAutomaticClose() {
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
  @media (max-width: 915px) {
    justify-self: flex-end;
    align-self: flex-start;
    padding: 0;
    margin: 1rem 0 0 0
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

  @media (max-width: 768px) {
  }
`;

const StyledMobileUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  margin: 0 auto;
  width: 100%;
  border-radius: 9px;
  padding: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
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
  border-bottom: 1px solid #7393b2;
  transition: all 0.3s ease-in-out;

  &:active {
    background-color: var(--secondary-yellow);
  }
  @media (min-width: 915px) {
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
  border-bottom: 1px solid #7393b2;
  width: 35%;
  min-width: 8rem; //set min-width for mobile devices
  text-align: center;
  @media (min-width: 915px) {
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
    &:hover {
      color: var(--primary-blue);
    }
  }
`;

const StyledMobileMenuIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  z-index: 1;
  @media (min-width: 915px) {
    display: none;
  }
`;
