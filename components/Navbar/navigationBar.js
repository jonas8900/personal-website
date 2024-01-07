import { faEnvelope, faSquarePhone,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";


export default function NavigationBar({isMobile}) {
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
        <nav>
        {isMobile ? (
            <>
            <StyledMobileMenuIconWrapper>
            <Hamburger color="var(--primary-blue)" direction="left" toggled={isMenuOpen} toggle={setMenuOpen} />
            </StyledMobileMenuIconWrapper>
            <StyledMobileUl isMenuOpen={isMenuOpen}>
                 <StyledLiNames>Projekte</StyledLiNames>
                 <StyledLiNames>Über mich</StyledLiNames>
                 <StyledLiNames>Kontakt</StyledLiNames>
                 <StyledLiIcons><StyledIcon icon={faSquarePhone} /></StyledLiIcons>
                 <StyledLiIcons><StyledIcon icon={faEnvelope} /></StyledLiIcons>
            </StyledMobileUl>
            </>
        ):
        
            <StyledDesktopUl>
                <StyledLiNames>Projekte</StyledLiNames>
                <StyledLiNames>Über mich</StyledLiNames>
                <StyledLiNames>Kontakt</StyledLiNames>
                <StyledLiIcons><StyledIcon icon={faSquarePhone} /></StyledLiIcons>
                <StyledLiIcons><StyledIcon icon={faEnvelope} /></StyledLiIcons>
            </StyledDesktopUl>
        }
        </nav>
    )
}





//lists and list-items

const StyledDesktopUl = styled.ul`
display: flex; 
list-style: none;
position: absolute; 
margin: auto;
width: 40rem;
justify-content: space-between;
align-items: center;
right: 5%;
border-radius: 9px;
padding: 0.5rem;
margin: 0;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

@media (max-width: 768px) {
    
}
`;


const StyledMobileUl = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
position: absolute;
margin: auto; 
right: 0%;
width: 100%;
top: 10%;
border-radius: 9px;
padding: 0.5rem;
align-items: center;
justify-content: center;
background-color: rgba(255,255,255,0.5);
opacity: ${({isMenuOpen}) => (isMenuOpen ? 1 : 0)};
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
border-bottom: 1px solid #7393B2;
transition: all 0.3s ease-in-out;

&:active{
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

//icons

const StyledLiIcons = styled.li`
padding: 1rem;
padding-right: 1.5rem;
padding-left: 1.5rem;
margin: auto;
cursor: pointer;
border-bottom: 1px solid #7393B2;
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
    &:active{
        color: var(--primary-blue);
    }
    @media (min-width: 915px) {
        &:hover{
        color: var(--primary-blue);
    }
}
`;

const StyledMobileMenuIconWrapper = styled.div`
    position: absolute;
    right: 5%;
    top: 2%;
    z-index: 1;
    @media (min-width: 915px) {
        display: none;
    }
`;


